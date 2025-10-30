#!/bin/bash
# Quick commit script following GitPolish Protocol™ standards

if [ -z "$1" ]; then
    echo "Usage: ./quick-commit.sh <commit-message>"
    exit 1
fi

# Check for uncommitted changes
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit"
    exit 0
fi

# Show what will be committed
echo "📋 Changes to be committed:"
git status --short

# Add all changes
git add .

# Commit with message
git commit -m "$1"

echo "✅ Changes committed successfully!"
echo ""
echo "💡 Next steps:"
echo "  - Review your commit: git show"
echo "  - Push to remote: git push"
