# Calisthenics Fitness App (GitHub-Ready Export)

This folder is ready to upload to GitHub and host with GitHub Pages.

## Package contents
- `index.html`
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

## Notes
- Runtime paths use relative links for Pages compatibility.
- Local app assets are inside `images/`.
- Some meal/cuisine visuals are loaded from remote sources at runtime, with local fallback assets retained in the export.
