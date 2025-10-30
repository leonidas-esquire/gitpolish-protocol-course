#!/bin/bash
# GitPolish Protocol™ Repository Validation Script

echo "🔍 GitPolish Protocol™ Repository Validation"
echo "=============================================="
echo ""

ERRORS=0
WARNINGS=0

# Check required files
echo "📄 Checking required files..."
REQUIRED_FILES=("README.md" "LICENSE" "CONTRIBUTING.md" "CODE_OF_CONDUCT.md" ".gitignore")

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file exists"
    else
        echo "  ❌ $file is missing"
        ((ERRORS++))
    fi
done

# Check documentation directory
if [ -d "docs" ]; then
    echo "  ✅ docs/ directory exists"
else
    echo "  ⚠️  docs/ directory missing"
    ((WARNINGS++))
fi

# Check GitHub templates
echo ""
echo "📋 Checking GitHub templates..."
if [ -d ".github/ISSUE_TEMPLATE" ]; then
    echo "  ✅ Issue templates exist"
else
    echo "  ⚠️  Issue templates missing"
    ((WARNINGS++))
fi

if [ -f ".github/PULL_REQUEST_TEMPLATE.md" ]; then
    echo "  ✅ PR template exists"
else
    echo "  ⚠️  PR template missing"
    ((WARNINGS++))
fi

# Check for CI/CD
echo ""
echo "🔄 Checking CI/CD configuration..."
if [ -d ".github/workflows" ]; then
    WORKFLOW_COUNT=$(find .github/workflows -name "*.yml" -o -name "*.yaml" | wc -l)
    echo "  ✅ Found $WORKFLOW_COUNT workflow(s)"
else
    echo "  ⚠️  No CI/CD workflows found"
    ((WARNINGS++))
fi

# Summary
echo ""
echo "=============================================="
echo "📊 Validation Summary"
echo "=============================================="
echo "  Errors: $ERRORS"
echo "  Warnings: $WARNINGS"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "✅ Repository is fully compliant with GitPolish Protocol™!"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo "⚠️  Repository is compliant but has $WARNINGS warning(s)"
    exit 0
else
    echo "❌ Repository has $ERRORS error(s) that must be fixed"
    exit 1
fi
