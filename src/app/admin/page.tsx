"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Unlock,
  ShieldCheck,
  Calendar,
  Clock,
  Phone,
  User,
  Users,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  BookOpen,
  MessageSquare,
  LogOut,
  ArrowLeft,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Send,
  Building,
  Settings,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface AppointmentRecord {
  id: string;
  name: string;
  phone: string;
  treatment: string;
  branch: string;
  date: string;
  timeSlot: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes?: string;
}

interface SpeakingInquiryRecord {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  status: "new" | "accepted" | "declined";
  message: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"appointments" | "speaking" | "content" | "settings">("appointments");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sample Appointments Data
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([
    {
      id: "APT-101",
      name: "Ramesh Poudel",
      phone: "+977 9841234567",
      treatment: "Aesthetic Dentistry & Veneers",
      branch: "Aarogya Dental Clinic — Rautahat",
      date: "2026-09-30",
      timeSlot: "Morning OPD (09:30 AM)",
      status: "pending",
      notes: "Inquiring about smile makeover and 6 porcelain veneers.",
    },
    {
      id: "APT-102",
      name: "Sunita Chaudhary",
      phone: "+977 9807654321",
      treatment: "Microscopic Endodontics (RCT)",
      branch: "Aarogya Dental Clinic — Rautahat",
      date: "2026-09-30",
      timeSlot: "Evening Surgeries (05:30 PM)",
      status: "confirmed",
      notes: "Severe night pain in lower left first molar. Needs single-visit RCT.",
    },
    {
      id: "APT-103",
      name: "Dipendra Thapa",
      phone: "+977 9812398745",
      treatment: "Oral & Wisdom Tooth Surgery",
      branch: "Specialist Referral Center",
      date: "2026-10-01",
      timeSlot: "Morning OPD (11:00 AM)",
      status: "confirmed",
      notes: "Impacted lower third molar with pericoronitis.",
    },
    {
      id: "APT-104",
      name: "Aastha Karki",
      phone: "+977 9865432109",
      treatment: "Pediatric & Preventive Care",
      branch: "Aarogya Dental Clinic — Rautahat",
      date: "2026-10-02",
      timeSlot: "Morning OPD (10:00 AM)",
      status: "completed",
      notes: "Routine checkup and preventive fluoride treatment.",
    },
  ]);

  // Sample Speaking Inquiries Data
  const [speakingInquiries, setSpeakingInquiries] = useState<SpeakingInquiryRecord[]>([
    {
      id: "SPK-201",
      name: "Dr. Anupama Sharma",
      organization: "Nepal Dental Association (NDA) Central Conference",
      email: "scientific@nda.org.np",
      phone: "+977 9851122334",
      type: "Keynote Address: Rotary Endodontics Innovations",
      date: "2026-11-15",
      status: "new",
      message: "We would be honored to have Dr. Mishra deliver a 45-minute keynote presentation at the National Dental Congress.",
    },
    {
      id: "SPK-202",
      name: "Prabhat Shrestha",
      organization: "Kathmandu Literary & Poetry Society",
      email: "contact@ktmlitfest.org",
      phone: "+977 9849988776",
      type: "Book Discussion: The Lost Book (Sarobar Sarobar)",
      date: "2026-10-22",
      status: "accepted",
      message: "Panel dialogue on medical science, introspection, and Dr. Mishra's 'One Couplet a Day' literary practice.",
    },
  ]);

  // Check persisted admin session
  useEffect(() => {
    const session = localStorage.getItem("dr_mishra_admin_auth");
    if (session === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master PIN is 13350 (matching Dr. Mishra's NMC Registration number) or admin
    if (passcode === "13350" || passcode.toLowerCase() === "admin") {
      setIsAuthenticated(true);
      setAuthError("");
      localStorage.setItem("dr_mishra_admin_auth", "authenticated");
    } else {
      setAuthError("Incorrect Passkey. Please enter registration number #13350 or admin.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("dr_mishra_admin_auth");
  };

  const updateAppointmentStatus = (id: string, newStatus: AppointmentRecord["status"]) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: newStatus } : apt))
    );
  };

  const updateSpeakingStatus = (id: string, newStatus: SpeakingInquiryRecord["status"]) => {
    setSpeakingInquiries((prev) =>
      prev.map((spk) => (spk.id === id ? { ...spk, status: newStatus } : spk))
    );
  };

  // If not authenticated, render login gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-4 text-white">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#0D9488]/20 border border-[#0D9488]/40 text-[#0D9488] flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Clinical & Editorial Admin
            </h1>
            <p className="text-xs text-slate-400">
              Dr. Ratna Kumar Mishra • Aarogya Dental Clinic (NMC #13350)
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-bold">
                Doctor / Staff Passkey
              </label>
              <input
                required
                type="password"
                placeholder="Enter NMC PIN (e.g. 13350)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent font-mono transition-all"
              />
              <span className="text-[11px] text-slate-500 mt-1 block">
                Default Access PIN: <strong className="text-[#0D9488]">13350</strong> or <strong className="text-[#0D9488]">admin</strong>
              </span>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold text-sm shadow-lg shadow-[#0D9488]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          <div className="pt-4 border-t border-slate-800 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Filtered Appointments
  const filteredAppointments = appointments.filter(
    (apt) =>
      apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.phone.includes(searchQuery) ||
      apt.treatment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B]">
      
      {/* Admin Top Navigation */}
      <header className="bg-[#1E293B] text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-bold text-sm">
              RM
            </div>
            <div>
              <div className="font-serif font-bold text-base flex items-center gap-2">
                <span>Dr. Mishra Portal</span>
                <span className="text-[10px] font-mono bg-[#0D9488]/20 text-[#2dd4bf] border border-[#0D9488]/40 px-2 py-0.5 rounded-full font-bold">
                  ADMIN
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Aarogya Dental Clinic • NMC #13350
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0D9488]" />
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-medium flex items-center gap-1.5 transition-colors border border-rose-500/30"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Quick KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 mb-1">
              Active Appointments
            </div>
            <div className="font-serif text-3xl font-extrabold text-[#1E293B]">
              {appointments.filter((a) => a.status === "confirmed" || a.status === "pending").length}
            </div>
            <div className="text-xs text-[#0D9488] font-semibold mt-1">
              {appointments.filter((a) => a.status === "pending").length} pending confirmation
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 mb-1">
              Speaking Inquiries
            </div>
            <div className="font-serif text-3xl font-extrabold text-[#D97706]">
              {speakingInquiries.length}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Universities & Literary Fests
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 mb-1">
              Smiles Restored
            </div>
            <div className="font-serif text-3xl font-extrabold text-[#0D9488]">
              12,450+
            </div>
            <div className="text-xs text-slate-500 mt-1">
              15+ Years Clinical Practice
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="text-xs font-mono font-bold uppercase text-slate-500 mb-1">
              Emergency Desk
            </div>
            <div className="font-serif text-2xl font-extrabold text-emerald-600 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span>ACTIVE 24/7</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">
              +977 980-0000000 Line Ready
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("appointments")}
            className={`py-3 px-5 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "appointments"
                ? "border-[#0D9488] text-[#0D9488]"
                : "border-transparent text-slate-500 hover:text-[#1E293B]"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Patient Appointments ({appointments.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("speaking")}
            className={`py-3 px-5 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "speaking"
                ? "border-[#D97706] text-[#D97706]"
                : "border-transparent text-slate-500 hover:text-[#1E293B]"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Speaking & Academic Inquiries ({speakingInquiries.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`py-3 px-5 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
              activeTab === "settings"
                ? "border-[#1E293B] text-[#1E293B]"
                : "border-transparent text-slate-500 hover:text-[#1E293B]"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Clinic & OPD Hours</span>
          </button>
        </div>

        {/* Tab 1: Patient Appointment Management */}
        {activeTab === "appointments" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by patient name, phone, treatment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488]"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-mono">
                  Showing {filteredAppointments.length} Appointments
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-4">ID & Patient</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Treatment</th>
                    <th className="py-3 px-4">Schedule</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-[#1E293B] text-sm">{apt.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{apt.id}</div>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-slate-700">
                        {apt.phone}
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-slate-800 block">{apt.treatment}</span>
                        <span className="text-[11px] text-slate-400">{apt.branch}</span>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-bold text-[#1E293B]">{apt.date}</div>
                        <div className="text-[11px] text-slate-500">{apt.timeSlot}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            apt.status === "confirmed"
                              ? "bg-emerald-100 text-emerald-800"
                              : apt.status === "pending"
                              ? "bg-amber-100 text-amber-800 animate-pulse"
                              : apt.status === "completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {apt.status}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right space-x-2">
                        {apt.status === "pending" && (
                          <button
                            type="button"
                            onClick={() => updateAppointmentStatus(apt.id, "confirmed")}
                            className="px-2.5 py-1 rounded-lg bg-[#0D9488] hover:bg-[#0f766e] text-white font-semibold text-[11px]"
                          >
                            Approve
                          </button>
                        )}

                        <a
                          href={`tel:${apt.phone}`}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px] inline-block"
                        >
                          Call
                        </a>

                        <button
                          type="button"
                          onClick={() => updateAppointmentStatus(apt.id, "completed")}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-[11px]"
                        >
                          Complete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Speaking Inquiries Management */}
        {activeTab === "speaking" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#1E293B]">
              Academic & Literary Invitations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speakingInquiries.map((spk) => (
                <div
                  key={spk.id}
                  className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200/80 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D97706] font-bold">
                      {spk.id}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        spk.status === "accepted"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {spk.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1E293B]">
                      {spk.type}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Organizer: <strong className="text-slate-700">{spk.name}</strong> • {spk.organization}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/80 leading-relaxed italic">
                    "{spk.message}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                    <span className="font-mono text-slate-500">Event Date: {spk.date}</span>
                    <div className="space-x-2">
                      <button
                        type="button"
                        onClick={() => updateSpeakingStatus(spk.id, "accepted")}
                        className="px-3 py-1 rounded-lg bg-[#0D9488] text-white font-semibold text-xs"
                      >
                        Accept
                      </button>
                      <a
                        href={`mailto:${spk.email}`}
                        className="px-3 py-1 rounded-lg bg-slate-200 text-slate-700 font-semibold text-xs inline-block"
                      >
                        Reply Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Clinic Settings */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#1E293B]">
              Aarogya Dental Clinic Operational Hours
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="font-bold text-sm text-[#1E293B]">Morning OPD Hours</div>
                <div className="text-xs text-slate-500">Sunday through Friday: 09:30 AM – 01:30 PM</div>
                <div className="text-xs font-semibold text-[#0D9488]">Doctor in Attendance</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="font-bold text-sm text-[#1E293B]">Evening Surgeries & Specialized Procedures</div>
                <div className="text-xs text-slate-500">Sunday through Friday: 05:00 PM – 08:30 PM</div>
                <div className="text-xs font-semibold text-[#0D9488]">Surgical Extractions & RCTs</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1">
              <div className="font-bold">Medical Council Credential Verification:</div>
              <div>Nepal Medical Council Act 1964 • Permanent Licensure No. 13350 (Dental)</div>
              <div>B. P. Koirala Institute of Health Sciences (BPKIHS), Dharan, Nepal</div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
