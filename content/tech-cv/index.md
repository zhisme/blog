---
title: "Tech CV"
layout: cv
type: tech-cv

name: "Evgeny Zhdanov"
headline: "Engineering Team Lead | Senior Software Engineer"
email: "evdev34@gmail.com"
photo: "/cv/profile.jpg"
location: "Remote (GMT +3)"

summary_short: "Engineering Team Lead with 10 years in tech. Led teams building payment systems and HR automation platforms."

about:
  - |
    <strong>Engineering Team Lead with 10 years in tech</strong> (8 as software engineer, 2 leading teams).
    Built and shipped payment processing systems serving 10,000+ users and B2B HR automation platforms for enterprise clients.
    Track record: hired and mentored 6 engineers, architected microservices infrastructure, delivered 100+ production releases.
  - |
    <strong>Engineering philosophy:</strong> I believe in robust processes over ad-hoc management — well-designed pipelines
    from ticket creation through CI/CD to production release matter more than heroics. Pragmatic, hands-on approach;
    skeptical of theory disconnected from real code. Looking for teams that value shipping working software over ceremony.
  - "Core stack: Ruby/Rails, Go, React, PostgreSQL, Kubernetes."

links:
  - name: "Personal Blog"
    url: "https://zhisme.com"
  - name: "Telegram Channel"
    url: "https://t.me/zhisme_dev"
  - name: "LinkedIn"
    url: "https://www.linkedin.com/in/zhisme/"
  - name: "GitHub"
    url: "https://github.com/zhisme"

leadership_skills:
  - "Team Building"
  - "Technical Hiring"
  - "Mentoring"
  - "Code Review"
  - "Sprint Planning"
  - "System Design"

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
  - "Russian"
  - "English"

education:
  - degree: "Bachelor's Degree"
    school: "Sevastopol State University"
    dates: "September 2014 — May 2018"

jobs:
  - title: "Engineering Team Lead"
    company: "RocketWork"
    dates: "November 2023 — Present"
    stack: "Ruby/Rails, Go, React, PostgreSQL, Kubernetes, ArgoCD, GitHub Actions, Grafana, Kibana, Sentry"
    product: "B2B HR automation platform for enterprise clients: employee lifecycle management (hiring, offboarding, transfers), leave management, department hierarchy, and digitally-signed document generation."
    achievements:
      - "<strong>Built and led a cross-functional team of 5</strong> (4 engineers + 1 QA) from zero, establishing engineering culture and processes."
      - "<strong>Architected microservices infrastructure</strong> across 5 services with GitOps deployment (ArgoCD + Kubernetes), enabling weekly releases."
      - "<strong>Owned full hiring pipeline:</strong> screened 50+ candidates, conducted technical interviews, hired 3 engineers."
      - "<strong>Established engineering practices:</strong> Git Flow, sprint planning, code review standards with <24h turnaround, reducing onboarding time for new hires."
      - "<strong>Built comprehensive observability:</strong> Grafana dashboards tracking both infrastructure (memory, 2xx/4xx/5xx ratios, Yabeda Rails metrics) and business KPIs (completed workflows, document signatures, email/SMS delivery rates). Kibana for centralized logging, Sentry for error tracking."
      - "<strong>Designed extensible workflow engine:</strong> refactored monolithic process handling into configurable stage/field constructor with JSON-driven frontend integration, enabling non-dev teams to create new HR workflows."

  - title: "Senior Software Engineer"
    company: "Emerchantpay"
    dates: "January 2021 — November 2023"
    stack: "Ruby/Rails, MySQL, React, Elasticsearch, Jenkins, Docker, AWS"
    product: "Payment gateway platform serving 10,000+ merchants. 15-year-old Rails monolith processing transactions across multiple banking integrations."
    achievements:
      - "<strong>Integrated 5+ Latin American banks</strong> via SOAP/XML/REST APIs, expanding payment coverage to new markets."
      - "<strong>Led legacy modernization efforts:</strong> refactored critical payment flows using design patterns (Strategy, Factory), improving testability and reducing bug regression."
      - "<strong>Fixed OWASP Top 10 vulnerabilities</strong> identified in security audits, hardening the payment processing pipeline."
      - "<strong>Optimized slow database queries:</strong> rewrote N+1 queries and added proper indexing, measurably improving API response times."
      - "<strong>Mentored 3 junior developers:</strong> conducted code reviews, pair programming sessions, established team coding standards."
      - "<strong>Owned complex integrations end-to-end:</strong> from technical design through implementation, testing, and production deployment."

  - title: "Software Engineer"
    company: "Noveo (Client: French Enterprise)"
    dates: "June 2018 — January 2021"
    stack: "Ruby/Rails, React, TypeScript, MongoDB, MySQL, Redis, Elasticsearch, Docker, GitLab CI"
    product: "Enterprise customer feedback platform — real-time survey collection and analytics for retail chains."
    achievements:
      - "<strong>Achieved 100x query performance improvement</strong> by migrating analytics from MongoDB aggregations to Elasticsearch, reducing dashboard load times from minutes to seconds."
      - "<strong>Led major codebase refactor:</strong> extracted fat controllers/models into service objects following SOLID principles, improved test coverage with RSpec. Success led CEO to fund a second module rewrite."
      - "<strong>Implemented enterprise SSO (SAML 2.0)</strong> enabling corporate clients to authenticate via their identity providers (Okta, Azure AD)."
      - "<strong>Mentored 3 interns</strong> through code reviews and pair programming, 2 converted to full-time hires."

  - title: "Junior Software Engineer"
    company: "Magtuner SA (Lausanne, Switzerland)"
    dates: "March 2016 — May 2018"
    stack: "Ruby/Rails, Ember.js, Elixir, WebSockets, MySQL, Redis"
    product: "Real-time educational engagement platform with live audience participation features."
    achievements:
      - "<strong>Rebuilt product frontend and backend</strong> as part of major redesign, contributing to significant user growth post-launch."
      - "<strong>Scaled system for high-traffic events</strong> including Children's Olympics, handling concurrent WebSocket connections under load."
      - "<strong>Optimized SQL queries</strong> and upgraded legacy dependencies, improving application performance and maintainability."
---
