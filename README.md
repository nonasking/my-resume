# Minsung Kang — Personal Resume Portfolio

**[https://nonasking.github.io/my-resume](https://nonasking.github.io/my-resume)**

A static personal resume website built with Next.js 16 (App Router) + Tailwind CSS v4.

## Tech stack

- **Framework**: Next.js 16 (App Router, `output: 'export'`)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deploy**: GitHub Pages (`gh-pages`)

## Project structure

```
├── app/
│   ├── layout.tsx       # metadata, fonts
│   ├── page.tsx         # section assembly
│   └── globals.css
├── components/
│   ├── Nav.tsx          # sticky navigation
│   ├── Header.tsx       # hero header
│   ├── Introduction.tsx
│   ├── Skills.tsx
│   ├── WorkExperience.tsx
│   ├── Projects.tsx
│   └── Education.tsx
└── data/
    └── resume.ts        # resume data (edit only here)
```

## Local development

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000/my-resume](http://localhost:3000/my-resume)

> Because of the `basePath: '/my-resume'` setting, it's served at `/my-resume` rather than the root (`/`).

## Deploy

```bash
npm run deploy
```

Handles `next build` → push to the `gh-pages` branch automatically.

After the first deploy, set the Branch to `gh-pages` under the GitHub repo's **Settings → Pages**.

## Editing resume content

Just edit `data/resume.ts` — no need to touch the components.
