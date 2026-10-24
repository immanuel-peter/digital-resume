# Immanuel Peter

Member of Technical Staff Intern @ Tensormesh · CS, Physics & Math @ UChicago '28

[Résumé](https://ipeter.dev/resume.pdf) · [Blog](https://ipeter.dev/blog) · [GitHub](https://github.com/immanuel-peter) · [Hugging Face](https://huggingface.co/immanuelpeter) · [Twitter/X](https://x.com/moby763canary21) · [LinkedIn](https://www.linkedin.com/in/immanuel-peter) · [Email](mailto:hello@ipeter.dev)

---

**I work on multimodal and physical AI.**

- **Work:** MTS Intern at Tensormesh
- **Study:** CS, Physics, & Math at UChicago
- **Interests:** Vision, Multimodal, World Models, Physical AI
- **Current:** [Vision Tower Bench](https://ipeter.dev/blog/vision-tower-bench)
- **Hugging Face:** {{huggingface}}

Need a quick crash course on me? Check out my [resume](https://ipeter.dev/resume.pdf).

---

## Work

### [Vision Tower Bench](https://ipeter.dev/blog/vision-tower-bench) · 2026
> A benchmark for evaluating vision head capabilities.

A benchmark that isolates the vision Tower from the rest of a VLM. Probes sixteen frozen Towers (DINOv2, DINOv3, SigLIP2, and thirteen extracted from multimodal LLMs) across recognition, geometry, cross-view correspondence, and occlusion, with paired bootstrap intervals and published Tower extracts on Hugging Face.

`Python` `PyTorch` `Hugging Face` `uv` · [Report](https://ipeter.dev/blog/vision-tower-bench) · [Code](https://github.com/immanuel-peter/vision-tower-bench) · [Towers](https://huggingface.co/collections/immanuelpeter/vision-heads)

---

### [AutoMoE](https://github.com/immanuel-peter/self-driving-model) · 2025
> A MoE self-driving model in PyTorch.

A modular, multi-task self-driving system based on a Mixture-of-Experts (MoE) architecture, trained on a CARLA autopilot dataset with recorded speed, throttle, brake, and steering. Uses specialized neural networks for specific perception tasks and a gating network to combine their outputs, aiming for a more modular, interpretable, and efficient model for navigating complex environments.

`Python` `PyTorch` `CUDA` `CARLA` `Hugging Face` · [Code](https://github.com/immanuel-peter/self-driving-model) · [Data](https://huggingface.co/datasets/immanuelpeter/carla-autopilot-multimodal-dataset)

---

### [Hostess](https://hostess.sh/) · 2026
> Docker Compose for Production.

Hostess turns a single declarative stack file into a production deployment on Kubernetes. I built the end-to-end platform: a Go CLI and API that compile hostess.yml into multi-service workloads, a controller that reconciles database connection secrets after operators provision passwords, multi-cloud image builds (BuildKit / Cloud Build / ACR Tasks), GitHub App deploy-on-push with isolated PR preview environments, TLS-terminated external database access, Infisical-backed secrets, RBAC, and a Next.js Studio with service-specific metrics, traces, OpenAPI playground, and database admin.

`Go` `Gin` `Cobra` `controller-runtime` `Kubernetes` `CloudNativePG` `Redis Operator` `BuildKit` `Cloud Build` `ACR Tasks` `Infisical` `Prometheus` `OpenTelemetry` `Tempo` `Next.js` `Pulumi` `GCP` `Azure` · [hostess.sh](https://hostess.sh)

---

### [Redis Operator](https://github.com/howl-cloud/redis-operator) · 2026
> CloudNativePG for Redis.

A Kubernetes operator for Redis, inspired by CloudNativePG. Supports standalone, sentinel, and cluster modes with direct pod and PVC management. Implements a fencing-first failover strategy to prevent split-brain scenarios and ensure data consistency during node failures.

`Go` `Kubernetes` `Redis` `Operator SDK` `Sentinel` · [Code](https://github.com/howl-cloud/redis-operator)

---

### [Postplan](https://github.com/immanuel-peter/postplan) · 2026
> Easy toolchain to upload static files.

A publishing service for HTML documents and static assets, built for agents. Each document gets its own subdomain and an append-only version history via a token-authenticated API, and uploaded assets get stable public URLs, with S3-compatible storage and Cloudflared tunneling.

`TypeScript` `Fastify` `Drizzle` `PostgreSQL` `S3` `Garage` `Cloudflared` · [Code](https://github.com/immanuel-peter/postplan)

---

### [Grok Review](https://grokreq.com/) · 2026
> Review your PRs with Grok.

Turns any public GitHub PR URL into a streaming AI code review powered by Grok 4.5. Paste a PR link, and get instant, line-by-line feedback on logic, style, and potential bugs — streamed in real time.

`Next.js` `TypeScript` `Grok API` `GitHub API` `PostgreSQL` · [grokreq.com](https://grokreq.com/) · [Code](https://github.com/immanuel-peter/grok-review)

---

## Experience

### Member of Technical Staff Intern
**Tensormesh** · March 2026 – Present · Foster City, CA

- Contributed upstream to LMCache, adding a coordinator endpoint for listing pinned cache entries and per-key access tracking in the key directory.
- Shipped 35 PRs and 100+ commits across 9 company repos spanning LLM observability and inference optimization.
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

## Open Source

### [LMCache](https://github.com/LMCache/LMCache)

- Added a coordinator endpoint for listing pinned cache entries. [#4960](https://github.com/LMCache/LMCache/pull/4960)
- Added per-key access tracking to the coordinator key directory. [#4873](https://github.com/LMCache/LMCache/pull/4873)

---

### [vLLM Production Stack](https://github.com/vllm-project/production-stack)

- Added router volume and mount support for read-only root filesystems. [#975](https://github.com/vllm-project/production-stack/pull/975)
- Corrected the default NVIDIA runtime class, with regenerated CRD manifests. [#974](https://github.com/vllm-project/production-stack/pull/974)

---

### [Brev CLI](https://github.com/brevdev/brev-cli)

- Authored the core rsync-first file-transfer implementation, with automatic SCP fallback and unit coverage. [#423](https://github.com/brevdev/brev-cli/pull/423)

---

### [Pyrefly](https://github.com/facebook/pyrefly)

- Upstream Rust cleanup standardizing the error-summary module and imports from `summarise` to `summarize`. [#1370](https://github.com/facebook/pyrefly/pull/1370)

---

## Education

### University of Chicago · 2024 – 2028
B.S. Computer Science, B.A. Physics, B.A. Mathematics

**Computer Science courses:**
- Introduction to Computer Science I
- Introduction to Computer Science II
- Systems Programming I
- Systems Programming II
- Mathematical Foundations of Machine Learning
- Discrete Mathematics
- Theory of Algorithms
- Machine Learning
- Foundations of Distributed Systems

**Physics courses:**
- Mechanics
- Electricity and Magnetism
- Waves, Optics, and Heat
- Intermediate Mechanics
- Quantum Mechanics I
- Quantum Mechanics II
- Statistical and Thermal Physics
- Experimental Physics I

**Mathematics courses:**
- Introduction to Proofs in Analysis
- Abstract Linear Algebra
- Analysis in Rn I
- Analysis in Rn II
- Analysis in Rn III
- Basic Algebra I
