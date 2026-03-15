# Immanuel Peter 

Personal site for [ipeter.dev](https://ipeter.dev): a Next.js portfolio that combines a recruiter-facing homepage, long-form technical project write-ups, and an embedded AI assistant that answers questions about Immanuel Peter's background, experience, and projects.

## What the app includes

- A homepage with current bio, experience, projects, education, resume link, and external profile links
- An embedded `ImmanuelAI` chat widget backed by the OpenAI Responses API
- Technical blog pages for deeper architectural write-ups, including Matchbox and AutoMoE
- Server-side Hugging Face dataset stats surfaced on the site and in the AutoMoE write-up
- A published `llms.txt` file for LLM-friendly site discovery

## Main routes

- `/`: homepage portfolio
- `/blog`: technical writing index
- `/blog/matchbox`: Matchbox architecture deep-dive
- `/blog/moe-self-driving`: AutoMoE project write-up
- `/resume.pdf`: downloadable resume
- `/llms.txt`: LLM-friendly site summary
- `/api/chat`: server route for the embedded AI assistant
- `/api/huggingface-dataset`: server route for allowed dataset download counts

## Tech stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- OpenAI Responses API via the official OpenAI SDK
- `react-markdown` + `remark-gfm` for assistant rendering
- Vercel Analytics and Speed Insights
