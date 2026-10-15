# rohmanis.github.io

Personal website of Abdul Rohman. Built with SvelteKit (Svelte 5) and `adapter-static`, fully prerendered.

```sh
npm install
npm run dev      # local dev server
npm run build    # static output in ./build
npm run preview  # serve the build locally
```

## Deploy

Pushes to `main` build and publish the site through `.github/workflows/deploy.yml`.
One-time setup: in the repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
