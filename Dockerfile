# Stage 1: Build the Hugo site
FROM ghcr.io/gohugoio/hugo:v0.145.0 AS builder

# Set working directory
WORKDIR /src

# Copy the entire Hugo project
COPY . .

# Build the static site
RUN hugo --minify

# Stage 2: Serve with nginx
FROM nginx:1.27-alpine

# Install envsubst for environment variable substitution
RUN apk add --no-cache gettext

# Set default port (can be overridden at runtime)
ENV NGINX_PORT=80

# Copy the built static files from the builder stage
COPY --from=builder /src/public /usr/share/nginx/html

# Copy custom nginx configuration as template
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Copy and set permissions for entrypoint script
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose ports (80 for production, 1313 for local testing)
EXPOSE 80 1313

# Health check (uses NGINX_PORT environment variable)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:${NGINX_PORT}/ || exit 1

# Use custom entrypoint
ENTRYPOINT ["/docker-entrypoint.sh"]
