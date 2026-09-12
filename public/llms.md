# Immanuel Peter

Member of Technical Staff Intern @ Tensormesh · CS, Physics & Math @ UChicago '28

[Email](mailto:hello@ipeter.dev) · [LinkedIn](https://www.linkedin.com/in/immanuel-peter) · [GitHub](https://github.com/immanuel-peter) · [Twitter/X](https://x.com/moby763canary21)

---

**I'm a Member of Technical Staff Intern at Tensormesh!**

My Hugging Face datasets have over **15,000** downloads.

Need a quick crash course on me? Check out my [resume](https://ipeter.dev/resume.pdf).

---

## Experience

### Member of Technical Staff Intern
**Tensormesh** · March 2026 – Present · Foster City, CA

- Contributed upstream to LMCache, adding a coordinator endpoint for listing pinned cache entries and per-key access tracking in the key directory.
- Shipped 35 PRs and 100+ commits across 9 company repos spanning various services.
- Integrated Arize Phoenix into Tensormesh's observability stack, emitting OpenInference LLM traces from the router for all requests, and shipped SDK and CLI tooling for inspecting traces and spans.
- Reworked the Prometheus metrics for TTFT, throughput, and other rollups that power the serverless observability dashboards.
- Built an orchestrator microservice that pins prompts in LMCache asynchronously during inference, and exposed pin management through the API, SDK, and CLI.
- Built a KV cache discovery interface on top of the LMCache Coordinator API to browse cached keys, tokens, and utilization across engines.
- Led an internal research effort on key weighting for long-context inference, from evals to writeups.

---

### Software Engineer Intern
**Quantum Rings** · June 2025 – August 2025 · Chicago, IL

- Delivered 19 PRs, 43 contributions, and 15 completed GitHub issues across the internship, adding ~15K LOC and removing ~3.6K LOC while reviewing code and driving schema refactors.
- Migrated execution data from the user entity to a dedicated relational table with FKs, modularizing schema and ensuring test suite stability with no performance regression.
- Implemented a telemetry aggregation background worker (AWS SQS + TypeORM) to asynchronously roll up user execution activity, improving scalability and simplifying downstream analytics queries.
- Designed and deployed queue-driven execution processing to decouple heavy telemetry operations from the API, reducing request latency and enabling horizontal scaling.
- Built full-stack admin analytics dashboards with NestJS, Next.js, and Recharts, integrating SQL time-bucket aggregation and timezone-safe filtering to track user growth, active usage, and execution volume.

---

## Open Source Contributions

### [LMCache](https://github.com/LMCache/LMCache)

- Added a coordinator endpoint for listing pinned cache entries in merged [PR #4960](https://github.com/LMCache/LMCache/pull/4960).
- Added per-key access tracking to the coordinator key directory in merged [PR #4873](https://github.com/LMCache/LMCache/pull/4873).

---

### [Brev CLI](https://github.com/brevdev/brev-cli)

- Authored the core rsync-first file-transfer implementation with automatic SCP fallback and unit coverage.
- The original commits in [PR #297](https://github.com/brevdev/brev-cli/pull/297) were preserved in the maintainer-approved [merged PR #423](https://github.com/brevdev/brev-cli/pull/423).

---

### [Pyrefly](https://github.com/facebook/pyrefly)

- Submitted an upstream Rust cleanup in [PR #1370](https://github.com/facebook/pyrefly/pull/1370), standardizing the error-summary module and imports from `summarise` to `summarize`.

---

### [vLLM Production Stack](https://github.com/vllm-project/production-stack)

- Added router volume and mount configuration for read-only root filesystems in merged [PR #975](https://github.com/vllm-project/production-stack/pull/975).
- Corrected the default NVIDIA runtime class and regenerated its CRD in merged [PR #974](https://github.com/vllm-project/production-stack/pull/974).

---

## Projects

### [Vision Tower Bench](https://ipeter.dev/blog/vision-tower-bench)
A benchmark that isolates the vision Tower from the rest of a VLM. Probes six frozen Towers (DINOv2, SigLIP2, and four extracted from multimodal LLMs) across recognition, geometry, cross-view correspondence, and occlusion, with paired bootstrap intervals and published Tower extracts on Hugging Face.

`Python` `PyTorch` `Hugging Face` `uv` · **Completed** · [GitHub](https://github.com/immanuel-peter/vision-tower-bench) · [Report](https://ipeter.dev/blog/vision-tower-bench) · [Towers](https://huggingface.co/collections/immanuelpeter/vision-towers)

---

### [Postplan](https://github.com/immanuel-peter/postplan)
A publishing service for HTML documents built for agents. Each document gets its own subdomain and an append-only version history via a token-authenticated API, with S3-compatible storage and Cloudflared tunneling.

`TypeScript` `Fastify` `Drizzle` `PostgreSQL` `S3` `Garage` `Cloudflared` · **Completed** · [GitHub](https://github.com/immanuel-peter/postplan)

---

### [Hostess](https://hostess.sh/)
> Docker Compose for Production.

Hostess turns a single declarative stack file into a production deployment on Kubernetes. I built the end-to-end platform: a Go CLI and API that compile hostess.yml into multi-service workloads, a controller that reconciles database connection secrets after operators provision passwords, multi-cloud image builds (BuildKit / Cloud Build / ACR Tasks), GitHub App deploy-on-push with isolated PR preview environments, TLS-terminated external database access, Infisical-backed secrets, RBAC, and a Next.js Studio with service-specific metrics, traces, OpenAPI playground, and database admin.

`Go` `Gin` `Cobra` `controller-runtime` `Kubernetes` `CloudNativePG` `Redis Operator` `BuildKit` `Cloud Build` `ACR Tasks` `Infisical` `Prometheus` `OpenTelemetry` `Tempo` `Next.js` `Pulumi` `GCP` `Azure` · **Completed** · [Live Demo](https://hostess.sh)

---

### [Redis Operator](https://github.com/howl-cloud/redis-operator)
A Kubernetes operator for Redis, inspired by CloudNativePG. Supports standalone, sentinel, and cluster modes with direct pod and PVC management. Implements a fencing-first failover strategy to prevent split-brain scenarios and ensure data consistency during node failures.

`Go` `Kubernetes` `Redis` `Operator SDK` `Sentinel` · **Completed** · [GitHub](https://github.com/howl-cloud/redis-operator)

---

### [AutoMoE](https://github.com/immanuel-peter/self-driving-model)
A modular, multi-task self-driving system based on a Mixture-of-Experts (MoE) architecture. Uses specialized neural networks for specific perception tasks and a gating network to combine their outputs, aiming for a more modular, interpretable, and efficient model for navigating complex environments.

`Python` `PyTorch` `CUDA` `CARLA` `Hugging Face` · **Completed** · [GitHub](https://github.com/immanuel-peter/self-driving-model) · [Datasets](https://huggingface.co/immanuelpeter) 

---

### [Grok Review](https://grokreq.com/)
Turns any public GitHub PR URL into a streaming AI code review powered by Grok 4.5. Paste a PR link, and get instant, line-by-line feedback on logic, style, and potential bugs — streamed in real time.

`Next.js` `TypeScript` `Grok API` `GitHub API` `PostgreSQL` · **Completed** · [GitHub](https://github.com/immanuel-peter/grok-review) · [Live Demo](https://grokreq.com/)

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
- Statistical and Thermal Physics
- Experimental Physics I

---

### Mathematics — Bachelor of Arts
**University of Chicago** · September 2024 – June 2028

**Relevant Courses:**
- Introduction to Proofs in Analysis
- Abstract Linear Algebra
- Analysis in Rn I
- Analysis in Rn II
- Analysis in Rn III
- Basic Algebra I
