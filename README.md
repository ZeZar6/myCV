# César Rodríguez Gutiérrez — Portfolio

A responsive React + Vite portfolio for Engineering Physics, instrumentation, sensors and simulation.

## Run locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.

## Edit content and images

- Project cards and detail copy: `src/data/projects.js`.
- Profile, skills, interests and links: `src/data/site.js`.
- Printable CV page: `public/cv.html` (use the portfolio's CV link, then Print / Save as PDF).
- Place project images in `public/images/` and set each project's `image` to `/images/your-file.jpg`.
- Missing images automatically use a designed placeholder. No project outcomes or metrics are assumed.

## GitHub Pages

The included `.github/workflows/deploy.yml` builds and publishes `main` to GitHub Pages when pushed. In the repository's Settings → Pages, choose GitHub Actions as the publishing source if prompted. The workflow reads the correct base path from GitHub Pages, including repository sites. For manual builds, use `VITE_BASE_PATH=/repository-name/ npm run build` (PowerShell: `$env:VITE_BASE_PATH='/repository-name/'; npm run build`).