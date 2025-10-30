#!/bin/bash
# GitPolish Protocol™ Sync Validation Script
# Validates files before synchronization to ensure integrity and security

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
MAX_FILE_SIZE_MB=100
ALLOWED_EXTENSIONS=("md" "pdf" "docx" "html" "css" "js" "json" "txt" "png" "jpg" "jpeg" "svg")

echo "🔍 GitPolish Protocol™ Sync Validation"
echo "========================================"
echo ""

# Function to check file size
check_file_size() {
    local file="$1"
    local size_mb=$(du -m "$file" | cut -f1)
    
    if [ "$size_mb" -gt "$MAX_FILE_SIZE_MB" ]; then
        echo -e "${RED}❌ File too large: $file ($size_mb MB > $MAX_FILE_SIZE_MB MB)${NC}"
        return 1
    fi
    return 0
}

# Function to check file extension
check_file_extension() {
    local file="$1"
    local extension="${file##*.}"
    
    for allowed in "${ALLOWED_EXTENSIONS[@]}"; do
        if [ "$extension" == "$allowed" ]; then
            return 0
        fi
    done
    
    echo -e "${YELLOW}⚠️  Unknown extension: $file (.${extension})${NC}"
    return 1
}

# Function to check for secrets
check_for_secrets() {
    local file="$1"
    
    # Check for common secret patterns
    if grep -qiE "(api[_-]?key|password|secret|token|private[_-]?key)" "$file" 2>/dev/null; then
        echo -e "${RED}❌ Potential secret found in: $file${NC}"
        return 1
    fi
    return 0
}

# Function to validate directory structure
validate_directory() {
    local dir="$1"
    
    if [ ! -d "$dir" ]; then
        echo -e "${RED}❌ Directory not found: $dir${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✓${NC} Directory exists: $dir"
    return 0
}

# Main validation
echo "1. Validating directory structure..."
validate_directory "course-materials" || exit 1
validate_directory "resources" || echo -e "${YELLOW}⚠️  Optional directory 'resources' not found${NC}"

echo ""
echo "2. Validating course materials..."
file_count=0
error_count=0

while IFS= read -r -d '' file; do
    ((file_count++))
    
    # Check file size
    if ! check_file_size "$file"; then
        ((error_count++))
        continue
    fi
    
    # Check file extension
    if ! check_file_extension "$file"; then
        # Warning only, not an error
        :
    fi
    
    # Check for secrets (only in text files)
    if [[ "$file" =~ \.(md|txt|json|js|html|css)$ ]]; then
        if ! check_for_secrets "$file"; then
            ((error_count++))
            continue
        fi
    fi
    
done < <(find course-materials -type f -print0 2>/dev/null)

echo ""
echo "3. Validation Summary"
echo "   Files checked: $file_count"
echo "   Errors found: $error_count"

if [ "$error_count" -eq 0 ]; then
    echo -e "${GREEN}✅ All validations passed!${NC}"
    exit 0
else
    echo -e "${RED}❌ Validation failed with $error_count error(s)${NC}"
    exit 1
fi
