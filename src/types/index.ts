// Core Types for E-commerce Chatbot System

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  brand: string;
  specifications: Record<string, string>;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  type: 'text' | 'product' | 'cart' | 'order';
  data?: any;
}

export interface ChatSession {
  id: string;
  userId: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

export interface ChatbotResponse {
  message: string;
  products?: Product[];
  suggestions?: string[];
  action?: 'search' | 'add_to_cart' | 'checkout' | 'help';
}