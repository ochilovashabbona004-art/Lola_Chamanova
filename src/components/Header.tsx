import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Languages } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("bosh-sahifa");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["bosh-sahifa", "biografiya", "yutuqlar", "natijalar", "ogitlar", "aloqa"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "bosh-sahifa", label: "Bosh sahifa" },
    { id: "biografiya", label: "Biografiya" },
    { id: "yutuqlar", label: "Yutuqlar" },
    { id: "natijalar", label: "Natijalar" },
    { id: "ogitlar", label: "O'gitlar" },
    { id: "aloqa", label: "Aloqa" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/95 backdrop-blur-md py-4 border-b border-gold-400/20 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <div 
            onClick={() => handleScrollTo("bosh-sahifa")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="p-2 bg-gradient-to-br from-gold-300 to-gold-500 rounded-lg text-navy-950 shadow-md transform group-hover:scale-105 transition-all">
              <Languages className="h-6 w-6" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors">
                LOLA CHAMANOVA
              </span>
              <p className="text-[10px] text-gold-300 tracking-widest font-mono uppercase block">
                English Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-navy-950 bg-gold-400 font-semibold shadow-md shadow-gold-400/20"
                    : "text-slate-300 hover:text-gold-400 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Call to Action button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScrollTo("aloqa")}
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-gold-400 border border-gold-400 rounded-full hover:bg-gold-400 hover:text-navy-950 transition-all duration-300"
            >
              Darsga Yozilish
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-gold-400 hover:bg-navy-900 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-950 border-b border-gold-400/20 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                activeSection === item.id
                  ? "text-navy-950 bg-gold-400 font-semibold"
                  : "text-slate-300 hover:text-gold-400 hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => handleScrollTo("aloqa")}
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase text-navy-950 bg-gold-400 rounded-lg hover:bg-gold-500 transition-all"
            >
              Darsga Yozilish
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
