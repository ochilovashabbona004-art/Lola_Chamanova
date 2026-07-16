import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { BIO_DATA } from "../data";

export default function Hero() {
  const handleScrollToNext = () => {
    const element = document.getElementById("biografiya");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="bosh-sahifa"
      className="relative min-h-screen flex items-center justify-center bg-navy-50 pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Gold Glowing Orb */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
        {/* Soft Navy/Indigo Glowing Orb */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl" />
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Breathtaking Profile Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-first lg:order-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 sm:w-80 md:w-96 aspect-[3/4]"
            >
              {/* Gold Decorative Background Corners */}
              <div className="absolute -inset-4 border border-gold-400/30 rounded-2xl -z-10 pointer-events-none transform rotate-3 scale-95" />
              <div className="absolute -inset-2 border-2 border-gold-400/50 rounded-2xl -z-10 pointer-events-none transform -rotate-2" />

              {/* Glowing Background Ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-gold-400/20 to-transparent blur-xl -z-10" />

              {/* Main Portrait Card Frame */}
              <div className="w-full h-full rounded-2xl overflow-hidden border-3 border-gold-400 shadow-2xl relative group bg-navy-950">
                <img
                  src={BIO_DATA.portraitUrl}
                  alt={BIO_DATA.fullName}
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Info badge inside photo frame */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {BIO_DATA.fullName}
                  </h3>
                  <p className="text-xs text-gold-400 font-mono tracking-wider uppercase mt-1">
                    Multilevel Expert & Pedagog
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text & Hero Heading */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs sm:text-sm font-medium uppercase tracking-widest font-mono"
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>XALQARO TOIFALI PEDAGOG</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
            >
              Lola Chamanova <br />
              <span className="gold-gradient-text">
                Ingliz Tili Mukammalligi
              </span> <br />
              Sari Yetaklovchi Ustoz
            </motion.h1>

            {/* Custom Quote / Motto inside Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative max-w-lg mx-auto lg:mx-0 p-6 bg-navy-950/40 border-l-4 border-gold-400 rounded-r-xl shadow-lg backdrop-blur-sm"
            >
              <span className="absolute -top-4 left-6 font-serif text-5xl text-gold-400/20 leading-none">“</span>
              <p className="italic text-lg sm:text-xl text-gold-100 font-medium">
                "{BIO_DATA.motto}"
              </p>
              <div className="mt-2 text-xs font-mono tracking-wider text-gold-400/60 uppercase">
                Ustoz Shiori
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("aloqa");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-600 text-navy-950 font-bold text-base rounded-full shadow-lg shadow-gold-400/20 hover:shadow-gold-400/35 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Darsga Ariza Qoldirish
              </button>
              <button
                onClick={handleScrollToNext}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold text-base rounded-full border border-white/10 hover:border-gold-400/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Biografiya bilan tanishish</span>
                <ArrowDown className="h-4 w-4 text-gold-400 animate-bounce" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
