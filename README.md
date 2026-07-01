# Jiading Zhu Personal Website

Static academic personal website built with Astro and deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deploy

Create a public GitHub repository named `jiading-zhu.github.io`, then push this repository:

```sh
git push -u origin main
```

In the GitHub repository settings, set Pages to deploy with GitHub Actions. The workflow in `.github/workflows/deploy.yml` builds Astro and publishes `dist/`.

## Privacy Notes

The resume and LinkedIn PDFs in this working folder are source material only and are ignored by Git. They are not copied into the published site because the resume contains private contact information.
