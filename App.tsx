
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import AppointmentForm from './components/AppointmentForm';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';
import { PHONE_MOBILE } from './constants';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section id="accueil">
          <Hero />
        </section>
        
        <section id="services" className="py-16 bg-white">
          <Services />
        </section>

        <section id="about" className="py-16 bg-slate-50">
          <About />
        </section>

        <section id="reviews" className="py-16 bg-white">
          <Reviews />
        </section>

        <section id="appointment" className="py-16 bg-slate-50">
          <AppointmentForm />
        </section>

        <section id="location" className="py-16 bg-white">
          <LocationHours />
        </section>
      </main>

      <Footer />

      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* Primary Animated Call Button (Green) */}
        <a
          href={`tel:${PHONE_MOBILE}`}
          className="group flex items-center bg-green-500 text-white p-1 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-105 animate-bounce"
          aria-label="Call Direct"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap px-0 group-hover:px-4 font-black text-sm">
            اتصل بنا الآن
          </span>
          <div className="bg-green-400 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </a>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 p-3.5 rounded-full shadow-lg border border-blue-100 hover:bg-blue-50 transition-all transform hover:scale-110 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
