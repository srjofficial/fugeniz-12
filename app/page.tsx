"use client";

import StrangerThingsHero from "@/components/StrangerThingsHero";
import EventsShowcase from "@/components/EventsShowcase";
import Footer from "@/components/SiteFooter";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* UPSIDE DOWN HERO SECTION */}
      <StrangerThingsHero />

      {/* EVENTS SHOWCASE */}
      <EventsShowcase />

      {/* SITE FOOTER */}
      <Footer />
    </main>
  );
}
