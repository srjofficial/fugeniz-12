# 🎪 FUGENIZ 12th — Official Event Website

> *"Enter the Upside Down."*
> The official website for **FUGENIZ 12th**, the annual technical fest of **Sree Narayana Gurukulam College of Engineering**, organised by the **IEEE Computational Intelligence Society Student Branch**.

---

## ✨ Live Preview

> Deploy to Vercel or run locally — see below.

---

## 🖼️ Features

| Feature | Details |
|---|---|
| 🎬 **Scroll Animation** | Apple-style frame-by-frame canvas animation driven by GSAP ScrollTrigger |
| 📱 **Responsive** | Separate animation sets for mobile (`vdo2`) and desktop (`upscaled video`) |
| 🔴 **Cinematic Loader** | Full-screen loader with animated logo reveal & progress bar |
| 🃏 **Event Cards** | Tilt-effect event showcase with Framer Motion |
| 👁️ **Custom Cursor** | Themed custom cursor throughout the site |
| 🌑 **Last-frame Persist** | Final animation frame persists as background behind the rest of the page |
| 🔗 **Event Detail Pages** | Dynamic event pages with guidelines, registration fee & CTA |
| 📝 **Registration Flow** | Dedicated register page per event |
| 🦶 **Footer** | Team contacts, social links, college & IEEE CIS branding |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/srjofficial/fugeniz-12.git
cd fugeniz-12

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎞️ Regenerating Animation Frames

The scroll animation uses pre-extracted JPEG frames stored in `public/frames/`.  
If you replace the source videos, regenerate frames using the included scripts:

```bash
# Desktop frames (from upscaled-video.mp4)
node extract-frames.mjs

# Mobile frames (from vdo2.mp4)
node extract-frames-mobile.mjs
```

> Source videos should be placed in the `vdo/` directory.

---

## 🗂️ Project Structure

```
fugeniz-12/
├── app/
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout + fonts + metadata
│   ├── template.tsx              # Re-mounts on navigation (scroll reset)
│   └── events/[id]/
│       ├── page.tsx              # Dynamic event detail page
│       └── register/page.tsx    # Registration page
├── components/
│   ├── TenaniScrollAnimation.tsx # 🎬 Main scroll animation (GSAP + Canvas)
│   ├── StrangerThingsHero.tsx    # Fixed navbar
│   ├── EventsShowcase.tsx        # Event cards grid
│   ├── GlobalLoader.tsx          # Cinematic loader screen
│   ├── SiteFooter.tsx            # Footer
│   ├── MenuButton.tsx            # Animated nav menu
│   ├── CustomCursor.tsx          # Custom cursor
│   └── FloatingSpores.tsx        # Atmospheric particle effect
├── lib/
│   └── stranger-events-data.tsx  # All event data (title, desc, image, fee…)
├── public/
│   ├── frames/
│   │   ├── tenani/               # 192 desktop frames
│   │   └── tenani-mobile/        # 192 mobile frames
│   └── home/                     # Logo & banner assets
├── extract-frames.mjs            # Desktop frame extractor
└── extract-frames-mobile.mjs     # Mobile frame extractor
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety throughout |
| **GSAP + ScrollTrigger** | Scroll-driven frame animation |
| **Framer Motion** | Event card & UI animations |
| **Tailwind CSS** | Utility-first styling |
| **HTML5 Canvas** | High-performance frame rendering |
| **fluent-ffmpeg** | Video frame extraction (dev script) |

---

## 🎭 Events

- 🔓 **Pixel Decode** — Cyber security challenge
- 🔍 **Scan & Seek** — QR-based treasure hunt
- *(more events in `lib/stranger-events-data.tsx`)*

---

## 👥 Team

| Role | Name |
|---|---|
| IEEE CIS Secretary | Riyan |
| IEEE CIS Chair | Abinson |
| Chapter Advisor | Krishnaindu K.S |

**Website Built by:** Abinson Babu · Parthip Sasidharan · Saroj S

---

## 📄 License

This project is for educational and event purposes. All rights reserved © FUGENIZ 12th, SNGCE IEEE CIS.

---

<div align="center">
  <strong>SREE NARAYANA GURUKULAM COLLEGE OF ENGINEERING</strong><br/>
  <em>IEEE Computational Intelligence Society Student Branch</em><br/><br/>
  <code>MARCH 5</code>
</div>
