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

# Copy the built static files from the builder stage
COPY --from=builder /src/public /usr/share/nginx/html

# Copy custom nginx configuration (optional, using default for now)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
