# 🔴 Advanced Assignment: Build Your Own Design System

**Duration:** 8-12 hours  
**Difficulty:** Advanced  
**Goal:** Create a complete, production-ready design system from scratch

---

## Assignment Overview

In this capstone assignment, you'll design and build a **complete design system** for a fictional company or use case. This includes:

- Defining brand strategy and visual identity
- Creating a comprehensive token library
- Building a component library (6+ reusable components)
- Writing professional documentation
- Implementing a living design system with multiple themes
- Cross-framework implementation (optional challenge)

This prepares you for real-world design system work.

---

## Choose Your Challenge

### Challenge A: Brand New Design System

**Scenario:**
- Create a design system for a fictional startup
- You choose the industry (fintech, healthcare, e-learning, etc.)
- Build it from strategic brand decisions to working code

**Deliverables:**
1. Brand Strategy Document (colors, typography, voice)
2. Design System Specification
3. CSS Token Library
4. Component Library (8+ components)
5. Documentation Site
6. Living Style Guide

### Challenge B: Multi-Framework Implementation

**Scenario:**
- Create design tokens that work across multiple frameworks
- Implement the same design system in HTML/CSS, React, and Vue
- Show that tokens create consistency regardless of framework

**Deliverables:**
1. Design System Specification
2. CSS Token Library
3. HTML Implementation (6+ components)
4. React Implementation (same 6+ components)
5. Vue Implementation (same 6+ components)
6. Comparative Documentation

### Challenge C: Enterprise Design System

**Scenario:**
- Design a system for a large organization with multiple brands
- Handle complex theming, multiple locales, accessibility
- Create governance guidelines and token naming conventions

**Deliverables:**
1. Design System Architecture Document
2. Governance & Guidelines
3. Multi-brand Token System
4. Comprehensive Component Library
5. Design System Portal (documentation site)
6. Scalability Plan

---

## Detailed Requirements for Challenge A

### Phase 1: Brand Strategy (2-3 hours)

**Document your brand identity:**

```markdown
# [Company Name] Brand Identity

## Company Profile
- What does this company do?
- Who is the target audience?
- What's the brand personality?

## Visual Identity
- Color palette (primary, secondary, semantic)
- Typography (fonts, usage patterns)
- Imagery style
- Icon style
- Motion personality

## Design Principles
- List 4-5 core design principles
- Example: "Clarity", "Trust", "Efficiency"
```

### Phase 2: Design System Architecture (2-3 hours)

**Create comprehensive tokens:**

```css
:root {
  /* Color Palette */
  --palette-primary-50: #...
  --palette-primary-100: #...
  /* ... full scale 50-900 */
  
  /* Semantic Colors */
  --color-primary: var(--palette-primary-500);
  --color-success: var(--palette-success-500);
  --color-danger: var(--palette-danger-500);
  
  /* Typography */
  --font-family-primary: ...
  --font-family-mono: ...
  
  /* Scale tokens */
  --scale-1: ...
  --scale-2: ...
  /* ... complete scale */
  
  /* Component Tokens */
  --button-padding: ...
  --input-height: ...
  --card-radius: ...
  
  /* State tokens */
  --state-hover: ...
  --state-active: ...
  --state-disabled: ...
}
```

At least **100+ tokens** organized by category

### Phase 3: Component Library (2-3 hours)

**Build 8-10 core components:**

Required components:
1. **Button** (primary, secondary, danger, disabled, loading states)
2. **Input** (text, password, disabled, error states)
3. **Card** (basic, with header, with footer, elevated)
4. **Navigation** (horizontal nav, breadcrumb)
5. **Modal** (dialog, confirmation, alert)
6. **Alert** (success, warning, error, info)
7. **Badge** (colored variants)
8. **Dropdown Menu**

Optional advanced components:
- Data tables
- Form controls (select, checkbox, radio)
- Tabs
- Tooltips
- Pagination
- Code blocks

**Each component must:**
- Use only design tokens
- Support all required states
- Be fully accessible
- Have consistent naming
- Be responsive

### Phase 4: Documentation (1-2 hours)

**Create comprehensive documentation:**

```markdown
# [Company Name] Design System

## Table of Contents
1. Getting Started
2. Design Tokens
3. Components
4. Patterns
5. Accessibility
6. Contributing

## Getting Started
- What is this?
- How to use tokens
- How to use components
- Naming conventions

## Design Tokens
- Color tokens (with color swatches)
- Typography tokens
- Spacing tokens
- Shadow tokens
- Animation tokens

## Components
For each component:
- Visual examples
- Usage code
- Props/variations
- Accessibility notes
- Common mistakes

## Patterns
- Form patterns
- Page layouts
- Navigation patterns
- Loading states
- Error states
```

### Phase 5: Living Style Guide (1-2 hours)

Create an HTML page showcasing:
- All tokens with visual representations
- All components with variations
- Code examples for each
- Copy-to-clipboard functionality (bonus)
- Search or filter (bonus)

---

## Detailed Requirements for Challenge B

### Multi-Framework Implementation

**HTML/CSS Version (same as Challenge A)**

**React Version:**
```jsx
// Reusable component using tokens
const Button = ({ variant = 'primary', size = 'md', ...props }) => (
  <button className={`btn btn--${variant} btn--${size}`} {...props} />
);
```

**Vue Version:**
```vue
<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: { type: String, default: 'primary' },
    size: { type: String, default: 'md' }
  }
}
</script>
```

**Show that:**
- Same tokens = same visual design
- Different frameworks = same user experience
- Tokens abstract the styling layer

---

## Detailed Requirements for Challenge C

### Enterprise Design System

**Complex requirements:**
- Multi-brand support (each brand has its own token overrides)
- Localization considerations
- Accessibility compliance matrix
- Version management strategy
- Migration guide from legacy systems
- Contributing guidelines
- Token deprecation policy
- Governance structure

---

## Project Structure

```
my-design-system/
├── README.md
├── BRAND_STRATEGY.md          # Your brand definition
├── DESIGN_SYSTEM_SPEC.md      # Architecture & tokens
│
├── tokens/
│   ├── design-tokens.css      # All CSS variables
│   ├── design-tokens.json     # For tools/exports
│   └── color-palette.md       # Color documentation
│
├── components/
│   ├── button.html            # Component examples
│   ├── input.html
│   ├── card.html
│   ├── navigation.html
│   ├── modal.html
│   ├── alert.html
│   ├── badge.html
│   └── dropdown.html
│
├── styles/
│   ├── components.css         # All component styles
│   └── utilities.css          # Utility classes
│
├── docs/
│   ├── GETTING_STARTED.md
│   ├── COMPONENTS.md
│   ├── TOKENS.md
│   ├── PATTERNS.md
│   ├── ACCESSIBILITY.md
│   └── CONTRIBUTING.md
│
├── style-guide.html           # Living style guide
│
└── (Optional for Challenge B)
    ├── react/
    │   └── components/        # React components
    └── vue/
        └── components/        # Vue components
```

---

## Acceptance Criteria

✅ **Comprehensive token system** (100+ tokens minimum)  
✅ **8+ production-ready components**  
✅ **Professional documentation** (like real design systems)  
✅ **All components use tokens** (no hardcoded values)  
✅ **Accessibility** (WCAG AA compliant)  
✅ **Responsive** where appropriate  
✅ **Living style guide** for reference  
✅ **Code quality** and consistency  

---

## Grading Rubric

| Criterion | Weight | Excellent | Good | Fair | Needs Work |
|-----------|--------|-----------|------|------|-----------|
| **Vision & Strategy** | 15% | Clear, cohesive | Good direction | Adequate | Unclear |
| **Token System** | 20% | Comprehensive | Complete | Mostly complete | Incomplete |
| **Components** | 25% | Polished, varied | Well-done | Functional | Basic |
| **Documentation** | 20% | Professional | Good | Adequate | Poor |
| **Code Quality** | 10% | Excellent | Good | Acceptable | Messy |
| **Creativity** | 10% | Innovative | Good execution | Adequate | Minimal |

---

## Inspiration

Study real design systems:
- [Material Design](https://material.io/) (Google)
- [Fluent Design](https://fluent2.microsoft.design/) (Microsoft)
- [Carbon Design System](https://carbondesignsystem.com/) (IBM)
- [Polaris](https://polaris.shopify.com/) (Shopify)
- [Chakra UI](https://chakra-ui.com/) (Open source)

---

## Challenge Ideas for Extra Credit

**Go beyond the assignment:**

🚀 **Interactive token browser** - Search and filter tokens  
🚀 **Token export tool** - Generate code in different formats  
🚀 **Figma integration** - Export tokens for design tools  
🚀 **Dark mode system** - Full theme switching  
🚀 **Accessibility matrix** - Automated WCAG compliance checking  
🚀 **Component generator** - CLI to scaffold new components  
🚀 **Version management** - Track token versions over time  

---

## Submission

Create a folder: `submission-advanced/`

Include:
- All source files and directories
- Complete documentation
- README with overview and setup instructions
- (Optional) Deployed style guide URL

**Due Date:** [Your instructor will specify]

---

## Timeline Suggestion

- **Hours 0-2:** Brand strategy and research
- **Hours 2-4:** Design system architecture and tokens
- **Hours 4-8:** Component implementation
- **Hours 8-10:** Documentation
- **Hours 10-12:** Polish, testing, and refinement

---

## Questions?

- Study real design systems (links above)
- Review how Version 7 organizes tokens
- Check professional documentation patterns
- Reference CSS Variables best practices
- Ask for feedback early and often!

This is a substantial project - good luck! 🚀
