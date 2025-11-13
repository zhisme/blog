# Docker Setup for Hugo Blog

This Dockerfile builds the static Hugo site. The resulting image contains the built files in `/src/public`, which can be extracted and served by nginx at the Kubernetes cluster level.

## Building the Image

```bash
# Build the image
docker build -t zhisme-blog:latest .

# Or with a specific version tag
docker build -t zhisme-blog:v1.0.0 .
```

## Testing the Build

### Option 1: Automated Test Script

```bash
# Make the script executable
chmod +x test-build.sh

# Run the test
./test-build.sh
```

This script will:
1. Build the Docker image
2. Extract files to `./test-output/public/`
3. Validate the build
4. Show file statistics

### Option 2: Manual Testing

#### Step 1: Build the image
```bash
docker build -t zhisme-blog:latest .
```

#### Step 2: Extract the built files
```bash
# Create a temporary container (doesn't run it)
docker create --name temp-hugo zhisme-blog:latest

# Copy the built files out
docker cp temp-hugo:/src/public ./test-output

# Clean up the temporary container
docker rm temp-hugo
```

#### Step 3: Inspect the files
```bash
# List the contents
ls -lah ./test-output/

# Check the structure
tree ./test-output/ -L 2

# View a file to verify it's correct
cat ./test-output/index.html
```

#### Step 4: Test locally with a web server
```bash
# Using Python's built-in server
cd test-output
python3 -m http.server 8000

# Visit: http://localhost:8000
```

Or with Docker using nginx:
```bash
# Quick test with nginx
docker run -d \
  -p 8080:80 \
  -v $(pwd)/test-output:/usr/share/nginx/html:ro \
  --name test-nginx \
  nginx:alpine

# Visit: http://localhost:8080

# Clean up when done
docker stop test-nginx && docker rm test-nginx
```

## What to Verify

When inspecting the extracted files, check for:

1. **index.html** - Homepage exists
2. **404.html** - Custom 404 page exists
3. **articles/** - All your blog posts are present
4. **css/** - Compiled stylesheets exist
5. **js/** - JavaScript files exist
6. **Minification** - Files should be minified (check file sizes)

### Example Validation Commands

```bash
# Count HTML files
find test-output -name "*.html" | wc -l

# Check total size
du -sh test-output/

# List all articles
ls -1 test-output/articles/

# Check if images are present
find test-output -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.svg" \)

# Verify CSS/JS are minified (should be small)
ls -lh test-output/assets/css/
ls -lh test-output/assets/js/
```

## Kubernetes Deployment

### Strategy 1: Init Container Pattern

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

### Strategy 2: Build Image, Then Copy to Nginx Image

Create a custom nginx image with the built files:

```dockerfile
# Multi-stage build
FROM zhisme-blog:latest AS builder

FROM nginx:1.27-alpine
COPY --from=builder /src/public /usr/share/nginx/html
```

Then deploy this combined image to Kubernetes.

### Strategy 3: Cluster-Level Nginx with ConfigMap

1. Build and extract files locally
2. Create ConfigMap with the files
3. Mount ConfigMap in nginx deployment

```bash
# Extract files
docker create --name temp-hugo zhisme-blog:latest
docker cp temp-hugo:/src/public ./public
docker rm temp-hugo

# Create ConfigMap (for small sites)
kubectl create configmap blog-content --from-file=./public

# Or use a PersistentVolume for larger sites
```

## Image Registry

Before deploying to Kubernetes, push the image to a registry:

```bash
# Tag for your registry
docker tag zhisme-blog:latest your-registry.com/zhisme-blog:latest

# Push to registry
docker push your-registry.com/zhisme-blog:latest

# Update deployment YAML with the full image path
```

## Dockerfile Details

The Dockerfile:
- Uses official Hugo image (ghcr.io/gohugoio/hugo:v0.145.0)
- Builds the static site with `hugo --minify`
- Output is located at `/src/public` inside the container
- Does NOT include a web server (nginx configured at cluster level)
- Small image size (~200MB with Hugo, or extract just the public/ folder)

### Hugo Image Version

To use a different Hugo version:

```dockerfile
# Use a different Hugo version
FROM ghcr.io/gohugoio/hugo:v0.152.0

# Or use the latest version
FROM ghcr.io/gohugoio/hugo:latest
```

**Note**: The previous `klakegg/hugo` images are deprecated (last update: v0.112.0). Always use the official `ghcr.io/gohugoio/hugo` images for the latest Hugo versions.

## CI/CD Integration

Example GitHub Actions workflow:

```yaml
- name: Build Hugo Docker image
  run: docker build -t zhisme-blog:${{ github.sha }} .

- name: Extract static files
  run: |
    docker create --name hugo-temp zhisme-blog:${{ github.sha }}
    docker cp hugo-temp:/src/public ./public
    docker rm hugo-temp

- name: Deploy to K8s
  run: |
    # Upload to your deployment method
    # or build final nginx image
```
