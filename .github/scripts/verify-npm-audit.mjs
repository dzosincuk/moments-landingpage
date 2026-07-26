#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const exceptionPath = path.join(root, "security/npm-audit-exceptions.json");
const MAX_EXCEPTION_DAYS = 30;
const BLOCKED_SEVERITIES = new Set(["high", "critical"]);

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function walk(directory, output = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (
      entry.name === ".git" ||
      entry.name === "node_modules" ||
      entry.name === ".next" ||
      entry.name === "dist" ||
      entry.name === "build" ||
      entry.name === "coverage" ||
      entry.name === "out"
    ) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute, output);
    if (entry.isFile() && entry.name === "package-lock.json") output.push(absolute);
  }
  return output;
}

function audit(directory, omitDev) {
  const args = ["audit", "--package-lock-only", "--ignore-scripts", "--json"];
  if (omitDev) args.push("--omit=dev");
  const result = spawnSync("npm", args, {
    cwd: directory,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (!result.stdout.trim()) {
    throw new Error(
      `npm audit returned no JSON in ${path.relative(root, directory) || "."}: ${result.stderr.trim()}`,
    );
  }
  try {
    return JSON.parse(result.stdout);
  } catch {
    throw new Error(
      `npm audit returned invalid JSON in ${path.relative(root, directory) || "."}: ${result.stderr.trim()}`,
    );
  }
}

function findings(report) {
  const found = new Map();
  for (const vulnerability of Object.values(report.vulnerabilities || {})) {
    for (const via of vulnerability.via || []) {
      if (!via || typeof via !== "object" || !BLOCKED_SEVERITIES.has(via.severity)) {
        continue;
      }
      const advisory =
        String(via.url || "").match(/GHSA-[0-9a-z-]+/i)?.[0]?.toUpperCase() ||
        `NPM-${via.source}`;
      const key = `${via.name}|${advisory}`;
      found.set(key, {
        advisory,
        package: via.name,
        severity: via.severity,
        title: via.title,
        url: via.url,
      });
    }
  }
  return found;
}

if (!fs.existsSync(exceptionPath)) {
  fail(`Missing npm audit exception file: ${exceptionPath}`);
}

let exceptionDocument = { schemaVersion: 1, exceptions: [] };
try {
  exceptionDocument = JSON.parse(fs.readFileSync(exceptionPath, "utf8"));
} catch (error) {
  fail(`Invalid npm audit exception JSON: ${error.message}`);
}

if (exceptionDocument.schemaVersion !== 1 || !Array.isArray(exceptionDocument.exceptions)) {
  fail("npm audit exception file must use schemaVersion 1 and an exceptions array.");
}

const today = new Date();
today.setUTCHours(0, 0, 0, 0);
const exceptions = new Map();
for (const exception of exceptionDocument.exceptions || []) {
  const key = `${exception.package}|${String(exception.advisory || "").toUpperCase()}`;
  const expiry = new Date(`${exception.expires}T00:00:00Z`);
  const remainingDays = Math.ceil((expiry - today) / 86_400_000);
  if (
    !/^GHSA-[0-9A-Z-]+$/.test(String(exception.advisory || "").toUpperCase()) ||
    typeof exception.package !== "string" ||
    exception.scope !== "dev" ||
    typeof exception.reason !== "string" ||
    exception.reason.trim().length < 20 ||
    !/^\d{4}-\d{2}-\d{2}$/.test(String(exception.expires || "")) ||
    Number.isNaN(expiry.valueOf()) ||
    expiry.toISOString().slice(0, 10) !== exception.expires
  ) {
    fail(`Malformed npm audit exception: ${JSON.stringify(exception)}`);
    continue;
  }
  if (remainingDays < 0) {
    fail(`Expired npm audit exception ${key} (${exception.expires}).`);
    continue;
  }
  if (remainingDays > MAX_EXCEPTION_DAYS) {
    fail(`npm audit exception ${key} exceeds the ${MAX_EXCEPTION_DAYS}-day maximum.`);
    continue;
  }
  if (exceptions.has(key)) {
    fail(`Duplicate npm audit exception: ${key}`);
    continue;
  }
  exceptions.set(key, { ...exception, used: false });
}

for (const lock of walk(root).sort()) {
  const directory = path.dirname(lock);
  const relative = path.relative(root, directory) || ".";
  let runtime;
  let complete;
  try {
    runtime = findings(audit(directory, true));
    complete = findings(audit(directory, false));
  } catch (error) {
    fail(error.message);
    continue;
  }

  for (const finding of runtime.values()) {
    fail(
      `[${relative}] Runtime ${finding.severity.toUpperCase()} ${finding.package} ` +
        `${finding.advisory}: ${finding.title} (${finding.url})`,
    );
  }

  for (const [key, finding] of complete) {
    if (runtime.has(key)) continue;
    if (finding.severity === "critical") {
      fail(
        `[${relative}] Build/dev CRITICAL ${finding.package} ${finding.advisory}: ` +
          `${finding.title} (${finding.url})`,
      );
      continue;
    }
    const exception = exceptions.get(key);
    if (!exception) {
      fail(
        `[${relative}] Build/dev HIGH ${finding.package} ${finding.advisory}: ` +
          `${finding.title} (${finding.url}); fix it or add a reviewed <=30-day dev exception.`,
      );
      continue;
    }
    exception.used = true;
    console.log(
      `[${relative}] Accepted dev-only HIGH ${finding.package} ${finding.advisory} ` +
        `until ${exception.expires}: ${exception.reason}`,
    );
  }
}

for (const [key, exception] of exceptions) {
  if (!exception.used) fail(`Stale or unmatched npm audit exception: ${key}`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log("npm runtime and build/development vulnerability gates passed.");
