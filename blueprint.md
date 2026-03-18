# **Blueprint: RIKU & SEMIN D-Day Tracker**

## **Project Overview**
A cute, cozy, and interactive D-Day website for **RIKU and SEMIN**. The theme focuses on "Sweet Desserts from Seoul and Tokyo," featuring pastel-toned illustrations (donuts, cakes, taiyaki) and a celebratory fireworks/confetti animation upon confirming the meeting date.

## **Detailed Outline & Current State**

### **1. Visual Design & Theme**
- **Aesthetics:** Pastel-toned (Pinks, Creams, Soft Yellows), adorable, and cozy atmosphere.
- **Color Palette (OKLCH):** 
  - Background: `oklch(97% 0.02 95)` (Soft Cream)
  - Primary Accent: `oklch(85% 0.08 340)` (Pastel Pink)
  - Secondary Accent: `oklch(90% 0.10 80)` (Pastel Yellow)
- **Typography:**
  - Headlines: 'Pacifico', cursive (from Google Fonts)
  - Body: 'Quicksand', sans-serif (from Google Fonts)
- **Iconography/Illustrations:**
  - Seoul & Tokyo Desserts (Donuts, Strawberry Shortcake, Taiyaki).
  - Use of SVGs or decorative CSS elements for a hand-drawn feel.
- **Interactivity:**
  - Floating dessert animations.
  - "Glow" effects on buttons and cards using soft, deep shadows.
  - Multi-layered drop shadows for a "lifted" feel on cards.

### **2. Features & Functionality**
- **Input Section:** A clean, styled date picker for the "Meeting Date."
- **Confirmation:** A "Confirm" button with a hover "glow" effect.
- **D-Day Calculation:** JavaScript logic to calculate the difference between today and the target date.
- **Celebration:** Triggering a fireworks/confetti animation (via `canvas-confetti` library) once the date is set.
- **Responsive Design:** Mobile-first approach to ensure it looks perfect on all devices.

### **3. Technical Stack**
- **HTML5:** Semantic structure with Web Components for encapsulated UI parts.
- **CSS3:** Modern features (OKLCH, CSS Variables, Container Queries, `:has()`, Flexbox/Grid).
- **JavaScript (ES Modules):** Clean logic for date handling and animation triggers.
- **External Libraries:** `canvas-confetti` (via CDN) for the celebration effect.

---

## **Current Implementation Plan**

### **Step 1: Setup & Structure**
- [ ] Initialize `index.html` with basic structure and meta tags.
- [ ] Create `style.css` with the pastel theme and dessert-inspired styling.
- [ ] Create `main.js` with basic state management.

### **Step 2: UI Implementation**
- [ ] Create a "DessertCard" component for the main container.
- [ ] Add the "Meeting Date" input field and "Confirm" button.
- [ ] Integrate Google Fonts ('Pacifico' and 'Quicksand').
- [ ] Add dessert illustrations (SVGs) as decorative background elements.

### **Step 3: Logic & Animation**
- [ ] Implement the D-Day calculation logic in `main.js`.
- [ ] Import and configure the `canvas-confetti` library.
- [ ] Connect the "Confirm" button to trigger the calculation and fireworks.

### **Step 4: Refinement & Polish**
- [ ] Add subtle noise texture to the background for a premium feel.
- [ ] Ensure mobile responsiveness.
- [ ] Final verification of all visual effects (shadows, glows, animations).
