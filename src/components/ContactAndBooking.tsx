"use client";

import React, { useState } from "react";
import { Language } from "@/lib/translations";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  AlertTriangle,
  Stethoscope,
  BookOpen,
  Send,
  CheckCircle2,
  Building,
  Sparkles,
  ShieldCheck,
  MessageSquare
} from "lucide-react";

interface ContactAndBookingProps {
  lang: Language;
}

export const ContactAndBooking: React.FC<ContactAndBookingProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<"patient" | "speaking">("patient");

  // Tab 1: Patient Form State
  const [patientSubmitted, setPatientSubmitted] = useState(false);
  const [patientForm, setPatientForm] = useState({
    name: "",
    phone: "",
    treatment: "aesthetic",
    branch: "damak",
    date: "",
    timeSlot: "morning",
    notes: "",
  });

  // Tab 2: Speaking Form State
  const [speakingSubmitted, setSpeakingSubmitted] = useState(false);
  const [speakingForm, setSpeakingForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    engagementType: "lecture",
    proposedDate: "",
    mode: "in-person",
    message: "",
  });

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPatientSubmitted(true);
  };

  const handleSpeakingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSpeakingSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488]/10 text-[#0D9488] text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>
              {lang === "ne" ? "सम्पर्क तथा भेटघाट" : "Inquiries & Appointments"}
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E293B]">
            {lang === "ne" ? "क्लिनिक भेट तथा प्राज्ञिक संवाद" : "Consultation & Speaking Inquiries"}
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === "ne"
              ? "आरोग्य डेन्टल क्लिनिकमा दन्त परीक्षण निश्चित गर्न वा साहित्यिक/चिकित्सा प्राज्ञिक कार्यक्रमका लागि तलको फारम छान्नुहोस्।"
              : "Direct dual-pathway portal: Schedule a clinical consultation at Aarogya Dental Clinic or invite Dr. Mishra for medical lectures, book readings, and media engagements."}
          </p>
        </div>

        {/* Emergency Contact Notice Highlighted in Warm Amber (#D97706 / #B45309) */}
        <div className="mb-12 bg-amber-500/10 border-2 border-[#D97706] rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D97706] text-white flex items-center justify-center shrink-0 shadow-md">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B45309] font-bold">
                    {lang === "ne" ? "आकस्मिक दन्त सेवा" : "Urgent Dental Emergency Protocol"}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1E293B] mt-0.5">
                  {lang === "ne"
                    ? "तीव्र दुखाइ, अनुहार सुन्निएको वा दाँत फुटेको आकस्मिक अवस्था?"
                    : "Severe Toothache, Facial Swelling, or Traumatic Tooth Avulsion?"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-2xl leading-relaxed">
                  {lang === "ne"
                    ? "यदि दाँत जरासहित फुटेको छ भने, दाँतलाई चिसो दुधमा राखी तुरुन्त ६० मिनेटभित्र क्लिनिक आउनुहोस्। आकस्मिक फोन:"
                    : "For knocked-out (avulsed) teeth, preserve the tooth in cold milk without scrubbing the root and seek emergency surgical reimplantation within 60 minutes. Call our 24/7 desk immediately:"}
                </p>
              </div>
            </div>

            <a
              href="tel:+9779801109022"
              className="px-6 py-3 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all active:scale-[0.98] shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === "ne" ? "आकस्मिक हटलाइन: ९८०११०९०२२" : "Emergency Call: +977 9801109022"}</span>
            </a>
          </div>
        </div>

        {/* Tabbed Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Tab Selection Navigation */}
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50/80">
            <button
              type="button"
              onClick={() => setActiveTab("patient")}
              className={`py-4 px-6 text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
                activeTab === "patient"
                  ? "bg-white text-[#0D9488] border-b-2 border-[#0D9488] shadow-xs"
                  : "text-slate-500 hover:text-[#1E293B] hover:bg-slate-100"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>{lang === "ne" ? "१. दन्त बिरामी परामर्श" : "Tab 1: Patient Consultation"}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("speaking")}
              className={`py-4 px-6 text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all ${
                activeTab === "speaking"
                  ? "bg-white text-[#D97706] border-b-2 border-[#D97706] shadow-xs"
                  : "text-slate-500 hover:text-[#1E293B] hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{lang === "ne" ? "२. साहित्यिक तथा प्राज्ञिक संवाद" : "Tab 2: Literary / Academic Speaking"}</span>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {activeTab === "patient" ? (
              /* Tab 1: Patient Consultation Form */
              <div>
                {patientSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                      {lang === "ne" ? "परामर्श अनुरोध प्राप्त भयो!" : "Consultation Request Received"}
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {lang === "ne"
                        ? "धन्यवाद। आरोग्य डेन्टल क्लिनिकको रिसेप्शनले तपाईंलाई केही मिनेटमै सम्पर्क गरी समय निश्चित गर्नेछ।"
                        : "Thank you. Our clinic coordinator will contact you shortly to confirm your consultation time and clinical preparation details."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setPatientSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#0D9488] text-white text-xs font-semibold hover:bg-[#0f766e] transition-colors"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePatientSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{lang === "ne" ? "बिरामीको नाम" : "Patient Full Name"}</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Siddhartha Sharma"
                          value={patientForm.name}
                          onChange={(e) => setPatientForm({ ...patientForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{lang === "ne" ? "सम्पर्क फोन" : "Mobile Phone"}</span>
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+977 98XXXXXXXX"
                          value={patientForm.phone}
                          onChange={(e) => setPatientForm({ ...patientForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Stethoscope className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{lang === "ne" ? "उपचारको प्रकार" : "Select Treatment"}</span>
                        </label>
                        <select
                          value={patientForm.treatment}
                          onChange={(e) => setPatientForm({ ...patientForm, treatment: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all bg-white"
                        >
                          <option value="aesthetic">Aesthetic Dentistry & Veneers</option>
                          <option value="surgery">Oral & Wisdom Tooth Surgery</option>
                          <option value="root-canal">Microscopic Endodontics (RCT)</option>
                          <option value="pediatric">Pediatric & Preventive Care</option>
                          <option value="general">Comprehensive Dental Checkup</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{lang === "ne" ? "क्लिनिक शाखा" : "Clinic Branch"}</span>
                        </label>
                        <select
                          value={patientForm.branch}
                          onChange={(e) => setPatientForm({ ...patientForm, branch: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all bg-white"
                        >
                          <option value="damak">Aarogya Dental Clinic — Falgunanda Chowk, Damak-1, Jhapa (Main Facility)</option>
                          <option value="referral">Specialist Referral / Surgical Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{lang === "ne" ? "रोजेको मिति" : "Preferred Date"}</span>
                        </label>
                        <input
                          required
                          type="date"
                          value={patientForm.date}
                          onChange={(e) => setPatientForm({ ...patientForm, date: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#0D9488]" />
                          <span>{lang === "ne" ? "समय तालिका" : "Time Slot"}</span>
                        </label>
                        <select
                          value={patientForm.timeSlot}
                          onChange={(e) => setPatientForm({ ...patientForm, timeSlot: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all bg-white"
                        >
                          <option value="morning">Morning OPD (09:30 AM – 01:30 PM)</option>
                          <option value="evening">Evening Surgeries (05:00 PM – 08:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        {lang === "ne" ? "लक्षण वा विशेष अनुरोध" : "Symptoms or Clinical Notes (Optional)"}
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Briefly describe your symptoms or concern..."
                        value={patientForm.notes}
                        onChange={(e) => setPatientForm({ ...patientForm, notes: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-medium text-sm shadow-lg shadow-[#0D9488]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{lang === "ne" ? "क्लिनिक भेट निश्चित गर्नुहोस्" : "Confirm Clinical Consultation Request"}</span>
                    </button>
                  </form>
                )}
              </div>
            ) : (
              /* Tab 2: Literary / Academic Speaking Inquiry Form */
              <div>
                {speakingSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100 text-[#D97706] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1E293B]">
                      {lang === "ne" ? "प्राज्ञिक अनुरोध प्राप्त भयो!" : "Speaking Inquiry Submitted"}
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      {lang === "ne"
                        ? "धन्यवाद। डा. मिश्रको सचिवालयले कार्यक्रमको तालिका र विवरण अध्ययन गरी शीघ्र सम्पर्क गर्नेछ।"
                        : "Thank you. Dr. Mishra's editorial and academic office will review your event details and respond within 2 business days."}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSpeakingSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-[#1E293B] text-white text-xs font-semibold hover:bg-black transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSpeakingSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>{lang === "ne" ? "आयोजक / सम्पर्क व्यक्तिको नाम" : "Organizer / Contact Name"}</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Prof. Ananya Joshi"
                          value={speakingForm.name}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>{lang === "ne" ? "संस्था वा विश्वविद्यालय" : "Organization / University / Media"}</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Tribhuvan University Medical Society"
                          value={speakingForm.organization}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, organization: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>{lang === "ne" ? "आधिकारिक इमेल" : "Official Email"}</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="organizer@university.edu"
                          value={speakingForm.email}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>{lang === "ne" ? "फोन नम्बर" : "Phone Number"}</span>
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+977 98XXXXXXXX"
                          value={speakingForm.phone}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>{lang === "ne" ? "कार्यक्रमको स्वरूप" : "Engagement Type"}</span>
                        </label>
                        <select
                          value={speakingForm.engagementType}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, engagementType: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all bg-white"
                        >
                          <option value="lecture">Guest Medical & Clinical Lecture</option>
                          <option value="book-reading">Book Discussion & Poetry Reading (The Lost Book)</option>
                          <option value="crash-course">Dental Exam Masterclass (The Crash Book)</option>
                          <option value="keynote">Keynote Address on Healthcare & Ethics</option>
                          <option value="media">Podcast / Journalistic Interview</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>{lang === "ne" ? "माध्यम (Mode)" : "Mode of Delivery"}</span>
                        </label>
                        <select
                          value={speakingForm.mode}
                          onChange={(e) => setSpeakingForm({ ...speakingForm, mode: e.target.value })}
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all bg-white"
                        >
                          <option value="in-person">In-Person (Nepal / Regional Travel)</option>
                          <option value="virtual">Virtual Live Keynote / Webinar</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{lang === "ne" ? "कार्यक्रमको विवरण" : "Event Brief & Proposed Timeline"}</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Please include event theme, audience size, proposed dates, and specific topics of interest..."
                        value={speakingForm.message}
                        onChange={(e) => setSpeakingForm({ ...speakingForm, message: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#1E293B] hover:bg-black text-white font-medium text-sm shadow-lg shadow-black/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4 text-[#D97706]" />
                      <span>{lang === "ne" ? "अनुरोध पठाउनुहोस्" : "Submit Speaking & Media Inquiry"}</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
