"use client";

import React, { useState } from "react";
import { Language } from "@/lib/translations";
import {
  BookOpen,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Users,
  FileText,
  Radio,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46V10.9M7.84 6.2c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.89 0 1.61-.72 1.61-1.6 0-.89-.72-1.61-1.61-1.61Z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="m10 15 5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73Z" />
  </svg>
);

const TwitterXIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface ConnectSocialHubProps {
  lang: Language;
}

export const ConnectSocialHub: React.FC<ConnectSocialHubProps> = ({ lang }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const socialLinks = [
    {
      id: "linkedin",
      platform: "LinkedIn",
      handle: "in/dr-ratnakumarmishra",
      stat: "5,800+ Connections",
      snippet: "Clinical maxillofacial surgery discussions, case reviews, and dental healthcare insights.",
      url: "https://linkedin.com",
      icon: LinkedInIcon,
      badge: "Professional Network",
      color: "#0D9488",
    },
    {
      id: "researchgate",
      platform: "ResearchGate",
      handle: "Ratna-Kumar-Mishra",
      stat: "1,420+ Citations & Reads",
      snippet: "Academic papers on rotary endodontics, periapical pathology, and clinical oral pharmacology.",
      url: "https://researchgate.net",
      icon: FileText,
      badge: "Clinical Science",
      color: "#0D9488",
    },
    {
      id: "youtube",
      platform: "YouTube / Podcasts",
      handle: "@DefaultDose",
      stat: "18,500+ Subscribers",
      snippet: "Recent: 'Ep. 24 — Painless Dentistry, Enamel Biology, and Writing The Lost Book'.",
      url: "https://youtube.com",
      icon: YouTubeIcon,
      badge: "Media & Dialogue",
      color: "#D97706",
    },
    {
      id: "twitter",
      platform: "Twitter / X",
      handle: "@RatnaMishraDoc",
      stat: "9,200+ Followers",
      snippet: "Recent Couplet: 'किनार खोज्दै हिँड्नेहरूले छालसँग डराउनु हुन्न... #OneCoupletADay'",
      url: "https://twitter.com",
      icon: TwitterXIcon,
      badge: "Daily Musings",
      color: "#D97706",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>
              {lang === "ne" ? "सञ्जाल तथा संवाद" : "Global Knowledge Network"}
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B]">
            {lang === "ne" ? "डा. मिश्रसँग जोडिनुहोस्" : "Connect Across Platforms"}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === "ne"
              ? "दन्त चिकित्सा अनुसन्धान, प्राज्ञिक छलफल र दैनिक साहित्यिक सृजनाका लागि विभिन्न डिजिटल माध्यममा जोडिनुहोस्।"
              : "Follow along for clinical dental cases, academic research citations, podcast dialogues, and daily poetic couplets."}
          </p>
        </div>

        {/* 4 Social Quick-Connect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-[#1E293B] group-hover:text-[#0D9488] group-hover:border-[#0D9488]/40 shadow-xs flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold bg-slate-200/60 px-2 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1E293B] group-hover:text-[#0D9488] transition-colors flex items-center justify-between">
                    <span>{item.platform}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <div className="text-xs font-mono font-semibold text-[#D97706] mt-1">
                    {item.stat}
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span className="font-mono text-[11px] text-slate-400">{item.handle}</span>
                  <span className="text-[#0D9488] font-semibold group-hover:underline">Follow</span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Newsletter Signup Block: "Subscribe to Dr. Mishra's Health & Literature Digest" */}
        <div className="bg-gradient-to-br from-[#1E293B] via-[#0f172a] to-[#1E293B] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D9488]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-sm">
              <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>
                {lang === "ne" ? "निःशुल्क डिजिटल बुलेटिन" : "Weekly Digest"}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              {lang === "ne"
                ? "डा. मिश्रको स्वास्थ्य तथा साहित्य डाइजेस्ट"
                : "Subscribe to Dr. Mishra's Health & Literature Digest"}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              {lang === "ne"
                ? "प्रत्येक साता दन्त स्वास्थ्य सम्बन्धी प्रमाणिक सल्लाह, क्लिनिकल अनुभव र डा. मिश्रका नयाँ मुक्तकहरू सिधै तपाईंको इनबक्समा।"
                : "A curated weekly dispatch of evidence-based dental care pearls, clinical updates, and philosophical stanzas. Zero spam; unsubscribe anytime."}
            </p>

            {subscribed ? (
              <div className="bg-white/10 border border-emerald-400/40 rounded-2xl p-6 max-w-md mx-auto backdrop-blur-md animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-serif text-lg font-bold text-white">
                  {lang === "ne" ? "धन्यवाद! तपाईं सदस्य बन्नुभयो।" : "You Are Subscribed!"}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === "ne"
                    ? "हाम्रो आगामी अंक चाँडै तपाईंको इमेलमा पठाइनेछ।"
                    : "Check your inbox for this week's featured clinical tip and couplet."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-lg mx-auto"
              >
                <input
                  required
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:bg-white/15 transition-all"
                />
                
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-medium text-sm shadow-lg shadow-[#0D9488]/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] shrink-0"
                >
                  <span>{lang === "ne" ? "सदस्य बन्नुहोस्" : "Subscribe"}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-400">
              <span>Over 6,400 medical professionals, students, and readers subscribed.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
