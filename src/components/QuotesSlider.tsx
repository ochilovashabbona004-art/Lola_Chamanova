import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote as QuoteIcon, ChevronLeft, ChevronRight, PenTool } from "lucide-react";
import { QUOTES } from "../data";

export default function QuotesSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);
  };

  return (
    <section id="ogitlar" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center space-x-2 text-gold-400 font-mono text-xs tracking-widest uppercase font-bold mb-3"
          >
            <PenTool className="h-4 w-4 text-gold-400" />
            <span>USTOZ HIKMATLARI VA O'GITLARI</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Ustozning O'gitlari
          </motion.h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Notebook Layout Card */}
        <div className="relative">
          {/* Metal spiral rings decoration representing a luxury academic notebook */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex justify-between w-64 z-20 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-4 h-10 bg-gradient-to-b from-gold-300 via-gold-100 to-gold-400 rounded-full border border-gold-600 shadow-md transform -rotate-12" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy-100 text-white rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16 border-t-8 border-gold-400 border border-gold-400/20 relative overflow-hidden mt-2"
          >
            {/* Lined Paper Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_2rem] pointer-events-none top-8" />
            
            {/* Left pink vertical margin line */}
            <div className="absolute top-0 bottom-0 left-8 sm:left-12 border-l border-gold-400/20 pointer-events-none" />

            <div className="relative z-10 pl-6 sm:pl-10 space-y-8 flex flex-col justify-between min-h-[220px]">
              
              {/* Quote Icon */}
              <div className="text-gold-400/10 absolute -top-4 -left-2 sm:left-2 pointer-events-none">
                <QuoteIcon className="h-20 w-20 fill-current" />
              </div>

              {/* Quote Slider Content */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 pt-4"
                  >
                    <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold italic text-slate-100 leading-relaxed">
                      "{QUOTES[currentIdx].text}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-0.5 bg-gold-400" />
                      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-gold-400">
                        {QUOTES[currentIdx].author}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Navigation & Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
                {/* Bullet Indicators */}
                <div className="flex space-x-2">
                  {QUOTES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIdx
                          ? "bg-gold-400 w-6"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Slayd ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex space-x-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 bg-navy-950 hover:bg-gold-400/10 border border-gold-400/20 hover:border-gold-400/40 rounded-full text-white transition-all shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="Oldingi"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 bg-navy-950 hover:bg-gold-400/10 border border-gold-400/20 hover:border-gold-400/40 rounded-full text-white transition-all shadow-sm flex items-center justify-center cursor-pointer"
                    aria-label="Keyingi"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Motivational subtext */}
        <div className="text-center mt-12 text-slate-400 font-serif italic text-sm">
          "Haqiqiy bilim va muvaffaqiyat har kuni bosilgan kichik, lekin intizomli qadamlar mahsulidir."
        </div>

      </div>
    </section>
  );
}
