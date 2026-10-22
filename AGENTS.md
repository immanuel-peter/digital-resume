# Project

This is Immanuel Peter's portfolio at ipeter.dev, built with Next.js and hosted on Hostess. Its primary audience is engineers and technical recruiters.

# Portfolio content

Treat Immanuel's latest instructions as the source of truth for his background and projects. Existing site copy and external sources may be out of date. Ask when a missing detail would require guessing.

When app content changes, review `public/biography.js` and `content/llms.md` for affected facts, descriptions, and links. Update the affected copy in the same change. `content/llms.md` is served at `/llms.txt`, `/llms.md`, and `/profile.md`. Both files use a `{{huggingface}}` placeholder that is filled with live download counts at request time. Visual-only changes need no copy update.

# Verification

For page, styling, or interaction changes, run the Next.js dev server with `npm run dev`. Open the affected pages in Chrome DevTools, exercise changed interactions, and check for browser errors. Check a narrow viewport when layout changes. Stop the dev server when finished.

For other changes, run the relevant lint or build checks.
