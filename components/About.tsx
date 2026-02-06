
import React, { useEffect } from 'react';
import { DOCTOR_NAME, INSTAGRAM_URL } from '../constants';

const About: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Image: Pop-in with scale and elastic bounce on scroll
    gsap.fromTo(".about-main-img", 
      { scale: 0.2, opacity: 0 },
      {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1, 0.4)"
      }
    );

    // Text Content: Fade-in and slide-up on scroll
    gsap.fromTo(".about-text-content-item", 
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div className="about-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="lg:w-2/5 flex justify-center">
          <div className="about-main-img relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-8 border-white group cursor-pointer overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
                alt={DOCTOR_NAME}
                className="w-72 h-72 md:w-[400px] md:h-[400px] rounded-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-xl transform group-hover:rotate-12 transition-transform">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-3/5 text-right about-text-content">
          <h2 className="about-text-content-item text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            خبرة تزيد عن <span className="text-blue-600">15 سنة</span> في رسم الابتسامة
          </h2>
          <p className="about-text-content-item text-xl text-slate-600 mb-8 leading-loose font-medium">
            في عيادة الدكتور طارق السعيدي، نؤمن بأن كل مريض يستحق رعاية مخصصة. نحن نستخدم التكنولوجيا الرقمية الحديثة لضمان نتائج دقيقة وغير مؤلمة. هدفنا هو أن تغادر العيادة بابتسامة لم تكن تحلم بها.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="about-text-content-item flex items-start space-x-reverse space-x-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <span className="text-4xl">🎓</span>
              <div>
                <h4 className="font-black text-slate-900 text-lg">شهادات عالمية</h4>
                <p className="text-slate-500 font-bold">دكتوراه في جراحة الأسنان</p>
              </div>
            </div>
            <div className="about-text-content-item flex items-start space-x-reverse space-x-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <span className="text-4xl">💎</span>
              <div>
                <h4 className="font-black text-slate-900 text-lg">أحدث التقنيات</h4>
                <p className="text-slate-500 font-bold">تجهيزات رقمية متطورة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
