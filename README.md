# hafizulhaque.github.io

Personal portfolio built with Next.js (static export) and deployed to GitHub Pages.

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: local dev server
- `npm run build`: static export to `out/`
- `npm run check`: typecheck, lint and tests
- `npm test`: unit tests (Vitest)

## Content

- Profile, links and portrait config: `src/content/site.ts`
- Projects: `src/content/projects.ts`. The first `FEATURED_PROJECT_COUNT` (in `src/content/site.ts`) appear on the home page.
- Experience and skills: `src/content/experience.ts`, `src/content/skills.ts`
- Blog posts: add an `.mdx` file to `src/content/blog` with `title`, `description`, `date`, and optional `cover` and `coverAlt` frontmatter. Delete the two dummy posts (`hello-world.mdx`, `building-with-next.mdx`) when real content is ready.
- Portrait: replace `public/portrait/portrait.svg` with a photo and `public/portrait/portrait-depth.svg` with a grayscale depth map (white is near). Update `width` and `height` in `site.ts`, and the eye positions.

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on every push to `main`. In the repository settings, set Pages to deploy from GitHub Actions.
