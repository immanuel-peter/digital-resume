# Hostess — Docker Compose for Production

**The deployment platform that just works.**

---

## The Problem

Modern deployment tooling is broken. Developers are stuck choosing between three bad options:

### 1. Big Cloud (AWS, Azure, GCP)
- **Too bureaucratic**: IAM roles, VPCs, security groups, permission boundaries
- **Too complex**: Managing 15+ services just to deploy a simple app
- **Too expensive**: Forgotten resources rack up bills while you sleep
- **Too fragile**: One misconfigured permission breaks everything

### 2. Managed Platforms (Vercel, Supabase, Render)
- **Delegation fatigue**: Separate dashboards for frontend, backend, database, cache, queue
- **Environment variable hell**: Copy-pasting connection strings between 5 different platforms
- **Vendor lock-in**: Each platform has its own API, CLI, and way of doing things
- **Fragmented state**: Your app's configuration is scattered across multiple services

### 3. DIY Platforms (Railway, Render, Fly)
- **Not GitOps enough**: Configuration drift between environments
- **Limited orchestration**: Multi-service deployments are an afterthought
- **Opaque pricing**: Hard to predict costs for complex stacks
- **Incomplete**: Missing critical features like proper service discovery or lifecycle hooks

**The result?** Developers waste weeks wrestling with infrastructure instead of shipping features.

---

## The Solution

**Hostess is Docker Compose for production—almost literally.**

One `hostess.yml` file. One `hostess deploy` command. Instant deployment to the web.

```yaml
version: "1.0"
name: my-app

services:
  web:
    type: nextjs
    build:
      source: ./frontend
    env:
      NEXT_PUBLIC_API_URL: ${api.external_url}

  api:
    type: fastapi
    build:
      source: ./backend
    env:
      DATABASE_URL: ${db.url}
      REDIS_URL: ${cache.url}

  db:
    type: postgres
    resources: large

  cache:
    type: redis
```

```bash
$ hostess deploy
✓ Building web...
✓ Building api...
✓ Provisioning db...
✓ Provisioning cache...
✓ Deploying services...

🚀 Deployment complete!

  web:   https://my-app-web-k7xm9p2q.hostess.run
  api:   https://my-app-api-a3x9d2m1.hostess.run
  db:    postgresql://user:password@my-app-db-m2x8k9n4.hostess.run:5432/db
  cache: redis://password@my-app-cache-p1v7j3l5.hostess.run:6379
```

---

## What Makes Hostess Different

### 1. Single Source of Truth
`hostess.yml` is to production deployments what `docker-compose.yml` is to local dev. Your entire stack—frontend, backend, databases, workers—lives in one declarative config file checked into version control.

### 2. GitOps by Default
- Track your entire stack in version control
- Deploy from git commits with automatic SHA-based URLs
- Rollback with confidence to any previous deployment
- Preview environments for every pull request

### 3. Zero Configuration Overhead
- No Kubernetes YAML to write
- No Terraform to maintain
- No cloud-specific CLI commands to memorize
- Just define what you want, Hostess handles the rest

### 4. Framework-Optimized Dashboards
Unlike generic platforms, Hostess provides **custom dashboards** for specific frameworks:

- **Next.js**: Build artifacts, page metrics, route analytics, traffic patterns
- **FastAPI**: Auto-discovered API docs (`/docs`, `/redoc`), endpoint metrics, request tracing
- **Postgres**: Database/table browser, query performance, connection pool stats, storage usage
- **Redis**: Key browser, memory usage, command stats, cache hit rates

Real-time insights without configuring observability tools.

### 5. Magic Variables (Service Discovery That Works)
Reference services by name, get fully-qualified URLs automatically:

```yaml
api:
  env:
    DATABASE_URL: ${db.url}           # Internal cluster URL
    REDIS_URL: ${cache.url}

frontend:
  env:
    NEXT_PUBLIC_API_URL: ${api.external_url}  # Public internet URL
```

Hostess generates both **internal URLs** (for service-to-service communication) and **external URLs** (for browsers and developers), all with automatic HTTPS.

### 6. OSS-Friendly: Make Any App Deployable by Anyone
`hostess.yml` makes your application **redistributable**. Want to self-host Supabase, Infisical, or Cal.com without Terraform/K8s knowledge?

```bash
$ git clone https://github.com/supabase/supabase
$ cd supabase
$ cat hostess.yml  # Already there
$ hostess deploy   # That's it
```

Build any open-source platform and let anyone deploy it for themselves in one command. No cloud expertise required.

### 7. Cost Transparency
- No hidden services running up your bill
- If it's in your config, it's deployed
- If it's not, it's gone
- Dashboard shows real-time cost breakdown per service

---

## Core Features

### Multi-Service Orchestration
Deploy entire stacks as one atomic unit. Services wait for dependencies to be healthy before starting.

### Operator-Backed Databases
Postgres and Redis provisioned via Kubernetes operators (CloudNativePG, Redis FailoverSet). Production-ready HA, backups, and failover—no configuration required.

### Lifecycle Hooks
Run migrations, seed databases, warm caches—all declaratively:

```yaml
api:
  lifecycle:
    migrate:
      command: ["alembic", "upgrade", "head"]
      on_failure: abort
    post_deploy:
      command: ["python", "scripts/warmup_cache.py"]
```

### Autoscaling
CPU-based horizontal pod autoscaling out of the box:

```yaml
api:
  replicas:
    min: 2
    max: 10
    target_cpu: 70
```

### Real-Time Observability
- Live log streaming (SSE)
- Service health dashboards
- Pod status and resource usage
- Framework-specific metrics (Next.js builds, FastAPI endpoints, DB queries)

### Secrets Management
Integrated with Infisical for secure secret storage:

```bash
$ hostess secrets set JWT_SECRET
$ hostess secrets set STRIPE_KEY --value sk_live_abc123
```

Reference secrets in your config:

```yaml
env:
  JWT_SECRET: ${secret:JWT_SECRET}
  STRIPE_KEY: ${secret:STRIPE_KEY}
```

### Preview Environments
Automatic ephemeral environments for every pull request:

```yaml
environments:
  production:
    branch: main

  preview:
    branches: ["*"]
    ephemeral: true
    ttl: 7d
```

Each PR gets isolated services with unique URLs. Cleanup happens automatically when the PR closes.

### Custom Domains
Bring your own domain with automatic SSL:

```yaml
frontend:
  domains:
    - myapp.com
    - www.myapp.com

api:
  domains:
    - api.myapp.com
```

Hostess handles Let's Encrypt certificates and DNS validation.

---

## Supported Service Types

Hostess provides first-class support with optimized defaults and custom dashboards:

### Web Frameworks
- **Next.js**: Server-side rendering, static exports, API routes
- **FastAPI**: Auto-discovered OpenAPI docs, async Python

### Databases
- **Postgres**: CloudNativePG operator with HA and backups
- **Redis**: Redis FailoverSet with persistence options

### Generic
- **Custom**: Any containerized service with flexible configuration

**Coming soon**: MongoDB, MinIO, RabbitMQ, vLLM (GPU inference)

---

## The Platform Vision

### Phase 1: Multi-Service Deployments (v1.0) — Q1 2026
Core platform for teams deploying their own apps. One-command deploys, GitOps, preview environments, observability.

### Phase 2: Platforms SDK (v1.3–v1.4) — Q2 2026
Turn any deployable app into a **sellable platform**. Developers can:

- Publish versioned templates (hostess.yml + variable schema)
- Provision isolated tenant deployments (multi-tenant SaaS)
- Manage tenants via API/SDK and Studio UI
- Enable customers to self-host (BYOC) or use Hostess Cloud

**Example**: Build a CRM, publish a template, let customers deploy their own isolated instance—like Retool or Metabase, but for any app.

### Phase 3: Multi-Cloud Support (v1.3–v1.4) — Q3 2026
Expand beyond GKE to EKS (AWS) and AKS (Azure). Cloud provider is just a config change:

```yaml
cloud:
  provider: aws
  region: us-east-1
```

Same `hostess.yml`, different backend execution.

### Phase 4: Enterprise BYOC (v1.4+) — Q4 2026
Connect any Kubernetes cluster regardless of provider. Custom/Enterprise tier for teams with existing infrastructure.

---

## Market Positioning

| Platform | Best For | Weakness |
|----------|----------|----------|
| **AWS/GCP/Azure** | Enterprise with dedicated DevOps | Too complex for small teams |
| **Vercel** | Single Next.js apps | No multi-service support |
| **Supabase** | Managed Postgres + Auth | Not for custom stacks |
| **Railway** | Simple deployments | Limited GitOps primitives |
| **Render** | Basic multi-service | No service discovery |
| **Fly.io** | Edge deployments | Steep learning curve |
| **Hostess** | **Multi-service full-stack apps** | **New platform (limited track record)** |

**Hostess occupies the gap**: Too complex for Vercel, too simple for AWS, more GitOps than Railway, more flexible than Render.

---

## Use Cases

### 1. SaaS Startups
Deploy your entire stack—frontend, API, database, worker, cache—with one command. Focus on product, not infrastructure.

### 2. Open-Source Platforms
Distribute your project as a `hostess.yml` file. Anyone can deploy it without Terraform knowledge. Examples:
- Self-hosted Supabase
- Your own Infisical instance
- Cal.com for your team
- Open-source AI through vLLM

### 3. Development Teams
- Preview environments for every PR
- Staging and production from one config
- Easy rollbacks when things break

### 4. Platform Builders (v1.3+)
Turn your app into a multi-tenant SaaS. Provision isolated customer environments with the Platforms SDK.

---

## Business Model

### Pricing Strategy (Draft)
- **Free Tier**: 1 project, 3 services, community support
- **Pro**: $29/month — unlimited projects, advanced features (autoscaling, custom domains)
- **Team**: $99/month — RBAC, SOC2 compliance, priority support
- **Enterprise**: Custom — BYOC, dedicated clusters, SLA

**Open Questions**:
- Resource-based pricing (CPU/memory/storage) vs. flat project pricing?
- Separate pricing for Platforms SDK (tenant metering)?
- GPU/TPU pricing for vLLM inference workloads?

**Strategy**: Get the platform into the hands of dev teams first, gather feedback, iterate on pricing based on real usage patterns.

---

## Current Status

### What's Built (v1.0 Core)
- ✅ Full deployment pipeline (CLI → API → Docker Build → K8s)
- ✅ Postgres and Redis provisioning (CloudNativePG + Redis StatefulSet)
- ✅ Service dashboards (Next.js, FastAPI, Postgres, Redis)
- ✅ Real-time log streaming
- ✅ Magic variables and service discovery
- ✅ Secrets integration (Infisical)
- ✅ RBAC (role-based access control)
- ✅ Multi-port support with stable URLs

### What's Next (Pre-Launch)
- [ ] Deployment-specific URLs (commit SHA-based preview URLs)
- [ ] Database connection URLs via Cloudflared tunnel
- [ ] CLI commands (`hostess init`, `hostess connect`, `hostess deployments`)
- [ ] Personal Access Tokens (PAT) for CI/CD
- [ ] Per-service deployment (deploy only what changed)
- [ ] Project/deployment deletion cleanup
- [ ] Deploy to GCP (move from local k3s to production GKE)

**Timeline**: Launch-ready by **Q1 2026**.

---

## Why I'm Building This

I'm a developer who's built many kinds of software—AI engineering, SWE, full-stack apps. I know the pain of managing cloud infrastructure firsthand:

- AWS billing surprises from forgotten EC2 instances
- Copy-pasting environment variables between 5 platforms
- Debugging permission errors at 2 AM before a demo
- Rewriting deployment configs every time I switch cloud providers

Cloud providers are greedy. Managed platforms are fragmented. DIY platforms are incomplete.

**Hostess is the tool I wish existed when I started building software.**

---

## Developer Experience Example

### Before Hostess
```bash
# Set up infrastructure
$ terraform init
$ terraform apply  # 15 minutes, 200+ lines of config

# Configure databases
$ kubectl apply -f postgres-operator.yaml
$ kubectl apply -f redis-operator.yaml
$ kubectl apply -f postgres-cluster.yaml
$ kubectl apply -f redis-cluster.yaml

# Deploy services
$ docker build -t myapp/frontend .
$ docker push myapp/frontend
$ kubectl apply -f frontend-deployment.yaml
$ kubectl apply -f frontend-service.yaml
$ kubectl apply -f frontend-ingress.yaml

# Repeat for backend...
# Set up secrets manually...
# Configure DNS records...
# Debug why services can't talk to each other...

Total time: 4-8 hours (if you know what you're doing)
```

### With Hostess
```bash
$ hostess deploy

Total time: 3 minutes
```

---

## Competitive Advantages

1. **GitOps-first**: Version control is the source of truth, not a dashboard
2. **Framework awareness**: Custom dashboards for Next.js, FastAPI, Postgres, Redis
3. **OSS redistribution**: Make any app deployable-by-anyone with one config file
4. **Multi-service native**: Built for full-stack apps, not retrofitted from single-app platforms
5. **Kubernetes under the hood**: Production-grade orchestration without the YAML hell
6. **Magic variables**: Service discovery that actually works without manual DNS setup
7. **Platforms SDK roadmap**: Path to enabling multi-tenant SaaS builders

---

## Risks & Mitigations

### Risk: "Another deployment platform?"
**Mitigation**: Hostess targets the gap between simple platforms (Vercel) and complex cloud (AWS). Multi-service GitOps is underserved.

### Risk: Kubernetes complexity leaks through
**Mitigation**: Ruthless abstraction. Users never write YAML, never run kubectl. Platform handles operators, networking, DNS.

### Risk: Cost of hosting (Postgres, Redis, compute)
**Mitigation**: Start with GKE Autopilot (pay only for what you use). Scale to multi-cloud (AWS, Azure) to optimize costs. BYOC for Enterprise.

### Risk: Limited adoption without proven track record
**Mitigation**: Focus on OSS redistribution. Get Hostess adopted as the "official" deployment method for popular OSS projects (Supabase, Infisical, etc.).

---

## What Comes After Launch

### Post-v1.0 Roadmap
- **Git Webhooks** (v1.1): Auto-deploy on push, like Vercel
- **Custom Domains** (v1.1): User-managed DNS with auto-TLS
- **Tailscale Integration** (v1.1–v1.2): Zero-config team access to private services
- **Platforms SDK** (v1.3–v1.4): Multi-tenant SaaS builder toolkit
- **New Service Types** (v1.2–v1.3): MongoDB, MinIO, RabbitMQ, vLLM
- **Preview Environments** (v1.2): Automatic ephemeral deploys for PRs
- **Deployment Rollbacks** (v1.2): One-click revert to previous versions
- **Multi-Cloud** (v1.3–v1.4): EKS (AWS), AKS (Azure), BYOC

---

## Summary

**Hostess is Docker Compose for production.**

One config file. One command. Entire stack deployed.

- **For developers**: Stop wrestling with infrastructure, start shipping features
- **For teams**: GitOps, preview environments, observability—out of the box
- **For OSS builders**: Make your project deployable by anyone in one command
- **For platform builders**: Turn your app into a multi-tenant SaaS (Platforms SDK)

**The mission**: Make deploying full-stack apps as easy as running `docker compose up`.

---

**Status**: Core platform complete, finalizing for Q1 2026 launch.

**Contact**: Immanuel Peter | [GitHub](https://github.com/immanuelpeter) | immanuel.peter1@gmail.com
