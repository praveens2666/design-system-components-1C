# 🟡 Intermediate Assignment: Extend & Enhance the Design System

**Duration:** 4-6 hours  
**Difficulty:** Intermediate  
**Goal:** Extend the existing design system with new components, themes, and features

---

## Assignment Overview

In this assignment, you'll build on the provided design system by:
- Adding new components
- Creating a light/dark theme switcher
- Expanding the token library
- Enhancing documentation

This teaches you how design systems grow and scale across projects.

---

## Requirements

### Option A: Add New Components Library

Choose **3 of these components** and implement them using design tokens:

1. **Navigation Bar Component**
   - Responsive hamburger menu
   - Active link states
   - Dropdown submenus
   - Use design system tokens for colors, spacing, transitions

2. **Modal/Dialog Component**
   - Overlay background
   - Modal window styling
   - Close button
   - Uses design system shadows, spacing, colors

3. **Tooltip Component**
   - Hover-activated
   - Multiple positions (top, bottom, left, right)
   - Arrow pointing to trigger
   - Uses design tokens for colors and animations

4. **Notification/Toast Component**
   - Success, warning, error, info variants
   - Dismiss functionality
   - Auto-hide after timeout
   - Uses semantic color tokens
   - Smooth animations

5. **Accordion/Collapsible Component**
   - Expand/collapse functionality
   - Multiple sections
   - Smooth height transitions
   - All styling from tokens

6. **Pagination Component**
   - Previous/Next buttons
   - Page number buttons
   - Active page highlighting
   - Disabled state styling

### Option B: Implement Light/Dark Theme

1. **Create theme-switching CSS:**
   - Add `--color-light` and `--color-dark` mode tokens
   - Create a second set of color tokens for dark mode
   - Use CSS media queries: `prefers-color-scheme: dark`

2. **Implement in the portfolio:**
   - Add theme toggle button to the design system portfolio
   - Switch between light and dark themes
   - Ensure all colors work well in both themes
   - Test contrast/accessibility in both modes

3. **Document the theme system:**
   - How to add new themes
   - Guidelines for accessible color contrasts
   - CSS structure for supporting multiple themes

### Option C: Accessibility Enhancement

1. **Audit current design system:**
   - Check color contrast ratios (WCAG AA minimum 4.5:1)
   - Test with high contrast mode
   - Test keyboard navigation
   - Test with screen reader (if possible)

2. **Improve tokens for accessibility:**
   - Add `--focus-indicator` tokens for keyboard navigation
   - Add high-contrast variant tokens
   - Add `--motion-reduce` tokens for animations
   - Document accessibility considerations

3. **Update components:**
   - Add proper ARIA labels
   - Improve focus states
   - Ensure keyboard-only navigation works

---

## Your Deliverables

### For All Options:

1. **Extended `design-tokens.css`**
   - Add new tokens needed for your enhancements
   - Document all new tokens with comments
   - Keep existing tokens working

2. **Component/Feature HTML File**
   - Create `my-components.html` (or theme-demo.html, or accessibility-test.html)
   - Showcase all new components or features
   - Use the extended design system

3. **Updated Documentation (`ENHANCED_DESIGN_SYSTEM.md`)**
   - Add section for new components/features
   - Show usage examples
   - Document new tokens
   - Include screenshots

4. **Implementation Guide**
   - How to use your new components
   - Token requirements
   - Browser compatibility
   - Known limitations

---

## What to Include

### For Component Option:

```
components/
├── design-tokens.css          # Extended tokens
├── my-components.html         # Component showcase
├── component.css              # Component-specific styles
└── IMPLEMENTATION_GUIDE.md    # How to use
```

### For Theme Option:

```
theme-system/
├── design-tokens.css          # With dark mode variants
├── theme-demo.html            # Light/dark switcher demo
├── theme-switcher.js          # JS to handle switching
└── THEME_DOCUMENTATION.md     # How to add themes
```

### For Accessibility Option:

```
accessibility/
├── design-tokens.css          # Accessibility tokens
├── accessibility-test.html    # Test all features
└── ACCESSIBILITY_AUDIT.md     # Findings & improvements
```

---

## Example: Adding a Button Variant

Here's how to extend the system properly:

**In `design-tokens.css`:**
```css
:root {
  /* Add new token */
  --btn-border-width: 2px;
  --btn-outline-gap: 2px;
}
```

**Create new component:**
```css
.btn--outline {
  background: transparent;
  border: var(--btn-border-width) solid var(--color-primary);
  color: var(--color-primary);
}

.btn--outline:hover {
  background: var(--color-primary-light);
}
```

**Document it:**
```markdown
### Outline Button
Used for secondary actions or when you don't want to draw too much attention.

Token Requirements:
- `--btn-border-width`
- `--color-primary`
- `--color-primary-light`
```

---

## Acceptance Criteria

✅ **Extends system without breaking existing components**  
✅ **Uses only design tokens (no hardcoded colors)**  
✅ **Includes working demo page**  
✅ **Complete documentation with examples**  
✅ **Follows existing design system conventions**  
✅ **Code is clean and well-commented**  

---

## Grading Rubric

| Criterion | Excellent (5) | Good (4) | Fair (3) | Needs Work (1-2) |
|-----------|---------------|---------|---------|-----------------|
| **Scope** | Ambitious & complete | Good scope | Adequate | Too simple |
| **Token Usage** | Perfectly consistent | Mostly consistent | Some inconsistency | Hardcoded values |
| **Documentation** | Excellent | Good | Basic | Unclear |
| **Working Demo** | Fully functional | Works well | Works with issues | Doesn't work |
| **Code Quality** | Professional | Clean | Acceptable | Hard to read |
| **Creativity** | Innovative approach | Good execution | Functional | Minimal effort |

---

## Tips

🔍 **Before you code:** Map out what tokens you'll need  
🔍 **Keep it DRY:** Don't repeat token values  
🔍 **Test thoroughly:** Works in light AND dark modes  
🔍 **Document as you go:** Future you will thank current you  
🔍 **Check constraints:** Follow the existing naming conventions  

---

## Challenge Ideas

Want to go further?

- **Multi-theme implementation:** Create 3+ themes (light, dark, high-contrast)
- **Component library generator:** Create a tool that generates component code from tokens
- **Cross-framework:** Implement components in both HTML and React
- **Animation library:** Create reusable animation tokens and components
- **Figma/Design tool integration:** Export tokens for use in design tools

---

## Submission

Create a folder: `submission-intermediate/`

Include:
- All source files (CSS, HTML, JS)
- Documentation files
- README explaining what you built

**Due Date:** [Your instructor will specify]

---

## Questions?

- Study how Version 7 uses tokens: `../07-design-system/`
- Check MDN for CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- Look at professional design systems: Material Design, Bootstrap, Tailwind

Happy building! 🎨
