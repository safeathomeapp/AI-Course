# Icon System Implementation

## Purpose

This file explains how the shared course icon system works at implementation level.

Use it when you need to:

- understand where the icon source of truth lives
- add the shared runtime injector to a learning page
- reference approved icons from module HTML
- keep icon usage portable across current and future learning projects

For teaching-meaning guidance, see [UX_CONTENT_MAPPING.md](./UX_CONTENT_MAPPING.md).

## Shared Source Of Truth

The canonical sprite source file lives at:

`learning/shared/icons/sprite.svg`

This location was chosen because:

- it belongs to the shared learner-facing implementation layer
- it is not tied to a single module
- it can be reused by current shared prototypes and future course shells
- it keeps icon governance separate from module-local markup

This file is the only source of truth for approved icon symbols.

## Runtime Injection Pattern

The shared shell injects the sprite inline at runtime using:

`learning/shared/js/shared_icon_sprite.js`

The loader fetches the shared sprite source, inserts it into the page as a hidden inline SVG, and makes the symbol IDs available to the document.

This keeps the architecture clean:

- the source file remains centralized
- modules do not own copied symbol blocks
- modules can use fragment-only references such as `#icon-lightbulb`

## Module Usage Standard

Module HTML should reference icons by fragment only:

```html
<span class="ui-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <use href="#icon-lightbulb"></use>
  </svg>
</span>
```

Modules must not:

- reference relative sprite file paths inside `<use>`
- paste ad hoc inline SVGs as a second icon system
- create module-local icon folders for standard UI icons

## Shared Loader Include

Include the shared loader before the module script:

```html
<script src="js/shared_icon_sprite.js" data-shared-icon-sprite></script>
<script src="t1m01_script.js"></script>
```

This allows the shared shell layer to own sprite injection while module markup stays fragment-only.

## Examples

### Button Icon

```html
<button type="button" class="section-action">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-bookmark"></use>
    </svg>
  </span>
  <span>Save notes</span>
</button>
```

### Callout Label Icon

```html
<p class="callout-label label-with-icon">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-alert-triangle"></use>
    </svg>
  </span>
  Warning
</p>
```

### Workflow Or Diagram Icon

```html
<div class="diagram-step ai">
  <span class="diagram-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-bot"></use>
    </svg>
  </span>
  <span class="diagram-label">Generation</span>
</div>
```

### Theme Toggle Icon

```html
<span class="ui-icon theme-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <use href="#icon-moon"></use>
  </svg>
</span>
```

## Theme Compatibility

Icons must remain theme-compatible:

- use `stroke="currentColor"`
- use `fill="none"` unless a reviewed exception is required
- inherit surrounding text color
- avoid hardcoded icon colors in component markup

## Change Control

New icons require review before they are added to `learning/shared/icons/sprite.svg`.

The shared sprite should remain a curated platform asset, not an open-ended dumping ground for one-off module requests.
