"use client";

import React, { useState, useEffect, useRef } from "react";
import { booksData, BookData, translations, Language } from "@/lib/translations";
import {
  BookOpen,
  Play,
  Pause,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Bookmark,
  Quote,
  Flame,
  Award
} from "lucide-react";

interface AnimatedBookSectionProps {
  lang: Language;
}

export const AnimatedBookSection: React.FC<AnimatedBookSectionProps> = ({ lang }) => {
  const t = translations[lang].books;
  const [activeBookId, setActiveBookId] = useState<string>("lost-book");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCoverOpen, setIsCoverOpen] = useState<boolean>(true);
  const [isAutoFlipping, setIsAutoFlipping] = useState<boolean>(true);
  const [isFlippingAnim, setIsFlippingAnim] = useState<boolean>(false);
  const autoFlipTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentBook = booksData.find((b) => b.id === activeBookId) || booksData[0];
  const totalPages = currentBook.pages.length;

  // Auto-flipping logic: automatically advances pages sequentially
  useEffect(() => {
    if (isAutoFlipping) {
      autoFlipTimerRef.current = setInterval(() => {
        setIsFlippingAnim(true);
        setTimeout(() => {
          setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
          setIsFlippingAnim(false);
        }, 350);
      }, 3200);
    } else {
      if (autoFlipTimerRef.current) {
        clearInterval(autoFlipTimerRef.current);
      }
    }

    return () => {
      if (autoFlipTimerRef.current) {
        clearInterval(autoFlipTimerRef.current);
      }
    };
  }, [isAutoFlipping, totalPages]);

  // Flip Next Page
  const handleNextPage = () => {
    setIsFlippingAnim(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
      setIsFlippingAnim(false);
    }, 200);
  };

  // Flip Previous Page
  const handlePrevPage = () => {
    setIsFlippingAnim(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev <= 1 ? totalPages : prev - 1));
      setIsFlippingAnim(false);
    }, 200);
  };

  // Random Page Flipping Engine (as requested: randomly flip 10-15 pages)
  const handleRandomFlip = () => {
    setIsAutoFlipping(false);
    let flips = 0;
    const targetFlips = Math.floor(Math.random() * 6) + 10; // 10 to 15 flips
    const interval = setInterval(() => {
      setIsFlippingAnim(true);
      setCurrentPage((prev) => {
        const next = Math.floor(Math.random() * totalPages) + 1;
        return next === prev ? (next % totalPages) + 1 : next;
      });
      setTimeout(() => setIsFlippingAnim(false), 120);
      flips++;
      if (flips >= targetFlips) {
        clearInterval(interval);
      }
    }, 180);
  };

  const activePageData = currentBook.pages[currentPage - 1];

  return (
    <section id="publications" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D97706]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D97706]/10 text-[#D97706] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.sectionBadge}</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B]">
            {t.title}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>

          {/* Book Switcher Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            {booksData.map((book) => {
              const isActive = activeBookId === book.id;
              return (
                <button
                  key={book.id}
                  type="button"
                  onClick={() => {
                    setActiveBookId(book.id);
                    setCurrentPage(1);
                  }}
                  className={`px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#1E293B] text-white shadow-md shadow-[#1E293B]/20 scale-102"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      isActive ? "text-[#D97706]" : "text-slate-400"
                    }`}
                  />
                  <span>{book.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive 3D Book Stage */}
        <div className="max-w-4xl mx-auto">
          
          {/* Top Control Bar for Book Animation */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
            
            {/* Auto-Flip Status Pill */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsAutoFlipping(!isAutoFlipping)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  isAutoFlipping
                    ? "bg-[#0D9488] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {isAutoFlipping ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>{t.pause}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>{t.play}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleRandomFlip}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#D97706]/10 text-[#D97706] hover:bg-[#D97706]/20 transition-colors flex items-center gap-1.5"
                title="Randomly flip 10-15 pages"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>{t.flipRandom}</span>
              </button>
            </div>

            {/* Current Page Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevPage}
                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="text-xs font-mono font-bold text-[#1E293B] px-3 py-1 bg-slate-100 rounded-lg">
                {t.pageIndicator} {currentPage} {t.of} {totalPages}
              </div>

              <button
                type="button"
                onClick={handleNextPage}
                className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Realistic 3D Open Book Container */}
          <div className="relative perspective-1200 py-4">
            
            {/* Realistic Open Book Two-Page Spread */}
            <div className="relative bg-[#FAF9F6] rounded-2xl shadow-2xl border border-slate-300/80 overflow-hidden flex flex-col md:flex-row min-h-[460px] preserve-3d">
              
              {/* Left Page (Spine & Metadata / Left Chapter) */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 bg-[#FDFBF7] border-b md:border-b-0 md:border-r border-slate-200 relative flex flex-col justify-between">
                
                {/* Book Spine Shadow on fold */}
                <div className="hidden md:block absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-slate-900/10 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#D97706] font-bold">
                      {currentBook.badge}
                    </span>
                    <span className="text-xs font-serif text-slate-400">
                      Dr. Ratna Kumar Mishra
                    </span>
                  </div>

                  <div className="pt-6">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      {activePageData.chapter || `Section ${currentPage}`}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B] leading-tight">
                      {activePageData.title}
                    </h3>
                  </div>

                  {/* Left Page Content */}
                  <div className="pt-6 space-y-3">
                    {activePageData.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${
                          activeBookId === "lost-book"
                            ? "font-serif text-slate-800 italic"
                            : "font-sans text-slate-700 font-normal"
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <span>{activePageData.footerNote || currentBook.title}</span>
                  <span className="font-mono">Page {currentPage * 2 - 1}</span>
                </div>
              </div>

              {/* Right Page (Flipping Surface with 3D Page Turn Animation) */}
              <div
                className={`w-full md:w-1/2 p-6 sm:p-8 bg-[#FAF9F6] relative flex flex-col justify-between transition-all duration-300 origin-left ${
                  isFlippingAnim
                    ? "opacity-50 scale-[0.98] -rotate-y-6 shadow-2xl"
                    : "opacity-100 scale-100 rotate-y-0"
                }`}
              >
                {/* Book Spine Shadow on left side of right page */}
                <div className="hidden md:block absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-slate-900/10 to-transparent pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <span className="text-xs font-serif text-slate-400 italic">
                      {currentBook.nepaliTitle}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0D9488]">
                      <Sparkles className="w-3 h-3" />
                      <span>Authorized Preview</span>
                    </div>
                  </div>

                  {/* Highlight Callout / Pearl on Right Page */}
                  <div className="pt-8">
                    {activeBookId === "lost-book" ? (
                      <div className="bg-[#D97706]/10 border-l-4 border-[#D97706] p-5 rounded-r-xl space-y-2">
                        <Quote className="w-6 h-6 text-[#D97706] opacity-70" />
                        <p className="font-serif text-base sm:text-lg text-[#1E293B] italic leading-relaxed">
                          {activePageData.quoteOrPearl}
                        </p>
                        <span className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider block pt-2">
                          — From "The Lost Book (Sarobar Sarobar)"
                        </span>
                      </div>
                    ) : (
                      <div className="bg-[#0D9488]/10 border-l-4 border-[#0D9488] p-5 rounded-r-xl space-y-2">
                        <Award className="w-6 h-6 text-[#0D9488]" />
                        <p className="font-sans text-sm sm:text-base font-semibold text-[#1E293B] leading-relaxed">
                          {activePageData.quoteOrPearl}
                        </p>
                        <span className="text-xs font-mono font-bold text-[#0D9488] uppercase tracking-wider block pt-2">
                          — Essential NMCLE Dental Exam Rule
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Summary Notes */}
                  <div className="pt-6 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      {activeBookId === "lost-book"
                        ? "Sarobar Sarobar meditates upon life's quiet intersections—where medicine, emotion, and self-discovery merge into enduring couplets."
                        : "The Dental Crash Course isolates the highest-yield clinical guidelines, pharmacology tables, and surgical principles needed for modern clinical dentistry."}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">Page {currentPage * 2}</span>
                  <button
                    type="button"
                    onClick={handleNextPage}
                    className="text-[#0D9488] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Turn Page</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Decorative Bottom Corner Dog-Ear Curl */}
                <div
                  onClick={handleNextPage}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-slate-300 to-transparent cursor-pointer rounded-tl-xl hover:w-10 hover:h-10 transition-all"
                  title="Click to turn page"
                />
              </div>

            </div>

            {/* Quick Page Jump Dots / Scrubber */}
            <div className="flex items-center justify-center gap-1.5 pt-6">
              {currentBook.pages.map((p) => (
                <button
                  key={p.pageNumber}
                  type="button"
                  onClick={() => {
                    setIsAutoFlipping(false);
                    setCurrentPage(p.pageNumber);
                  }}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    currentPage === p.pageNumber
                      ? "w-8 bg-[#0D9488]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Jump to page ${p.pageNumber}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
