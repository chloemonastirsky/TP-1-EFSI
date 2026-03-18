# Copilot / AI agent instructions for this repository

This is a very small static web project consisting of a single HTML file and one JavaScript file. The guidance below is intentionally narrow and concrete so an AI coding agent can be productive immediately.

## Big-picture
- Purpose: simple static page that loads `codigo.js` from `index.html`.
- Architecture: single-page static site (no frameworks, no build step). See [index.html](index.html#L1) and [codigo.js](codigo.js#L1-L20) for the full app surface.

## What to change and why
- Changes will typically be edits to `codigo.js` implementing small JS functions or fixes. Keep modifications minimal and preserve global script loading behavior (script tag in `index.html`).
- Use clear, localized edits: add functions, improve naming, or export small helpers (if adding modules, update `index.html` to use `type="module"`).

## Patterns and examples from this repo
- Global script pattern: `index.html` includes `codigo.js` directly. Avoid introducing complex bundlers.
- Example function to follow style and naming (Spanish identifiers are used):

```js
// existing example in codigo.js
function formatearNombre(nombre1){
  return nombre1.toLowerCase();
}
```

When adding functions, match the project's simple style: small, single-responsibility functions, straightforward `let/const` usage, and Spanish identifiers where present.

## Developer workflows (how to run and test locally)
- No build step. To preview in a browser, open `index.html` directly or run a simple static server. Recommended quick commands:

```bash
# from repository root
# Python 3
python -m http.server 8000
# or using Node's http-server if available
npx http-server -c-1 .
```

## Conventions and constraints
- Keep everything in the project root unless adding substantial features.
- Prefer minimal, explicit changes rather than broad refactors.
- Preserve Spanish variable/function names when editing existing code unless renaming is intentional and comprehensive.

## Integration points & dependencies
- There are no external dependencies. If adding libraries, prefer CDN links in `index.html` or add a `package.json` with clear rationale.

## Tests & CI
- There are no tests or CI configured. If you add tests, include instructions to run them in this file and add a simple `package.json` or GitHub Actions workflow.

## When to ask the user
- Ask before: converting the project to modules, adding build tooling, changing filenames, or adding external dependencies.

---
If any part of this guidance is unclear or you want more detail (e.g., preferred linting, testing, or module strategy), tell me which area to expand.
