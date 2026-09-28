"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  Sparkles,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  CheckCircle,
  ChevronRight,
  Shield,
  Activity,
  Award,
  Users,
  Maximize2,
  X,
  FileCheck,
  CreditCard,
  Building2,
  BadgeCheck,
  Eye,
  Info,
  Layers,
  Sparkle
} from "lucide-react";

interface DentalClinicHubProps {
  lang: Language;
  onOpenBooking: () => void;
}

interface HotspotItem {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  nepaliTitle: string;
  subtitle: string;
  badge: string;
  detail: string;
  tag: string;
}

export const DentalClinicHub: React.FC<DentalClinicHubProps> = ({
  lang,
  onOpenBooking,
}) => {
  const t = translations[lang].clinic;
  const [selectedService, setSelectedService] = useState<string>("aesthetic");
  const [signboardModalOpen, setSignboardModalOpen] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>("doctor");
  const [showHotspots, setShowHotspots] = useState<boolean>(true);

  // 3D Perspective Tilt on Mouse Movement
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const boardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const hotspots: HotspotItem[] = [
    {
      id: "regd",
      x: 11,
      y: 19,
      title: "Regd. No. 01-32-0703",
      nepaliTitle: "दर्ता नं. ०१-३२-०७०३",
      subtitle: "Government Health Directorate Authorization",
      badge: "Govt Certified",
      detail: "Official healthcare facility registration granted by the Nepal Ministry of Health / Local Health Directorate under licensure No. 01-32-0703.",
      tag: "Health Directorate"
    },
    {
      id: "pan",
      x: 89,
      y: 19,
      title: "PAN: 118898500",
      nepaliTitle: "स्थायी लेखा नं. ११८८९८५००",
      subtitle: "Inland Revenue Department Taxpayer",
      badge: "Tax Verified",
      detail: "Legally registered medical entity with Inland Revenue Department of Nepal under corporate PAN 118898500.",
      tag: "Inland Revenue"
    },
    {
      id: "doctor",
      x: 12,
      y: 72,
      title: "डा. रत्न कुमार मिश्र (B.D.S.)",
      nepaliTitle: "डा. रत्न कुमार मिश्र (बि.डि.एस.)",
      subtitle: "NMC Registration No. 13350",
      badge: "Senior Dental Surgeon",
      detail: "Lead Dental Surgeon & Clinic Director, BPKIHS Dharan Dental Alumni, licensed under Nepal Medical Council Act 1964 (Permanent Regd #13350).",
      tag: "Lead Surgeon"
    },
    {
      id: "contact",
      x: 52,
      y: 35,
      title: "दमक-१, झापा • मो. ९८०११०९०२२",
      nepaliTitle: "दमक-१, झापा • मो. ९८०११०९०२२",
      subtitle: "Falgunanda Chowk, Damak-1, Jhapa",
      badge: "Hotline 9801109022",
      detail: "Main clinical facility located at Falgunanda Chowk, Damak-1, Jhapa. Direct reception and 24/7 emergency dispatch: +977 9801109022.",
      tag: "Direct Line"
    },
    {
      id: "procedures",
      x: 58,
      y: 72,
      title: "6 Specialized In-House Dental Procedures",
      nepaliTitle: "दाँत सम्बन्धी प्रमुख उपचारहरू",
      subtitle: "Crowns, Checkups, RCT, Scaling, Braces & Smile Makeovers",
      badge: "Treatment Suite",
      detail: "Illustrated on the board: 1) Crown & Bridge, 2) Clinical Checkup, 3) Microscopic RCT, 4) Ultrasonic Scaling, 5) Orthodontic Braces, 6) Cosmetic Smile Makeover.",
      tag: "Procedures"
    },
    {
      id: "motto",
      x: 50,
      y: 93,
      title: "यहाँ दाँत सम्बन्धी सम्पूर्ण उपचार उपलब्ध छ ।",
      nepaliTitle: "यहाँ दाँत सम्बन्धी सम्पूर्ण उपचार उपलब्ध छ ।",
      subtitle: "Complete Dental Care Under One Roof",
      badge: "Clinical Assurance",
      detail: "From routine hygiene and pediatric prevention to complex surgical extractions and aesthetic prosthetics, all treatments are executed with clinical mastery.",
      tag: "Clinic Motto"
    }
  ];

  const currentHotspot = hotspots.find((h) => h.id === activeHotspot) || hotspots[2];

  const statItems = [
    { value: t.stats.patients, label: t.stats.patientsLabel, icon: Users },
    { value: t.stats.procedures, label: t.stats.proceduresLabel, icon: Activity },
    { value: t.stats.experience, label: t.stats.experienceLabel, icon: Award },
    { value: t.stats.satisfaction, label: t.stats.satisfactionLabel, icon: Shield },
  ];

  return (
    <section id="clinic" className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Clinic Logo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-100">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.sectionBadge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B]">
              {t.title}
            </h2>
            <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Official Clinic Logo Badge */}
          <div className="flex items-center gap-4 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 self-start md:self-auto shadow-xs group hover:border-[#0D9488]/40 transition-colors">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shadow-xs border border-slate-200 p-1 shrink-0">
              <Image
                src="/images/aarogya-dental-clinic-logo.jpg"
                alt="Aarogya Dental Clinic Official Logo"
                fill
                className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div>
              <div className="font-serif font-bold text-[#1E293B] text-base group-hover:text-[#0D9488] transition-colors">
                Aarogya Dental Clinic
              </div>
              <div className="text-xs text-[#0D9488] font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified Clinical Facility
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Director: Dr. Ratna Kumar Mishra (NMC 13350)
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 MASTER SHOWCASE: OFFICIAL CLINIC SIGNBOARD & MODERN LOGO IDENTITY */}
        <div className="my-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-slate-800 relative overflow-hidden">
          
          {/* Subtle Ambient Backdrops */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0D9488]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Title & Verified Govt Credentials Ticker */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 relative z-10">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#2DD4BF] font-bold block">
                  Official Clinical Signboard & Brand Mark
                </span>
                <span className="text-[11px] text-slate-400">
                  Falgunanda Chowk, Damak-1, Jhapa • Active Clinical Facility
                </span>
              </div>
            </div>

            {/* Govt Registration Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                Govt Regd: <strong className="text-white">01-32-0703</strong>
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-slate-200">
                PAN: <strong className="text-white">118898500</strong>
              </span>
              <span className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300">
                NMC No. <strong>13350</strong>
              </span>
            </div>
          </div>

          {/* Controls Bar: Hotspot Toggle & Fullscreen Zoom Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-4 text-xs font-medium text-slate-300 relative z-10">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowHotspots(!showHotspots)}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  showHotspots
                    ? "bg-[#0D9488] text-white border-[#0D9488] shadow-md shadow-[#0D9488]/30"
                    : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showHotspots ? "Hide Interactive Hotspots" : "Show Interactive Hotspots"}</span>
              </button>
              <span className="text-slate-500 hidden sm:inline">• Hover or click any pulsing point on the board</span>
            </div>

            <button
              type="button"
              onClick={() => setSignboardModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-1.5 transition-all active:scale-[0.98]"
            >
              <Maximize2 className="w-3.5 h-3.5 text-yellow-300" />
              <span>Full-Screen Lightbox View</span>
            </button>
          </div>

          {/* Main 2-Column Grid: Signboard Stage + Brand Logo Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 relative z-10">
            
            {/* Left 8 Cols: 3D Tilting Signboard with Overhead Neon Spotlights */}
            <div className="lg:col-span-8 relative">
              
              {/* Simulated Overhead Metal Gooseneck Lamps */}
              <div className="absolute -top-3 left-1/4 -translate-x-1/2 w-8 h-3 bg-slate-700 rounded-t-full border border-slate-500 z-20 flex justify-center">
                <div className="w-1.5 h-1.5 bg-yellow-200 rounded-full shadow-[0_0_12px_#FDE047]" />
              </div>
              <div className="absolute -top-3 right-1/4 translate-x-1/2 w-8 h-3 bg-slate-700 rounded-t-full border border-slate-500 z-20 flex justify-center">
                <div className="w-1.5 h-1.5 bg-yellow-200 rounded-full shadow-[0_0_12px_#FDE047]" />
              </div>

              {/* 3D Tilting Card Container */}
              <div
                ref={boardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative rounded-2xl p-1 bg-gradient-to-r from-red-600 via-amber-500 to-[#0D9488] shadow-2xl transition-all duration-200 group/board"
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg) scale3d(1.01, 1.01, 1.01)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transition: "transform 0.25s cubic-bezier(0.2, 0, 0.2, 1)",
                }}
              >
                {/* Inner Bezel Frame */}
                <div className="relative rounded-[14px] overflow-hidden bg-slate-950 border border-slate-700/80">
                  
                  {/* Signboard Image Wrapper */}
                  <div
                    onClick={() => setSignboardModalOpen(true)}
                    className="relative w-full aspect-[21/9] sm:aspect-[24/8] cursor-pointer"
                  >
                    <Image
                      src="/images/aarogya-official-signboard.jpg"
                      alt="Aarogya Dental Clinic Official Physical Signboard - Damak-1, Jhapa"
                      fill
                      sizes="(max-width: 1200px) 100vw, 850px"
                      className="object-cover object-center"
                      priority
                    />

                    {/* Specular Ambient Sheen on Hover */}
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{
                        background: isHovered
                          ? `radial-gradient(circle at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255,255,255,0.2) 0%, transparent 60%)`
                          : "none",
                      }}
                    />

                    {/* Continuous Smooth Light Sweep Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/board:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Interactive Hotspot Overlay Pins */}
                    {showHotspots &&
                      hotspots.map((spot) => {
                        const isSelected = activeHotspot === spot.id;
                        return (
                          <button
                            key={spot.id}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveHotspot(spot.id);
                            }}
                            onMouseEnter={() => setActiveHotspot(spot.id)}
                            style={{
                              left: `${spot.x}%`,
                              top: `${spot.y}%`,
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group/pin focus:outline-none"
                            title={spot.title}
                          >
                            <span className="relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center">
                              {/* Pulsing Ring */}
                              <span
                                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                  isSelected ? "bg-yellow-400" : "bg-[#2DD4BF]"
                                }`}
                              />
                              {/* Core Dot */}
                              <span
                                className={`relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center text-[10px] font-bold border-2 border-white shadow-lg transition-transform ${
                                  isSelected
                                    ? "bg-yellow-400 text-slate-950 scale-125"
                                    : "bg-[#0D9488] text-white group-hover/pin:scale-110"
                                }`}
                              >
                                •
                              </span>
                            </span>
                          </button>
                        );
                      })}

                    {/* Quick Lightbox Hint Bar on Hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 flex items-center justify-between text-xs text-white opacity-0 group-hover/board:opacity-100 transition-opacity">
                      <span className="flex items-center gap-1.5 text-yellow-300 font-semibold font-mono">
                        <Maximize2 className="w-4 h-4" />
                        <span>Click Signboard to Open Full-Res Inspection Modal</span>
                      </span>
                      <span className="font-mono text-slate-300 text-[11px] hidden sm:inline">
                        Damak-1, Jhapa • 9801109022
                      </span>
                    </div>
                  </div>

                  {/* Sub-bar below board */}
                  <div className="bg-slate-950 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300 font-mono border-t border-slate-800">
                    <span className="flex items-center gap-1.5 text-yellow-400 font-semibold">
                      <BadgeCheck className="w-4 h-4" />
                      <span>यहाँ दाँत सम्बन्धी सम्पूर्ण उपचार उपलब्ध छ ।</span>
                    </span>
                    <span className="text-[#38BDF8] font-bold">
                      दमक-१, झापा • मो. ९८०११०९०२२
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Hotspot Radar Detail Bar */}
              {showHotspots && (
                <div className="mt-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#2DD4BF] flex items-center justify-center shrink-0">
                      <Info className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white font-serif text-sm">
                          {currentHotspot.title}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 text-[10px] font-bold">
                          {currentHotspot.badge}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {currentHotspot.detail}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#2DD4BF] font-semibold shrink-0 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                    {currentHotspot.tag}
                  </span>
                </div>
              )}

            </div>

            {/* Right 4 Cols: Animated Modern Logo Emblem Showcase & Direct Actions */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Premium Vector Brand Identity Card */}
              <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-slate-700/90 rounded-3xl p-6 shadow-xl relative overflow-hidden group/logo">
                
                {/* Ambient Radial Behind Logo */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#0D9488]/25 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2DD4BF] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    Official Brand Identity
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    ACTIVE
                  </span>
                </div>

                {/* Animated Floating Logo Display */}
                <div className="pt-6 pb-4 flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 rounded-3xl bg-white p-3 shadow-2xl border-2 border-slate-200/90 transition-transform duration-500 group-hover/logo:scale-105 group-hover/logo:rotate-1">
                    <Image
                      src="/images/aarogya-dental-clinic-logo.jpg"
                      alt="Aarogya Dental Clinic Vector Logo"
                      fill
                      className="object-contain p-1.5"
                      priority
                    />
                    {/* Animated Ripple Rings */}
                    <span className="absolute -inset-1 rounded-3xl border border-[#0D9488]/40 animate-pulse pointer-events-none" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mt-4">
                    Aarogya Dental Clinic
                  </h3>
                  
                  <p className="text-xs text-[#2DD4BF] font-mono font-semibold mt-1">
                    Falgunanda Chowk, Damak-1, Jhapa
                  </p>

                  <p className="text-xs text-slate-300 italic mt-2 max-w-xs">
                    "Dedicated to gentle surgical precision, patient safety, and aesthetic dental rehabilitation."
                  </p>

                  <div className="mt-4 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 font-mono flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Clinic Director: Dr. Ratna Kumar Mishra</span>
                  </div>
                </div>

                {/* Quick Action Dispatches */}
                <div className="space-y-2.5 pt-4 border-t border-slate-700/80">
                  <a
                    href="tel:+9779801109022"
                    className="w-full py-3 px-4 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#0D9488]/20 transition-all active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct: 9801109022</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="https://wa.me/9779801109022?text=Hello%20Dr.%20Mishra,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Aarogya%20Dental%20Clinic,%20Damak."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/40 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href="https://maps.google.com/?q=Falgunanda+Chowk+Damak+Jhapa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-12">
          {statItems.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#0D9488]/30 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0D9488] mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1E293B]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Interactive Service Cards with Hover Elevation */}
        <div className="my-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
              Specialized Dental Procedures
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Click any service for details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service) => {
              const isSelected = selectedService === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-2 border-[#0D9488] shadow-xl shadow-[#0D9488]/10 -translate-y-1"
                      : "bg-[#F8FAFC] border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isSelected
                            ? "bg-[#0D9488] text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {service.badge}
                      </span>
                      {isSelected && (
                        <CheckCircle className="w-4 h-4 text-[#0D9488]" />
                      )}
                    </div>
                    
                    <h4 className="font-serif text-lg font-bold text-[#1E293B] mb-2 leading-snug">
                      {service.title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0D9488]">
                    <span>Inquire About Treatment</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule Clinic Visit Hub + Interactive Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-16 pt-12 border-t border-slate-100">
          
          {/* Working Hours & Direct Booking Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#1E293B] to-[#0f172a] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-sm">
                <Clock className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{t.workingHoursTitle}</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                Prioritize Your Oral Health Today
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Consult directly with Dr. Ratna Kumar Mishra at Aarogya Dental Clinic, Damak-1, Jhapa. We reserve dedicated slots for routine checkups, aesthetic procedures, and urgent dental relief.
              </p>

              {/* Hours Pill Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-slate-200">
                  <span className="font-medium">Sunday – Friday: 08:00 AM – 07:00 PM</span>
                  <span className="text-xs bg-[#0D9488]/30 text-[#2dd4bf] px-2 py-0.5 rounded">OPD</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="font-medium">Emergency Care: 24/7 On-Call</span>
                  <span className="text-xs bg-red-500/30 text-red-300 px-2 py-0.5 rounded">Urgent</span>
                </div>
                <div className="text-xs text-slate-400 pt-1 border-t border-white/10">
                  Falgunanda Chowk, Damak Municipality-1, Jhapa, Nepal
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3 pt-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-medium text-sm shadow-lg shadow-[#0D9488]/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.scheduleBtn}</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+9779801109022"
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2dd4bf]" />
                  <span>Call 9801109022</span>
                </a>
                
                <a
                  href="https://wa.me/9779801109022?text=Hello%20Dr.%20Mishra,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment%20at%20Aarogya%20Dental%20Clinic,%20Damak."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-2 border border-emerald-500/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.whatsAppChat}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location & Interactive Google Maps Embed for Damak-1, Jhapa */}
          <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0D9488]">
                <MapPin className="w-4 h-4" />
                <span>{t.locationTitle}</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1E293B]">
                Falgunanda Chowk, Damak-1, Jhapa, Nepal
              </h4>
              <p className="text-xs text-slate-500">
                Landmark: Near Falgunanda Chowk, Mahendra Highway corridor • Easy parking and ground-floor dental reception.
              </p>
            </div>

            {/* Styled Map Container */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-200">
              <iframe
                title="Aarogya Dental Clinic Damak Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14258.97548239082!2d87.68239851167993!3d26.669888806282054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58e38f90c4bf9%3A0xb36f26488d5e8940!2sDamak%2C%20Jhapa%2C%20Nepal!5e0!3m2!1sen!2snp!4v1716300000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-125"
              />
              
              {/* Overlay Marker Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 text-xs font-bold text-[#1E293B]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span>Aarogya Dental Clinic — Damak-1</span>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-4 flex items-center justify-between text-xs text-slate-600">
              <span>Govt Regd: 01-32-0703 • PAN: 118898500</span>
              <a
                href="https://maps.google.com/?q=Falgunanda+Chowk+Damak+Jhapa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D9488] font-semibold hover:underline flex items-center gap-1"
              >
                Open in Google Maps
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Signboard Inspection Modal */}
      {signboardModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl p-4 sm:p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between text-white pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                <div>
                  <h3 className="font-serif text-lg font-bold">
                    Aarogya Dental Clinic — Official Physical Board & Procedures
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Falgunanda Chowk, Damak-1, Jhapa • Govt Regd: 01-32-0703 • PAN: 118898500
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSignboardModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* High-Res Image in Modal */}
            <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] rounded-xl overflow-hidden bg-black shadow-inner border border-slate-800">
              <Image
                src="/images/aarogya-official-signboard.jpg"
                alt="Aarogya Dental Clinic Full Signboard"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Key Verified Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300 pt-2">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">LEAD SURGEON</span>
                <span className="text-white font-bold">Dr. Ratna Kumar Mishra</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">COUNCIL REGISTRATION</span>
                <span className="text-[#2DD4BF] font-bold">NMC No. 13350</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">GOVT REGISTRATION</span>
                <span className="text-[#FBBF24] font-bold">01-32-0703</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-slate-400 block text-[10px]">DIRECT HOTLINE</span>
                <span className="text-white font-bold">9801109022</span>
              </div>
            </div>

            {/* Clinical Procedures Illustrated on Board */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[#0D9488]" />
                <span>Illustrated Clinical Procedures on Official Signboard:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono">
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-700/60">1. Dental Crown & Bridge</span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-700/60">2. Oral Diagnosis & Checkup</span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-700/60">3. Microscopic Endodontics (RCT)</span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-700/60">4. Ultrasonic Scaling & Cleaning</span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-700/60">5. Orthodontic Braces Alignment</span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-700/60">6. Smile Makeover & Aesthetics</span>
              </div>
            </div>

            {/* Action Bar inside modal */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <a
                href="tel:+9779801109022"
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>Call 9801109022</span>
              </a>
              <a
                href="https://wa.me/9779801109022?text=Hello%20Dr.%20Mishra,%20I%20would%20like%20to%20consult%20regarding%20treatments%20at%20Aarogya%20Dental%20Clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
