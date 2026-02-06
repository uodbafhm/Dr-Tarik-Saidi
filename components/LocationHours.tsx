
import React, { useState, useEffect } from 'react';
import { MAPS_IFRAME_SRC, SCHEDULE } from '../constants';

const LocationHours: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const dayIndex = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
      
      // Mapping JS days to our SCHEDULE array (Monday is 1, Sunday is 0)
      // Our array is Monday (0) to Sunday (6)
      const adjustedIndex = dayIndex === 0 ? 6 : dayIndex - 1;
      const todaySchedule = SCHEDULE[adjustedIndex];
      
      if (todaySchedule.isClosed || !todaySchedule.openHour || !todaySchedule.closeHour) {
        setIsOpenNow(false);
      } else {
        const currentHour = now.getHours();
        setIsOpenNow(currentHour >= todaySchedule.openHour && currentHour < todaySchedule.closeHour);
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        <div className="lg:w-1/2 flex flex-col">
          <div className="mb-8 text-right">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">تفضلوا بزيارتنا</h2>
            <p className="text-lg text-slate-600">عيادة الدكتور طارق السعيدي ترحب بكم في مقرها المجهز بالكامل لتوفير الراحة التامة لمرضانا.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex-grow min-h-[400px]">
            <iframe
              src={MAPS_IFRAME_SRC}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="عيادة الدكتور طارق السعيدي - الموقع"
            ></iframe>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl h-full border border-slate-100">
            <div className="flex justify-between items-center mb-10">
              <div className={`px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 ${isOpenNow ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-green-600 animate-pulse' : 'bg-red-600'}`}></span>
                {isOpenNow ? 'العيادة مفتوحة الآن' : 'العيادة مغلقة حالياً'}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">ساعات العمل</h3>
            </div>

            <div className="space-y-4">
              {SCHEDULE.map((item, idx) => {
                const isToday = new Date().getDay() === (idx === 6 ? 0 : idx + 1);
                return (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center p-4 rounded-xl transition-all ${isToday ? 'bg-white shadow-md border-r-4 border-blue-600 scale-[1.02]' : 'hover:bg-white/50'}`}
                  >
                    <span className={`text-lg ${item.isClosed ? 'text-red-500 font-bold' : 'text-slate-600'}`}>
                      {item.hours}
                    </span>
                    <span className={`font-bold ${isToday ? 'text-blue-600' : 'text-slate-900'}`}>
                      {item.day} {isToday && '(اليوم)'}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 bg-blue-100 rounded-2xl flex items-center space-x-reverse space-x-4">
              <span className="text-3xl">📍</span>
              <div className="text-right">
                <h4 className="font-bold text-slate-900">العنوان</h4>
                <p className="text-slate-700">تطوان، المغرب - يمكنكم استخدام الخريطة أعلاه للوصول السهل.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHours;
