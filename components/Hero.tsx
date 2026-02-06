
import React, { useEffect, useRef } from 'react';
import { DOCTOR_NAME, PHONE_MOBILE } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    if (!gsap) return;

    const tl = gsap.timeline();
    
    tl.fromTo(".hero-badge", 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
    ).fromTo(".hero-title", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" },
      "-=0.6"
    ).fromTo(".hero-desc", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    ).fromTo(".hero-btns", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    ).fromTo(".hero-image-card",
      { opacity: 0, x: 100, rotate: 5 },
      { opacity: 1, x: 0, rotate: 0, duration: 1.5, ease: "expo.out" },
      "-=1.2"
    );
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
      <div className="absolute bottom-0 -right-20 w-[30rem] h-[30rem] bg-cyan-100 rounded-full blur-[120px] opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Section */}
          <div className="lg:w-1/2 text-right order-2 lg:order-1">
            <div className="hero-badge inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-5 py-2 rounded-full mb-8">
               <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
               <span className="text-blue-700 font-black text-xs tracking-widest uppercase">تكنولوجيا رقمية متطورة</span>
            </div>
            
            <h1 className="hero-title text-5xl md:text-8xl font-[900] text-slate-900 leading-[1.05] mb-8 tracking-tight">
              نصنع <span className="text-gradient">المستقبل</span> <br />
              لابتسامتك
            </h1>
            
            <p className="hero-desc text-lg md:text-2xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
              تجربة طبية استثنائية تجمع بين الفن والدقة. نحن نستخدم أحدث ما توصل إليه العلم لنضمن لك ابتسامة مثالية وصحة فم لا تضاهى.
            </p>
            
            <div className="hero-btns flex flex-col sm:flex-row gap-5 justify-start">
              <a
                href="#appointment"
                className="group bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:bg-slate-900 hover:shadow-none transition-all text-center flex items-center justify-center gap-3"
              >
                <span>احجز الآن</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={`tel:${PHONE_MOBILE}`}
                className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-[2rem] font-black text-xl hover:border-blue-200 transition-all text-center shadow-sm"
              >
                تواصل معنا
              </a>
            </div>

            <div className="hero-desc mt-16 flex items-center justify-end gap-10 opacity-70">
              <div className="text-right">
                <div className="text-3xl font-black text-slate-900">+15</div>
                <div className="text-sm font-bold text-slate-400">سنة خبرة</div>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-right">
                <div className="text-3xl font-black text-slate-900">+5000</div>
                <div className="text-sm font-bold text-slate-400">مريض سعيد</div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="hero-image-card relative">
              {/* Floating Element */}
              <div className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl z-30 border border-white hidden md:block animate-bounce">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl">✨</div>
                  <div className="text-right">
                    <p className="text-slate-900 font-black text-lg">نتائج مبهرة</p>
                    <p className="text-slate-400 text-xs font-bold uppercase">ضمان الجودة</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-[3.5rem] md:rounded-[5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-slate-200 aspect-square lg:aspect-[4/5]">
                <img
                  src="https://i.postimg.cc/XqC8ht3c/imgi-1-default.png"
                  alt="عيادة الدكتور طارق السعيدي"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
