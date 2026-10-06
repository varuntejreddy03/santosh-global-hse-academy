# SANTOSH — Specialised Academy for NextGen Trainings in Occupational Health and Safety

A premium, modern 6-page static web application built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, redesigned with **NEBOSH-inspired Royal Navy Blue and Crisp White corporate palette** and **"Helvetica Neue", Helvetica, Arial, sans-serif** typography.

---

## 🎨 Colour Palette & Typography

* **Deep Navy** `#063B78` · **Primary Blue** `#0757B8` · **Teal** `#00A6B4` · **Cyan** `#18C6D9`
* **Light Blue Background** `#F3F8FC` · **Orange CTA accent** `#FF7A00`
* **Typography**: Plus Jakarta Sans

**Positioning:** SANTOSH Global HSE Academy provides training, coaching and examination preparation for ASP®, CSP® and CRSP®. It does not award those credentials.

**Verified-content flags:** stats, instructor profile and testimonials are hidden until `STATS_VERIFIED`, `INSTRUCTOR_VERIFIED` and `TESTIMONIALS_VERIFIED` are set to `true` in `src/data/academyData.js` with real content.

---

## 🏗️ Project Architecture

```
Santosh Global Hse Academy/
├── dist/                             # Compiled production build
├── src/
│   ├── components/
│   │   ├── Header.jsx                # Navy top-bar, white nav, 24/7 status, Enquire CTA, mobile drawer
│   │   ├── Footer.jsx                # Navy footer, cyan accent ribbon, 6 training areas, 24/7 & worldwide notice
│   │   ├── EnquiryModal.jsx          # Interactive course & general enquiry modal with form validation
│   │   └── Toast.jsx                 # Live alert notification for form submissions
│   ├── data/
│   │   └── academyData.js            # Core programs, value pillars, target sectors, and roles
│   ├── pages/
│   │   ├── HomePage.jsx              # Hero, intro, 6 core areas, why safety matters, training approach, CTA
│   │   ├── AboutPage.jsx             # Who We Are, Mission, Vision, Training Philosophy, Who We Train
│   │   ├── ServicesPage.jsx          # 6 premium service cards, industrial sectors served
│   │   ├── CoursesPage.jsx           # Academy course layout, search/filters, format placeholders, flexible learning
│   │   ├── WhyChooseUsPage.jsx       # 6 core pillars, credibility & value focus, methodology comparison
│   │   └── ContactPage.jsx           # Full enquiry form, 24/7 hours & worldwide indicators, final CTA
│   ├── App.jsx                       # Application state, page router, hash deep-linking, modal coordination
│   ├── index.css                     # Tailwind v4 theme, Helvetica Neue font, NEBOSH color tokens
│   └── main.jsx                      # React 19 entry point
├── index.html                        # Base HTML with SEO metadata and blue/white safety emblem
├── package.json                      # Project dependencies & scripts
└── vite.config.js                    # Vite configuration
```

---

## 🚀 Getting Started

### Development Mode
To start the local development server:
```bash
npm run dev
```

### Production Build
To create an optimized production build:
```bash
npm run build
```

### Preview Production Build
To preview the compiled build locally:
```bash
npm run preview
```

---

## 🛡️ Business Profile & Requirements Checklist

- **Name**: SANTOSH
- **Full Name**: Specialised Academy for NextGen Trainings in Occupational Health and Safety
- **Core Programs**:
  1. HSE Training
  2. Fire & Safety Training
  3. Risk Assessment
  4. Incident Investigation
  5. Safety Management
  6. Emergency Response
- **Business Hours**: 24/7 (Prominently displayed)
- **Accessibility**: Worldwide (Prominently displayed)
- **Constraint Compliance**:
  - No mention of CRSP anywhere.
  - No fabricated statistics, fake client logos, or false certification promises.
  - Standardized placeholders: *"Training Details — Contact Us"* and *"Enquire About This Course"*.
