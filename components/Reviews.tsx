
import React, { useEffect } from 'react';
import { REVIEWS, MAPS_LINK } from '../constants';

const Reviews: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    // Fade in and lift effect for reviews cards
    gsap.fromTo(".review-card", 
      { opacity: 0, y: 40, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: ".reviews-grid",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="text-right">
          <h2 className="text-blue-600 font-black tracking-widest uppercase mb-3">ماذا يقول مرضانا</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">قصص نجاح نعتز بها</p>
        </div>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-reverse space-x-4 bg-white px-8 py-5 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-slate-100 transform hover:-translate-y-1"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Google_Maps_icon_%282015-2020%29.svg" alt="Google Maps" className="w-8 h-8" />
          <span className="font-black text-slate-700 text-lg group-hover:text-blue-600 transition-colors">48 تقييماً على خرائط جوجل</span>
        </a>
      </div>

      {/* Reviews Grid */}
      <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-10">
        {REVIEWS.map((review) => (
          <div 
            key={review.id} 
            className="review-card bg-white p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_70px_rgba(59,130,246,0.12)] border border-slate-100 relative h-full flex flex-col group transition-all duration-500"
          >
            {/* Header: Avatar and Name */}
            <div className="flex items-center space-x-reverse space-x-5 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src={review.avatar} 
                  alt={review.author} 
                  className="relative w-16 h-16 rounded-full border-4 border-slate-50 shadow-md object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-right">
                <h4 className="font-black text-slate-900 text-xl">{review.author}</h4>
                <div className="flex items-center text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`h-5 w-5 fill-current ${i < review.rating ? 'text-yellow-400' : 'text-slate-200'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <p className="text-slate-600 leading-loose italic mb-6 text-right flex-grow text-lg font-medium">"{review.text}"</p>
            
            {/* Footer */}
            <div className="text-slate-400 font-bold text-sm text-right flex items-center justify-end gap-2">
               <span>{review.date}</span>
               <div className="w-8 h-0.5 bg-slate-100"></div>
            </div>
            
            {/* Background Quote Mark Decor */}
            <div className="absolute -top-6 -right-2 text-blue-100 text-8xl font-serif pointer-events-none transition-colors group-hover:text-blue-50 opacity-50">"</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
