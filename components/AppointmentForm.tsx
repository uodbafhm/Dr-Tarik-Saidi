
import React, { useState, useEffect } from 'react';
import { SERVICES, PHONE_MOBILE } from '../constants';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const timeSlots = [];
  for (let hour = 9; hour <= 17; hour++) {
    const displayHour = hour > 12 ? hour - 12 : hour;
    const period = hour >= 12 ? 'مساءً' : 'صباحاً';
    timeSlots.push(`${displayHour}:00 ${period}`);
    if (hour < 17) timeSlots.push(`${displayHour}:30 ${period}`);
  }

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    if (!gsap) return;
    gsap.from(".form-container", {
      scrollTrigger: { trigger: ".appointment-section", start: "top 75%" },
      opacity: 0, y: 100, duration: 1.5, ease: "expo.out"
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `السلام عليكم دكتور طارق، أريد حجز موعد:
📍 *البيانات:*
- الاسم: ${formData.name}
- الهاتف: ${formData.phone}
- الخدمة: ${formData.service}
- التاريخ: ${formData.date}
- الوقت: ${formData.time}`;
    window.open(`https://wa.me/212${PHONE_MOBILE.substring(1)}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="appointment-section max-w-7xl mx-auto px-6">
      <div className="form-container relative bg-slate-900 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(15,23,42,0.3)]">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch">
          {/* Sidebar */}
          <div className="lg:w-2/5 p-12 lg:p-20 text-white flex flex-col justify-center text-right border-b lg:border-b-0 lg:border-l border-white/10">
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tight">ابدأ رحلة <br /><span className="text-blue-400">ابتسامتك المثالية</span> اليوم</h2>
            <div className="space-y-10">
              <div className="flex items-center justify-end gap-6 group">
                <div className="text-right">
                  <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">متواجدون دائماً</p>
                  <p className="text-2xl font-black tabular-nums group-hover:text-blue-400 transition-colors">{PHONE_MOBILE}</p>
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📱</div>
              </div>
              <div className="flex items-center justify-end gap-6 group">
                <div className="text-right">
                  <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-1">موقعنا</p>
                  <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">تطوان، شارع الجيش الملكي</p>
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📍</div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:w-3/5 p-10 lg:p-20">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="space-y-2">
                <label className="block text-slate-400 font-bold text-sm pr-2">الاسم الكامل</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-bold"
                  placeholder="مثال: أحمد المحمدي" />
              </div>
              <div className="space-y-2">
                <label className="block text-slate-400 font-bold text-sm pr-2">رقم الهاتف</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-bold"
                  placeholder="06XXXXXXXX" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block text-slate-400 font-bold text-sm pr-2">الخدمة المطلوبة</label>
                <select required name="service" value={formData.service} onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-bold appearance-none cursor-pointer">
                  <option className="bg-slate-900" value="">اختر الخدمة...</option>
                  {SERVICES.map(s => <option key={s.id} className="bg-slate-900" value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-slate-400 font-bold text-sm pr-2">تاريخ الموعد</label>
                <input required type="date" name="date" value={formData.date} onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-bold" />
              </div>
              <div className="space-y-2">
                <label className="block text-slate-400 font-bold text-sm pr-2">الساعة المفضلة</label>
                <select required name="time" value={formData.time} onChange={handleChange}
                  className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-bold appearance-none cursor-pointer">
                  <option className="bg-slate-900" value="">اختر الوقت...</option>
                  {timeSlots.map(slot => <option key={slot} className="bg-slate-900" value={slot}>{slot}</option>)}
                </select>
              </div>
              
              <button type="submit" className="md:col-span-2 bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-3xl font-[900] text-xl transition-all shadow-2xl shadow-blue-900/40 flex items-center justify-center gap-4 mt-4">
                <span>تأكيد الحجز عبر الواتساب</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
