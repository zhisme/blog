#!/bin/bash
set -e

echo "=== Testing Hugo Docker Build ==="
echo ""

# Step 1: Build the Docker image
echo "Step 1: Building Docker image..."
docker build -t zhisme-blog-builder:test .
echo "✓ Build successful!"
echo ""

# Step 2: Create a temporary container to extract files
echo "Step 2: Creating temporary container..."
CONTAINER_ID=$(docker create zhisme-blog-builder:test)
echo "Container ID: $CONTAINER_ID"
echo ""

# Step 3: Extract the built files
echo "Step 3: Extracting built files to ./test-output..."
rm -rf ./test-output
mkdir -p ./test-output
docker cp $CONTAINER_ID:/src/public ./test-output/
echo "✓ Files extracted to ./test-output/public/"
echo ""

# Step 4: Clean up the container
echo "Step 4: Cleaning up temporary container..."
docker rm $CONTAINER_ID
echo "✓ Container removed"
echo ""

# Step 5: Display file structure
echo "Step 5: Built file structure:"
echo "========================================"
tree -L 2 ./test-output/public/ 2>/dev/null || find ./test-output/public/ -maxdepth 2 -type f -o -type d
echo "========================================"
echo ""

# Step 6: Show file count and size
echo "Step 6: Statistics:"
FILE_COUNT=$(find ./test-output/public/ -type f | wc -l)
TOTAL_SIZE=$(du -sh ./test-output/public/ | cut -f1)
echo "Total files: $FILE_COUNT"
echo "Total size: $TOTAL_SIZE"
echo ""

# Step 7: Check for required files
echo "Step 7: Validating required files..."
REQUIRED_FILES=(
    "./test-output/public/index.html"
    "./test-output/public/404.html"
)

ALL_PRESENT=true
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✓ Found: $file"
    else
        echo "✗ Missing: $file"
        ALL_PRESENT=false
    fi
done
echo ""

# Step 8: Test with local web server (optional)
echo "Step 8: You can test the files locally with:"
echo "  cd test-output/public && python3 -m http.server 8000"
echo "  Then visit: http://localhost:8000"
echo ""

if [ "$ALL_PRESENT" = true ]; then
    echo "=== ✓ All tests passed! ==="
    exit 0
else
    echo "=== ✗ Some required files are missing ==="
    exit 1
fi
