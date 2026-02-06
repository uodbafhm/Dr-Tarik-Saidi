
import React, { useState, useEffect } from 'react';
import { DOCTOR_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#accueil" },
    { name: "خدماتنا", href: "#services" },
    { name: "من نحن", href: "#about" },
    { name: "آراء المرضى", href: "#reviews" },
    { name: "موعد", href: "#appointment" },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-3xl ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-2 border border-white/40' : 'bg-transparent py-4'}`}>
      <div className="px-6 md:px-10">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
               <span className="text-xl">🦷</span>
            </div>
            <span className={`font-black text-xl transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-800'}`}>
              {DOCTOR_NAME}
            </span>
          </div>
          
          <div className="hidden md:flex space-x-reverse space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-bold transition-all text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#appointment" className="hidden lg:block bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
              حجز موعد
            </a>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-800 p-2 bg-white/50 rounded-xl backdrop-blur-sm"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl rounded-3xl transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 border border-slate-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-bold text-right rounded-2xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <a href="#appointment" onClick={() => setIsOpen(false)} className="block w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-center shadow-xl">حجز موعد فوري</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
