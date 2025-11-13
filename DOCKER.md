# Docker Setup for Hugo Blog

This Dockerfile builds the static Hugo site. The resulting image contains the built files in `/src/public`, which are served by nginx at the Kubernetes cluster level.

## Building the Image

```bash
docker build -t zhisme-blog:latest .
```

## Kubernetes Deployment

### Strategy 1: Init Container Pattern (Recommended)

Use the Hugo builder as an init container that copies files to a shared volume:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zhisme-blog
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
      # Init container builds and copies files
      initContainers:
      - name: hugo-builder
        image: zhisme-blog:latest
        command: ['sh', '-c', 'cp -r /src/public/* /public/']
        volumeMounts:
        - name: hugo-public
          mountPath: /public

      # Main container serves with nginx
      containers:
      - name: nginx
        image: nginx:1.27-alpine
        ports:
        - containerPort: 80
        volumeMounts:
        - name: hugo-public
          mountPath: /usr/share/nginx/html
          readOnly: true
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

      volumes:
      - name: hugo-public
        emptyDir: {}
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

### Strategy 2: Multi-Stage Build

Create a combined image with Hugo builder + nginx:

```dockerfile
# Multi-stage build
FROM zhisme-blog:latest AS builder

FROM nginx:1.27-alpine
COPY --from=builder /src/public /usr/share/nginx/html
```

Then deploy this combined image to Kubernetes.

### Strategy 3: Extract Files in CI/CD

Extract files during build and deploy via ConfigMap or PersistentVolume:

```bash
# In your CI/CD pipeline
docker create --name temp-hugo zhisme-blog:latest
docker cp temp-hugo:/src/public ./public
docker rm temp-hugo

# Then upload to K8s
kubectl create configmap blog-content --from-file=./public
```

## Image Registry

Push to your container registry before deploying:

```bash
docker tag zhisme-blog:latest your-registry.com/zhisme-blog:latest
docker push your-registry.com/zhisme-blog:latest
```

## Dockerfile Details

- Uses official Hugo image: `ghcr.io/gohugoio/hugo:v0.145.0`
- Builds static site with `hugo --minify`
- Output location: `/src/public`
- No web server included (nginx configured at cluster level)
