import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Message, ChatSession, Product } from '@/types';
import { useAuth } from './AuthContext';
import { searchProducts, getFeaturedProducts } from '@/data/products';

interface ChatContextType {
  currentSession: ChatSession | null;
  sessions: ChatSession[];
  isLoading: boolean;
  sendMessage: (content: string) => Promise<void>;
  createNewSession: () => void;
  loadSession: (sessionId: string) => void;
  clearSessions: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatAction =
{type: 'SET_LOADING';payload: boolean;} |
{type: 'ADD_MESSAGE';payload: Message;} |
{type: 'CREATE_SESSION';payload: ChatSession;} |
{type: 'LOAD_SESSIONS';payload: ChatSession[];} |
{type: 'SET_CURRENT_SESSION';payload: ChatSession | null;} |
{type: 'CLEAR_SESSIONS';};

interface ChatState {
  currentSession: ChatSession | null;
  sessions: ChatSession[];
  isLoading: boolean;
}

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'ADD_MESSAGE':
      if (!state.currentSession) return state;
      const updatedSession = {
        ...state.currentSession,
        messages: [...state.currentSession.messages, action.payload],
        updatedAt: new Date()
      };
      return {
        ...state,
        currentSession: updatedSession,
        sessions: state.sessions.map((session) =>
        session.id === updatedSession.id ? updatedSession : session
        )
      };
    case 'CREATE_SESSION':
      return {
        ...state,
        currentSession: action.payload,
        sessions: [action.payload, ...state.sessions]
      };
    case 'LOAD_SESSIONS':
      return { ...state, sessions: action.payload };
    case 'SET_CURRENT_SESSION':
      return { ...state, currentSession: action.payload };
    case 'CLEAR_SESSIONS':
      return { ...state, sessions: [], currentSession: null };
    default:
      return state;
  }
};

const initialState: ChatState = {
  currentSession: null,
  sessions: [],
  isLoading: false
};

export const ChatProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      loadSessions();
    }
  }, [user]);

  const loadSessions = () => {
    try {
      const savedSessions = localStorage.getItem('chatbot_sessions');
      if (savedSessions) {
        const sessions = JSON.parse(savedSessions).map((session: any) => ({
          ...session,
          createdAt: new Date(session.createdAt),
          updatedAt: new Date(session.updatedAt),
          messages: session.messages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        }));
        dispatch({ type: 'LOAD_SESSIONS', payload: sessions });
      }
    } catch (error) {
      console.error('Error loading sessions:', error);
    }
  };

  const saveSessions = (sessions: ChatSession[]) => {
    try {
      localStorage.setItem('chatbot_sessions', JSON.stringify(sessions));
    } catch (error) {
      console.error('Error saving sessions:', error);
    }
  };

  const generateBotResponse = async (userMessage: string): Promise<Message> => {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const lowerMessage = userMessage.toLowerCase();

    // Product search patterns
    if (lowerMessage.includes('search') || lowerMessage.includes('find') || lowerMessage.includes('looking for')) {
      const searchQuery = extractSearchQuery(userMessage);
      const products = searchProducts(searchQuery);

      return {
        id: `bot-${Date.now()}`,
        content: products.length > 0 ?
        `I found ${products.length} products matching "${searchQuery}". Here are some options:` :
        `I couldn't find any products matching "${searchQuery}". Try searching for electronics, books, clothing, or home items.`,
        isBot: true,
        timestamp: new Date(),
        type: 'product',
        data: { products: products.slice(0, 6) }
      };
    }

    // Category browsing
    if (lowerMessage.includes('electronics') || lowerMessage.includes('tech') || lowerMessage.includes('phone') || lowerMessage.includes('laptop')) {
      const products = searchProducts('electronics');
      return {
        id: `bot-${Date.now()}`,
        content: "Here are our featured electronics:",
        isBot: true,
        timestamp: new Date(),
        type: 'product',
        data: { products: products.slice(0, 6) }
      };
    }

    if (lowerMessage.includes('book') || lowerMessage.includes('read')) {
      const products = searchProducts('book');
      return {
        id: `bot-${Date.now()}`,
        content: "Here are some popular books:",
        isBot: true,
        timestamp: new Date(),
        type: 'product',
        data: { products: products.slice(0, 6) }
      };
    }

    if (lowerMessage.includes('clothes') || lowerMessage.includes('clothing') || lowerMessage.includes('shirt') || lowerMessage.includes('fashion')) {
      const products = searchProducts('clothing');
      return {
        id: `bot-${Date.now()}`,
        content: "Check out our clothing collection:",
        isBot: true,
        timestamp: new Date(),
        type: 'product',
        data: { products: products.slice(0, 6) }
      };
    }

    // Greeting patterns
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      const featuredProducts = getFeaturedProducts(4);
      return {
        id: `bot-${Date.now()}`,
        content: "Hello! Welcome to our store. I'm here to help you find the perfect products. Here are some of our featured items, or you can tell me what you're looking for!",
        isBot: true,
        timestamp: new Date(),
        type: 'product',
        data: { products: featuredProducts }
      };
    }

    // Help patterns
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return {
        id: `bot-${Date.now()}`,
        content: "I can help you with:\n\n🔍 **Product Search** - Just tell me what you're looking for\n📱 **Browse Categories** - Electronics, Books, Clothing, Home & Garden\n🛒 **Shopping Cart** - Add items and manage your cart\n💬 **Product Information** - Get details about any product\n\nTry saying things like:\n• \"Show me smartphones\"\n• \"I'm looking for a laptop\"\n• \"Find books about mystery\"\n• \"What's in my cart?\"",
        isBot: true,
        timestamp: new Date(),
        type: 'text'
      };
    }

    // Cart-related queries
    if (lowerMessage.includes('cart') || lowerMessage.includes('checkout')) {
      return {
        id: `bot-${Date.now()}`,
        content: "You can view and manage your cart using the cart icon in the top navigation. I can also help you find more products to add!",
        isBot: true,
        timestamp: new Date(),
        type: 'text'
      };
    }

    // Default response with suggestions
    const suggestions = [
    "Browse our electronics collection",
    "Show me bestselling books",
    "Find clothing items",
    "What are your featured products?"];


    return {
      id: `bot-${Date.now()}`,
      content: "I'd be happy to help you find products! You can ask me about specific items, browse categories, or get recommendations. What are you interested in?",
      isBot: true,
      timestamp: new Date(),
      type: 'text',
      data: { suggestions }
    };
  };

  const extractSearchQuery = (message: string): string => {
    const patterns = [
    /search for (.+)/i,
    /find (.+)/i,
    /looking for (.+)/i,
    /show me (.+)/i,
    /i want (.+)/i,
    /need (.+)/i];


    for (const pattern of patterns) {
      const match = message.match(pattern);
      if (match) {
        return match[1].trim();
      }
    }

    // If no pattern matches, return the whole message minus common words
    return message.replace(/\b(search|find|looking|for|show|me|i|want|need|a|an|the)\b/gi, '').trim();
  };

  const sendMessage = async (content: string) => {
    if (!user || !state.currentSession) return;

    dispatch({ type: 'SET_LOADING', payload: true });

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      isBot: false,
      timestamp: new Date(),
      type: 'text'
    };

    dispatch({ type: 'ADD_MESSAGE', payload: userMessage });

    try {
      // Generate bot response
      const botResponse = await generateBotResponse(content);
      dispatch({ type: 'ADD_MESSAGE', payload: botResponse });

      // Save updated sessions
      const updatedSessions = state.sessions.map((session) =>
      session.id === state.currentSession?.id ?
      { ...session, messages: [...session.messages, userMessage, botResponse] } :
      session
      );
      saveSessions(updatedSessions);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: `bot-error-${Date.now()}`,
        content: "I'm sorry, I encountered an error. Please try again.",
        isBot: true,
        timestamp: new Date(),
        type: 'text'
      };
      dispatch({ type: 'ADD_MESSAGE', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const createNewSession = () => {
    if (!user) return;

    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      userId: user.id,
      messages: [{
        id: `welcome-${Date.now()}`,
        content: "Hello! I'm your shopping assistant. I can help you find products, answer questions about our inventory, and assist with your shopping experience. What can I help you find today?",
        isBot: true,
        timestamp: new Date(),
        type: 'text'
      }],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    dispatch({ type: 'CREATE_SESSION', payload: newSession });

    const updatedSessions = [newSession, ...state.sessions];
    saveSessions(updatedSessions);
  };

  const loadSession = (sessionId: string) => {
    const session = state.sessions.find((s) => s.id === sessionId);
    if (session) {
      dispatch({ type: 'SET_CURRENT_SESSION', payload: session });
    }
  };

  const clearSessions = () => {
    localStorage.removeItem('chatbot_sessions');
    dispatch({ type: 'CLEAR_SESSIONS' });
  };

  return (
    <ChatContext.Provider value={{
      currentSession: state.currentSession,
      sessions: state.sessions,
      isLoading: state.isLoading,
      sendMessage,
      createNewSession,
      loadSession,
      clearSessions
    }} data-id="8503e1ysh" data-path="src/contexts/ChatContext.tsx">
      {children}
    </ChatContext.Provider>);

};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};