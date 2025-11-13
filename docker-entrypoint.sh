#!/bin/sh
set -e

# Set default port if not provided
export NGINX_PORT=${NGINX_PORT:-80}

# Substitute environment variables in nginx config
envsubst '${NGINX_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Remove the template file
rm /etc/nginx/conf.d/default.conf.template

# Start nginx
exec nginx -g 'daemon off;'
