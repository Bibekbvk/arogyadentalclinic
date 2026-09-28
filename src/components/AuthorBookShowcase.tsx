"use client";

import React, { useState } from "react";
import { booksData, BookData, ChapterItem, translations, Language } from "@/lib/translations";
import {
  BookOpen,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShoppingBag,
  List,
  Quote,
  X,
  FileText,
  Calendar,
  CheckCircle2
} from "lucide-react";

interface AuthorBookShowcaseProps {
  lang: Language;
}

export const AuthorBookShowcase: React.FC<AuthorBookShowcaseProps> = ({ lang }) => {
  const t = translations[lang].showcase;
  const [expandedSynopsis, setExpandedSynopsis] = useState<{ [key: string]: boolean }>({});
  const [activeModalBook, setActiveModalBook] = useState<BookData | null>(null);

  const toggleSynopsis = (bookId: string) => {
    setExpandedSynopsis((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  return (
    <section id="publications" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B]">
            {t.title}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Alternating Spotlight Cards for Books */}
        <div className="space-y-12">
          {booksData.map((book, idx) => {
            const isReversed = idx % 2 === 1;
            const isExpanded = !!expandedSynopsis[book.id];

            return (
              <div
                key={book.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle decorative glow */}
                <div
                  className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none"
                  style={{
                    backgroundColor: book.id === "lost-book" ? "#D97706" : "#0D9488",
                  }}
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Realistic 3D Book Mockup Placeholder Column */}
                  <div
                    className={`lg:col-span-5 flex justify-center ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative group perspective-1200 cursor-pointer">
                      
                      {/* 3D Book Cover Object */}
                      <div
                        className="relative w-64 sm:w-72 aspect-[1/1.45] rounded-r-2xl rounded-l-md p-6 flex flex-col justify-between text-white transition-transform duration-500 transform group-hover:-rotate-y-12 group-hover:rotate-x-3 group-hover:scale-105"
                        style={{
                          backgroundColor:
                            book.id === "lost-book" ? "#1E293B" : "#0f766e",
                          boxShadow:
                            "15px 20px 40px -10px rgba(30, 41, 59, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 6px 0 10px rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        {/* Book Spine Crease Line */}
                        <div className="absolute top-0 left-0 bottom-0 w-5 bg-gradient-to-r from-black/40 via-black/10 to-transparent rounded-l-md" />
                        <div className="absolute top-0 left-5 bottom-0 w-[1px] bg-white/20" />

                        {/* Gold Corner Accents */}
                        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D97706]/70" />
                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D97706]/70" />

                        {/* Ribbon Bookmark */}
                        <div className="absolute -top-1 right-8 w-4 h-12 bg-[#D97706] shadow-md shadow-black/30 rounded-b-xs transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />

                        {/* Top Header on Book */}
                        <div className="pl-4">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#D97706] font-bold block">
                            {book.badge}
                          </span>
                          <span className="text-xs text-slate-300 font-serif">
                            Dr. Ratna Kumar Mishra
                          </span>
                        </div>

                        {/* Book Center Title Foil */}
                        <div className="pl-4 my-auto py-4">
                          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                            {book.title}
                          </h3>
                          <p className="text-xs text-slate-300 italic mt-2 font-serif">
                            {book.nepaliTitle}
                          </p>
                        </div>

                        {/* Book Bottom Publisher Footnote */}
                        <div className="pl-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                          <span className="font-mono text-[#D97706] font-semibold">
                            {book.year}
                          </span>
                          <span className="truncate max-w-[130px]">Neopath Press</span>
                        </div>
                      </div>

                      {/* Perspective Bottom Shadow */}
                      <div className="w-56 h-6 bg-slate-900/20 blur-xl rounded-full mx-auto mt-4 transform scale-90 group-hover:scale-100 transition-transform" />
                    </div>
                  </div>

                  {/* Editorial Details & Action Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 text-left ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    
                    {/* Badges & Publication Meta */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-bold border border-[#D97706]/30">
                        <Award className="w-3.5 h-3.5" />
                        {book.categoryBadge}
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {book.year}
                      </span>

                      <span className="text-xs font-mono text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-lg">
                        {book.isbn}
                      </span>
                    </div>

                    {/* Book Main Title & Subtitle */}
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-sm font-serif italic text-slate-500 mt-1">
                        {book.nepaliTitle} — {book.publisher}
                      </p>
                    </div>

                    {/* Expandable Synopsis / "About the Book" Drawer */}
                    <div className="bg-[#FAF9F6] border border-slate-200/80 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E293B] flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{t.aboutTheBook}</span>
                        </h4>
                        
                        <button
                          type="button"
                          onClick={() => toggleSynopsis(book.id)}
                          className="text-xs font-semibold text-[#0D9488] hover:underline flex items-center gap-1"
                        >
                          <span>{isExpanded ? t.showLess : t.showMore}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <p
                        className={`text-xs sm:text-sm text-slate-700 leading-relaxed transition-all duration-300 ${
                          isExpanded ? "" : "line-clamp-3"
                        }`}
                      >
                        {lang === "ne" ? book.nepaliSynopsis : book.synopsis}
                      </p>

                      {isExpanded && (
                        <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-600 space-y-1">
                          <p className="font-semibold text-[#1E293B]">
                            {lang === "ne" ? "विशेषताहरू:" : "Volume Highlights:"}
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                            {book.id === "lost-book" ? (
                              <>
                                <li>Signature "One Couplet a Day" meditative verses</li>
                                <li>Deep inquiry into human mortality, healing, and emotional dignity</li>
                                <li>Bilingual philosophical stanzas in English and Nepali</li>
                              </>
                            ) : (
                              <>
                                <li>High-yield NMCLE licensure test algorithms and mnemonics</li>
                                <li>Painless anesthesia dosage calculations & medical emergencies</li>
                                <li>Rotary endodontics, prostho margins, and surgical extractions</li>
                              </>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {/* Order Online CTA */}
                      <a
                        href={book.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E293B] hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-[0.98]"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#D97706]" />
                        <span>{t.orderOnline}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>

                      {/* Read Free Excerpt & Quick TOC Preview */}
                      <button
                        type="button"
                        onClick={() => setActiveModalBook(book)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#0D9488] text-[#1E293B] text-xs sm:text-sm font-semibold shadow-xs hover:bg-slate-50 transition-all active:scale-[0.98]"
                      >
                        <List className="w-4 h-4 text-[#0D9488]" />
                        <span>{t.quickPreview}</span>
                      </button>

                      {/* Jump to 3D Page Turner */}
                      <a
                        href="#publications"
                        className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-semibold text-[#0D9488] hover:underline"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{t.openIn3D}</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Banner: Philosophy on Bridging Medical Science & Literature */}
        <div className="mt-16 bg-gradient-to-br from-[#1E293B] to-[#0f172a] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold line accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#D97706]/20 border border-[#D97706]/40 text-[#D97706] flex items-center justify-center mx-auto shadow-inner">
              <Quote className="w-6 h-6" />
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-slate-100 leading-relaxed italic">
              {t.quoteBannerText}
            </blockquote>

            <div className="pt-2">
              <div className="font-serif text-lg font-bold text-white">
                {t.quoteBannerAuthor}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-semibold mt-1">
                {t.quoteBannerSubtitle}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Director, Aarogya Dental Clinic • Author, The Lost Book & The Crash Book
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Quick Chapter Preview & Table of Contents Modal */}
      {activeModalBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-[#1E293B] text-white p-6 relative flex items-center justify-between border-b border-slate-700">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                  {activeModalBook.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  {activeModalBook.title}
                </h3>
                <p className="text-xs text-slate-300 font-serif italic mt-0.5">
                  {activeModalBook.nepaliTitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalBook(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content / Chapters List */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <List className="w-4 h-4 text-[#0D9488]" />
                  <span>{t.tableOfContents}</span>
                </h4>

                <div className="space-y-3">
                  {activeModalBook.chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 hover:border-[#0D9488]/40 hover:bg-white transition-all flex items-start gap-4"
                    >
                      <span className="w-8 h-8 rounded-xl bg-slate-200/80 text-slate-700 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {ch.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-serif font-bold text-[#1E293B] text-base">
                            {ch.title}
                          </h5>
                          {ch.nepaliTitle && (
                            <span className="text-xs text-slate-400 font-serif italic hidden sm:inline">
                              {ch.nepaliTitle}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {ch.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Excerpt Box */}
              <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] p-5 rounded-r-2xl space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D97706] font-bold block">
                  Featured Excerpt from Page 1:
                </span>
                <p className="font-serif text-sm sm:text-base text-[#1E293B] italic leading-relaxed">
                  {activeModalBook.pages[0].quoteOrPearl}
                </p>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <a
                href={activeModalBook.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{t.orderOnline}</span>
              </a>

              <a
                href="#publications"
                onClick={() => setActiveModalBook(null)}
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-[#D97706]" />
                <span>{t.openIn3D}</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
