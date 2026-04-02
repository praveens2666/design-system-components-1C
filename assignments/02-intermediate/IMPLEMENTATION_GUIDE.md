# IMPLEMENTATION GUIDE
## Design System Extensions - Option A: 3 New Components

### Overview

This guide explains how to use and customize the three new components added to the design system:

1. **Notification/Toast Component** - For displaying temporary messages
2. **Modal/Dialog Component** - For important user interactions
3. **Tooltip Component** - For contextual information

All components are built using design system tokens for consistency and easy customization.

---

## 1. NOTIFICATION/TOAST COMPONENT

### Purpose
Display temporary notification messages to users. Perfect for alerts, confirmations, and status updates.

### HTML Structure

```html
<div class="notification notification--success notification--top-right">
  <div class="notification__icon">✓</div>
  <div class="notification__content">
    <div class="notification__title">Success!</div>
    <div class="notification__message">Your changes have been saved.</div>
  </div>
  <button class="notification__close">&times;</button>
</div>
```

### CSS Classes

**Type Variants:**
- `.notification--success` - Green, for successful actions
- `.notification--error` - Red, for errors or failures
- `.notification--warning` - Yellow/orange, for warnings
- `.notification--info` - Blue, for informational messages

**Position Variants:**
- `.notification--top-right` - Top right corner (default)
- `.notification--top-left` - Top left corner
- `.notification--bottom-right` - Bottom right corner
- `.notification--bottom-left` - Bottom left corner

### Design Tokens Used

```css
--color-success, --color-error, --color-warning, --color-info
--color-success-bg, --color-error-bg, --color-warning-bg, --color-info-bg
--color-white, --color-charcoal
--space-md, --space-lg, --space-xs
--shadow-lg
--transition-normal
--font-size-body, --font-size-body-sm
--radius-md
```

### Features

✓ **Four semantic variants** for different message types  
✓ **Four position options** for different layouts  
✓ **Smooth animations** on entrance and exit  
✓ **Dismissible** with close button  
✓ **Easy to script** for auto-hide functionality  
✓ **Accessible** with clear icon and text  

### Usage Example

```html
<!-- Success notification -->
<div class="notification notification--success notification--bottom-right">
  <div class="notification__icon">✓</div>
  <div class="notification__content">
    <div class="notification__title">Saved</div>
    <div class="notification__message">Changes saved automatically</div>
  </div>
  <button class="notification__close">&times;</button>
</div>

<!-- Error notification -->
<div class="notification notification--error notification--top-right">
  <div class="notification__icon">✕</div>
  <div class="notification__content">
    <div class="notification__title">Error</div>
    <div class="notification__message">Connection failed. Please try again.</div>
  </div>
  <button class="notification__close">&times;</button>
</div>
```

### JavaScript Auto-Hide Example

```javascript
function showNotification(type, title, message, position = 'top-right', autoHide = 5000) {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type} notification--${position}`;
  notification.innerHTML = `
    <div class="notification__icon">${getIconForType(type)}</div>
    <div class="notification__content">
      <div class="notification__title">${title}</div>
      <div class="notification__message">${message}</div>
    </div>
    <button class="notification__close" onclick="closeNotification(this)">&times;</button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-hide
  if (autoHide) {
    setTimeout(() => {
      notification.classList.add('closing');
      setTimeout(() => notification.remove(), 300);
    }, autoHide);
  }
}

function closeNotification(button) {
  const notification = button.parentElement;
  notification.classList.add('closing');
  setTimeout(() => notification.remove(), 300);
}

function getIconForType(type) {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };
  return icons[type] || '•';
}
```

### Customizing with Tokens

To change notification colors globally, update tokens in `design-tokens.css`:

```css
:root {
  --color-success-bg: #d4edda;        /* Light green background */
  --color-success-text: #155724;      /* Dark green text */
  --color-success: #10b981;           /* Success color */
}
```

---

## 2. MODAL/DIALOG COMPONENT

### Purpose
Display modal dialogs for important user interactions, confirmations, or complex forms.

### HTML Structure

```html
<div class="modal-overlay">
  <div class="modal modal--md">
    <div class="modal__header">
      <h2 class="modal__title">Confirm Action</h2>
      <button class="modal__close">&times;</button>
    </div>
    
    <div class="modal__body">
      <p>Are you sure you want to proceed with this action?</p>
    </div>
    
    <div class="modal__footer">
      <button class="btn btn--secondary">Cancel</button>
      <button class="btn btn--primary">Confirm</button>
    </div>
  </div>
</div>
```

### CSS Classes

**Size Variants:**
- `.modal--sm` - Small modal (400px) - for simple messages
- `.modal` or `.modal--md` - Medium modal (600px) - default size
- `.modal--lg` - Large modal (800px) - for complex content

**Component Parts:**
- `.modal-overlay` - Backdrop and container
- `.modal` - The dialog box itself
- `.modal__header` - Top section with title and close button
- `.modal__body` - Main content area (scrollable)
- `.modal__footer` - Bottom section with buttons
- `.modal__close` - Close button

### Design Tokens Used

```css
--color-white, --color-charcoal, --color-gray
--color-border, --color-light-gray, --color-lighter-gray
--space-lg, --space-md
--shadow-xl
--transition-normal
--font-size-h2, --font-size-body
--radius-lg
--z-index: 400
```

### Features

✓ **Three size variants** for different content types  
✓ **Centered overlay** with semi-transparent backdrop  
✓ **Smooth animations** on appear/disappear  
✓ **Scrollable body** for long content  
✓ **Header, body, and footer** sections  
✓ **Close button** in header  
✓ **Keyboard support** (Escape to close)  
✓ **Click-outside to close** (optional)  

### Usage Example

```html
<!-- Confirmation Dialog -->
<div class="modal-overlay active">
  <div class="modal modal--sm">
    <div class="modal__header">
      <h2 class="modal__title">Delete Item</h2>
      <button class="modal__close">&times;</button>
    </div>
    
    <div class="modal__body">
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
    
    <div class="modal__footer">
      <button class="btn btn--secondary">Cancel</button>
      <button class="btn btn--danger">Delete</button>
    </div>
  </div>
</div>
```

### JavaScript Control

```javascript
// Show modal
function showModal() {
  document.getElementById('myModal').classList.add('active');
}

// Close modal
function closeModal() {
  document.getElementById('myModal').classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Close on backdrop click
document.getElementById('myModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});
```

### Responsive Behavior

On small screens (<768px):
- Modal width becomes 90vw (90% of viewport)
- Modal max-height becomes 80vh
- Footer buttons stack vertically
- Modal becomes full-width

---

## 3. TOOLTIP COMPONENT

### Purpose
Display additional information when users hover over or focus on elements.

### HTML Structure

```html
<div class="tooltip-container">
  <button class="btn">Help</button>
  <div class="tooltip tooltip--top tooltip--light">
    Click for more information
  </div>
</div>
```

### CSS Classes

**Position Variants:**
- `.tooltip--top` - Above the trigger element
- `.tooltip--bottom` - Below the trigger element
- `.tooltip--left` - Left of the trigger element
- `.tooltip--right` - Right of the trigger element

**Color Variants:**
- `.tooltip` - Default (dark background)
- `.tooltip--light` - Light background with border
- `.tooltip--success` - Green background
- `.tooltip--error` - Red background
- `.tooltip--warning` - Yellow/orange background
- `.tooltip--info` - Blue background

**Container:**
- `.tooltip-container` - Wrapper for relative positioning

### Design Tokens Used

```css
--color-charcoal, --color-white
--color-success, --color-error, --color-warning, --color-info
--color-border
--space-sm, --space-md
--shadow-md
--transition-quick
--font-size-body-sm
--radius-md
```

### Features

✓ **Four position options** (top/bottom/left/right)  
✓ **Five color variants** for different contexts  
✓ **CSS pseudo-elements** for arrow design  
✓ **Smooth animations** on hover  
✓ **CSS-only** (no JavaScript required)  
✓ **Accessible** via title attributes  
✓ **Responsive** on mobile  

### Usage Examples

```html
<!-- Basic tooltip (dark, top position) -->
<div class="tooltip-container">
  <button class="btn">Hover me</button>
  <div class="tooltip tooltip--top">Help text here</div>
</div>

<!-- Light tooltip (bottom position) -->
<div class="tooltip-container">
  <span>Status</span>
  <div class="tooltip tooltip--bottom tooltip--light">Tooltip text</div>
</div>

<!-- Success tooltip (right position) -->
<div class="tooltip-container">
  <span>✓ Complete</span>
  <div class="tooltip tooltip--right tooltip--success">Task completed</div>
</div>

<!-- Error tooltip (left position) -->
<div class="tooltip-container">
  <span>Error</span>
  <div class="tooltip tooltip--left tooltip--error">Something went wrong</div>
</div>
```

### Making Tooltips Interactive

```javascript
// Show tooltip on click instead of hover
const tooltipTrigger = document.querySelector('.tooltip-container');
const tooltip = tooltipTrigger.querySelector('.tooltip');

tooltipTrigger.addEventListener('click', function(e) {
  tooltip.classList.toggle('active');
  e.stopPropagation();
});

// Hide when clicking elsewhere
document.addEventListener('click', function() {
  tooltip.classList.remove('active');
});
```

### Responsive Behavior

On small screens (<768px):
- Tooltip max-width reduced to 150px
- Tooltip max-height limited to prevent overflow
- Position automatically adjusted if tooltip goes off-screen
- Consider showing as popover instead of tooltip

---

## CUSTOMIZATION GUIDE

### 1. Change Color Scheme

Update tokens in `design-tokens.css`:

```css
:root {
  --color-success: #10b981;              /* Change success color */
  --color-error: #dc3545;                /* Change error color */
  --color-warning: #ffc107;              /* Change warning color */
  --tooltip-bg: #1a1a1a;                 /* Change tooltip background */
}
```

### 2. Adjust Spacing

```css
:root {
  --space-md: 16px;                      /* Change medium spacing */
  --notification-width: 320px;           /* Make notifications wider */
  --modal-width-md: 600px;               /* Change modal size */
  --tooltip-offset: 8px;                 /* Change tooltip gap */
}
```

### 3. Change Animations

```css
:root {
  --transition-normal: 300ms;            /* Faster/slower animations */
  --notification-animation-duration: 300ms;
  --modal-animation-duration: 300ms;
}
```

### 4. Update Shadows

```css
:root {
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

---

## BROWSER COMPATIBILITY

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Variables | 49+ | 31+ | 9.1+ | 15+ |
| Flexbox | 29+ | 20+ | 6.1+ | 11+ |
| Transitions | 26+ | 16+ | 9+ | 10+ |
| Transform | 26+ | 16+ | 9+ | 10+ |
| Z-index | All | All | All | All |

All components work in all modern browsers (Chrome 88+, Firefox 85+, Safari 14+, Edge 88+).

---

## ACCESSIBILITY CONSIDERATIONS

### Notifications
- Use icons AND text for clarity
- Don't rely only on color to convey meaning
- Include `role="alert"` for screen readers

### Modals
- Use semantic HTML (`<dialog>` element recommended)
- Include proper heading hierarchy
- Trap focus within modal
- Announce modal to screen readers

### Tooltips
- Use `title` attribute as fallback
- Provide keyboard access (focus)
- Don't hide critical information in tooltips
- Use sufficient color contrast

---

## TROUBLESHOOTING

### Notification not showing
- Ensure `.modal-overlay.active` class is added
- Check z-index is not behind other elements
- Verify position class is applied

### Modal not centered
- Check `.modal-overlay` has `display: flex`
- Ensure viewport height is sufficient
- Check if contained within positioned parent

### Tooltip positioning off
- Verify `.tooltip-container` is `position: relative`
- Check parent element overflow
- Ensure tooltip doesn't extend off viewport

### Colors not changing
- Clear browser cache
- Check token is applied to correct property
- Verify CSS specificity
- Check for conflicting styles

---

## NEXT STEPS

1. **Test thoroughly** in all target browsers
2. **Add JavaScript** for enhanced interactions
3. **Integrate into projects** using the components
4. **Gather feedback** from team members
5. **Iterate and improve** based on usage patterns

---

## SUPPORT & QUESTIONS

For questions about component usage or customization:
- Check the demo page (index.html)
- Review CSS classes and structure
- Refer to design token documentation
- Test with browser developer tools
