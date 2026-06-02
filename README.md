# Calisthenics Fitness App (GitHub-Ready Export)

This folder is ready to upload to GitHub and host with GitHub Pages.

## Package contents
- `index.html`
- `manifest.json`
- `sw.js`
- `style.css`
- `script.js`
- `images/`
- `IMPLEMENTATION_PROGRESS.md`
- `README.md`

## GitHub upload
1. Create a repository on GitHub.
2. Upload everything from this folder into the repository root.
3. Confirm `index.html` is at the repository root.

## Enable GitHub Pages
1. Open **Settings -> Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select your default branch (for example `main`) and folder **/ (root)**.
4. Save.

GitHub will publish a URL similar to:
`https://<your-username>.github.io/<repo-name>/`

## Local preview (optional)
Open `index.html` directly, or serve the folder with a static server.

## PWA and privacy
- The app can be installed from GitHub Pages as a local-first PWA.
- The service worker caches same-origin app files only so the shell can reopen faster and work offline.
- Apple Watch data must come through a local iPhone HealthKit bridge. Health and motion metrics are stored in the user's browser storage and are not sent to any external service.
- Edit Profile includes a local clear control for Apple Health and iPhone motion tracking data.

## Notes
- Runtime paths use relative links for Pages compatibility.
- Local app assets are inside `images/`.
- Ingredient thumbnails are generated locally; meal/cuisine visuals should continue moving toward local-only fallbacks.
