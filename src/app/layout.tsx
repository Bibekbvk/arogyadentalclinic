import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Ratna Kumar Mishra | Senior Dental Surgeon & Published Author",
  description:
    "Official portfolio and practice hub for Dr. Ratna Kumar Mishra (NMC 13350) — Dental Surgeon at Aarogya Dental Clinic, Author of 'The Lost Book (Sarobar Sarobar)' and 'The Crash Book (Dental Crash Course)'.",
  keywords: [
    "Dr. Ratna Kumar Mishra",
    "Aarogya Dental Clinic",
    "Dentist Rautahat",
    "Nepal Medical Council 13350",
    "The Lost Book Sarobar Sarobar",
    "The Crash Book Dental Crash Course",
    "BPKIHS Dharan Dentist",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
