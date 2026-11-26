---
title: "CV"
layout: cv
type: cv

name: "Evgeny Zhdanov"
headline: "AI Tech Lead / AI/LLM Engineer"
email: "evdev34@gmail.com"
photo: "/cv/profile.jpg"
location: "Moscow, Russia (GMT+3) · remote"
filename: "Zhdanov_Evgeny_AI_Tech_Lead"

summary_short: "AI Tech Lead: LLM API integration, provider evaluation, production deployment, and the operational loop afterwards. Go, gRPC, MCP, AI security."

links:
  - name: "Blog"
    url: "https://zhisme.com"
  - name: "LinkedIn"
    url: "https://www.linkedin.com/in/zhisme/"
  - name: "Telegram"
    url: "https://t.me/zhisme_dev"
  - name: "GitHub"
    url: "https://github.com/zhisme"
---

## Summary

Ten years of backend engineering, the last two full-time on LLM infrastructure. I build the layer between a model API and a production system: evaluation, routing, guardrails, deployment, and the operational feedback loop afterwards.

I founded and maintain OpenTalon, an open source LLM orchestration platform in Go, and Talooner, a commercial AI code review built on it — delivered into two companies where it runs inside the customer's own infrastructure. That work covers the full cycle: benchmark providers on real workloads, design the integration, ship it, measure cost and quality, keep it explainable.

Before AI: payment gateways and fintech, PCI DSS, OWASP remediation, a team of five as tech lead. I write publicly about this work (zhisme.com, 10+ articles) and I am comfortable being the engineer in the room with the customer.

## Core competencies

**Solution architecture** — LLM integration design, multi-provider routing, deterministic pre/post-processing, agent topologies, MCP tool integration, on-prem and single-tenant deployment.

**Technical evaluation** — provider benchmarking on real workloads (quality, latency, cost per task), eval harnesses, regression testing of prompts and policies, failover between models.

**Production delivery** — Go and Ruby services, gRPC/Protobuf, Kubernetes, Helm, ArgoCD, GitHub Actions / GitLab CI, Prometheus + Grafana, incident response.

**AI security** — prompt injection prevention, sandboxed tool execution, plugin isolation as separate OS processes, scoped access for enterprise chat channels (Teams / Slack), OWASP LLM Top 10.

**Communication** — customer-facing discovery and onboarding, rules and policy design with domain experts, technical writing and public speaking through the blog, open source maintainership.

## Experience

### Founder, AI Tech Lead — OpenTalon / Talooner

May 2025 – present · Moscow · github.com/opentalon

Go, gRPC, Protobuf, LLM APIs (OpenAI, Anthropic Claude, DeepSeek), MCP, AI agents, Datalog/Datalevin, PostgreSQL, Kubernetes, Helm, GitHub Actions, GitLab CI, Prometheus, Grafana.

**OpenTalon — enterprise LLM orchestration platform (github.com/opentalon)**

- Provider-agnostic routing across OpenAI, Anthropic Claude and DeepSeek: model chosen per task on quality, latency and cost, with fallback and one interface — token economics without vendor lock-in.
- Built the evaluation path that makes routing decisions defensible: same workload replayed across providers, compared on output quality, p95 latency and cost per task rather than vendor benchmarks.
- Prompt injection prevention: every request passes a security check before the model call, guard plugins sanitize tool results before the model sees them — closes the main OWASP LLM Top 10 risk, and one compromised integration cannot poison the context or reach other plugins.
- Architecture principle "the LLM writes code, the runtime keeps it safe" (after Cloudflare Code Mode for MCP): the model emits scenarios in a restricted DSL whose grammar cannot express an unsafe operation — a structural sandbox instead of a policy we hope the model follows.
- Plugin isolation: each plugin is a separate OS process behind gRPC + Protobuf, so the core keeps its memory and plugins cannot escalate privileges or move laterally.
- Channel-aware authentication for enterprise messengers (Teams / Slack): data and tool access scoped per channel and per user.
- MCP as the fact source for agents, plus a host scheduler for recurring jobs.

**Talooner — AI code review for agent-assisted development (talooner.com)**

- Delivered end-to-end to two companies: discovery, policy design on top of their own guides and ownership rules, rule tests, CI workflow, pilot on real pull requests. Review runs inside the customer's infrastructure; code and diffs never leave their perimeter, forge token lives for a single run.
- Product model: deterministic review of PRs/MRs for GitHub and GitLab. Policy is a versioned `tln` ruleset in the customer repo, read from the base branch, so a PR cannot rewrite the rules it is judged by.
- The model is called only where a rule asks for it (`do llm_review`), and its answer re-enters the engine as a fact: one commit plus one ruleset gives one verdict, a rerun is a cache hit with no token spend.
- Onboarding is itself an agent (talooner-skills): it interviews the customer about sensitive paths, writes the first ruleset, tests and workflow, and opens a draft PR.
- Benchmark on a real MR (200 files, +7,000 / −1,000 lines): ~30 s and ~$0.10 versus $5.5–28 for a chat-model review; on 20 files, 14 s versus roughly 40 minutes of senior review time.
- `talooner_*` Prometheus metrics and a Grafana dashboard: auto-approval rate, LLM cost per review, breakdown by plugin and model.

**tln — DSL and rules engine (github.com/opentalon/tln-language)**

- Compiler and runtime in Go: lexer, parser, validator, query planner, inference over facts. Rules read like English, so a domain expert writes and audits them without programming.
- FactStore on Datalevin (Datalog, full-text search): every firing is explainable, returned as a trace of facts, rule and threshold — no black box.
- ML primitives (anomaly detection, forecasting, clustering, classification) as language keywords: milliseconds on structured data, thresholds trained per tenant.
- Expert-in-the-Loop: the LLM owns language and intent, the engine owns facts, inference and policy. Target domains are compliance-heavy — finance, insurance, healthcare — and asset maintenance.

**Contract work (in parallel)**

- AI-assisted migration of a 2016 Ember.js codebase to React in three months: prompt design and markdown context artifacts that kept the migration coherent across sessions.
- CI/CD and quality gates for Ruby on Rails: RuboCop, Brakeman, Strong Migrations.
- Engineering blog zhisme.com — 10+ articles on AI infrastructure and LLM orchestration.

### Team Lead / Tech Lead — Rocket Work

November 2023 – May 2025 · Moscow · b2b.rocketwork.ru — fintech, B2B SaaS

Go, Ruby on Rails, PostgreSQL, gRPC, Protobuf, Kubernetes, Helm, ArgoCD, GitHub Actions, Grafana, Kibana, Sentry.

B2B HR platform for electronic document management; Go services around a Rails monolith.

- Led a team of five (four engineers, one QA): hiring, onboarding, mentoring, 1-on-1s, performance reviews — zero attrition over 18 months.
- Inherited a frozen product with no production users, took it solo to the first paying customers in six months, then built the team around it.
- Designed a configurable HR workflow engine (JSON form builder, approval chains) and a Go e-signature service (CryptoPro, gRPC).
- Built the delivery process from scratch: review under 24 h, releases via Helm + ArgoCD (50+ production deploys), observability with Grafana, Kibana and Sentry — incident detection from hours to under five minutes.

### Senior Backend Developer — Emerchantpay

January 2021 – November 2023 · Bulgaria · emerchantpay.com — payment processing

Payment gateway, 10,000+ merchants, over $5M monthly volume.

- Technical lead for LATAM integrations: onboarded banks from scratch (XML/SOAP, SFTP + PGP) and automated transaction reconciliation — 80% less manual work.
- Fixed critical vulnerabilities from OWASP audits (path traversal CWE-22, injections) and drove the gateway through PCI DSS.
- Groundwork for later LLM security work: threat modeling, input sanitization, auditing untrusted data.

### Backend Developer — Noveo

June 2018 – December 2020 · Novosibirsk · noveogroup.ru — IT outsourcing, retail analytics

SaaS feedback collection platform with analytics and forecasting.

- Migrated the analytics engine from MongoDB to Elasticsearch — dashboards load 20x faster.
- Worked on ML analytics and forecasting over feedback data: anomaly detection, time-series predictions.
- Added SAML 2.0 SSO (Okta, Azure AD); raised test coverage from ~30% to ~75%.

### Junior Developer — Point Rouge

March 2016 – May 2018 · Lausanne, Switzerland · magtuner.com — education

JavaScript, Ember.js, Ruby on Rails, PostgreSQL, Ruby, Elixir, WebSocket, Redis.

- Built an online photo editor for magazines: Ember.js frontend, Rails backend.
- Wrote a real-time notification system in Elixir/Phoenix over WebSocket for live events (~50 concurrent connections, 99.9% uptime).

## Selected skills

Solution architecture · LLM API integration and evaluation · prompt engineering · RAG · MCP · tool/function calling · prompt injection prevention · LLMOps · model economics · Go · gRPC/Protobuf · Ruby/Rails · PostgreSQL · Elasticsearch · Kubernetes · Helm · Docker · ArgoCD · GitHub Actions · Prometheus/Grafana · technical writing

## Education

**BSc, Computer Science and Computer Engineering**, Sevastopol State University, 2014–2018 — systems engineer

## Certifications

**Anthropic — Introduction to Agent Skills**, 2026

**Complete Guide to Elasticsearch**, Udemy, 2020

## Languages

Russian — native · English — C1, five years in international teams
