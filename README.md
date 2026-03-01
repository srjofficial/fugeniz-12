# FUGENIZ 12th — IEEE CIS Student Branch Chapter, SNGCE

> **An immersive, Stranger Things-themed event website** built for the 12th edition of FUGENIZ, the annual technical festival of the IEEE Computational Intelligence Society (CIS) Student Branch Chapter at Sree Narayana Gurukulam College of Engineering (SNGCE).

---

## 🌐 Live Preview

The site is designed to be deployed on [Vercel](https://vercel.com). After cloning and configuring the environment variable, run `npm run dev` to view locally or push to Vercel for production.

---

## 🧠 Project Overview

FUGENIZ 12th is a single-page web application with the following core sections:

- **Loading Screen** — Animated IEEE CIS logo entry with a dark, atmospheric loader
- **Apple-Style Scroll Animation** — Frame-by-frame image sequence (like Apple product reveals) controlled by scroll position using GSAP ScrollTrigger + Canvas
- **IEEE CIS Chapter Title + MARCH 5 Glitch** — Glitch-effect text displayed throughout the scroll animation
- **Events Showcase** — Interactive event cards for "Scan & Seek" and "Pixel Decode" with expandable mission guidelines
- **Registration System** — Per-event registration forms with payment QR code, receipt upload, and Google Sheets backend via Apps Script
- **Site Footer** — Community logos, social links, contact information, and organizer details

---

## 📁 Project Structure

```
fugeniz-12/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout with fonts, metadata, GlobalLoader, SmoothScroll
│   ├── page.tsx                # Main homepage (Hero + Scroll Anim + Events + Footer)
│   ├── events/
│   │   └── [id]/
│   │       ├── page.tsx        # Individual event detail page
│   │       └── register/
│   │           └── page.tsx    # Event registration form with file upload
│   └── api/
│       └── register/
│           └── route.ts        # API route — sends form data + receipt to Google Sheets
│
├── components/                 # All React components
│   ├── GlobalLoader.tsx        # Full-screen loading animation with IEEE CIS logo
│   ├── SmoothScroll.tsx        # Lenis smooth scroll + GSAP ScrollTrigger integration
│   ├── StrangerThingsHero.tsx  # Fixed navbar (Menu button only)
│   ├── MenuButton.tsx          # Animated hamburger menu with nav overlay
│   ├── TenaniScrollAnimation.tsx # Apple-style scroll sequence (canvas + GSAP)
│   ├── EventsShowcase.tsx      # Events grid section
│   ├── event-card.tsx          # Individual event card component
│   ├── drishya-event-card.tsx  # Alternative event card variant
│   ├── SiteFooter.tsx          # Footer with logos, socials, contacts
│   ├── CustomCursor.tsx        # Custom red animated cursor
│   ├── FloatingSpores.tsx      # Particle/spore atmosphere animation
│   └── ...
│
├── lib/
│   ├── stranger-events-data.tsx # Event data (title, rules, fees, images)
│   └── utils.ts                # Tailwind utility helper (cn)
│
├── hooks/
│   └── use-mobile.tsx          # Hook to detect mobile breakpoint
│
├── public/
│   ├── frames/
│   │   ├── tenani/             # Desktop scroll animation frames (WebP images)
│   │   └── tenani-mobile/      # Mobile scroll animation frames (WebP images)
│   ├── home/                   # Static assets (logos, hero images, QR code)
│   │   ├── cis.png             # IEEE CIS logo (used in loader)
│   │   ├── f12-logo.png        # FUGENIZ 12 logo
│   │   ├── ieee_sb_sngce_logo_png-1.png
│   │   ├── scan-seek.png       # Event poster image
│   │   ├── pixel-decode.png    # Event poster image
│   │   └── upi-qr.jpg          # UPI payment QR code
│   └── fonts/                  # Custom local fonts (Asoka, Creepster, Cinzel)
│
├── styles/
│   └── globals.css             # Global CSS including glitch effect keyframes
│
├── .env.local                  # 🔑 Environment variables (see below)
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration with custom fonts/colors
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies and scripts
├── extract-frames.mjs          # Node script to extract desktop frames from a video
└── extract-frames-mobile.mjs   # Node script to extract mobile frames from a video
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root (already included in this repo):

```env
GOOGLE_SHEET_URL="https://script.google.com/macros/s/YOUR_APPS_SCRIPT_DEPLOYMENT_ID/exec"
```

### How to set up your own Google Sheet backend:
1. Create a Google Sheet for collecting registrations.
2. Go to **Extensions → Apps Script** and deploy a Web App that handles `POST` requests.
3. Replace the `GOOGLE_SHEET_URL` value with your deployment URL.

> ⚠️ The included URL in `.env.local` is the original deployment — it may still be active. If you want your own sheet, replace it.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ 
- **npm** (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/srjofficial/fugeniz-12.git
cd fugeniz-12

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) → **New Project** → import this repo.
3. Add the environment variable `GOOGLE_SHEET_URL` in Vercel project settings.
4. Deploy!

---

## 📦 Tech Stack & Libraries

| Category | Library / Tool | Version | Purpose |
|---|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) | 16.1.6 | React framework with App Router |
| **Language** | TypeScript | 5.7.3 | Type-safe development |
| **Styling** | Tailwind CSS | ^3.4 | Utility-first CSS framework |
| **Animation** | [GSAP](https://gsap.com/) | ^3.14 | Scroll-driven canvas animation |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | ^12.x | UI component animations |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) | ^1.3 | Smooth scroll + GSAP sync |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) | various | Accessible UI components |
| **Icons** | [Lucide React](https://lucide.dev/) | ^0.544 | Icon set |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | ^5.5 | Additional icons (FaInstagram, etc.) |
| **Fonts** | Google Fonts (Cinzel, Space Grotesk, JetBrains Mono) | — | Typography |
| **Fonts** | Local (Asoka, Creepster) | — | Custom display fonts |

---

## 🎬 Scroll Animation — Frame Extraction

The Apple-style scroll animation uses a pre-extracted frame sequence (WebP images). If you want to regenerate frames from a video:

```bash
# Desktop frames (output to public/frames/tenani/)
node extract-frames.mjs

# Mobile frames (output to public/frames/tenani-mobile/)
node extract-frames-mobile.mjs
```

> These scripts require **ffmpeg** to be installed and available in your PATH.

---

## 🏛️ Organizers

**IEEE Computational Intelligence Society Student Branch Chapter**  
Sree Narayana Gurukulam College of Engineering (SNGCE)  
Kolenchery, Kerala, India

- 🌐 College: [sngce.ac.in](https://sngce.ac.in)
- 🔗 LinkedIn: [IEEE CIS SNGCE](https://www.linkedin.com/company/ieee-cis-sngce/)
- 📸 Instagram: [@ieee_sngce_cis](https://www.instagram.com/ieee_sngce_cis)

---

## 📄 License

This project is for educational and event-promotion purposes. All rights reserved by IEEE CIS Student Branch Chapter, SNGCE.
