
import React, { useEffect } from 'react';
import { SERVICES, PHONE_MOBILE } from '../constants';

const Services: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;
    
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(".services-header", 
        { opacity: 0, y: 30 },
        {
          scrollTrigger: { trigger: "#services", start: "top 85%" },
          opacity: 1, y: 0, duration: 1, ease: "power4.out"
        }
      );

      gsap.fromTo(".service-card-new", 
        { opacity: 0, y: 50 },
        {
          scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
          opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
      <div className="services-header flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="text-right">
          <div className="text-blue-600 font-black tracking-[0.2em] text-sm uppercase mb-4">اختصاصاتنا</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">حلول طبية <br />متكاملة لأسنانك</h2>
        </div>
        <div className="md:w-1/3 text-right">
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            نقدم باقة واسعة من الخدمات العلاجية والتجميلية المعتمدة على أدق المعايير الطبية العالمية لضمان راحتكم.
          </p>
        </div>
      </div>

      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {SERVICES.map((service) => {
          const whatsappUrl = `https://wa.me/212${PHONE_MOBILE.substring(1)}?text=${encodeURIComponent(`السلام عليكم دكتور طارق، أريد حجز موعد بخصوص ${service.title}`)}`;

          return (
            <div
              key={service.id}
              className="service-card-new group relative bg-white rounded-[3rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden rounded-[2.5rem] mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-2xl text-2xl shadow-xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="px-4 pb-6 flex flex-col flex-grow text-right">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-slate-50 text-slate-900 rounded-2xl font-black flex items-center justify-center gap-3 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm"
                >
                  <span>حجز استشارة</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
