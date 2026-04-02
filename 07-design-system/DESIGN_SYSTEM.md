# Design System Documentation

## 🎨 Brand Colors

### Primary Colors
- **Primary Blue**: `#0066cc` - Used for CTAs, links, active states
- **Primary Dark**: `#004a99` - Used for hover states
- **Primary Light**: `#cce5ff` - Used for backgrounds, disabled states

### Neutral Colors
- **Charcoal**: `#1a1a1a` - Text
- **Dark Gray**: `#333333` - Secondary text
- **Gray**: `#666666` - Tertiary text
- **Light Gray**: `#f0f0f0` - Subtle backgrounds
- **Lighter Gray**: `#f9f9f9` - Card backgrounds
- **White**: `#ffffff` - Primary background

### Semantic Colors
- **Success**: `#10b981` - Positive actions, confirmations
- **Warning**: `#ffc107` - Cautions, important notices
- **Error**: `#dc3545` - Errors, destructive actions
- **Info**: `#17a2b8` - Information, helpful hints

### Gradients
- **Primary Gradient**: `linear-gradient(135deg, #0066cc 0%, #004a99 100%)` - Hero sections
- **Success Gradient**: `linear-gradient(135deg, #10b981 0%, #059669 100%)` - Positive states

---

## 📝 Typography

### Font Family
- **Primary**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Monospace**: 'Monaco', 'Courier New', monospace

### Font Sizes
- **Display**: 48px (h1, hero text)
- **Heading 1**: 32px (h2, section headers)
- **Heading 2**: 24px (h3, subsections)
- **Body Large**: 16px (main content)
- **Body**: 14px (secondary content)
- **Body Small**: 12px (captions, metadata)
- **Label**: 13px (form labels)

### Font Weights
- **Bold**: 700 (headings, emphasis)
- **Semi-bold**: 600 (subheadings, strong text)
- **Regular**: 400 (body text)
- **Light**: 300 (disabled text)

### Line Heights
- **Tight**: 1.2 (headings)
- **Normal**: 1.6 (body text)
- **Loose**: 1.8 (readable content)

---

## 🎯 Spacing System

All spacing uses an 8px base unit (8px scale):

- **2xs**: 4px
- **xs**: 8px
- **sm**: 12px
- **md**: 16px
- **lg**: 20px
- **xl**: 24px
- **2xl**: 32px
- **3xl**: 40px
- **4xl**: 48px
- **5xl**: 60px

---

## 🔲 Component Styles

### Buttons

#### Primary Button
- Background: Primary Blue (#0066cc)
- Padding: 12px 24px
- Border Radius: 6px
- Font Weight: 600
- Hover: Primary Dark (#004a99), translateY(-2px)
- Active: No transform
- Box Shadow: 0 4px 12px rgba(0, 102, 204, 0.3)

#### Secondary Button
- Background: Light Gray (#f0f0f0)
- Text: Dark Gray (#333)
- Padding: 12px 24px
- Border: 1px solid #ddd
- Hover: Background #e0e0e0

#### Button States
- **Hover**: Transform Y-2px, enhanced shadow
- **Active**: No transform, darker background
- **Disabled**: Opacity 50%, cursor not-allowed
- **Loading**: Spinner animation

### Cards

- **Background**: #f9f9f9 or white
- **Padding**: 20-30px
- **Border Radius**: 12px
- **Border**: 1-2px solid #e0e0e0
- **Box Shadow**: 0 2px 8px rgba(0, 0, 0, 0.1)
- **Hover Shadow**: 0 12px 32px rgba(0, 102, 204, 0.2)
- **Transition**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Input Fields

- **Padding**: 12px
- **Border**: 2px solid #ddd
- **Border Radius**: 6px
- **Font Size**: 14px
- **Focus**: Border #0066cc, Box shadow 0 0 0 3px rgba(0, 102, 204, 0.1)
- **Error State**: Border #dc3545

### Badges

- **Padding**: 6px 12px
- **Border Radius**: 16px (pill shape)
- **Font Size**: 12px
- **Font Weight**: 600
- **Variants**: Primary, Success, Warning, Error

---

## 📐 Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

---

## 💫 Animations & Transitions

### Easing Functions
- **Smooth**: cubic-bezier(0.4, 0, 0.2, 1)
- **Fast**: cubic-bezier(0.4, 0, 0.6, 1)
- **Slow**: cubic-bezier(0.4, 0, 0, 1)

### Animation Durations
- **Quick**: 150ms (UI micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Smooth**: 500ms (large movements)
- **Slow**: 800ms (smooth scrolling)

### Common Animations
- **Fade In**: opacity 0 → 1
- **Slide Down**: transform translateY(-10px) → 0
- **Hover Lift**: transform translateY(-8px)
- **Scale**: transform scale(1) → 1.05

---

## 🌗 Shadow System

- **None**: 0
- **Small**: 0 2px 8px rgba(0, 0, 0, 0.1)
- **Medium**: 0 8px 16px rgba(0, 0, 0, 0.1)
- **Large**: 0 12px 32px rgba(0, 0, 0, 0.15)
- **Extra Large**: 0 20px 60px rgba(0, 0, 0, 0.3)

---

## 📏 Border Radius

- **Sharp**: 0px
- **Small**: 4px
- **Medium**: 6px
- **Large**: 8px
- **Extra Large**: 12px
- **Round**: 16px (pills)
- **Full**: 50% (circles)

---

## ♿ Accessibility

- **Color Contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus States**: All interactive elements have visible focus indicators
- **Font Size**: Minimum 14px for body text
- **Touch Targets**: Minimum 44px × 44px for interactive elements
- **Motion**: Respects `prefers-reduced-motion` preference

---

## 🎓 Usage Examples

### Color Tokens in CSS
```css
:root {
  --color-primary: #0066cc;
  --color-primary-dark: #004a99;
  --color-success: #10b981;
  --color-error: #dc3545;
}
```

### Component Pattern
```html
<button class="btn btn--primary">Click Me</button>
<div class="card">Card content here</div>
<input type="text" class="input" />
```

### Spacing Usage
```css
margin: var(--space-md);      /* 16px */
padding: var(--space-lg);     /* 20px */
gap: var(--space-sm);         /* 12px */
```

---

## 🔄 Component States

Every component should support:
- **Default** - Normal state
- **Hover** - User interaction preparation
- **Focus** - Keyboard navigation
- **Active** - During interaction
- **Disabled** - Unavailable state
- **Loading** - Processing state
- **Error** - Validation failed
- **Success** - Positive confirmation

---

## 📊 Consistency Principles

1. **Reduce Cognitive Load**: Consistent patterns are easier to understand
2. **Scalability**: System grows with product
3. **Maintainability**: Single source of truth
4. **Accessibility**: Baked in, not bolted on
5. **Performance**: Optimized CSS and tokens

---

**Last Updated**: 2024 | Design System v1.0
