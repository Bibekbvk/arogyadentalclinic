"use client";

import React, { useState } from "react";
import {
  blogPostsData,
  dailyDentalTips,
  BlogPost,
  BlogCategory,
  DentalTip,
} from "@/lib/blogData";
import { Language } from "@/lib/translations";
import {
  Clock,
  Sparkles,
  RotateCw,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Filter,
  CheckCircle,
  X,
  Stethoscope,
  Microscope,
  Feather,
  HeartPulse,
  Quote,
  Globe
} from "lucide-react";

interface BlogAndInsightsProps {
  lang: Language;
}

export const BlogAndInsights: React.FC<BlogAndInsightsProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all");
  const [activeArticleModal, setActiveArticleModal] = useState<BlogPost | null>(null);

  // Daily Dental Tip Flashcard State
  const [tipIndex, setTipIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const currentTip = dailyDentalTips[tipIndex];

  const handleNextTip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setTimeout(() => {
      setTipIndex((prev) => (prev + 1) % dailyDentalTips.length);
    }, 200);
  };

  const categories = [
    { id: "all", labelEn: "All Insights", labelNe: "सबै लेखहरू" },
    { id: "oral-health", labelEn: "Oral Health Tips", labelNe: "दन्त स्वास्थ्य सुझाव" },
    { id: "clinical-research", labelEn: "Clinical Research", labelNe: "क्लिनिकल अनुसन्धान" },
    { id: "author-musings", labelEn: "Author Musings", labelNe: "लेखकीय विचार" },
    { id: "patient-guides", labelEn: "Patient Guides", labelNe: "बिरामी निर्देशिका" },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPostsData
      : blogPostsData.filter((post) => post.category === activeCategory);

  const getPostIcon = (type: BlogPost["iconType"]) => {
    switch (type) {
      case "tooth":
        return <HeartPulse className="w-5 h-5 text-[#0D9488]" />;
      case "microscope":
        return <Microscope className="w-5 h-5 text-[#0D9488]" />;
      case "feather":
        return <Feather className="w-5 h-5 text-[#D97706]" />;
      case "guide":
        return <Stethoscope className="w-5 h-5 text-[#0D9488]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#0D9488]" />;
    }
  };

  return (
    <section id="insights" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {lang === "ne" ? "विचार, अनुसन्धान र स्वास्थ्य" : "Bilingual Insights & Knowledge Hub"}
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B]">
              {lang === "ne" ? "दन्त चिकित्सा तथा लेखकीय ब्लग" : "Clinical Wisdom & Literary Musings"}
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              {lang === "ne"
                ? "दन्त स्वास्थ्य सम्बन्धी आधुनिक अनुसन्धान, बिरामी सचेतना र डा. रत्न कुमार मिश्रका विशिष्ट साहित्यिक विचारहरू।"
                : "Evidence-based maxillofacial insights, patient prevention guides, and philosophical ruminations on healthcare and human life."}
            </p>
          </div>

          <div className="text-xs font-mono font-medium text-slate-500 bg-white border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xs self-start md:self-auto">
            <Globe className="w-4 h-4 text-[#0D9488]" />
            <span>{lang === "ne" ? "नेपाली र अंग्रेजीमा उपलब्ध" : "Bilingual Edition (EN • नेपाली)"}</span>
          </div>
        </div>

        {/* Interactive Feature: "Daily Dental Tip" Flip Card Mini-Widget */}
        <div className="mb-14 bg-gradient-to-r from-teal-900/10 via-slate-900/5 to-amber-900/10 p-1 rounded-3xl border border-slate-200/80 shadow-md">
          <div className="bg-white rounded-[22px] p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center font-bold">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D97706] font-bold block">
                    {lang === "ne" ? "दैनिक दन्त सल्लाह र मुक्तक" : "Interactive Flashcard"}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E293B]">
                    {lang === "ne" ? "दैनिक दन्त सल्लाह (Daily Dental Tip)" : "Daily Dental Tip & Clinical Pearl"}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  {lang === "ne" ? "कार्ड पल्टाउन क्लिक गर्नुहोस्" : "Click card to flip"}
                </span>
                <button
                  type="button"
                  onClick={handleNextTip}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#0D9488]" />
                  <span>{lang === "ne" ? "अर्को टिप हेर्नुहोस्" : "Next Tip"}</span>
                </button>
              </div>
            </div>

            {/* 3D Flippable Flashcard */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="mt-6 cursor-pointer relative min-h-[170px] sm:min-h-[150px] perspective-1200 group"
            >
              <div
                className={`w-full h-full rounded-2xl p-6 transition-all duration-500 preserve-3d border ${
                  isFlipped
                    ? "bg-[#1E293B] text-white border-slate-700 shadow-xl"
                    : "bg-[#FAF9F6] text-[#1E293B] border-slate-200 hover:border-[#0D9488]/50 shadow-sm"
                }`}
              >
                {!isFlipped ? (
                  /* Front: Clinical Question */
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-0.5 rounded-md">
                        {currentTip.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Tip #{currentTip.id} of {dailyDentalTips.length}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1E293B] group-hover:text-[#0D9488] transition-colors">
                      {lang === "ne" ? currentTip.questionNe : currentTip.questionEn}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-[#0D9488] font-semibold pt-2">
                      <span className="flex items-center gap-1">
                        <RotateCw className="w-3.5 h-3.5" />
                        {lang === "ne" ? "उत्तर र मुक्तक हेर्न कार्ड पल्टाउनुहोस् ↻" : "Click to reveal clinical explanation & couplet ↻"}
                      </span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ) : (
                  /* Back: Explanation + One Couplet */
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#2dd4bf] font-mono">
                      <span>✓ Clinical Protocol</span>
                      <span className="text-slate-400">Click to flip back ↺</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {lang === "ne" ? currentTip.answerNe : currentTip.answerEn}
                    </p>

                    <div className="pt-2 border-t border-slate-700 flex items-center gap-2 text-xs font-serif italic text-[#D97706]">
                      <Quote className="w-3.5 h-3.5 shrink-0" />
                      <span>{lang === "ne" ? currentTip.coupletNe : currentTip.coupletEn}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>{lang === "ne" ? "फिल्टर:" : "Filter:"}</span>
          </div>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as BlogCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/20 scale-102"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {lang === "ne" ? cat.labelNe : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Clean 3-Column Responsive Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const title = lang === "ne" ? post.titleNe : post.titleEn;
            const excerpt = lang === "ne" ? post.excerptNe : post.excerptEn;
            const date = lang === "ne" ? post.dateNe : post.dateEn;
            const categoryLabel =
              lang === "ne" ? post.categoryLabelNe : post.categoryLabelEn;

            return (
              <article
                key={post.id}
                onClick={() => setActiveArticleModal(post)}
                className="cursor-pointer bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Featured Graphic Card Header with Reading Time Badge */}
                  <div
                    className={`relative w-full h-44 bg-gradient-to-br ${post.imageBgGradient} p-5 flex flex-col justify-between text-white overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-radial-gradient opacity-10" />

                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                        {categoryLabel}
                      </span>

                      {/* Reading Time Badge */}
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full text-slate-200">
                        <Clock className="w-3 h-3 text-[#2dd4bf]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        {getPostIcon(post.iconType)}
                      </div>
                      <span className="text-xs font-mono text-slate-300">
                        Dr. Ratna Kumar Mishra
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    {/* Date and Language Indicator */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span>{date}</span>
                      <span className="flex items-center gap-1 text-[#0D9488] font-semibold text-[11px]">
                        <Globe className="w-3 h-3" />
                        <span>EN • NE</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E293B] group-hover:text-[#0D9488] transition-colors leading-snug line-clamp-2">
                      {title}
                    </h3>

                    {/* Short 2-line excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0D9488]">
                  <span>{lang === "ne" ? "पूर्ण लेख पढ्नुहोस्" : "Read Full Article"}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#1E293B] text-white p-6 relative flex items-center justify-between border-b border-slate-700">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                  {lang === "ne"
                    ? activeArticleModal.categoryLabelNe
                    : activeArticleModal.categoryLabelEn}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  {lang === "ne"
                    ? activeArticleModal.titleNe
                    : activeArticleModal.titleEn}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-300 mt-2">
                  <span>
                    {lang === "ne"
                      ? activeArticleModal.dateNe
                      : activeArticleModal.dateEn}
                  </span>
                  <span>•</span>
                  <span>{activeArticleModal.readTime}</span>
                  <span>•</span>
                  <span className="text-[#0D9488]">Dr. Ratna Kumar Mishra</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticleModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              {(lang === "ne"
                ? activeArticleModal.contentNe
                : activeArticleModal.contentEn
              ).map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-[#1E293B] block">
                  Author & Clinical Director:
                </span>
                <p>
                  Dr. Ratna Kumar Mishra (B.D.S. BPKIHS, NMC 13350) — Director at Aarogya Dental Clinic, Author of "The Lost Book (Sarobar Sarobar)" and "The Crash Book (Dental Crash Course)".
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Share clinical knowledge with patients & colleagues.
              </span>
              <button
                type="button"
                onClick={() => setActiveArticleModal(null)}
                className="px-5 py-2 rounded-xl bg-[#0D9488] text-white text-xs font-semibold hover:bg-[#0f766e] transition-colors"
              >
                Done Reading
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
