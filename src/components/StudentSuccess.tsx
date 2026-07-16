import React, { useState } from "react";
import { motion } from "motion/react";
import { Users, Award, ShieldCheck, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { STUDENT_STATS, SPECIAL_STATS } from "../data";

export default function StudentSuccess() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Calculate coordinates for a simple beautiful SVG Donut Chart
  // Circumference for r=50 is 2 * PI * 50 = 314.15
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  // Cumulative offset calculations for the donut chart segments
  let cumulativePercentage = 0;

  return (
    <section id="natijalar" className="py-24 bg-navy-50 grid-pattern relative overflow-hidden border-t border-gold-400/10">
      {/* Decorative Orbs */}
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center space-x-2 text-gold-400 font-mono text-xs tracking-widest uppercase font-bold mb-3"
          >
            <Users className="h-4 w-4 text-gold-400" />
            <span>SHOGIRDLAR YUTUQLARI</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Shogirdlarning Natijalari
          </motion.h2>
          
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Lola Chamanova rahbarligida tahsil olgan 250 dan ortiq muvaffaqiyatli o'quvchilarning imtihon ko'rsatkichlari.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Handcrafted Premium SVG Donut & Detailed Legends (5 Columns) */}
          <div className="lg:col-span-5 glass rounded-2xl p-8 shadow-xl relative overflow-hidden">
            {/* Soft Glow */}
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-gold-400/10 rounded-full blur-2xl" />
            
            <h3 className="font-serif text-xl font-bold text-white tracking-wide text-center mb-8 relative z-10">
              Statistika Diagrammasi
            </h3>

            {/* Interactive Donut Graphic */}
            <div className="flex justify-center items-center mb-8 relative">
              <svg width="220" height="220" viewBox="0 0 120 120" className="transform -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="transparent"
                  stroke="#1e293b"
                  strokeWidth="10"
                />
                {STUDENT_STATS.map((stat, idx) => {
                  const strokeDasharray = `${(stat.percentage / 100) * circumference} ${circumference}`;
                  const strokeDashoffset = `${circumference - (cumulativePercentage / 100) * circumference}`;
                  cumulativePercentage += stat.percentage;

                  const isHovered = hoveredIdx === idx;

                  return (
                    <motion.circle
                      key={stat.category}
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="transparent"
                      stroke={stat.color}
                      strokeWidth={isHovered ? "14" : "10"}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                    />
                  );
                })}
              </svg>

              {/* Central Text inside Donut */}
              <div className="absolute text-center flex flex-col justify-center items-center">
                <span className="text-3xl font-extrabold text-white font-mono tracking-tight">250+</span>
                <span className="text-[10px] text-gold-400 font-mono uppercase tracking-widest">O'QUVCHILAR</span>
              </div>
            </div>

            {/* Detailed Interactive Legends */}
            <div className="space-y-4 relative z-10">
              {STUDENT_STATS.map((stat, idx) => (
                <div
                  key={stat.category}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    hoveredIdx === idx
                      ? "bg-white/10 border-gold-400"
                      : "bg-white/5 border-transparent"
                  }`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ backgroundColor: stat.color }} />
                      <span className="text-sm font-semibold text-slate-100">{stat.category}</span>
                    </div>
                    <span className="text-base font-bold font-mono" style={{ color: stat.color }}>
                      {stat.percentage}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 pl-6">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Key Achievements & Scorecards (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Highlight Card 1: B2 Milliy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-gold-400/10 rounded-xl text-gold-400 border border-gold-400/20 w-fit mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">B2 Daraja Sohiblari</h4>
                  <p className="text-xs text-gold-400/70 font-mono uppercase tracking-wider mt-1">Milliy Sertifikat</p>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-white/10 pt-4">
                  <span className="text-slate-400 text-sm">O'quvchilar soni</span>
                  <span className="text-3xl font-extrabold text-white font-mono">50%</span>
                </div>
              </motion.div>

              {/* Highlight Card 2: C1 Milliy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-gold-400/10 rounded-xl text-gold-400 border border-gold-400/20 w-fit mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">C1 Akademik Daraja</h4>
                  <p className="text-xs text-gold-400/70 font-mono uppercase tracking-wider mt-1">Milliy Oliy Sertifikat</p>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-white/10 pt-4">
                  <span className="text-slate-400 text-sm">O'quvchilar soni</span>
                  <span className="text-3xl font-extrabold text-white font-mono">20%</span>
                </div>
              </motion.div>

            </div>

            {/* Premium Block: IELTS 7.0 & 7.5 High Achievers (Oliy Natijalar) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gold-400/10 to-gold-600/5 border border-gold-400/30 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Decorative sparkle */}
              <div className="absolute top-4 right-4 text-gold-400 opacity-20 animate-pulse">
                <Star className="h-10 w-10 fill-current" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 text-[10px] font-mono tracking-wider font-bold uppercase">
                    YUKSAK KO'RSATKICH
                  </span>
                  <h3 className="font-serif text-2xl font-black text-white">
                    {SPECIAL_STATS.ieltsHighAchievers} O'quvchida Multilevel
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    {SPECIAL_STATS.ieltsHighScoreRange} Bu natija o'quvchilarimizga dunyoning nufuzli universitetlariga kirish eshigini ochadi.
                  </p>
                </div>
                
                <div className="bg-navy-950 text-white rounded-xl p-5 text-center flex-shrink-0 border border-gold-400/30 shadow-lg">
                  <span className="text-3xl font-extrabold font-mono text-gold-400 block">7-8</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300">Talaba ballari</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-400/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-slate-300 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>Xalqaro standandartlar</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>Kuchli yozma nutq (Writing)</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-gold-400 flex-shrink-0" />
                  <span>Muloqot erkinligi (Speaking)</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
