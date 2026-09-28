"use client";

import React from "react";
import Image from "next/image";
import { Language } from "@/lib/translations";
import {
  ShieldCheck,
  ArrowUp,
  Phone,
  MapPin,
  Mail,
  Globe,
  Heart,
  Award,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface FooterProps {
  lang: Language;
  onLanguageChange?: (newLang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onLanguageChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E293B] text-slate-300 pt-16 pb-10 border-t border-slate-700/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Identity & Practice Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-serif text-lg font-bold shadow-md shadow-[#0D9488]/30">
                RM
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  Dr. Ratna Kumar Mishra
                </h3>
                <p className="text-xs text-[#0D9488] font-mono font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  B.D.S. (BPKIHS) • NMC Regd. No. 13350
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {lang === "ne"
                ? "आरोग्य डेन्टल क्लिनिकका निर्देशक, वरिष्ठ दन्त शल्यचिकित्सक तथा 'द लस्ट बुक' र 'द क्र्यास बुक' का लेखक।"
                : "Senior Dental Surgeon & Director at Aarogya Dental Clinic. Author of 'The Lost Book (Sarobar Sarobar)' and 'The Crash Book (Dental Crash Course)'."}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#D97706] font-bold">
                Persona & Ethos:
              </div>
              <div className="text-xs font-serif italic text-slate-200">
                "Poet. Dentist. Dreamer. Disruptor." • "One Couplet a Day"
              </div>
            </div>

            {/* Official Registration Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D9488]/15 border border-[#0D9488]/30 text-xs text-[#2dd4bf] font-mono">
              <span>NMC Dental Licensure #13350 (2072.08.22)</span>
            </div>
          </div>

          {/* Complete Sitemap Column 1: Clinical Practice (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488]" />
              <span>{lang === "ne" ? "क्लिनिकल सेवाहरू" : "Clinical Practice"}</span>
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Aarogya Dental Clinic Overview
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Aesthetic Dentistry & Veneers
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Microscopic Endodontics (RCT)
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Oral & Maxillofacial Surgery
                </a>
              </li>
              <li>
                <a href="#clinic" className="hover:text-white transition-colors">
                  Preventive & Pediatric Care
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors text-[#2dd4bf]">
                  Emergency Dental Protocol (24/7)
                </a>
              </li>
            </ul>
          </div>

          {/* Complete Sitemap Column 2: Literary & Academic (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              <span>{lang === "ne" ? "साहित्य तथा अनुसन्धान" : "Literary & Research"}</span>
            </h4>
            
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  The Lost Book (Sarobar Sarobar)
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  The Crash Book (Dental Crash Course)
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-white transition-colors">
                  Interactive 3D Book Page-Turner
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Bilingual Dental Insights & Blog
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Daily Dental Tip Flip-Cards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors text-[#D97706]">
                  Academic Speaking & Lectures
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Connect & Clinic Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              {lang === "ne" ? "क्लिनिक ठेगाना" : "Clinic Location"}
            </h4>

            <div className="space-y-2 text-xs text-slate-400">
              <p className="text-slate-300 font-medium">Aarogya Dental Clinic</p>
              <p>Rautahat / Nepal</p>
              <p className="text-slate-400">Sun–Fri: 9:30 AM – 8:30 PM</p>
              
              <div className="pt-2">
                <a
                  href="tel:+9779800000000"
                  className="inline-flex items-center gap-1 text-[#2dd4bf] hover:underline"
                >
                  <Phone className="w-3 h-3" />
                  <span>+977 980-0000000</span>
                </a>
              </div>
            </div>

            {/* Language Switcher in Footer */}
            {onLanguageChange && (
              <div className="pt-3">
                <div className="inline-flex items-center bg-slate-800 p-1 rounded-xl text-[11px] font-semibold">
                  <button
                    type="button"
                    onClick={() => onLanguageChange("en")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      lang === "en"
                        ? "bg-[#0D9488] text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => onLanguageChange("ne")}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      lang === "ne"
                        ? "bg-[#0D9488] text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    नेपाली
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Legal, Council Authority & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Dr. Ratna Kumar Mishra. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Nepal Medical Council Permanent Registration No. 13350</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Crafted with clinical precision & editorial warmth
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
