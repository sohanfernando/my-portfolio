# Sohan Fernando — Portfolio

Personal portfolio site: a single-page React application covering background,
stack, experience, education and selected work.

**Stack:** React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · react-icons

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Design system

Colours are defined once as CSS custom properties in `src/index.css` and exposed
to Tailwind as semantic tokens (`canvas`, `surface`, `ink`, `ink-muted`,
`ink-faint`, `rule`, `accent`) in `tailwind.config.js`. Restyling the site means
editing those tokens, not the components.

The site is dark by default and ships a light theme. Both are driven by the same
tokens under a `data-theme` attribute on `<html>`; `src/hooks/useTheme.js`
persists the choice to `localStorage` and falls back to `prefers-color-scheme`,
while a small inline script in `index.html` applies it before first paint so
there is no flash of the wrong theme.

Three typefaces each have one job: Instrument Serif for display, Inter for body
copy, JetBrains Mono for labels, section numbers and tags.

Shared layout primitives live in `src/components/ui/` — `Section`,
`SectionHeader`, `Reveal`, `TextLink`, `Chip`, `TimelineList` and `ThemeToggle`.
Prefer composing these over hand-rolling new markup, so spacing and motion stay
consistent across sections.

## Editing content

All copy lives in `src/constants/index.js` — profile details, bio, stack,
experience, education, projects and contact information. Components read from it
and contain no hardcoded content.

### Project links

Each entry in `PROJECTS` carries `year`, `liveUrl` and `githubUrl`. These are
intentionally blank; fill one in and its link appears on the project row
automatically. Leaving a field empty simply hides that link, so the page never
shows a control that does nothing.

```js
{
  title: "LMS Project using MERN",
  year: "2024",
  liveUrl: "https://…",
  githubUrl: "https://github.com/sohanfernando/…",
}
```
