# Design Systems - Assignment Guide

## How to Choose Your Assignment Level

### 🟢 Choose **Beginner** if you:
- Are new to design systems
- Want to learn by analyzing
- Have limited time (2-3 hours)
- Are just starting to understand tokens
- Like structured, guided tasks

**What you'll learn:** Fundamentals of tokens, design consistency, system thinking

---

### 🟡 Choose **Intermediate** if you:
- Understand design tokens basics
- Want to build something useful
- Have 4-6 hours available
- Enjoy hands-on coding with guidance
- Want to extend existing work

**What you'll learn:** How to extend systems, theming, accessibility, component development

**Pick one of 3 options:**
- **A: Add Components** - Build new reusable UI parts
- **B: Light/Dark Theme** - Create theme switching system
- **C: Accessibility** - Audit and improve design system accessibility

---

### 🔴 Choose **Advanced** if you:
- Are confident with design systems
- Want to create something from scratch
- Have 8-12 hours available
- Enjoy strategy and architecture
- Want a portfolio piece

**What you'll learn:** Full design system architecture, brand strategy, professional documentation, scalability patterns

**Pick one of 3 challenges:**
- **A: New Design System** - Create system for fictional company
- **B: Multi-Framework** - Same tokens across HTML/React/Vue
- **C: Enterprise** - Complex system with governance and multi-brand

---

## Getting Started

### For All Levels:

1. **Review the reference design system**
   - Open `../07-design-system/index.html`
   - Read `../07-design-system/DESIGN_SYSTEM.md`
   - Examine `../07-design-system/design-tokens.css`

2. **Understand the progression**
   - Open `../index.html` to see all versions
   - Notice how each version improves

3. **Read your assignment**
   - Go to your chosen level folder
   - Read the ASSIGNMENT.md file completely

4. **Set up your workspace**
   - Create a `my-work` folder
   - Keep files organized as specified

5. **Start coding!**
   - Read the tips and examples
   - Build incrementally
   - Test frequently

---

## Success Tips

### All Levels

✅ **Use design tokens consistently**
- Never hardcode colors (use `var(--color-primary)`)
- Never hardcode spacing (use `var(--space-md)`)
- Keep values in one place

✅ **Keep it simple first**
- Build the basic version first
- Add complexity gradually
- Test after each step

✅ **Document as you go**
- Write comments in your code
- Keep a notes file
- Don't wait until the end

✅ **Test your work**
- Use browser DevTools
- Test on mobile sizes
- Test dark mode (if applicable)
- Test keyboard navigation

✅ **Get feedback early**
- Show your work-in-progress
- Ask questions when stuck
- Iterate based on feedback

---

## Common Mistakes to Avoid

❌ **Hardcoding values instead of using tokens**
```css
/* WRONG */
.button { background-color: #0066cc; }

/* RIGHT */
.button { background-color: var(--color-primary); }
```

❌ **Creating inconsistent token names**
```css
/* INCONSISTENT */
--blue: #0066cc;
--primary-color: #10b981;
--c-danger: #dc3545;

/* CONSISTENT */
--color-primary: #0066cc;
--color-success: #10b981;
--color-danger: #dc3545;
```

❌ **Not documenting your work**
```
# DON'T: Leave others guessing
# DO: Explain what each token is for

/* Color for primary actions like submit buttons */
--color-primary: #0066cc;

/* Used as background for disabled states */
--color-disabled: #f0f0f0;
```

❌ **Forgetting about accessibility**
```css
/* WRONG - Not enough contrast */
color: #0066cc;
background-color: #cce5ff;

/* RIGHT - WCAG AA compliant */
color: #004a99;
background-color: #cce5ff;
```

---

## File Organization

Keep your submission organized:

```
my-work/
├── README.md              # Project overview
├── ANALYSIS.md            # (Beginner: your analysis)
├── design-tokens.css      # Your tokens
├── components.html        # Component showcase
├── (other files...)
└── submission/            # Your final deliverables
    ├── token-choices.md
    └── analysis-report.md
```

---

## Helpful Resources

### Learn Design Systems
- [Design Systems Handbook](https://www.designsystems.com/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

### Inspiration
- [Material Design](https://material.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Chakra UI](https://chakra-ui.com/)

### Tools
- Browser DevTools (F12)
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [WebAIM for Accessibility](https://webaim.org/)

---

## Grading Components

All assignments are evaluated on:

1. **Completeness** - Did you finish everything?
2. **Accuracy** - Are tokens/data correct?
3. **Quality** - Is the work professional?
4. **Understanding** - Do you show real learning?
5. **Documentation** - Is it clear and complete?

Each level has its own rubric - check your assignment file!

---

## Submission Checklist

Before you submit, verify:

- [ ] All files are organized in correct structure
- [ ] README explains what you built
- [ ] Code is clean and commented
- [ ] All tokens are consistently named
- [ ] No hardcoded colors or sizes
- [ ] Documentation is complete
- [ ] Your work reflects real learning

---

## Frequently Asked Questions

**Q: Can I use existing design systems as base?**  
A: For Beginner & Intermediate, yes! Use Version 7 as reference. For Advanced, create your own.

**Q: Do I need to make it perfect?**  
A: No! Show your thinking process. Perfect is boring—learning is important.

**Q: Can I ask questions while working?**  
A: Absolutely! Ask early, not the night before it's due.

**Q: What if I get stuck?**  
A: Check the resources, look at Version 7 code, ask for help. Stuck for 15+ minutes? Ask.

**Q: How long should my documentation be?**  
A: Long enough to be clear. Beginner: 1-2 pages. Intermediate: 3-5 pages. Advanced: 10+ pages.

**Q: Can I work in a group?**  
A: Check with your instructor. Individual assignments are recommended to show YOUR learning.

---

## Next Steps

1. **Choose your level** - Beginner, Intermediate, or Advanced
2. **Read the full assignment** - Don't skim, read thoroughly
3. **Plan your approach** - Outline the steps
4. **Start building** - Take it step by step
5. **Document your work** - Write as you go
6. **Test everything** - Verify it works
7. **Submit with confidence** - Your learning is the goal

---

## Questions?

✉️ Ask your instructor  
📚 Review the reference design system  
🔍 Study the materials in the main project  

Good luck! You've got this! 🚀
