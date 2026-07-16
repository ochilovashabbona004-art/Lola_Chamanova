import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, Trophy, Users, Star } from "lucide-react";
import { ACHIEVEMENTS } from "../data";

const IconMap: { [key: string]: React.ComponentType<any> } = {
  GraduationCap: GraduationCap,
  Award: Award,
  Trophy: Trophy,
  Users: Users,
};

export default function Achievements() {
  return (
    <section id="yutuqlar" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center space-x-2 text-gold-400 font-mono text-xs tracking-widest uppercase font-bold mb-3"
          >
            <Star className="h-4 w-4 text-gold-400 animate-spin-slow" />
            <span>MUVAFFAQIYAT VA ERISHILGAN DOVONLAR</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Yutuqlar va Statistika
          </motion.h2>
          
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            O'tgan yillar davomidagi mashaqqatli mehnat va fidoiylik mahsuli — ta'lim sohasida qo'lga kiritilgan yuksak natijalar.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Grid Achievements Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => {
            const IconComponent = IconMap[ach.iconName] || Star;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="navy-gold-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
              >
                {/* Visual Corner Light Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-6">
                  {/* Icon Container */}
                  <div className="p-4 bg-gold-400/10 rounded-xl border border-gold-400/20 text-gold-400 w-fit group-hover:bg-gold-400 group-hover:text-navy-950 transition-all duration-300 transform group-hover:scale-105">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Value / Metrics with Mono font */}
                  <div className="space-y-1">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                      {ach.value}
                    </span>
                    <h3 className="text-base font-bold text-gold-400 font-sans tracking-wide">
                      {ach.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {ach.description}
                  </p>
                </div>

                {/* Subtle Decorative Bottom Bar */}
                <div className="w-1/3 h-0.5 bg-gold-400/30 group-hover:w-full group-hover:bg-gold-400 mt-6 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Motivational Accent Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-xl glass"
        >
          <p className="text-sm italic text-gold-200">
            "Pedagogik tajribamizning asosiy mezoni — darsimizga kirgan har bir o'quvchining o'z oldiga qo'ygan xalqaro va milliy maqsadlariga yetishidir."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
