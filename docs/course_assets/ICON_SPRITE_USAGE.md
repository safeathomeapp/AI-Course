# Shared Icon Sprite Usage

## Purpose

This guide defines the standard icon source for learner-facing course UI.

Use this file when you need to:

- place an icon in shared learning HTML
- choose the correct approved icon name
- reference the shared sprite from buttons, labels, navigation, or diagrams

Do not use this file to redefine course architecture or visual policy. For broader UX system guidance, see [UX_CONTENT_MAPPING.md](./UX_CONTENT_MAPPING.md).

## Shared Asset Location

The shared sprite lives at:

`learning/shared/icons/sprite.svg`

This location was chosen because:

- it is part of the shared learner-facing implementation layer
- it is reusable across current modules and future course shells
- it keeps implementation assets out of `docs/`
- it avoids duplicating icon files inside individual modules

The sprite is not module-specific. It is a shared platform asset.

## Naming Convention

Every symbol in the sprite uses this ID pattern:

`icon-{lucide-name}`

Examples:

- `icon-bookmark`
- `icon-circle-check`
- `icon-alert-triangle`
- `icon-circle-question-mark`

Use only the approved Lucide names included in the sprite. New icons require review before they are added.

## Approved Icons

The current shared sprite includes:

- `lightbulb`
- `alert-triangle`
- `file-text`
- `pencil`
- `circle-question-mark`
- `bot`
- `user`
- `repeat`
- `eye`
- `circle-check`
- `bookmark`
- `message-square`
- `copy`
- `chevron-down`
- `arrow-left`
- `arrow-right`
- `list`
- `moon`
- `sun`

## Standard HTML Pattern

Use the shared `.ui-icon` wrapper from the shared styles and reference the injected sprite with a fragment-only `<use>` element.

Example:

```html
<span class="ui-icon" aria-hidden="true">
  <svg viewBox="0 0 24 24" focusable="false">
    <use href="#icon-bookmark"></use>
  </svg>
</span>
```

The shared shell/runtime is responsible for injecting the sprite into the page. Module markup should not reference relative sprite file paths.

## Buttons

### Save Notes

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

### Mark Section Complete

```html
<button type="button" class="section-action">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-circle-check"></use>
    </svg>
  </span>
  <span>Mark section complete</span>
</button>
```

### Leave Feedback

```html
<button type="button" class="section-action">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-message-square"></use>
    </svg>
  </span>
  <span>Leave feedback</span>
</button>
```

## Callout Labels

Use icons to reinforce teaching meaning, not as decoration.

### Warning Callout

```html
<div class="callout callout-warning">
  <div class="label-with-icon">
    <span class="ui-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <use href="#icon-alert-triangle"></use>
      </svg>
    </span>
    <span>Warning</span>
  </div>
  <p>AI output still requires human review.</p>
</div>
```

## Workflow And Diagram Steps

### AI Drafting Step

```html
<div class="diagram-step">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-bot"></use>
    </svg>
  </span>
  <span>AI drafts the first version.</span>
</div>
```

### Human Review Step

```html
<div class="diagram-step">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-user"></use>
    </svg>
  </span>
  <span>Human reviews the result before use.</span>
</div>
```

## Navigation Controls

### Previous And Next

```html
<a class="nav-button" href="#previous">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-arrow-left"></use>
    </svg>
  </span>
  <span>Previous</span>
</a>

<a class="nav-button" href="#next">
  <span>Next</span>
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-arrow-right"></use>
    </svg>
  </span>
</a>
```

### Section List Toggle

```html
<button type="button" class="sidebar-toggle">
  <span class="ui-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <use href="#icon-list"></use>
    </svg>
  </span>
  <span>Sections</span>
</button>
```

## Usage Rules

- Use the shared sprite as the default icon source for course UI.
- Let the shared shell/runtime inject the sprite into the page.
- Use only approved symbols already included in the sprite.
- Keep icons inside the `.ui-icon` wrapper so sizing and alignment stay consistent.
- Icons should inherit the surrounding text color.
- Do not mix icon libraries inside the same course UI.
- Do not reintroduce ad hoc inline SVGs as a parallel standard.
- Do not use relative sprite file paths inside module markup.
- If a new icon is genuinely needed, request review before editing the shared sprite.

## Relationship To UX Content Mapping

[UX_CONTENT_MAPPING.md](./UX_CONTENT_MAPPING.md) explains which teaching functions should use which UI patterns. This file explains the implementation standard for icons inside those patterns.
