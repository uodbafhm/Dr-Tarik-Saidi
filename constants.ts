
import { Service, Review, OpeningHours } from './types';

export const DOCTOR_NAME = "الدكتور طارق السعيدي";
export const DOCTOR_NAME_FR = "Dr. Tarik Saidi";
export const PHONE_MOBILE = "0666984467"; // WhatsApp
export const PHONE_FIX = "0539710252";   // Fixed line
export const INSTAGRAM_URL = "https://www.instagram.com/cabinet.dentaire.dr.saidi/?hl=en";
export const MAPS_LINK = "https://maps.app.goo.gl/pgcj3pN4RGGcKUmf8";
export const MAPS_IFRAME_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.6692499589332!2d-5.373952243860597!3d35.56965339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b4385258f3e0b%3A0xc6c05ddc3a71801d!2sCabinet%20Dentaire%20Dr.%20Tarik%20Saidi!5e0!3m2!1sen!2sma!4v1769631580492!5m2!1sen!2sma";

export const SERVICES: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "ياسين الإدريسي",
    rating: 5,
    text: "تجربة رائعة مع الدكتور طارق. العيادة مجهزة بأحدث الوسائل والتعامل في قمة الاحترافية. أنصح به بشدة لكل من يبحث عن الجودة.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    date: "قبل أسبوع"
  },
  {
    id: 2,
    author: "سلمى بناني",
    rating: 5,
    text: "كنت أعاني من فوبيا أطباء الأسنان، لكن بفضل هدوء الدكتور طارق وتقنياته الحديثة، لم أشعر بأي ألم. شكراً جزيلاً على الابتسامة الجديدة!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    date: "قبل شهر"
  },
  {
    id: 3,
    author: "أمين التازي",
    rating: 5,
    text: "قمت بزراعة الأسنان في العيادة والنتيجة كانت مذهلة وطبيعية جداً. المتابعة بعد العملية كانت ممتازة. دكتور متمكن جداً.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    date: "قبل شهرين"
  }
];

export const SCHEDULE: OpeningHours[] = [
  { day: "الإثنين", hours: "9:00 صباحاً – 5:00 مساءً", isClosed: false, openHour: 9, closeHour: 17 },
  { day: "الثلاثاء", hours: "9:00 صباحاً – 5:00 مساءً", isClosed: false, openHour: 9, closeHour: 17 },
  { day: "الأربعاء", hours: "9:00 صباحاً – 5:00 مساءً", isClosed: false, openHour: 9, closeHour: 17 },
  { day: "الخميس", hours: "9:00 صباحاً – 5:00 مساءً", isClosed: false, openHour: 9, closeHour: 17 },
  { day: "الجمعة", hours: "9:00 صباحاً – 5:00 مساءً", isClosed: false, openHour: 9, closeHour: 17 },
  { day: "السبت", hours: "9:00 صباحاً – 1:00 بعد الزوال", isClosed: false, openHour: 9, closeHour: 13 },
  { day: "الأحد", hours: "مغلق", isClosed: true }
];
