---
name: Nusantara Wellness
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
  on-surface-variant: '#434843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#6b5c4c'
  on-secondary: '#ffffff'
  secondary-container: '#f4dfcb'
  on-secondary-container: '#716252'
  tertiary: '#1c160d'
  on-tertiary: '#ffffff'
  tertiary-container: '#312a21'
  on-tertiary-container: '#9c9184'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#f4dfcb'
  secondary-fixed-dim: '#d7c3b0'
  on-secondary-fixed: '#241a0e'
  on-secondary-fixed-variant: '#524436'
  tertiary-fixed: '#eee0d2'
  tertiary-fixed-dim: '#d1c5b7'
  on-tertiary-fixed: '#211b12'
  on-tertiary-fixed-variant: '#4e453b'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system is rooted in the philosophy of "Tenang" (Serenity). It serves a high-end demographic of locals and international tourists seeking a sanctuary from urban life. The aesthetic is **Modern Minimalist with Heritage Accents**, focusing on tactile luxury and architectural balance. 

The visual language avoids digital gimmicks in favor of high-end hospitality standards: ample whitespace (breathing room), sophisticated editorial typography, and subtle organic textures. The goal is to evoke the feeling of entering a secluded forest villa—cool, quiet, and deeply grounded in Indonesian heritage.

## Colors
The palette is a sophisticated "Forest & Stone" narrative. 
- **Primary (Forest Green):** A deep, muted green used for primary actions, navigation headers, and heritage accents. 
- **Secondary (Warm Beige):** Used for surface containers and background shifts to provide warmth and a "paper-like" feel.
- **Tertiary (Stone):** A mid-tone used for borders, secondary text, and iconography.
- **Neutral (Sand):** The foundational background color, replacing harsh whites with a softer, natural bone tone.
- **Dark Accent (Charcoal):** Used for primary typography to ensure high legibility while maintaining a softer contrast than pure black.

## Typography
The typography strategy pairs the elegance of the Indonesian colonial era with modern precision. **Playfair Display** provides the editorial "voice," used for headlines and hero statements. It should be typeset with generous leading to feel relaxed. 

**Montserrat** is used for functional text. In body copy, it should maintain a wide line height (1.6) to ensure the layout never feels cramped. The `label-caps` role is critical for navigation and category headers, providing a structured, high-end catalog feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain an intentional, gallery-like composition. Large vertical gaps (`section-gap`) are encouraged to separate different "moods" or treatments within the user journey.

- **Desktop:** 12-column grid with wide 64px margins to create a "framed" effect.
- **Tablet:** 8-column grid with 40px margins.
- **Mobile:** 4-column grid with 20px margins.

Avoid dense clusters of information. Every element should feel like it has been curated and placed with purpose.

## Elevation & Depth
Depth is achieved through **Tonal Layering** rather than aggressive shadows. 
- **Surface Tiering:** Use subtle shifts between the Sand neutral and Warm Beige secondary color to distinguish sections.
- **Soft Shadows:** When necessary (e.g., for floating booking bars), use "Ambient Shadows"—extremely low-opacity (4-6%) with a slight tint of the Primary Forest Green to ground the element naturally.
- **Batik Overlays:** Use high-resolution, low-opacity (5%) batik pattern masks on section backgrounds to add a tactile, textile quality to the digital surface.

## Shapes
The shape language is **Soft (0.25rem)**. While the overall brand is structured and architectural, completely sharp corners feel too aggressive for a wellness space. The subtle rounding mimics the smoothing of river stones. 

- **Primary Buttons:** Subtle rounding or completely sharp for a more "architectural" look.
- **Image Containers:** Should remain sharp (0px) to maintain a premium photography-first aesthetic.
- **Cards:** Soft (4px) corner radius.

## Components
- **Buttons:** Primary buttons use the Forest Green background with Sand text. Secondary buttons use a Stone outline with no fill. Always use `label-caps` for button text.
- **Input Fields:** Minimalist design with only a bottom border in Stone. Labels should float above in `label-caps`. Focus state shifts the border to Forest Green.
- **Cards:** Use "Ghost Borders"—1px solid lines in a slightly darker shade of the background color (Beige on Sand) to create structure without visual noise.
- **Lists:** Treatment menus should use the "dotted connector" style seen in traditional high-end spa menus, connecting the treatment name to the price.
- **Booking Widget:** A persistent, minimal bar at the bottom of the screen on mobile, using a semi-transparent Forest Green blur (glassmorphism) to feel modern yet integrated.