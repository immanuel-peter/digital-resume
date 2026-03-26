## Learned User Preferences

- Public README/profile-style documentation should target engineers and technical recruiters.
- Project blurbs and descriptions should be grounded in the real repository or other verified sources, not invented positioning.
- When cleaning a branch, remove AI-style slop: gratuitous comments, unnecessary defensive checks, and inconsistent `as any` casts relative to surrounding code.
- Omit local dev/setup blocks from README/profile unless explicitly requested.

## Learned Workspace Facts

- This repo is the Next.js portfolio app for `ipeter.dev` (homepage, technical blog, embedded chat assistant).
- Production container image: `ghcr.io/immanuel-peter/digital-resume`, using Next.js standalone output.
- Default branch is `master` (not `main`); CI branch filters and triggers should match.
- The OpenAI client is lazy-initialized so `next build` and Docker image builds do not require `OPENAI_API_KEY` at module import; set the key at container/runtime where the chat API runs.
- CI builds multi-arch images (`linux/amd64`, `linux/arm64`, typically with QEMU on amd64 runners) and tags include `latest` and `sha-` plus a short SHA; GitHub Actions expressions have no `substring`—use a shell step and `GITHUB_OUTPUT` for the short SHA.
- Docker and GitHub Actions do not replace Vercel’s normal git-webhook deployment; they run alongside it unless the project is explicitly configured otherwise.
- `public/biography.js` is used as context for the chat route; keep it aligned with About, Experience, and Education when those sections change.
