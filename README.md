# Immanuel Peter

**CS & Physics @ University of Chicago '28 · Member of Technical Staff Intern @ Tensormesh**

Portfolio and technical blog at [ipeter.dev](https://ipeter.dev). Built for engineers and recruiters who want to understand what I build and how I think.

---

## Quick links

| | |
|---|---|
| **Resume** | [resume.pdf](https://ipeter.dev/resume.pdf) |
| **Site** | [ipeter.dev](https://ipeter.dev) |
| **LinkedIn** | [linkedin.com/in/immanuel-peter](https://www.linkedin.com/in/immanuel-peter/) |
| **GitHub** | [github.com/immanuel-peter](https://github.com/immanuel-peter) |
| **Email** | ipeter@uchicago.edu |

---

## What this site includes

- **Portfolio homepage** — Bio, experience, projects, education, certifications, and resume
- **ImmanuelAI** — Embedded chat widget powered by the OpenAI Responses API for Q&A about my background and work
- **Technical blog** — Architecture deep-dives on [Matchbox](https://ipeter.dev/blog/matchbox) (research matching, LLMs) and [AutoMoE](https://ipeter.dev/blog/moe-self-driving) (MoE self-driving)
- **[llms.txt](https://ipeter.dev/llms.txt)** — LLM-friendly site summary for discovery

---

## Experience snapshot

| Role | Company | Dates |
|------|---------|-------|
| MTS Intern | Tensormesh (LMCache team) | March 2026 – present |
| Open Source Contributor | Meta (Pyrefly) | Oct 2025 |
| Software Engineer Intern | Quantum Rings | Jun–Aug 2025 |
| Volunteer Tutor | Schoolhouse.world | 2021–present |

At Quantum Rings: 19 PRs, 43 contributions, schema refactors, telemetry aggregation (AWS SQS + TypeORM), queue-driven execution processing, and full-stack admin dashboards (NestJS, Next.js, Recharts).

---

## Notable projects

| Project | Description | Stack |
|---------|-------------|-------|
| **Hostess** | Multi-service deployment platform (Vercel-like DX) | Go, Kubernetes, Next.js, PostgreSQL, GCP, Docker |
| **Redis Operator** | Kubernetes operator for Redis (standalone, sentinel, cluster) with fencing-first failover | Go, Kubernetes, Redis, Helm, Prometheus |
| **AutoMoE** | MoE-based self-driving system for CARLA | Python, PyTorch, DDP, CUDA, CARLA, Hugging Face |
| **Matchbox** | AI-powered research matching platform | Next.js, FastAPI, ChromaDB, GCP, OpenAI API |
| **Grok Review** | Streaming GitHub PR code review with Grok 4 | Next.js, TypeScript, GitHub API, xAI API |

---

## Tech stack (this site)

- **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**
- **OpenAI Responses API** — embedded AI assistant
- **react-markdown** + **remark-gfm** — assistant rendering
- **Vercel** — Analytics, Speed Insights, deployment

---

## Main routes

| Route | Description |
|-------|-------------|
| `/` | Homepage portfolio |
| `/blog` | Technical writing index |
| `/blog/matchbox` | Matchbox architecture deep-dive |
| `/blog/moe-self-driving` | AutoMoE project write-up |
| `/resume.pdf` | Downloadable resume |
| `/llms.txt` | LLM-friendly site summary |
| `/api/chat` | Server route for ImmanuelAI |
| `/api/huggingface-dataset` | Hugging Face dataset download counts |
