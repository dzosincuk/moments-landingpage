# Momnts Landing Page

Jednoduchá landing page pro aplikaci Momnts s důrazem na zásady ochrany soukromí.

## Funkce

- 📱 Responzivní design
- 🔒 Kompletní zásady ochrany soukromí
- 🐳 Optimalizováno pro Coolify deployment
- 🎨 Moderní design

## Lokální vývoj

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev

# Build pro produkci
npm run build
```

## Deployment na Coolify

### Automatický deployment z GitHub

1. V Coolify vytvořte nový projekt
2. Připojte GitHub repository: `https://github.com/dzosincuk/moments-landingpage.git`
3. Nastavte následující konfiguraci:
   - **Build Pack**: Docker
   - **Dockerfile Location**: `landing-page/Dockerfile`
   - **Build Context**: `landing-page`
   - **Port**: 3000
4. Deploy se spustí automaticky při push do main branch

### Manuální deployment

```bash
# Build Docker image
docker build -t momnts-landing .

# Spuštění kontejneru
docker run -p 3000:3000 momnts-landing
```

### Docker Compose (lokální testování)

```bash
docker-compose up --build
```

## Struktura

- `/` - Hlavní stránka s přehledem aplikace
- `/privacy` - Detailní zásady ochrany soukromí
- Responzivní design pro mobily i desktop

## Důležité pro Google Play Store

Tato landing page obsahuje všechny potřebné informace o ochraně soukromí, které vyžaduje Google Play Store pro aplikace používající oprávnění RECORD_AUDIO.
