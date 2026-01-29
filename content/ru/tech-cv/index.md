---
title: "Техническое резюме"
layout: cv
type: tech-cv
locale: ru

name: "Евгений Жданов"
headline: "Engineering Team Lead | Senior Software Engineer"
email: "evdev34@gmail.com"
photo: "/cv/profile.jpg"
location: "Москва, Удалённо (GMT +3)"

summary_short: "Engineering Team Lead с 10-летним опытом в IT. Руководил командами, создающими платёжные системы и HR-платформы."

about:
  - "<strong>Engineering Team Lead с 10-летним опытом в IT</strong> (8 лет разработчик, 2 года тимлид). Создавал и запускал платёжные системы для 10,000+ пользователей и B2B HR-платформы для корпоративных клиентов. Нанял и обучил 6 инженеров, спроектировал микросервисную архитектуру, выпустил 100+ релизов."
  - "<strong>Инженерная философия:</strong> Верю в надёжные процессы, а не в ситуативное управление — хорошо выстроенные пайплайны от создания тикета через CI/CD до продакшн-релиза важнее героизма. Прагматичный, hands-on подход; скептически отношусь к теории, оторванной от реального кода. Ищу команды, которые ценят работающий софт выше церемоний."
  - "Основной стек: Ruby/Rails, Go, React, PostgreSQL, Kubernetes."

links:
  - name: "Личный блог"
    url: "https://zhisme.com"
  - name: "Telegram-канал"
    url: "https://t.me/zhisme_dev"
  - name: "LinkedIn"
    url: "https://www.linkedin.com/in/zhisme/"
  - name: "GitHub"
    url: "https://github.com/zhisme"

leadership_skills:
  - "Построение команды"
  - "Технический найм"
  - "Менторство"
  - "Code Review"
  - "Планирование спринтов"
  - "Проектирование систем"

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
  - "Русский"
  - "Английский"

education:
  - degree: "Бакалавр"
    school: "Севастопольский государственный университет"
    dates: "Сентябрь 2014 — Май 2018"

jobs:
  - title: "Engineering Team Lead"
    company: "RocketWork"
    dates: "Ноябрь 2023 — настоящее время"
    stack: "Ruby/Rails, Go, React, PostgreSQL, Kubernetes, ArgoCD, GitHub Actions, Grafana, Kibana, Sentry"
    product: "B2B HR-платформа для корпоративных клиентов: управление жизненным циклом сотрудников (приём, увольнение, переводы), учёт отпусков, структура отделов, генерация документов с электронной подписью."
    achievements:
      - "<strong>Собрал и возглавил кросс-функциональную команду из 5 человек</strong> (4 разработчика + 1 QA) с нуля, выстроил инженерную культуру и процессы."
      - "<strong>Спроектировал микросервисную инфраструктуру</strong> из 5 сервисов с GitOps-деплоем (ArgoCD + Kubernetes), обеспечив еженедельные релизы."
      - "<strong>Выстроил полный цикл найма:</strong> отсмотрел 50+ кандидатов, провёл технические интервью, нанял 3 инженеров."
      - "<strong>Внедрил инженерные практики:</strong> Git Flow, планирование спринтов, стандарты code review с <24ч turnaround."
      - "<strong>Построил систему мониторинга:</strong> Grafana-дашборды для инфраструктуры (память, соотношение 2xx/4xx/5xx, метрики Yabeda Rails) и бизнес-KPI (завершённые процессы, подписанные документы, доставка email/SMS). Kibana для логов, Sentry для ошибок."
      - "<strong>Спроектировал расширяемый workflow-движок:</strong> рефакторинг монолитной обработки процессов в конфигурируемый конструктор этапов/полей с JSON-интеграцией для фронтенда."

  - title: "Senior Software Engineer"
    company: "Emerchantpay"
    dates: "Январь 2021 — Ноябрь 2023"
    stack: "Ruby/Rails, MySQL, React, Elasticsearch, Jenkins, Docker, AWS"
    product: "Платёжный шлюз для 10,000+ мерчантов. 15-летний Rails-монолит, обрабатывающий транзакции через множество банковских интеграций."
    achievements:
      - "<strong>Интегрировал 5+ латиноамериканских банков</strong> через SOAP/XML/REST API, расширив платёжное покрытие на новые рынки."
      - "<strong>Руководил модернизацией легаси:</strong> рефакторинг критических платёжных флоу с использованием паттернов (Strategy, Factory), улучшение тестируемости."
      - "<strong>Устранил уязвимости OWASP Top 10</strong> по результатам аудитов безопасности."
      - "<strong>Оптимизировал медленные запросы:</strong> переписал N+1 запросы, добавил индексы, улучшил время ответа API."
      - "<strong>Менторил 3 junior-разработчиков:</strong> code review, парное программирование, стандарты кода."

  - title: "Software Engineer"
    company: "Noveo (клиент: французская компания)"
    dates: "Июнь 2018 — Январь 2021"
    stack: "Ruby/Rails, React, TypeScript, MongoDB, MySQL, Redis, Elasticsearch, Docker, GitLab CI"
    product: "Корпоративная платформа обратной связи — сбор и аналитика опросов в реальном времени для розничных сетей."
    achievements:
      - "<strong>Ускорил запросы в 100 раз</strong> миграцией аналитики с MongoDB-агрегаций на Elasticsearch, сократив загрузку дашбордов с минут до секунд."
      - "<strong>Провёл крупный рефакторинг:</strong> выделил fat controllers/models в сервисные объекты по SOLID, улучшил покрытие RSpec. Успех привёл к финансированию второго модуля."
      - "<strong>Внедрил корпоративный SSO (SAML 2.0)</strong> для аутентификации через Okta, Azure AD."
      - "<strong>Менторил 3 стажёров</strong> через code review и парное программирование, 2 стали штатными сотрудниками."

  - title: "Junior Software Engineer"
    company: "Magtuner SA (Лозанна, Швейцария)"
    dates: "Март 2016 — Май 2018"
    stack: "Ruby/Rails, Ember.js, Elixir, WebSockets, MySQL, Redis"
    product: "Платформа интерактивного обучения с функциями живого участия аудитории."
    achievements:
      - "<strong>Переписал фронтенд и бэкенд</strong> в рамках редизайна, что привело к значительному росту пользователей."
      - "<strong>Масштабировал систему для высоконагруженных событий</strong>, включая Детские Олимпийские игры, обрабатывая параллельные WebSocket-соединения."
      - "<strong>Оптимизировал SQL-запросы</strong> и обновил устаревшие зависимости."
---
