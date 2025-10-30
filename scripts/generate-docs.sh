#!/bin/bash
# Generate documentation from code

echo "📚 Generating documentation..."

# Check if we're in a Git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a Git repository"
    exit 1
fi

# Create docs directory if it doesn't exist
mkdir -p docs

# Generate API documentation (example for Node.js)
if [ -f "package.json" ]; then
    echo "  📦 Node.js project detected"
    if command -v jsdoc &> /dev/null; then
        echo "  📝 Generating JSDoc documentation..."
        jsdoc -c jsdoc.json -r -d docs/api || echo "  ⚠️  JSDoc generation skipped"
    fi
fi

# Generate README table of contents
if [ -f "README.md" ]; then
    echo "  📄 README.md found"
    # Could add TOC generation here
fi

echo "✅ Documentation generation complete!"
