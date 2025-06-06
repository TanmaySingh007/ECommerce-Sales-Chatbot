import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, CartItem } from '@/types';
import { useAuth } from './AuthContext';
import { toast } from '@/hooks/use-toast';

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
{type: 'ADD_ITEM';payload: {product: Product;quantity: number;};} |
{type: 'REMOVE_ITEM';payload: string;} |
{type: 'UPDATE_QUANTITY';payload: {productId: string;quantity: number;};} |
{type: 'CLEAR_CART';} |
{type: 'LOAD_CART';payload: CartItem[];};

interface CartState {
  items: CartItem[];
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':{
        const existingItemIndex = state.items.findIndex(
          (item) => item.product.id === action.payload.product.id
        );

        if (existingItemIndex >= 0) {
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += action.payload.quantity;
          return { items: updatedItems };
        } else {
          return {
            items: [...state.items, {
              product: action.payload.product,
              quantity: action.payload.quantity
            }]
          };
        }
      }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((item) => item.product.id !== action.payload)
      };
    case 'UPDATE_QUANTITY':{
        if (action.payload.quantity === 0) {
          return {
            items: state.items.filter((item) => item.product.id !== action.payload.productId)
          };
        }
        return {
          items: state.items.map((item) =>
          item.product.id === action.payload.productId ?
          { ...item, quantity: action.payload.quantity } :
          item
          )
        };
      }
    case 'CLEAR_CART':
      return { items: [] };
    case 'LOAD_CART':
      return { items: action.payload };
    default:
      return state;
  }
};

const initialState: CartState = {
  items: []
};

export const CartProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadCart();
    } else {
      dispatch({ type: 'CLEAR_CART' });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveCart();
    }
  }, [state.items, user]);

  const loadCart = () => {
    try {
      const savedCart = localStorage.getItem('chatbot_cart');
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartItems });
      }
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const saveCart = () => {
    try {
      localStorage.setItem('chatbot_cart', JSON.stringify(state.items));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This product is currently out of stock.",
        variant: "destructive"
      });
      return;
    }

    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });

    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart."
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });

    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart."
    });
  };

  const isInCart = (productId: string): boolean => {
    return state.items.some((item) => item.product.id === productId);
  };

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isInCart
    }} data-id="b06bui1xz" data-path="src/contexts/CartContext.tsx">
      {children}
    </CartContext.Provider>);

};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};