---
title: "Tech CV"
layout: cv
type: tech-cv

name: "Evgeny Zhdanov"
headline: "Senior Software Engineer | Technical Lead"
email: "evdev34@gmail.com"
photo: "/cv/profile.jpg"
location: "Remote (GMT +3)"

summary_short: "Senior Software Engineer with 10 years of professional experience. Ruby/Rails core. Builds systems, ships them, leads the team."

about:
  - |
    <strong>10 years of professional experience in software engineering, mainly Ruby/Rails.</strong> Last 2 years as team lead — roughly 40% code, 60% architecture and coordination.
    Built payment processing integrations, HR automation platforms, and the teams around them.
    Looking for roles where I own technical decisions and ship with a small team.
  - |
    <strong>Engineering philosophy:</strong> I don't trust theory disconnected from production.
    I work across the stack and pick up whatever the problem requires — language, protocol, or tool.
    I hire quiet engineers who deliver over charismatic ones who write reports.
    I build processes (ticket → review → CI → deploy) because good pipelines prevent fires better than heroics.

links:
  - name: "Personal Blog"
    url: "https://zhisme.com"
  - name: "Telegram Channel"
    url: "https://t.me/zhisme_dev"
  - name: "LinkedIn"
    url: "https://www.linkedin.com/in/zhisme/"
  - name: "GitHub"
    url: "https://github.com/zhisme"

technical_skills:
  - "Ruby / Rails"
  - "Go"
  - "JavaScript / TypeScript"
  - "React"
  - "PostgreSQL / MySQL"
  - "Elasticsearch"
  - "Kubernetes / Docker"
  - "CI/CD (GitHub Actions)"
  - "AWS"

languages:
  - "Russian (Native)"
  - "English (Fluent)"

education:
  - degree: "Bachelor's Degree in Computer Science"
    school: "Sevastopol State University"
    dates: "September 2014 — May 2018"

jobs:
  - title: "Engineering Team Lead"
    company: "RocketWork"
    dates: "November 2023 — Present"
    stack: "Ruby/Rails, Go, React, PostgreSQL, Kubernetes, ArgoCD, GitHub Actions, Grafana, Kibana, Sentry"
    product: "B2B HR automation — configurable personnel management system (hiring, offboarding, leave, document signing) for enterprise clients."
    achievements:
      - "<strong>Took over a frozen product</strong> — codebase existed but had never reached production. Shipped it to paying customers as a single engineer, then built a team of 5 (4 devs + 1 QA)."
      - "<strong>Built the entire dev process from scratch:</strong> Jira ticket workflow (everything is a ticket), Git Flow, code review with <24h turnaround, weekly release cycle via Helm + ArgoCD to Kubernetes."
      - "<strong>Designed configurable HR workflow system</strong> — each company needs different forms, approval chains, and data fields for the same process (e.g., \"hiring\" varies per org). Built JSON-driven form constructor so non-developers configure workflows from admin UI, React frontend consumes the schema."
      - "<strong>Picked up and shipped a Go microservice</strong> for electronic document signing (CryptoPro PDF signatures + watermarks) — was left unfinished by the previous team. Added PDF parsing, logging, request tracing, deployed to production."
      - "<strong>Defined application-level observability:</strong> configured Yabeda Rails metrics, business KPI dashboards in Grafana (completed workflows, document signatures, delivery rates), request trace_id in Kibana for end-to-end debugging, Sentry for error tracking. Infrastructure setup handled by DevOps team."
      - "<strong>Hired and managed 3 engineers</strong> — conducted technical interviews, onboarded, and directly led the team: assigned tasks, guided technical decisions, and unblocked problem-solving day-to-day."

  - title: "Senior Software Engineer"
    company: "Emerchantpay"
    dates: "January 2021 — November 2023"
    stack: "Ruby/Rails, MySQL, React, Elasticsearch, Jenkins, Docker, AWS"
    product: "Payment gateway serving 10,000+ merchants across multiple banking integrations. Large-scale Rails application with long production history."
    achievements:
      - "<strong>Built LATAM bank integrations from scratch</strong> — first one took 3-4 months. Consumed external XML/SOAP APIs for transaction processing, SFTP batch transfers with PGP encryption (private/public key pairs), Sidekiq cron for transaction state synchronization. Configured web payment forms for card payments on integrated providers."
      - "<strong>Implemented transaction reconciliation:</strong> automated verification of amounts and states across systems where status could update from multiple sources. Processing, reconciliation, and cancellation flows across different bank APIs."
      - "<strong>Fixed security vulnerabilities</strong> found in audits: path traversal on SFTP server (CWE-22), injection via unescaped quotes in XLSX parsing."
      - "<strong>Incremental legacy cleanup</strong> during feature work — updating base classes, removing dead code. Not a grand rewrite, just responsible engineering in a codebase where touching anything unrelated could break live payments."
      - "<strong>Mentored 3 junior developers</strong> through code reviews and pair programming."

  - title: "Software Engineer"
    company: "Noveo (outsource for a major French retail analytics company)"
    dates: "June 2018 — January 2021"
    stack: "Ruby/Rails, React, TypeScript, MongoDB, MySQL, Redis, Elasticsearch, Docker, GitLab CI"
    product: "Enterprise customer feedback platform — survey collection and analytics for retail chains."
    achievements:
      - "<strong>Migrated analytics from MongoDB to Elasticsearch,</strong> reducing dashboard load from ~2 minutes to 5-10 seconds for graphs and histograms over retail feedback data."
      - "<strong>Refactored legacy codebase</strong> — extracted fat controllers/models into service objects. Client funded a second phase: rewriting the end-user questionnaire module to React + Rails API with modular architecture, after we'd already rebuilt the admin constructor."
      - "<strong>Implemented SAML 2.0 SSO</strong> — designed DB schema for federated users so corporate clients authenticate via their identity providers (Okta, Azure AD) without separate credentials."
      - "<strong>Mentored 3 interns</strong> through code reviews and pair programming; 2 were hired afterwards."

  - title: "Junior Software Engineer"
    company: "Magtuner SA (Lausanne, Switzerland)"
    dates: "March 2016 — May 2018"
    stack: "Ruby/Rails, Ember.js, Elixir, WebSockets, MySQL, Redis"
    product: "Real-time educational engagement platform with live audience participation."
    achievements:
      - "<strong>Built collaborative editing lock/unlock system in Elixir</strong> for concurrent user access."
      - "<strong>Built full-stack CRUD features</strong> (Ember.js frontend + Rails backend) and implemented document ACL permission system controlling access to shared resources."
      - "<strong>Supported live events</strong> including Children's Olympics (~50 concurrent WebSocket connections)."
---
