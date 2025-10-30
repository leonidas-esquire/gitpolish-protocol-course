#!/bin/bash

# GitPolish Protocol™ Certification Course - Environment Setup Script
# This script helps students set up their development environment for the course

set -e

echo "================================================"
echo "GitPolish Protocol™ Certification Course"
echo "Environment Setup Script"
echo "================================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to print success message
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

# Function to print error message
print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Function to print warning message
print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

echo "Checking prerequisites..."
echo ""

# Check Git
if command_exists git; then
    GIT_VERSION=$(git --version | awk '{print $3}')
    print_success "Git is installed (version $GIT_VERSION)"
else
    print_error "Git is not installed"
    echo "  Please install Git from https://git-scm.com/"
    exit 1
fi

# Check Git version (require 2.30+)
GIT_MAJOR=$(echo $GIT_VERSION | cut -d. -f1)
GIT_MINOR=$(echo $GIT_VERSION | cut -d. -f2)
if [ "$GIT_MAJOR" -lt 2 ] || ([ "$GIT_MAJOR" -eq 2 ] && [ "$GIT_MINOR" -lt 30 ]); then
    print_warning "Git version 2.30 or higher is recommended (you have $GIT_VERSION)"
fi

# Check GitHub CLI
if command_exists gh; then
    GH_VERSION=$(gh --version | head -n1 | awk '{print $3}')
    print_success "GitHub CLI is installed (version $GH_VERSION)"
else
    print_warning "GitHub CLI (gh) is not installed"
    echo "  GitHub CLI is recommended for enhanced GitHub integration"
    echo "  Install from https://cli.github.com/"
fi

# Check Node.js (for website)
if command_exists node; then
    NODE_VERSION=$(node --version | sed 's/v//')
    print_success "Node.js is installed (version $NODE_VERSION)"
    
    # Check Node version (require 18+)
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d. -f1)
    if [ "$NODE_MAJOR" -lt 18 ]; then
        print_warning "Node.js version 18 or higher is recommended for the website (you have $NODE_VERSION)"
    fi
else
    print_warning "Node.js is not installed"
    echo "  Node.js is required if you want to run the course website locally"
    echo "  Install from https://nodejs.org/"
fi

# Check pnpm (for website)
if command_exists pnpm; then
    PNPM_VERSION=$(pnpm --version)
    print_success "pnpm is installed (version $PNPM_VERSION)"
else
    print_warning "pnpm is not installed"
    if command_exists node; then
        echo "  You can install pnpm with: npm install -g pnpm"
    fi
fi

echo ""
echo "================================================"
echo "Git Configuration Check"
echo "================================================"
echo ""

# Check Git user configuration
if git config user.name >/dev/null 2>&1; then
    GIT_USER=$(git config user.name)
    print_success "Git user.name is set: $GIT_USER"
else
    print_error "Git user.name is not set"
    echo "  Set it with: git config --global user.name \"Your Name\""
fi

if git config user.email >/dev/null 2>&1; then
    GIT_EMAIL=$(git config user.email)
    print_success "Git user.email is set: $GIT_EMAIL"
else
    print_error "Git user.email is not set"
    echo "  Set it with: git config --global user.email \"your.email@example.com\""
fi

echo ""
echo "================================================"
echo "GitHub Authentication Check"
echo "================================================"
echo ""

# Check GitHub authentication
if command_exists gh; then
    if gh auth status >/dev/null 2>&1; then
        print_success "GitHub CLI is authenticated"
        gh auth status 2>&1 | grep "Logged in"
    else
        print_warning "GitHub CLI is not authenticated"
        echo "  Authenticate with: gh auth login"
    fi
else
    echo "GitHub CLI not installed - skipping authentication check"
fi

echo ""
echo "================================================"
echo "Optional Tools"
echo "================================================"
echo ""

# Check for optional tools
OPTIONAL_TOOLS=("code" "vim" "nano" "curl" "wget")
for tool in "${OPTIONAL_TOOLS[@]}"; do
    if command_exists "$tool"; then
        print_success "$tool is available"
    fi
done

echo ""
echo "================================================"
echo "Setup Complete!"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Review the course README.md"
echo "2. Start with Module 1 in course-materials/module-1/"
echo "3. Open the Student Workbook to track your progress"
echo ""

# Optional: Install website dependencies
if [ -d "website" ] && command_exists pnpm; then
    echo "Would you like to install website dependencies? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "Installing website dependencies..."
        cd website && pnpm install
        print_success "Website dependencies installed"
        echo "Run 'cd website && pnpm dev' to start the development server"
    fi
fi

echo ""
echo "Happy learning! 🚀"
echo ""
