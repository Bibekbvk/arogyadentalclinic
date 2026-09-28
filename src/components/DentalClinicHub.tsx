"use client";

import React, { useState } from "react";
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
  Users
} from "lucide-react";

interface DentalClinicHubProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const DentalClinicHub: React.FC<DentalClinicHubProps> = ({
  lang,
  onOpenBooking,
}) => {
  const t = translations[lang].clinic;
  const [selectedService, setSelectedService] = useState<string>("aesthetic");

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
          <div className="flex items-center gap-4 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-3 sm:p-4 self-start md:self-auto shadow-xs">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shadow-xs border border-slate-100 p-1">
              <Image
                src="/images/aarogya-dental-clinic-logo.jpg"
                alt="Aarogya Dental Clinic Official Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="font-serif font-bold text-[#1E293B] text-base">
                Aarogya Dental Clinic
              </div>
              <div className="text-xs text-[#0D9488] font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified Clinical Facility
              </div>
              <div className="text-[11px] text-slate-500">
                Director: Dr. Ratna Kumar Mishra
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
                Consult directly with Dr. Ratna Kumar Mishra at Aarogya Dental Clinic. We reserve dedicated slots for routine checkups, aesthetic procedures, and urgent dental relief.
              </p>

              {/* Hours Pill Box */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-slate-200">
                  <span className="font-medium">{t.hoursMorning}</span>
                  <span className="text-xs bg-[#0D9488]/30 text-[#2dd4bf] px-2 py-0.5 rounded">OPD</span>
                </div>
                <div className="flex items-center justify-between text-slate-200">
                  <span className="font-medium">{t.hoursEvening}</span>
                  <span className="text-xs bg-[#0D9488]/30 text-[#2dd4bf] px-2 py-0.5 rounded">Surgeries</span>
                </div>
                <div className="text-xs text-slate-400 pt-1 border-t border-white/10">
                  {t.daysAvailable}
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
                  href="tel:+9779800000000"
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2dd4bf]" />
                  <span>{t.callClinic}</span>
                </a>
                
                <a
                  href="https://wa.me/9779800000000?text=Hello%20Dr.%20Mishra,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment%20at%20Aarogya%20Dental%20Clinic."
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

          {/* Location & Interactive Google Maps Embed Placeholder */}
          <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0D9488]">
                <MapPin className="w-4 h-4" />
                <span>{t.locationTitle}</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-[#1E293B]">
                {t.locationAddress}
              </h4>
              <p className="text-xs text-slate-500">
                Landmark: {t.landmark} • Easy parking and accessible ground-floor clinical reception.
              </p>
            </div>

            {/* Styled Map Container */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-200">
              <iframe
                title="Aarogya Dental Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113645.74805728373!2d85.22851214081079!3d26.963495449767215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993541ce1f8c14d%3A0xb36f26488d5e8940!2sRautahat%2C%20Nepal!5e0!3m2!1sen!2snp!4v1716300000000!5m2!1sen!2snp"
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
                <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-ping" />
                <span>Aarogya Dental Clinic</span>
              </div>
            </div>

            {/* Directions Action */}
            <div className="pt-4 flex items-center justify-between text-xs text-slate-600">
              <span>GPS Coordinates: 26.96° N, 85.28° E</span>
              <a
                href="https://maps.google.com/?q=Rautahat+Nepal"
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
    </section>
  );
};
