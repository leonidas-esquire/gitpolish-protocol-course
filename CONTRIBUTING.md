# Contributing to GitPolish Protocol™ Certification Course

Thank you for your interest in contributing to the GitPolish Protocol™ Certification Course! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

### Reporting Issues

If you find a bug, error, or have a suggestion for improvement, please create an issue on GitHub. When creating an issue, please include a clear and descriptive title, a detailed description of the problem or suggestion, steps to reproduce the issue (if applicable), expected behavior versus actual behavior, screenshots or examples (if applicable), and your environment details (OS, browser, Git version, etc.).

### Suggesting Enhancements

We welcome suggestions for new features, improvements to existing content, or additional resources. When suggesting enhancements, please explain why this enhancement would be useful to course participants, provide examples of how it would work, and consider whether this fits within the scope of the GitPolish Protocol™ framework.

### Improving Documentation

Documentation improvements are always welcome, including fixing typos and grammatical errors, clarifying confusing sections, adding missing information, improving code examples, and translating content to other languages.

### Adding Course Content

If you would like to contribute new course materials, such as additional scenarios, lab exercises, or examples, please ensure your content aligns with the GitPolish Protocol™ framework and follows the existing structure and format. Provide clear learning objectives and outcomes, include practical, hands-on examples, and maintain professional quality and accuracy.

## Development Workflow

### Getting Started

1. **Fork the Repository**
   
   Click the "Fork" button in the top right of the GitHub repository page to create your own copy.

2. **Clone Your Fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/gitpolish-protocol-course.git
   cd gitpolish-protocol-course
   ```

3. **Add Upstream Remote**
   
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/gitpolish-protocol-course.git
   ```

4. **Create a Branch**
   
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. **Keep Your Fork Updated**
   
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Make Your Changes**
   
   Edit files, add content, or fix issues following our style guidelines.

3. **Test Your Changes**
   
   If you are modifying the website, run it locally to ensure everything works:
   
   ```bash
   cd website
   pnpm install
   pnpm dev
   ```

4. **Commit Your Changes**
   
   ```bash
   git add .
   git commit -m "feat: add new lab exercise for Module 2"
   ```

5. **Push to Your Fork**
   
   ```bash
   git push origin feature/your-feature-name
   ```

## Style Guidelines

### Documentation Style

When writing or editing documentation, use clear, concise language appropriate for the target audience. Write in complete sentences and paragraphs rather than excessive bullet points. Use proper Markdown formatting with headers, lists, code blocks, and links. Include code examples where appropriate with proper syntax highlighting. Maintain consistent terminology throughout the documentation. Proofread for spelling and grammar errors before submitting.

### Code Style

For website code (React/TypeScript), follow the existing code style and conventions. Use TypeScript for type safety and clear interfaces. Follow React best practices and hooks patterns. Use Tailwind CSS for styling with consistent utility classes. Write clear, self-documenting code with appropriate comments. Ensure accessibility standards are met (WCAG 2.1 AA).

### Course Material Style

When creating course materials, maintain consistency with existing module structure and format. Use professional, educational language appropriate for adult learners. Include clear learning objectives at the beginning of each section. Provide practical, real-world examples and scenarios. Include hands-on exercises and labs where appropriate. Ensure all technical information is accurate and up-to-date.

## Commit Message Guidelines

We follow the Conventional Commits specification for clear and consistent commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat:** A new feature or course content
- **fix:** A bug fix or correction
- **docs:** Documentation changes only
- **style:** Code style changes (formatting, missing semicolons, etc.)
- **refactor:** Code refactoring without changing functionality
- **test:** Adding or updating tests
- **chore:** Maintenance tasks, dependency updates, etc.

### Examples

```
feat(module-2): add new lab exercise on pull request workflows

Add comprehensive lab exercise teaching students how to create
and manage pull requests effectively, including code review
best practices and conflict resolution.

Closes #42
```

```
fix(website): correct navigation link to certification page

The certification page link in the navigation menu was pointing
to the wrong route. Updated to use the correct path.
```

```
docs(readme): improve getting started instructions

Clarified the installation steps and added troubleshooting
section for common setup issues.
```

## Pull Request Process

### Before Submitting

Before submitting a pull request, ensure you have tested your changes thoroughly. Update documentation if you have changed functionality. Add or update tests if applicable. Follow the style guidelines outlined in this document. Rebase your branch on the latest upstream main. Ensure your commits follow the commit message guidelines.

### Submitting a Pull Request

1. **Push Your Changes**
   
   Ensure all your commits are pushed to your fork.

2. **Create Pull Request**
   
   Go to the original repository on GitHub and click "New Pull Request". Select your fork and branch as the source.

3. **Fill Out the Template**
   
   Provide a clear title following the commit message format. Describe what changes you made and why. Reference any related issues using keywords like "Closes #123" or "Fixes #456". Include screenshots or examples if relevant. List any breaking changes or special considerations.

4. **Wait for Review**
   
   Maintainers will review your pull request and may request changes. Be responsive to feedback and make requested updates. Once approved, your pull request will be merged.

### Pull Request Template

```markdown
## Description

Brief description of the changes made.

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Course content addition/improvement

## Related Issues

Closes #(issue number)

## Changes Made

- List of specific changes
- Another change
- And another

## Testing

Describe how you tested your changes.

## Screenshots (if applicable)

Add screenshots to help explain your changes.

## Checklist

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code/content
- [ ] I have commented my code where necessary
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have tested my changes thoroughly
```

## Questions?

If you have questions about contributing, please open an issue with the "question" label or start a discussion in GitHub Discussions.

Thank you for contributing to the GitPolish Protocol™ Certification Course!
