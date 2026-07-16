/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Achievements from "./components/Achievements";
import StudentSuccess from "./components/StudentSuccess";
import QuotesSlider from "./components/QuotesSlider";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-50 font-sans text-navy-900 antialiased selection:bg-gold-400 selection:text-navy-950 overflow-x-hidden">
      {/* Dynamic Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO SECTION (Bosh sahifa / Kirish) */}
        <Hero />

        {/* 2. USTOZ HAQIDA (Biografiya) */}
        <Biography />

        {/* 3. ERISHILGAN YUTUQLAR VA STATISTIKA */}
        <Achievements />

        {/* 4. SHOGIRDLARNING NATIJALARI (Student Success) */}
        <StudentSuccess />

        {/* 5. USTOZNING O'GITLARI (Quotes Section - Notepad style slider) */}
        <QuotesSlider />

        {/* 6. ALOQA VA RO'YXATDAN O'TISH (Contact Section with client-side applications list) */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

