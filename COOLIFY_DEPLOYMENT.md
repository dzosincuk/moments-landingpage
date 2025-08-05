# Coolify Deployment Guide

Tento dokument obsahuje podrobné instrukce pro deployment Momnts Landing Page na Coolify.

## Předpoklady

- Funkční Coolify instance na VPS serveru
- GitHub repository: `https://github.com/dzosincuk/moments-landingpage.git`
- Přístup k Coolify admin panelu

## Krok za krokem deployment

### 1. Vytvoření nového projektu v Coolify

1. Přihlaste se do Coolify admin panelu
2. Klikněte na "New Project"
3. Vyberte "Git Repository"

### 2. Konfigurace repository

- **Repository URL**: `https://github.com/dzosincuk/moments-landingpage.git`
- **Branch**: `main`
- **Build Pack**: `Docker`

### 3. Nastavení build konfigurace

- **Dockerfile Location**: `Dockerfile` (v root složce projektu)
- **Build Context**: `.` (celý projekt)
- **Port**: `3000`

### 4. Environment variables (volitelné)

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 5. Deployment

1. Klikněte "Deploy"
2. Coolify automaticky:
   - Stáhne kód z GitHub
   - Sestaví Docker image podle Dockerfile
   - Spustí kontejner na portu 3000
   - Nastaví reverse proxy

### 6. Automatické deploymenty

Coolify může být nakonfigurováno pro automatické deploymenty při push do main branch:

1. V nastavení projektu zapněte "Auto Deploy"
2. Nastavte webhook v GitHub repository (Coolify vám poskytne URL)

## Troubleshooting

### Build selhává
- Zkontrolujte, že Dockerfile je v root složce
- Ověřte, že všechny závislosti jsou v package.json

### Aplikace nereaguje
- Zkontrolujte logy v Coolify
- Ověřte, že port 3000 je správně nastaven
- Zkontrolujte, že kontejner běží

### Problémy s Next.js
- Ujistěte se, že `output: 'standalone'` je v next.config.js
- Zkontrolujte, že všechny statické soubory jsou správně zkopírovány

## Monitoring

Coolify poskytuje:
- Real-time logy
- Metriky výkonu
- Health checks
- Automatické restarty při selhání

## Aktualizace

Pro aktualizaci aplikace:
1. Pushněte změny do GitHub repository
2. Coolify automaticky detekuje změny (pokud je zapnutý auto-deploy)
3. Nebo manuálně spusťte redeploy v Coolify panelu

## Doména

Po úspěšném deployu:
1. V Coolify nastavte vlastní doménu
2. Coolify automaticky vygeneruje SSL certifikát
3. Aplikace bude dostupná na vaší doméně
