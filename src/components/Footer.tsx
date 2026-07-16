import React from "react";
import { Languages, ArrowUp, Heart, Sparkles } from "lucide-react";
import { BIO_DATA } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-gold-400/20 pt-16 pb-8 relative overflow-hidden">
      {/* Small Glowing Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          {/* Logo brand (6 Cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleScrollToTop}>
              <div className="p-2 bg-gradient-to-br from-gold-300 to-gold-500 rounded-lg text-navy-950 shadow-md">
                <Languages className="h-6 w-6" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-wide">
                  LOLA CHAMANOVA
                </span>
                <p className="text-[10px] text-gold-300 tracking-widest font-mono uppercase">
                  English Excellence
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Ingliz tili mukammalligi sari yetaklovchi tajribali va oliy toifali ustoz portfolio sahifasi. Kelajak maqsadlaringiz sari biz bilan qadam bosing.
            </p>
          </div>

          {/* Inspirational Shior (6 Cols) */}
          <div className="md:col-span-6 md:text-right space-y-2">
            <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold font-mono tracking-wider uppercase mb-1">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>USTOZ SHIORI</span>
            </div>
            <p className="font-serif text-lg sm:text-xl italic text-gold-100 font-medium">
              "{BIO_DATA.motto}"
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-center">
          <div className="text-xs sm:text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Lola Chamanova. Barcha huquqlar himoyalangan.
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-slate-500">
            <span>Pedagogik mehnat bilan</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-current animate-pulse mx-0.5" />
            <span>yaratildi.</span>
          </div>

          <div>
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-white/5 hover:bg-gold-400 text-slate-400 hover:text-navy-950 rounded-full border border-white/10 hover:border-gold-400 transition-all duration-300 flex items-center justify-center cursor-pointer group shadow-lg"
              title="Yuqoriga chiqish"
            >
              <ArrowUp className="h-4 w-4 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
