"use client";

import React, { useState } from "react";
import { Language } from "@/lib/translations";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DentalClinicHub } from "@/components/DentalClinicHub";
import { AuthorBookShowcase } from "@/components/AuthorBookShowcase";
import { AnimatedBookSection } from "@/components/AnimatedBookSection";
import { BlogAndInsights } from "@/components/BlogAndInsights";
import { ConnectSocialHub } from "@/components/ConnectSocialHub";
import { ContactAndBooking } from "@/components/ContactAndBooking";
import { ConsultationModal } from "@/components/ConsultationModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col relative selection:bg-[#0D9488] selection:text-white">
      {/* Subtle organic texture grain overlay */}
      <div className="subtle-grain" aria-hidden="true" />

      {/* Global Navigation with Bilingual Switcher & CTA */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section (Prompt 2: Split layout, dual CTAs, portrait, 15+ years badge) */}
        <Hero
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 2. Dental Clinic Feature Hub (Prompt 2: Stats, 4 service cards with hover elevation, working hours, map) */}
        <DentalClinicHub
          lang={lang}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 3. Editorial Author & Book Showcase (Prompt 3: Spotlight cards, 3D mockups, expandable synopsis, TOC modal, Quote banner) */}
        <AuthorBookShowcase
          lang={lang}
        />

        {/* 4. Highly Animated 3D Book Flipping Section (Auto-moving 10-15 pages for The Lost Book & The Crash Book) */}
        <AnimatedBookSection
          lang={lang}
        />

        {/* 5. Bilingual Blogging & Insights Platform (Prompt 4: Category filters, 3-column grid, flippable Daily Dental Tip) */}
        <BlogAndInsights
          lang={lang}
        />

        {/* 6. 'Connect With Me' Social Hub (Prompt 5: Quick-connect cards + Newsletter digest signup) */}
        <ConnectSocialHub
          lang={lang}
        />

        {/* 7. Contact & Appointment Booking Section (Prompt 5: Tabbed Form + Emergency notice in warm amber) */}
        <ContactAndBooking
          lang={lang}
        />
      </main>

      {/* 8. Global Clean Slate-Blue Footer (Prompt 5: Credentials, NMC 13350, Sitemap, Language switcher) */}
      <Footer
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Interactive Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
      />
    </div>
  );
}
