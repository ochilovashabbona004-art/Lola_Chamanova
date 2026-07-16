import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, User, MessageSquare, Instagram, Send as TelegramIcon, CheckCircle, List, Trash2, ShieldAlert } from "lucide-react";
import { BIO_DATA } from "../data";

interface Submission {
  id: string;
  fullName: string;
  phone: string;
  telegramUsername: string;
  direction: string;
  preferredTime: string;
  message: string;
  timestamp: string;
}

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [direction, setDirection] = useState("Sertifikatga tayyorlov");
  const [preferredTime, setPreferredTime] = useState("Seshanba - Payshanba - Shanba (08:30 - 10:30)");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  // Load submissions on mount
  useEffect(() => {
    const saved = localStorage.getItem("lola_portfolio_applications");
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !direction || !preferredTime) {
      return;
    }

    setIsSubmitting(true);

    // Simulate server submission delay
    setTimeout(() => {
      const newSubmission: Submission = {
        id: Date.now().toString(),
        fullName,
        phone,
        telegramUsername: telegramUsername.trim() || "Kiritilmagan",
        direction,
        preferredTime,
        message,
        timestamp: new Date().toLocaleString("uz-UZ", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem("lola_portfolio_applications", JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setFullName("");
      setPhone("");
      setTelegramUsername("");
      setDirection("Sertifikatga tayyorlov");
      setPreferredTime("Seshanba - Payshanba - Shanba (08:30 - 10:30)");
      setMessage("");

      // Hide success message after 7 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
    }, 1200);
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter((sub) => sub.id !== id);
    setSubmissions(updated);
    localStorage.setItem("lola_portfolio_applications", JSON.stringify(updated));
  };

  const clearAllSubmissions = () => {
    setSubmissions([]);
    localStorage.removeItem("lola_portfolio_applications");
  };

  return (
    <section id="aloqa" className="py-24 bg-navy-50 grid-pattern relative overflow-hidden border-t border-gold-400/10">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

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
            <Phone className="h-4 w-4 text-gold-400" />
            <span>ALOQA VA RO'YXATDAN O'TISH</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Darsga Ro'yxatdan O'tish
          </motion.h2>
          
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Lola ustozning professional guruhlariga a'zo bo'lish hamda darslarga yozilish uchun ariza qoldiring. Tez orada siz bilan bog'lanamiz.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Form and Contact Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info and Social Buttons (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 glass rounded-2xl p-8 shadow-xl relative overflow-hidden">
            {/* Ambient Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />
            
            <div className="space-y-8 relative z-10">
              <span className="text-xs font-bold font-mono tracking-widest text-gold-400 uppercase block">ALOQA MA'LUMOTLARI</span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide leading-tight">
                Ustoz bilan bog'lanish va Ijtimoiy tarmoqlar
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Kurslar jadvali, dars soatlari yoki boshqa savollar bo'yicha bizning ijtimoiy tarmoqlardagi sahifalarimiz orqali ham to'g'ridan-to'g'ri murojaat qilishingiz mumkin.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl text-gold-400 border border-white/10">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block">USTOZ ISMI</span>
                    <span className="text-base font-semibold text-white">{BIO_DATA.fullName}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl text-gold-400 border border-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase block">SAVOLLAR UCHUN</span>
                    <a href={`tel:${(BIO_DATA as any).contactPhone}`} className="text-base font-semibold text-white hover:text-gold-400 transition-colors">{(BIO_DATA as any).contactPhone}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="pt-8 border-t border-white/10 space-y-4 relative z-10">
              <span className="text-xs font-bold font-mono tracking-widest text-gold-400 uppercase block">IJTIMOIY TARMOQLARIMIZ</span>
              <div className="flex flex-wrap gap-4">
                {/* Telegram */}
                <a
                  href={`https://t.me/${(BIO_DATA as any).telegramUser.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 bg-white/5 hover:bg-gold-400 hover:text-navy-950 border border-white/10 hover:border-gold-400 rounded-xl font-semibold text-sm transition-all duration-300 group cursor-pointer"
                >
                  <TelegramIcon className="h-5 w-5 text-gold-400 group-hover:text-navy-950 transition-colors" />
                  <span>Telegram: {(BIO_DATA as any).telegramUser}</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 bg-white/5 hover:bg-gold-400 hover:text-navy-950 border border-white/10 hover:border-gold-400 rounded-xl font-semibold text-sm transition-all duration-300 group cursor-pointer"
                >
                  <Instagram className="h-5 w-5 text-gold-400 group-hover:text-navy-950 transition-colors" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Registration Form (7 Columns) */}
          <div className="lg:col-span-7 glass rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-6">
              <span className="text-xs font-bold font-mono tracking-widest text-gold-400 uppercase block">ONLINE ARIZA TOPSHIRISH</span>
              
              <h3 className="font-serif text-2xl font-bold text-white">
                Kursga a'zo bo'lish shakli
              </h3>

              {/* Form Input: Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center space-x-2">
                  <User className="h-4 w-4 text-gold-400" />
                  <span>To'liq ism-sharifingiz <span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ism va familiyangizni kiriting"
                  className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm sm:text-base"
                />
              </div>

              {/* Grid for Phone and Telegram */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Form Input: Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gold-400" />
                    <span>Telefon raqamingiz <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Masalan: +998 (90) 123-45-67"
                    className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm sm:text-base"
                  />
                </div>

                {/* Form Input: Telegram Username */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 flex items-center space-x-2">
                    <TelegramIcon className="h-4 w-4 text-gold-400" />
                    <span>Telegram foydalanuvchi nomi</span>
                  </label>
                  <input
                    type="text"
                    value={telegramUsername}
                    onChange={(e) => setTelegramUsername(e.target.value.startsWith('@') || e.target.value === '' ? e.target.value : '@' + e.target.value)}
                    placeholder="Masalan: @username"
                    className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Grid for Direction and Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Form Input: Course Direction */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 flex items-center space-x-2">
                    <span className="text-gold-400 font-bold font-serif">A</span>
                    <span>Yo'nalishni (Kursni) tanlang <span className="text-red-500">*</span></span>
                  </label>
                  <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm sm:text-base appearance-none cursor-pointer"
                  >
                    <option value="Sertifikatga tayyorlov" className="bg-navy-950 text-white">Sertifikatga tayyorlov</option>
                    <option value="Milliy Sertifikat (B2)" className="bg-navy-950 text-white">Milliy Sertifikat (B2)</option>
                    <option value="Milliy Sertifikat (C1)" className="bg-navy-950 text-white">Milliy Sertifikat (C1)</option>
                    <option value="General English (A1-B1)" className="bg-navy-950 text-white">General English (A1-B1)</option>
                  </select>
                </div>

                {/* Form Input: Preferred Time */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 flex items-center space-x-2">
                    <span className="text-gold-400 font-bold font-serif">T</span>
                    <span>Qulay dars vaqtini tanlang <span className="text-red-500">*</span></span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm sm:text-base appearance-none cursor-pointer"
                  >
                    <option value="Seshanba - Payshanba - Shanba (08:30 - 10:30)" className="bg-navy-950 text-white">Seshanba - Payshanba - Shanba (08:30 - 10:30)</option>
                    <option value="Seshanba - Payshanba - Shanba (11:00 - 13:00)" className="bg-navy-950 text-white">Seshanba - Payshanba - Shanba (11:00 - 13:00)</option>
                  </select>
                </div>
              </div>

              {/* Form Input: Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-gold-400" />
                  <span>Qo'shimcha xabar / Izoh (ixtiyoriy)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Darslarga yozilishdan asosiy maqsadingiz yoki qo'shimcha fikringiz bo'lsa kiriting..."
                  rows={3}
                  className="w-full px-4 py-3 bg-navy-950/50 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all text-sm sm:text-base resize-none"
                />
              </div>

              {/* Informative Note */}
              <div className="p-3.5 bg-gold-400/10 border border-gold-400/20 rounded-xl text-xs text-gold-200 leading-relaxed">
                <span className="font-bold text-gold-400">Eslatma:</span> Arizangiz muvaffaqiyatli topshirilgandan so'ng, barcha ma'lumotlaringiz to'g'ridan-to'g'ri <span className="font-bold text-white">Lola Chamanovaga</span> yetib boradi va ustozning o'zlari siz bilan shaxsan aloqaga chiqadilar.
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:via-gold-500 hover:to-gold-700 text-navy-950 font-bold text-base rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer border border-gold-300/20"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Arizani Yuborish</span>
                      <Send className="h-5 w-5 text-navy-950" />
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded-xl flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm">Arizangiz muvaffaqiyatli qabul qilindi!</h4>
                      <p className="text-xs text-emerald-400/80 mt-1">
                        Siz bilan tez orada bog'lanamiz. Arizalar bazada saqlandi, uni quyidagi panel orqali tekshirishingiz mumkin.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            {/* Simulated Admins portal for review/testing of local submissions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className="flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                type="button"
              >
                <List className="h-4 w-4" />
                <span>{showAdminPanel ? "Arizalar Ro'yxatini Berkitish" : "Yuborilgan Arizalar Bazasini Ko'rish (Admin Panel)"}</span>
              </button>
              
              <span className="text-[10px] text-slate-400 font-mono">Bazada jami: {submissions.length} ta ariza</span>
            </div>

            {/* Local Storage database panel */}
            <AnimatePresence>
              {showAdminPanel && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-5 bg-navy-950 text-white rounded-xl border border-white/10 text-xs sm:text-sm overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gold-400 font-mono tracking-wider uppercase">LOCAL STORAGE DATABASE</span>
                    {submissions.length > 0 && (
                      <button
                        onClick={clearAllSubmissions}
                        className="flex items-center space-x-1 text-red-400 hover:text-red-300 transition-colors font-bold uppercase text-[10px]"
                      >
                        <Trash2 className="h-3 w-3" />
                        <span>Barchasini O'chirish</span>
                      </button>
                    )}
                  </div>

                  {submissions.length === 0 ? (
                    <div className="text-center py-6 text-slate-400 italic">
                      Hozircha arizalar mavjud emas. Yuqoridagi formani to'ldirib yuborib test qilib ko'ring!
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                      {submissions.map((sub) => (
                        <div key={sub.id} className="p-4 bg-white/5 border border-white/5 rounded-lg flex justify-between items-start gap-4">
                          <div className="space-y-2 flex-1">
                            <p className="font-bold text-white text-sm">{sub.fullName}</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                              <span className="text-gold-400 font-mono">Tel: {sub.phone}</span>
                              <span className="text-slate-400 font-mono">TG: {sub.telegramUsername}</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 border-t border-white/5 mt-1">
                              <div>
                                <span className="text-[10px] text-gold-300/60 block uppercase">Kurs</span>
                                <span className="text-slate-200">{sub.direction}</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-gold-300/60 block uppercase">Dars vaqti</span>
                                <span className="text-slate-200">{sub.preferredTime}</span>
                              </div>
                            </div>
                            {sub.message && <p className="text-slate-300 italic text-xs mt-1 border-t border-white/5 pt-1">"{sub.message}"</p>}
                            <span className="text-[10px] text-slate-500 block pt-1">{sub.timestamp}</span>
                          </div>
                          <button
                            onClick={() => deleteSubmission(sub.id)}
                            className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-white/5 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
