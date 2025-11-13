# Docker Setup for Hugo Blog

## Building the Image

```bash
# Build the image
docker build -t zhisme-blog:latest .

# Or with a specific version tag
docker build -t zhisme-blog:v1.0.0 .
```

## Running Locally

```bash
# Run the container
docker run -d -p 8080:80 --name zhisme-blog zhisme-blog:latest

# Access the blog at: http://localhost:8080
```

## Testing

```bash
# Check container logs
docker logs zhisme-blog

# Check container health
docker ps

# Stop the container
docker stop zhisme-blog

# Remove the container
docker rm zhisme-blog
```

## Kubernetes Deployment

### Create a deployment.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zhisme-blog
  labels:
    app: zhisme-blog
spec:
  replicas: 2
  selector:
    matchLabels:
      app: zhisme-blog
  template:
    metadata:
      labels:
        app: zhisme-blog
    spec:
      containers:
      - name: zhisme-blog
        image: zhisme-blog:latest
        ports:
        - containerPort: 80
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: zhisme-blog
spec:
  selector:
    app: zhisme-blog
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

### Deploy to Kubernetes:

```bash
# Apply the deployment
kubectl apply -f deployment.yaml

# Check the deployment
kubectl get deployments
kubectl get pods
kubectl get services

# Get the service URL
kubectl get service zhisme-blog
```

## Image Registry

Before deploying to Kubernetes, push the image to a registry:

```bash
# Tag for your registry
docker tag zhisme-blog:latest your-registry.com/zhisme-blog:latest

# Push to registry
docker push your-registry.com/zhisme-blog:latest

# Update deployment.yaml with the full image path
```

## Dockerfile Details

The Dockerfile uses a multi-stage build:
- **Stage 1**: Uses official Hugo image (ghcr.io/gohugoio/hugo:v0.145.0) to build the static site
- **Stage 2**: Uses nginx:1.27-alpine to serve the content
- Includes health checks for Kubernetes readiness/liveness probes
- Optimized for production with minified output

### Hugo Image Version

The Dockerfile uses the official Hugo Docker image from GitHub Container Registry. If you need a different version:

```dockerfile
# Use a different Hugo version
FROM ghcr.io/gohugoio/hugo:v0.152.0 AS builder

# Or use the latest version
FROM ghcr.io/gohugoio/hugo:latest AS builder
```

**Note**: The previous `klakegg/hugo` images are deprecated (last update: v0.112.0). Always use the official `ghcr.io/gohugoio/hugo` images for the latest Hugo versions.
