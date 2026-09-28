"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { HeroPromoComposition } from "./HeroPromoComposition";
import { Play, Pause, Sparkles, MonitorPlay, Shield, BookOpen, Activity } from "lucide-react";

// Dynamically import Player from @remotion/player with ssr: false for flawless Next.js hydration
const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video bg-[#0F172A] rounded-2xl flex items-center justify-center text-slate-400 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-ping" />
          <span>Initializing Remotion Cinema Player...</span>
        </div>
      </div>
    ),
  }
);

export const RemotionHeroPlayer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-700/80 shadow-2xl p-2 sm:p-3 group">
      
      {/* Top Header of Cinema Player */}
      <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-slate-400 border-b border-slate-800 mb-2">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white">REMOTION 4K VIDEO PLAYER</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-[#0D9488] font-bold">1080p • 60 FPS MOTION</span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline text-[#D97706]">AUTO-LOOP</span>
        </div>
      </div>

      {/* Main Remotion Player Canvas */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-inner bg-[#0F172A]">
        <Player
          component={HeroPromoComposition}
          durationInFrames={240}
          compositionWidth={1280}
          compositionHeight={720}
          fps={30}
          controls
          loop
          autoPlay
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Bottom Features Highlight */}
      <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-800/80 text-center text-xs">
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="text-[11px] font-mono text-[#0D9488] font-bold">SCENE 1</div>
          <div className="text-white text-xs font-semibold mt-0.5">NMC #13350</div>
        </div>
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="text-[11px] font-mono text-[#38BDF8] font-bold">SCENE 2</div>
          <div className="text-white text-xs font-semibold mt-0.5">Aarogya Clinic</div>
        </div>
        <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <div className="text-[11px] font-mono text-[#D97706] font-bold">SCENE 3</div>
          <div className="text-white text-xs font-semibold mt-0.5">2 Published Books</div>
        </div>
      </div>

    </div>
  );
};
