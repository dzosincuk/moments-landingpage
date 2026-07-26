#!/usr/bin/env bash
set -Eeuo pipefail

repo_root=$(git rev-parse --show-toplevel)
allowlist="$repo_root/security/npm-install-scripts.allow"
actual=$(mktemp)

cleanup() {
  find "$repo_root" -type d -name node_modules -prune -exec rm -rf -- '{}' +
  rm -f -- "$actual"
}
trap cleanup EXIT

write_actual() {
  local lock=$1
  local relative_dir=$2
  node - "$lock" "$relative_dir" >> "$actual" <<'NODE'
const fs = require('fs');
const [lockPath, relativeDir] = process.argv.slice(2);
const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
const entries = new Set();
for (const [packagePath, metadata] of Object.entries(lock.packages || {})) {
  if (!metadata || !metadata.hasInstallScript || !metadata.version) continue;
  const marker = '/node_modules/';
  const normalized = `/${packagePath}`;
  const index = normalized.lastIndexOf(marker);
  let name = index >= 0 ? normalized.slice(index + marker.length) : packagePath;
  if (!name) continue;
  name = name.startsWith('@') ? name.split('/').slice(0, 2).join('/') : name.split('/')[0];
  entries.add(`${relativeDir}\t${name}@${metadata.version}`);
}
for (const entry of [...entries].sort()) console.log(entry);
NODE
}

lockfiles=()
while IFS= read -r -d '' lockfile; do
  lockfiles+=("$lockfile")
done < <(
  find "$repo_root" -name package-lock.json \
    -not -path '*/node_modules/*' -not -path '*/.git/*' -print0
)

if (( ${#lockfiles[@]} == 0 )); then
  printf 'No package-lock.json files found.\n' >&2
  exit 1
fi

for lock in "${lockfiles[@]}"; do
  directory=${lock%/package-lock.json}
  if [[ $directory == "$repo_root" ]]; then
    relative_dir=.
  else
    relative_dir=${directory#"$repo_root"/}
  fi
  printf 'Verifying npm registry signatures in %s\n' "$relative_dir"
  (
    cd "$directory"
    npm ci --ignore-scripts --no-audit --no-fund
    npm audit signatures
  )
  write_actual "$lock" "$relative_dir"
done

sort -u -o "$actual" "$actual"

if [[ ${1:-} == --write-allowlist ]]; then
  mkdir -p "$(dirname "$allowlist")"
  cp "$actual" "$allowlist"
  printf 'Updated %s. Review every package and version before committing.\n' "$allowlist"
  exit 0
fi

if [[ ! -f $allowlist ]]; then
  printf 'Missing lifecycle-script allowlist: %s\n' "$allowlist" >&2
  exit 1
fi

if ! diff -u "$allowlist" "$actual"; then
  printf '\nA dependency gained or changed an install lifecycle script.\n' >&2
  printf 'Review the package release, then regenerate with:\n' >&2
  printf '  ./.github/scripts/verify-npm-dependencies.sh --write-allowlist\n' >&2
  exit 1
fi

printf 'npm signatures and lifecycle-script allowlist verified.\n'
