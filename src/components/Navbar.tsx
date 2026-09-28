"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";
import { Menu, X, Globe, ShieldCheck, Calendar } from "lucide-react";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.clinic, href: "#clinic" },
    { label: t.publications, href: "#publications" },
    { label: t.insights, href: "#insights" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8FAFC]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-serif text-lg font-bold shadow-md shadow-[#0D9488]/20 group-hover:scale-105 transition-transform duration-200">
              RM
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1E293B] group-hover:text-[#0D9488] transition-colors">
                Dr. Ratna Kumar Mishra
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span>B.D.S. (BPKIHS)</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[#0D9488] flex items-center gap-1 font-mono font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  {t.license}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1E293B]/80 hover:text-[#0D9488] transition-colors duration-150 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar: Language Selector & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Bilingual Switcher */}
            <div className="flex items-center bg-slate-200/70 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => onLanguageChange("en")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  lang === "en"
                    ? "bg-white text-[#1E293B] shadow-xs"
                    : "text-slate-600 hover:text-[#1E293B]"
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#0D9488]" />
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange("ne")}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  lang === "ne"
                    ? "bg-white text-[#1E293B] shadow-xs"
                    : "text-slate-600 hover:text-[#1E293B]"
                }`}
              >
                नेपाली
              </button>
            </div>

            {/* Primary CTA Button (Teal #0D9488) */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white text-sm font-medium shadow-md shadow-[#0D9488]/20 transition-all duration-200 active:scale-[0.97]"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.bookConsultation}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange(lang === "en" ? "ne" : "en")}
              className="px-2.5 py-1.5 text-xs font-bold bg-slate-200/80 rounded-lg text-[#1E293B]"
            >
              {lang === "en" ? "नेपाली" : "EN"}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F8FAFC] border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#1E293B] hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#0D9488] text-white font-medium text-center shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              {t.bookConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
