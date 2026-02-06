
import React from 'react';
import { DOCTOR_NAME, PHONE_MOBILE, PHONE_FIX, INSTAGRAM_URL, MAPS_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="text-right">
            <div className="flex items-center justify-end mb-8">
              <span className="font-black text-3xl tracking-tighter text-slate-900">{DOCTOR_NAME}</span>
              <div className="w-12 h-12 bg-blue-600 rounded-2xl ml-4 flex items-center justify-center text-white text-2xl shadow-lg">🦷</div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed mb-10">
              مركز الدكتور طارق السعيدي لطب الأسنان الرقمي والجمالي. نحن نجمع بين الشغف المهني وأحدث التقنيات لنمنحكم ابتسامة تستحقونها.
            </p>
            <div className="flex justify-end gap-4">
              <a href={INSTAGRAM_URL} className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={MAPS_LINK} className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </a>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-slate-900 font-[900] text-xl mb-10">خدماتنا</h4>
            <ul className="space-y-5 text-slate-500 font-bold">
              <li><a href="#services" className="hover:text-blue-600 transition-colors">تجميل الأسنان</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">زراعة الأسنان</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">تقويم الأسنان</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors">تبييض احترافي</a></li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="text-slate-900 font-[900] text-xl mb-10">تواصل فوري</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-end gap-4">
                 <p className="text-slate-900 font-black tabular-nums">{PHONE_MOBILE}</p>
                 <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">📱</div>
              </div>
              <div className="flex items-center justify-end gap-4">
                 <p className="text-slate-900 font-black tabular-nums">{PHONE_FIX}</p>
                 <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">📞</div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-slate-900 font-[900] text-xl mb-10">ساعات العمل</h4>
            <p className="text-slate-500 font-bold mb-4">الإثنين - الجمعة</p>
            <p className="text-slate-900 font-black text-lg mb-6 tracking-wide">09:00 - 17:00</p>
            <p className="text-slate-500 font-bold mb-4">السبت</p>
            <p className="text-slate-900 font-black text-lg tracking-wide">09:00 - 13:00</p>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 font-bold text-sm">&copy; {new Date().getFullYear()} عيادة {DOCTOR_NAME}. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-8 text-slate-400 font-bold text-sm">
             <a href="#" className="hover:text-slate-900 transition-colors">سياسة الخصوصية</a>
             <a href="#" className="hover:text-slate-900 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
