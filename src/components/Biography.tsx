import React from "react";
import { motion } from "motion/react";
import { BookOpen, Calendar, MapPin, Heart, Sparkles } from "lucide-react";
import { BIO_DATA } from "../data";

export default function Biography() {
  return (
    <section id="biografiya" className="py-24 bg-navy-50 grid-pattern relative overflow-hidden border-t border-gold-400/10">
      {/* Background Decorative Graphic */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-gold-400/5 blur-2xl pointer-events-none" />

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
            <BookOpen className="h-4 w-4 text-gold-400" />
            <span>USTOZ YO'LI</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Ustoz Haqida & Biografiya
          </motion.h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info and timeline elements */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Profile Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 shadow-xl flex flex-col justify-between h-full relative overflow-hidden"
            >
              {/* Gold glow element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-full blur-xl" />
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gold-400/10 rounded-xl border border-gold-400/20 text-gold-400">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-wide text-white">Lola Chamanova</h3>
                    <p className="text-xs text-gold-300/80 font-mono uppercase tracking-widest mt-0.5">Biografiya Ma'lumotlari</p>
                  </div>
                </div>

                <div className="border-t border-white/10 my-4" />

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-white/5 rounded-lg text-gold-300 mt-0.5 border border-white/5">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400/70 uppercase tracking-wider font-mono">Tug'ilgan Sana</p>
                      <p className="text-base font-semibold text-slate-100 mt-0.5">{BIO_DATA.birthDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-white/5 rounded-lg text-gold-300 mt-0.5 border border-white/5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400/70 uppercase tracking-wider font-mono">Tug'ilgan Joy</p>
                      <p className="text-base font-semibold text-slate-100 mt-0.5">{BIO_DATA.birthPlace}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-white/5 rounded-lg text-gold-300 mt-0.5 border border-white/5">
                      <MapPin className="h-5 w-5 animate-pulse text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400/70 uppercase tracking-wider font-mono">Hozirgi Yashash Joyi</p>
                      <p className="text-base font-semibold text-slate-100 mt-0.5">{(BIO_DATA as any).currentResidence}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-white/5 rounded-lg text-gold-300 mt-0.5 border border-white/5">
                      <BookOpen className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400/70 uppercase tracking-wider font-mono">Hozirgi Faoliyat / Ish Joyi</p>
                      <p className="text-base font-semibold text-slate-100 mt-0.5">{(BIO_DATA as any).currentWorkplace}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2.5 bg-white/5 rounded-lg text-gold-300 mt-0.5 border border-white/5">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gold-400/70 uppercase tracking-wider font-mono">Oilaviy Holati</p>
                      <p className="text-base font-semibold text-slate-100 mt-0.5">Oilali, bitta shirin qizaloqning onasi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-center lg:text-left">
                <span className="text-xs italic text-gold-300/60 font-serif">"Ilm - muvaffaqiyat va yorqin hayot kalitidir."</span>
              </div>
            </motion.div>

          </div>

          {/* Column 2: Story Texts (Hikoya tarzidagi matnlar) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8 sm:p-10 shadow-md flex flex-col justify-between h-full"
            >
              <div className="space-y-6">
                <span className="text-xs font-bold font-mono tracking-widest text-gold-400 uppercase block">USTOZNING HAYOTIY HIKOYASI</span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Muvaffaqiyat ortidagi mashaqqatli yo'l
                </h3>
                
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-gold-400 first-letter:mr-3 first-letter:float-left">
                  {BIO_DATA.storyText}
                </p>

                <div className="border-t border-white/10 my-6" />

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gold-400/10 rounded-full text-gold-400 mt-1 flex-shrink-0 border border-gold-400/20">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white">
                      Hozirgi Hayoti va Baxti
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-1.5">
                      {BIO_DATA.currentLife}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-start items-center space-x-3">
                <div className="w-8 h-0.5 bg-gold-400" />
                <span className="font-serif font-bold text-slate-100 text-sm">Hurmat va ehtirom bilan, Lola Chamanova</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
