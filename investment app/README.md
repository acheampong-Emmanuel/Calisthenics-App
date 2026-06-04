# Global Investment Tracker

A country-aware investment research app with a premium liquid-glass interface, route-like views, public no-key market data, local watchlist/compare tools, broker research notes, diagnostics, and optional advanced providers.

This app is for education and research only. It does not provide financial, investment, tax, or legal advice.

## GitHub Repo Placement

This folder is intentionally nested inside the existing `Calisthenics-App` repo as:

```txt
investment app/
```

It preserves the mobile app UI that was already designed and does not replace or redesign the Calisthenics app at the repo root.

For GitHub Pages, open or link to:

```txt
investment app/index.html
```

Because this is a static GitHub Pages-compatible placement, the app shell, mobile UI, local watchlist, compare tools, settings, PWA metadata, and public direct-fetch data paths are available from the static files. The optional local Node server remains included for deeper live API/proxy coverage during development or on Node hosts such as Render/Railway.

## Run Locally

Static/mobile UI:

```txt
investment app/index.html
```

Optional local server for fuller live-data coverage:

```txt
npm install
npm run dev
```

Open:

```txt
http://localhost:4173
```

The app can still be opened as `index.html`, but the best live-data experience uses the local server because it provides backend routes and a safe allowlisted proxy for public data hosts.

## Scripts

```txt
npm run dev     Start the backend and serve the frontend
npm start       Same as dev
npm run check   Syntax and structural verification
npm run smoke   API smoke tests against http://localhost:4173
```

## Files

```txt
index.html          Multi-view app shell and drawers
styles.css          Liquid-glass design system, route transitions, responsive UI
app.js              Frontend state, apiClient, rendering, charts, watchlist, compare
data.js             Country, broker, and asset metadata
server.js           Static server, API routes, public provider adapters, proxy, cache
.env.example        Safe environment placeholders
API.md              Backend contract and response shapes
work/verify.mjs     Structural verifier
work/smoke-api.mjs  Backend smoke tests
```

## Backend Routes

- `GET /api/health`
- `GET /api/countries`
- `GET /api/market-overview?country=US`
- `GET /api/search?q=AAPL`
- `GET /api/quote?symbol=AAPL`
- `GET /api/history?symbol=AAPL&range=1M`
- `GET /api/fundamentals?symbol=AAPL`
- `GET /api/brokers?country=US`
- `POST /api/watchlist/refresh`
- `POST /api/compare`
- `GET /api/news?symbol=AAPL`
- `POST /api/ai-insight`
- `GET /api/diagnostics`
- `GET /api/proxy?url=...`

All API routes return consistent JSON and avoid exposing secrets.

## Public No-Key Mode

Basic usage works without API keys:

- Country selection and local metadata search
- Default asset browsing
- Public quotes and history where available
- Crypto data through CoinGecko public API
- Equity/ETF/index data through Stooq or Yahoo chart public endpoints
- Broker examples to research
- Watchlist and compare tools
- Diagnostics and honest unavailable states

Optional keys can improve future coverage but are not required to start the app.

## Optional Environment

Copy `.env.example` to `.env` if needed. Leave secrets blank unless you have them.

```txt
PORT=4173
PUBLIC_DATA_MODE=true
DEFAULT_COUNTRY=US
DEFAULT_PROVIDER=auto
ALPHA_VANTAGE_API_KEY=
FINNHUB_API_KEY=
TWELVE_DATA_API_KEY=
FMP_API_KEY=
POLYGON_API_KEY=
NEWS_API_KEY=
HUGGINGFACE_API_TOKEN=
```

No real secrets are committed.

## Data Coverage

The app uses real data only where public providers return it. It does not fabricate prices, charts, volume, fundamentals, broker availability, or predictions.

Known limitations:

- Ghana and Nigeria local listings are included as research metadata, but live prices require official exchange feeds, licensed data providers, or a backend connector.
- Some fields such as market cap, P/E ratio, dividend yield, and expense ratio are unavailable in public no-key mode.
- Yahoo chart requests are routed through the local backend proxy because browser CORS may block direct frontend access.
- AI Insight is optional and disabled unless a supported token/provider is configured.

## UI Structure

The app uses route-like views:

- Home
- Explore
- Asset Details drawer
- Watchlist
- Compare
- Where to Buy
- Data Sources
- Settings
- AI Insight

Page transitions use fade, slide, soft scale, and reduced-motion fallbacks.

## Test

With the server running:

```txt
npm run check
npm run smoke
```

Manual checks:

- Open Home and switch countries.
- Go to Explore and search `AAPL`.
- Open asset details and change chart range.
- Add two assets to Compare.
- Add an asset to Watchlist and enter holdings.
- Open Where to Buy and Data Sources.
- Verify MTNGH shows an official-feed-required state instead of fake data.

## Deployment Notes

This app is a Node-served web app, not a purely static site. For production, deploy the repository to a service that can run:

```txt
node server.js
```

Recommended platforms:

- Render Web Service
- Railway Node service
- Fly.io Node app
- A VPS or other Node 18+ host

Static-only hosts such as GitHub Pages can serve the shell, but backend API routes and the safe proxy will not work there.

For production:

- Put secrets only in server environment variables.
- Use a licensed financial data provider where required.
- Restrict CORS origins.
- Add persistent cache such as Redis.
- Add structured logging and monitoring.
- Keep diagnostics secret-safe.
- Configure `PORT` if the platform requires it.
- Keep `PUBLIC_DATA_MODE=true` unless you add paid/licensed provider keys.

## iPhone and iPad Home Screen

Open the deployed URL in Safari, then:

1. Tap Share.
2. Tap Add to Home Screen.
3. Confirm the app name.
4. Launch it from the Home Screen.

The app includes a manifest, Apple touch icon, standalone web app metadata, safe-area spacing, fullscreen-friendly layout, and a service worker that caches static UI assets only. Live financial API responses are not cached as current data.

## Market Switching Integrity

When the selected market changes, the app clears visible quote/history state for the previous region, refreshes the new region, scopes compare/watchlist display to the selected market plus global assets, and shows native market currency/timezone context. Unsupported markets show official-feed-required states instead of silently falling back to US data.

## Disclaimer

This app is educational research software. It is not a broker, advisor, tax tool, or legal service. Market data may be delayed, incomplete, cached, or unavailable. Verify all information with official sources and qualified professionals before making decisions.
