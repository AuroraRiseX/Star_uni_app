---
name: Star Jar
colors:
  surface: '#faf9f9'
  surface-dim: '#dadada'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e9e8e8'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4d4633'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f0f0'
  outline: '#7e7761'
  outline-variant: '#d0c6ad'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd93d'
  on-primary-container: '#725e00'
  inverse-primary: '#e8c426'
  secondary: '#944a00'
  on-secondary: '#ffffff'
  secondary-container: '#fc8200'
  on-secondary-container: '#5d2c00'
  tertiary: '#605f51'
  on-tertiary: '#ffffff'
  tertiary-container: '#dfdccb'
  on-tertiary-container: '#626153'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe173'
  primary-fixed-dim: '#e8c426'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#554500'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#ffb784'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#e6e3d1'
  tertiary-fixed-dim: '#cac7b6'
  on-tertiary-fixed: '#1d1c11'
  on-tertiary-fixed-variant: '#48473a'
  background: '#faf9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e3e2e2'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-lg:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style
The design system is built on a narrative of "Gentle Encouragement." It targets parents and young children, aiming to transform behavioral development into a magical, shared journey. The personality is warm, optimistic, and patient.

The aesthetic blends **Minimalism** with **Glassmorphism**. High amounts of creamy whitespace reduce cognitive load for parents, while vibrant, tactile elements engage children. The central metaphor—the glass jar—uses translucent layers to create a sense of depth and wonder, making the "collected stars" feel like precious physical objects.

## Colors
The palette is rooted in sun-drenched warmth.
- **Primary (#FFD93D):** "Star Yellow," used for primary actions and active reward states.
- **Secondary (#FF8400):** "Sunset Orange," reserved for high-energy moments like goal completion and "Add Star" buttons.
- **Tertiary (#FFFBE9):** "Creamy Canvas," used as the main background color to provide a softer, warmer alternative to pure white.
- **Neutral (#B2B2B2):** "Cloud Gray," used for secondary text and inactive states to provide balance without being harsh.

## Typography
The typography utilizes two rounded sans-serifs to ensure readability and friendliness. **Plus Jakarta Sans** provides a modern, clean structure for headers, while **Quicksand** offers a soft, approachable feel for body text and labels. All weights are kept at Medium (500) or higher to ensure the "soft" aesthetic is maintained even at small sizes.

## Layout & Spacing
This design system uses a **Fluid Grid** with generous padding to prevent the UI from feeling cluttered. 
- **Mobile:** 4-column grid with 20px outside margins.
- **Desktop/Tablet:** 12-column centered grid with a max-width of 1040px.
Spacing is intentionally "airy" (using 24px and 40px units frequently) to allow the rounded shapes and glass effects room to breathe.

## Elevation & Depth
Depth is communicated through **Glassmorphism** and **Ambient Shadows**.
- **The Jar:** Uses a semi-transparent background (`rgba(255, 255, 255, 0.4)`) with a 20px backdrop blur and a thin, 1.5px white inner stroke to simulate glass.
- **Floating Elements:** Cards and buttons use "Cloud Shadows"—low-opacity (#FF8400 at 10% opacity) with a large 30px blur radius to create a soft, lifted effect without looking industrial.
- **Layering:** Background elements are kept flat on Tertiary Cream, while interactive containers use subtle white-to-transparent gradients.

## Shapes
The shape language is dominated by high-radius curves. A base radius of **20px** is applied to standard cards, while buttons and chips use a **Pill-shaped** (fully rounded) approach. Sharp corners are strictly avoided to maintain a child-safe, friendly environment. Iconic shapes (Stars and Clouds) should be integrated as decorative elements or containers for numerical data.

## Components
- **Action Buttons:** Large (min-height 56px) with Primary Yellow fills. Use a 4px bottom-offset shadow of a darker yellow to create a "squishy" pressable feel.
- **The Star Jar:** A central glassmorphic container that fills vertically as stars are added. Inside, stars should have slight random rotations to appear naturally "dropped" in.
- **Progress Bars:** Use thick tracks (16px height) in Cloud Gray with a Primary Yellow fill. The "target" end of the bar features a Treasure Chest icon that bounces slightly when reached.
- **Input Fields:** Soft Cream background with a 2px "Cloud Gray" border that turns "Sunset Orange" on focus.
- **Reward Cards:** Use 24px corner radius. Include a dedicated "Star Cost" badge in the top right corner using a star-shaped background.
- **Feedback Toasts:** Cloud-shaped containers that float from the bottom, using playful micro-copy.