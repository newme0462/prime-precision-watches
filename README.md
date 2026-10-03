# Prime Precision – Swiss Watches

React + Vite + Tailwind CSS landing page with an interactive Three.js 3D watch viewer and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

`vite.config.js` uses `base: './'`, so the build works under `https://<user>.github.io/<repo>/` with no changes.

### Option A – GitHub Actions (recommended)

1. Push this project to a GitHub repository on the `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and publishes automatically (`.github/workflows/deploy.yml`).

### Option B – `gh-pages` branch from your machine

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main

npm run deploy
```

Then set **Settings → Pages → Source** to the `gh-pages` branch (root).

## Project structure

```
src/
  App.jsx                  page composition
  main.jsx                 React entry
  index.css                Tailwind layers + glass-panel / text-gradient
  data/content.js          copy, prices, model URL, reviews
  components/
    Navbar.jsx  Hero.jsx  WatchViewer.jsx (Three.js)
    About.jsx  Collections.jsx  Reviews.jsx  Contact.jsx
```

To change the 3D model, edit `MODEL_URL` in `src/data/content.js`.
(The host must allow cross-origin requests; Cloudinary does.)
