---
name: Komorebi Healing System
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4d4632'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#7f765f'
  outline-variant: '#d1c6ab'
  surface-tint: '#725c00'
  primary: '#725c00'
  on-primary: '#ffffff'
  primary-container: '#ffd214'
  on-primary-container: '#705b00'
  inverse-primary: '#edc200'
  secondary: '#924c00'
  on-secondary: '#ffffff'
  secondary-container: '#fd8b17'
  on-secondary-container: '#613100'
  tertiary: '#545f72'
  on-tertiary: '#ffffff'
  tertiary-container: '#ccd7ee'
  on-tertiary-container: '#525d71'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe07e'
  primary-fixed-dim: '#edc200'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#564500'
  secondary-fixed: '#ffdcc4'
  secondary-fixed-dim: '#ffb780'
  on-secondary-fixed: '#2f1400'
  on-secondary-fixed-variant: '#6f3800'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
  cloud-gray: '#7A869A'
  glass-border: rgba(255, 255, 255, 0.4)
  surface-cream: '#FFFDF9'
  energy-green: '#A8D672'
  energy-purple: '#B19CD9'
typography:
  hero-numeral:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  section-gap: 32px
  card-inner: 20px
---

## Brand & Style

This design system embodies the **Japanese Dopamine Micro-Flat** aesthetic—a style that merges high-energy "dopamine" color pops with the organized, calm serenity of Japanese minimalism. The goal is a "Warm & Healing" interface that feels like a digital sanctuary for children and parents.

The visual narrative is built on **Tactile Micro-Flat** principles: using subtle depth, soft-focus gradients, and glassmorphism to create a toy-like environment that feels tangible yet modern. The emotional response should be one of encouragement and safety, removing the "stress" of traditional task management and replacing it with the delight of a physical reward jar.

- **Minimalist Layout:** Heavy use of "Light Beige" whitespace to allow colorful illustrations to breathe.
- **Glassmorphism:** The central "Jar" uses blurred transparency to simulate a physical container.
- **Child-Friendly Illustration:** Soft, thick-stroked organic shapes and friendly metaphors (Stars/Clouds).

## Colors

The palette is split into two emotional poles: **Sunlight (Reward)** and **Haze (Reflection)**. 

- **Primary & Secondary:** "Warm Golden Yellow" and "Energetic Orange" represent the "Dopamine" triggers—success, joy, and movement.
- **Tertiary & Named Gray:** "Haze Blue" and "Smoke Gray" are used for "Raincloud" punishment states. These are kept low-saturation to feel "quiet" rather than "scary."
- **Background:** A "Light Beige/Creamy White" (`#F9F7F2`) serves as the canvas, providing a much softer contrast than pure white to reduce eye strain and enhance the "healing" vibe.
- **Named Colors:** Used for category-specific energy bars to provide a vibrant, gamified feel across different life habits.

## Typography

The typography system uses **Plus Jakarta Sans** for its friendly, open counters and modern geometric feel, which perfectly complements the "Micro-Flat" style.

- **Hero Numerals:** Used exclusively for Star and Cloud counts. These should be bold and impactful to celebrate progress.
- **Hierarchy:** Titles use high weights (700+) to provide a clear anchor in a layout that is otherwise very soft and rounded.
- **Readability:** Body text is set with generous line height (1.5 - 1.6) to remain accessible for young readers and parents glancing at the screen quickly.

## Layout & Spacing

The layout is **Fluid but Centrally Weighted**, revolving around the "Hero Zone" where the Star Jar sits.

- **Grid:** A 12-column grid is used for desktop, but for the primary mobile experience, it follows a single-column stack for Tasks and a 2-column "Bento" grid for the Shop.
- **Rhythm:** Spacing follows an 8px baseline. Large internal margins (`24px`) are used for primary containers to create a "breathable" and unhurried UI.
- **Responsive Behavior:** On larger screens (tablets), the Jar and Task list transition into a side-by-side layout to prevent the Jar from becoming overly massive.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional black shadows.

- **The Jar:** The centerpiece uses a backdrop-blur (12px - 20px) with a semi-transparent white tint. A subtle internal "inner glow" gives it a 3D glass effect.
- **Floating Elements:** Stars and Clouds inside the jar have soft, color-tinted ambient shadows (e.g., a yellow shadow for a star) to make them appear to be floating in space.
- **Cards:** Task and Shop cards use a "Low-Contrast Outline" approach—a 1px border that is slightly darker than the background, paired with a very soft, high-diffusion shadow (`Y: 4, Blur: 20, Opacity: 0.05`).

## Shapes

The shape language is **Extra Rounded**, emphasizing safety and softness.

- **Corners:** Standard UI components use a `1rem` (16px) radius, while primary containers and "Hero" cards use `2rem` (32px) or even larger for the "Star Jar."
- **Interactive Elements:** Buttons are fully pill-shaped (`999px`) to invite touch.
- **Energy Bars:** Habit progression tracks use a full pill-shaped radius for both the track and the fill indicator to maintain the "liquid" feel of the system.

## Components

### Buttons
Primary buttons use a **Subtle Gradient** from the Primary Yellow to the Secondary Orange. They should have a "squishy" tactile feel: a small scale-down (0.95) on press. No sharp edges.

### The Star Jar
A custom component utilizing `backdrop-filter: blur()`. The "lid" should have a slightly higher opacity than the "body." Stars/Clouds should be rendered as distinct physics-enabled icons within this container.

### Task Cards
Cards use a "Micro-Flat" look: solid Creamy White background, a soft 1px border, and a large category icon on the left. The "Reward" value (e.g., +2 Stars) is housed in a pill-shaped badge on the right.

### Energy Bars
Progression bars are thick (12px+) with a background track that is a low-opacity version of the progress color. The fill should have a slight horizontal "shimmer" animation to indicate it is "active."

### Input Fields
Inputs are pill-shaped with the same Light Beige background as the page, but "sunken" using a soft inner shadow to indicate they are editable.

### Modals & Pop-ups
Treasure Boxes and Penalty alerts use a **Glassmorphic Overlay** that blurs the entire background, forcing absolute focus on the "Reward/Punishment" reveal.