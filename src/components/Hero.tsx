"use client";

import React, { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import { RemotionHeroPlayer } from "./remotion/RemotionHeroPlayer";
import {
  Award,
  ArrowRight,
  BookOpen,
  Stethoscope,
  Sparkles,
  CheckCircle2,
  Play,
  UserCheck,
  Shield,
  Layers,
  HeartPulse,
  Lock
} from "lucide-react";
import Link from "next/link";

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  const t = translations[lang].hero;
  const [heroView, setHeroView] = useState<"remotion" | "portrait">("remotion");

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-0 -z-10 w-[500px] h-[500px] bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Micro-Ticker / Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-slate-200/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-[#1E293B]">
            <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-ping" />
            <span className="text-[#0D9488] font-bold">NMC #13350</span>
            <span className="text-slate-300">•</span>
            <span>B.D.S. (BPKIHS Dharan)</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#D97706]">Poet. Dentist. Dreamer. Disruptor.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Practice Hub: <strong className="text-[#1E293B]">Aarogya Dental Clinic</strong>
            </span>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-[#1E293B] text-xs font-mono transition-colors border border-slate-200"
              title="Open Doctor & Clinic Admin Portal"
            >
              <Lock className="w-3 h-3 text-[#0D9488]" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>

        {/* Master Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Editorial Statement & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0D9488]/10 text-[#0D9488] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1E293B] leading-[1.1]">
              <span>{t.hookTitlePart1}</span>{" "}
              <span className="text-[#0D9488] relative inline-block">
                {t.hookTitlePart2}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#D97706]"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 5.5C40 2 160 2 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.bio}
            </p>

            {/* Key Clinical & Author Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="font-serif text-2xl font-bold text-[#1E293B]">15+ Years</div>
                <div className="text-xs text-slate-500 font-medium">Surgical & Clinical Mastery</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="font-serif text-2xl font-bold text-[#D97706]">2 Books</div>
                <div className="text-xs text-slate-500 font-medium">The Lost Book & The Crash Book</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-medium text-base shadow-xl shadow-[#0D9488]/25 transition-all duration-200 active:scale-[0.98] group"
              >
                <Stethoscope className="w-5 h-5 text-white/90" />
                <span>{t.ctaClinic}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#publications"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white border-2 border-[#1E293B] text-[#1E293B] hover:bg-slate-100 font-medium text-base shadow-xs transition-all duration-200 active:scale-[0.98]"
              >
                <BookOpen className="w-5 h-5 text-[#D97706]" />
                <span>{t.ctaPublications}</span>
              </a>
            </div>

            {/* Trust Seals */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span>NMC Council Act 1964 Certified</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>BPKIHS Dharan Alumni</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Remotion 4K Showcase & Portrait Switcher */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* View Switcher Controls */}
            <div className="flex items-center justify-between bg-white border border-slate-200 p-1.5 rounded-2xl shadow-xs">
              <span className="text-xs font-mono text-slate-500 px-3 font-semibold hidden sm:inline">
                Interactive Hero Stage:
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setHeroView("remotion")}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    heroView === "remotion"
                      ? "bg-[#1E293B] text-white shadow-md shadow-slate-900/20"
                      : "text-slate-600 hover:text-[#1E293B] hover:bg-slate-100"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>Remotion Dynamic Video</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHeroView("portrait")}
                  className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    heroView === "portrait"
                      ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/20"
                      : "text-slate-600 hover:text-[#1E293B] hover:bg-slate-100"
                  }`}
                >
                  <UserCheck className="w-3.5 h-3.5 text-white" />
                  <span>Official Portrait</span>
                </button>
              </div>
            </div>

            {/* Stage Body */}
            {heroView === "remotion" ? (
              /* Remotion Programmatic Player Stage */
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <RemotionHeroPlayer />
              </div>
            ) : (
              /* High-Resolution Professional Portrait Stage */
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-300">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/dr-ratna-kumar-mishra-portrait.jpg"
                    alt="Dr. Ratna Kumar Mishra Portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-mono uppercase text-[#D97706] font-bold tracking-widest block">
                      POET • DENTIST • DREAMER • DISRUPTOR
                    </span>
                    <h3 className="font-serif text-2xl font-bold">Dr. Ratna Kumar Mishra</h3>
                    <p className="text-xs text-slate-300">Director, Aarogya Dental Clinic • Author</p>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-3 -left-3 bg-white border border-[#D97706]/40 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#D97706]" />
                  <div>
                    <div className="text-xs font-bold text-[#1E293B]">{t.experienceBadge}</div>
                    <div className="text-[10px] text-slate-500">Evidence-Based Care</div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 bg-white border border-[#0D9488]/40 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-ping" />
                  <div>
                    <div className="text-xs font-bold text-[#1E293B]">Aarogya Dental Clinic</div>
                    <div className="text-[10px] text-[#0D9488] font-semibold">{t.activeStatus}</div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
