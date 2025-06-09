
export interface Product {
  id: string;
  name: string;
  nameArabic: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionArabic: string;
  image: string;
  category: 'رجالي' | 'نسائي' | 'للجنسين';
  volume: string;
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  city: string;
  notes?: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  totalOrders: number;
  totalSpent: number;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  nameArabic: string;
}
