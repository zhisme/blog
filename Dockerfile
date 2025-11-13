# Build the Hugo static site
FROM ghcr.io/gohugoio/hugo:v0.145.0

# Set working directory
WORKDIR /src

# Copy the entire Hugo project
COPY . .

# Build the static site
RUN hugo --minify

# The built files are in /src/public
# This directory will be used by Kubernetes to mount/copy to nginx
