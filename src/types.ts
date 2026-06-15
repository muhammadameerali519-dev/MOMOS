export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  spicy?: boolean;
  popular?: boolean;
  veg?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  imageUrl: string;
}

export interface FamilyDeal {
  id: string;
  name: string;
  price: number;
  includes: string[];
  badge?: string;
}

export interface Branch {
  name: string;
  address: string;
  phones: string[];
  mapsUrl?: string;
  embedSrc?: string;
}

export interface Testimonial {
  name: string;
  stars: number;
  comment: string;
  date: string;
  role: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}
