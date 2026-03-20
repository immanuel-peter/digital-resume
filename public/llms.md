# Immanuel Peter

Member of Technical Staff Intern @ Tensormesh · CS & Physics @ UChicago '28

[Email](mailto:ipeter@uchicago.edu) · [LinkedIn](https://www.linkedin.com/in/immanuel-peter) · [GitHub](https://github.com/immanuel-peter) · [Twitter/X](https://x.com/moby763canary21)

---

**I'm a Member of Technical Staff Intern at Tensormesh!**

My Hugging Face datasets have over **9,000** downloads.

Need a quick crash course on me? Check out my [resume](http://localhost:3003/resume.pdf).

---

## Experience

### Member of Technical Staff Intern
**Tensormesh** · March 2026 – Present · Foster City, CA

- Tensormesh, the team behind LMCache, helps enterprises cut GPU costs by offloading KV caches to external storage for reusability during inference.
- LMCache is used by teams at Nvidia, Google, Redis, AWS, Red Hat, Cohere, and more.

---

### Open Source Contributor
**Meta** · October 2025 · Remote

- Contributed to Pyrefly, Meta's high-performance Python type checker and language server written in Rust.
- Refactored the error summarization subsystem by enforcing standard naming conventions across module definitions and import paths.

---

### Software Engineer Intern
**Quantum Rings** · June 2025 – August 2025 · Chicago, IL

- Delivered 19 PRs, 43 contributions, and 15 completed GitHub issues across the internship, adding ~15K LOC and removing ~3.6K LOC while reviewing code and driving schema refactors.
- Migrated execution data from the user entity to a dedicated relational table with FKs, modularizing schema and ensuring test suite stability with no performance regression.
- Implemented a telemetry aggregation background worker (AWS SQS + TypeORM) to asynchronously roll up user execution activity, improving scalability and simplifying downstream analytics queries.
- Designed and deployed queue-driven execution processing to decouple heavy telemetry operations from the API, reducing request latency and enabling horizontal scaling.
- Built full-stack admin analytics dashboards with NestJS, Next.js, and Recharts, integrating SQL time-bucket aggregation and timezone-safe filtering to track user growth, active usage, and execution volume.

---

## Projects

### [Hostess](https://hostess.sh/)
> The Docker Compose for Production.

A Go CLI that reads a simple config file and auto-generates Kubernetes manifests for any number of services, handling routing, secrets, and scaling out of the box. Designed to eliminate the boilerplate of multi-service K8s deployments.

`Go` `Kubernetes` `Docker` `CLI` · **Completed** · [Live Demo](https://hostess.sh)

---

### [Redis Operator](https://github.com/howl-cloud/redis-operator)
A Kubernetes operator for Redis, inspired by CloudNativePG. Supports standalone, sentinel, and cluster modes with direct pod and PVC management. Implements a fencing-first failover strategy to prevent split-brain scenarios and ensure data consistency during node failures.

`Go` `Kubernetes` `Redis` `Operator SDK` `Sentinel` · **Completed** · [GitHub](https://github.com/howl-cloud/redis-operator)

---

### [AutoMoE](https://github.com/immanuel-peter/self-driving-model)
A modular, multi-task self-driving system based on a Mixture-of-Experts (MoE) architecture. Uses specialized neural networks for specific perception tasks and a gating network to combine their outputs, aiming for a more modular, interpretable, and efficient model for navigating complex environments.

`Python` `PyTorch` `CUDA` `CARLA` `Hugging Face` · **Paused** · [GitHub](https://github.com/immanuel-peter/self-driving-model) · [Datasets](https://huggingface.co/immanuelpeter) 

---

### [Launchpad](https://trylaunchpad.xyz/)
AI-powered student–startup matching platform. Uses pgvector for semantic search across student profiles and startup listings, with async BullMQ scoring pipelines that rank candidates by fit. Helps early-stage startups find talent and students discover opportunities aligned with their skills.

`Next.js` `TypeScript` `FastAPI` `pgvector` `BullMQ` `PostgreSQL` · **Completed** · [Live Demo](https://trylaunchpad.xyz/)

---

### [Matchbox](https://matchbox.eduspheretech.com/)
An AI-powered research matching platform that connects university students with labs using semantic search and LLM-based fit scoring. Streamlines the application process with a centralized portal, replacing fragmented email workflows with automated candidate discovery, resume parsing, and compatibility ranking.

`Next.js` `TypeScript` `FastAPI` `Google Cloud Platform` `ChromaDB` `OpenAI API` · **Completed** · [Live Demo](https://matchbox.eduspheretech.com/)

---

### [Grok Review](https://grokreq.com/)
Turns any public GitHub PR URL into a streaming AI code review powered by Grok-4. Paste a PR link, and get instant, line-by-line feedback on logic, style, and potential bugs — streamed in real time.

`Next.js` `TypeScript` `Grok API` `GitHub API` · **Completed** · [GitHub](https://github.com/immanuel-peter/grok-review) · [Live Demo](https://grokreq.com/)

---

## Education

### Computer Science — Bachelor of Science
**University of Chicago** · September 2024 – June 2028

**Relevant Courses:**
- Introduction to Computer Science I
- Introduction to Computer Science II
- Systems Programming I
- Systems Programming II
- Mathematical Foundations of Machine Learning
- Discrete Mathematics
- Theory of Algorithms
- Machine Learning
- Foundations of Distributed Systems

---

### Physics — Bachelor of Arts
**University of Chicago** · September 2024 – June 2028

**Relevant Courses:**
- Mechanics
- Electricity and Magnetism
- Waves, Optics, and Heat
- Intermediate Mechanics
- Quantum Mechanics I
- Quantum Mechanics II
