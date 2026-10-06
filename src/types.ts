export interface MenuItem {
  id: string;
  name: string;
  category: 'entrees' | 'plats' | 'desserts';
  price: string;
  priceNote?: string;
  description: string;
  image: string;
  highlight?: boolean;
  dietary?: string[];
}

export interface SignatureDish {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Plats' | 'Food & Drinks' | 'Ambiance' | 'Intérieur' | 'Extérieur';
  image: string;
  caption: string;
}
