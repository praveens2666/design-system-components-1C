# 🟢 Beginner Assignment: Design System Analysis & Documentation

**Duration:** 2-3 hours  
**Difficulty:** Beginner  
**Goal:** Understand design systems by analyzing, documenting, and comparing existing tokens

---

## Assignment Overview

In this assignment, you'll analyze the provided design system (Version 7) and document your findings. This will help you understand:
- What design tokens are
- How they create consistency
- The relationship between different token types
- Why design systems matter

---

## What You'll Do

### Part 1: Token Exploration (30 minutes)

1. **Open the design system files:**
   - Navigate to `../07-design-system/design-tokens.css`
   - Open `../07-design-system/DESIGN_SYSTEM.md`

2. **Document the following tokens:**

| Category | Example Token | Value | Used For |
|----------|---------------|-------|----------|
| Colors | `--color-primary` | | |
| Typography | `--font-size-h1` | | |
| Spacing | `--space-md` | | |
| Shadows | `--shadow-lg` | | |
| Animations | `--transition-normal` | | |

3. **Complete the table** by filling in real values from the CSS file

### Part 2: Design System Audit (45 minutes)

Open `../07-design-system/index.html` in your browser and observe:

**Color Consistency:**
- How many different shades of blue are used? (Hint: check primary colors)
- Are all buttons the same color family?
- Is there a semantic color (like red for errors)?
- Document your findings

**Typography Consistency:**
- Count how many different font sizes are used on the page
- Are headings consistent?
- Is body text readable?
- Document observations

**Spacing Consistency:**
- Are card paddings consistent?
- Is the spacing between sections uniform?
- Document patterns you see

**Component Consistency:**
- How many button variations exist?
- Are cards styled consistently?
- Do all inputs look similar?

### Part 3: Version Comparison (45 minutes)

Compare Version 7 (Design System) with earlier versions:

1. **Open these in your browser:**
   - Version 3: `../03-css/index.html` (CSS version)
   - Version 6: `../06-react/index.html` (React version)
   - Version 7: `../07-design-system/index.html` (Design System)

2. **Create a comparison table:**

| Aspect | Version 3 (CSS) | Version 6 (React) | Version 7 (Design System) |
|--------|-----------------|-------------------|--------------------------|
| Easiest to change color? | | | |
| Most consistent styling? | | | |
| Best documentation? | | | |
| Most reusable components? | | | |
| Easiest to add new page? | | | |

### Part 4: Analysis Report (45 minutes)

Write a 1-2 page analysis answering these questions:

1. **What is a design token?**
   - Define it in your own words
   - Give 3 examples from the design system

2. **Why use CSS variables instead of hardcoding colors?**
   - List at least 3 benefits

3. **How does the Design System improve consistency?**
   - Compare to Version 3 and Version 6
   - What would happen if you changed the primary color token?

4. **Identify a design system in the wild:**
   - Find a website you use regularly
   - Do you think they use a design system? Why or why not?
   - List 3 features that suggest they have one

5. **If you were to add a new feature to Version 7, what would you add?**
   - Why that feature?
   - How would you implement it using tokens?

---

## Deliverables

Create a folder called `submission` with:

1. **`ANALYSIS.md`** - Your written analysis (1-2 pages)
2. **`TOKEN_INVENTORY.xlsx` or `TOKEN_INVENTORY.md`** - Your token documentation table
3. **`OBSERVATIONS.md`** - Your audit findings and comparison table

---

## Acceptance Criteria

Your assignment will be evaluated on:

✅ **Completeness:** All parts attempted and documented  
✅ **Accuracy:** Token values and observations match the code  
✅ **Understanding:** Analysis shows real comprehension, not just copying  
✅ **Organization:** Clear, well-structured documentation  
✅ **Insights:** Thoughtful observations beyond just facts  

---

## Grading Rubric

| Criterion | Excellent (4) | Good (3) | Fair (2) | Needs Work (1) |
|-----------|---------------|---------|---------|----------------|
| Token Documentation | Complete & accurate | Mostly complete | Some gaps | Incomplete |
| Analysis Report | Deep insights | Good understanding | Basic understanding | Minimal effort |
| Audit Findings | Thorough observations | Most areas covered | Some observations | Incomplete |
| Comparison | Clear patterns identified | Some comparisons | Basic comparison | Unclear |
| Organization | Very clear & well-structured | Clear | Somewhat organized | Disorganized |

---

## Tips for Success

💡 **Read the design system documentation first** - It explains everything!  
💡 **Use browser DevTools** - Right-click → Inspect to see exact colors and sizes  
💡 **Look for patterns** - Design systems are all about consistency  
💡 **Take screenshots** - Visual proof of your observations  
💡 **Ask questions** - If something doesn't make sense, investigate!

---

## Example Insights

Here are the types of insights we're looking for:

- "I noticed that all interactive elements use the primary blue color, which creates a consistent visual language"
- "The spacing scale (8px base unit) means all margins and paddings are multiples of 8, creating visual rhythm"
- "Instead of hardcoding `#0066cc` everywhere, using `--color-primary` means changing the brand color is one change, not 50"

---

## Submission

1. Create your `submission` folder in this directory
2. Include all three deliverables
3. Submit the complete folder

**Due Date:** [Your instructor will specify]

---

## Questions?

- Review `../07-design-system/DESIGN_SYSTEM.md` for reference
- Check `../index.html` to see all versions side by side
- Look at the CSS source in `../07-design-system/design-tokens.css`

Good luck! 🚀
