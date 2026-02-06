
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
  isClosed: boolean;
  openHour?: number;
  closeHour?: number;
}
