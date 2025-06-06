import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, AuthState } from '@/types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
{type: 'LOGIN_SUCCESS';payload: {user: User;token: string;};} |
{type: 'LOGOUT';} |
{type: 'RESTORE_SESSION';payload: {user: User;token: string;};};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'RESTORE_SESSION':
      return {
        user: action.payload.user,
        isAuthenticated: true,
        token: action.payload.token
      };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
        token: null
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null
};

export const AuthProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Restore session from localStorage on app start
    const savedUser = localStorage.getItem('chatbot_user');
    const savedToken = localStorage.getItem('chatbot_token');

    if (savedUser && savedToken) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'RESTORE_SESSION', payload: { user, token: savedToken } });
      } catch (error) {
        console.error('Error restoring session:', error);
        localStorage.removeItem('chatbot_user');
        localStorage.removeItem('chatbot_token');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock authentication - in real app, this would be an API call
      if (email && password) {
        const user: User = {
          id: `user-${Date.now()}`,
          email,
          name: email.split('@')[0],
          createdAt: new Date()
        };

        const token = `token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Save to localStorage
        localStorage.setItem('chatbot_user', JSON.stringify(user));
        localStorage.setItem('chatbot_token', token);

        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock registration
      if (email && password && name) {
        const user: User = {
          id: `user-${Date.now()}`,
          email,
          name,
          createdAt: new Date()
        };

        const token = `token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        // Save to localStorage
        localStorage.setItem('chatbot_user', JSON.stringify(user));
        localStorage.setItem('chatbot_token', token);

        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
        return true;
      }

      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('chatbot_user');
    localStorage.removeItem('chatbot_token');
    localStorage.removeItem('chatbot_sessions');
    localStorage.removeItem('chatbot_cart');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout
    }} data-id="su0jzro83" data-path="src/contexts/AuthContext.tsx">
      {children}
    </AuthContext.Provider>);

};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};