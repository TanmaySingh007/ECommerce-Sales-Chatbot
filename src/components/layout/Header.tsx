import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useChat } from '@/contexts/ChatContext';
import { ShoppingCart, User, LogOut, MessageSquare, RotateCcw, Bot } from 'lucide-react';
import CartSidebar from '../cart/CartSidebar';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const { createNewSession, clearSessions } = useChat();
  const [cartOpen, setCartOpen] = useState(false);

  const handleNewChat = () => {
    createNewSession();
  };

  const handleClearHistory = () => {
    clearSessions();
  };

  return (
    <>
      <header className="bg-white border-b shadow-sm sticky top-0 z-40" data-id="veyl5t1wa" data-path="src/components/layout/Header.tsx">
        <div className="container mx-auto px-4" data-id="xva8qcuuw" data-path="src/components/layout/Header.tsx">
          <div className="flex items-center justify-between h-16" data-id="56o6vewh6" data-path="src/components/layout/Header.tsx">
            {/* Logo */}
            <div className="flex items-center space-x-3" data-id="ftmxkzqqe" data-path="src/components/layout/Header.tsx">
              <div className="p-2 bg-blue-600 rounded-lg" data-id="nrvg9q61z" data-path="src/components/layout/Header.tsx">
                <Bot className="h-6 w-6 text-white" data-id="ddisczyoc" data-path="src/components/layout/Header.tsx" />
              </div>
              <div data-id="l6j9w81nw" data-path="src/components/layout/Header.tsx">
                <h1 className="text-xl font-bold text-gray-900" data-id="kjo59ozaz" data-path="src/components/layout/Header.tsx">ShopBot</h1>
                <p className="text-xs text-gray-500" data-id="51c9p9h5y" data-path="src/components/layout/Header.tsx">AI Shopping Assistant</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6" data-id="i2fozze95" data-path="src/components/layout/Header.tsx">
              <Button variant="ghost" onClick={handleNewChat} data-id="k9o8totl0" data-path="src/components/layout/Header.tsx">
                <MessageSquare className="mr-2 h-4 w-4" data-id="je0ef7xh0" data-path="src/components/layout/Header.tsx" />
                New Chat
              </Button>
              <Button variant="ghost" onClick={handleClearHistory} data-id="6dr4h7tyc" data-path="src/components/layout/Header.tsx">
                <RotateCcw className="mr-2 h-4 w-4" data-id="6p1k1qsfo" data-path="src/components/layout/Header.tsx" />
                Clear History
              </Button>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-3" data-id="amrv632d4" data-path="src/components/layout/Header.tsx">
              {/* Cart */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCartOpen(true)}
                className="relative" data-id="h0agfaqq8" data-path="src/components/layout/Header.tsx">

                <ShoppingCart className="h-5 w-5" data-id="jetvuepab" data-path="src/components/layout/Header.tsx" />
                {totalItems > 0 &&
                <Badge
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  variant="destructive" data-id="bxjsm521t" data-path="src/components/layout/Header.tsx">

                    {totalItems}
                  </Badge>
                }
              </Button>

              {/* User Menu */}
              <DropdownMenu data-id="d7kmgl978" data-path="src/components/layout/Header.tsx">
                <DropdownMenuTrigger asChild data-id="96pza5b7k" data-path="src/components/layout/Header.tsx">
                  <Button variant="outline" size="icon" data-id="h2k6llxt9" data-path="src/components/layout/Header.tsx">
                    <User className="h-5 w-5" data-id="tkj5u8xmw" data-path="src/components/layout/Header.tsx" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56" data-id="gy1ha2k4b" data-path="src/components/layout/Header.tsx">
                  <div className="px-2 py-1.5" data-id="d2e16a2zv" data-path="src/components/layout/Header.tsx">
                    <p className="text-sm font-medium" data-id="8808i62vv" data-path="src/components/layout/Header.tsx">{user?.name}</p>
                    <p className="text-xs text-gray-500" data-id="e840rre3t" data-path="src/components/layout/Header.tsx">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator data-id="3iw4qjkdx" data-path="src/components/layout/Header.tsx" />
                  <DropdownMenuItem
                    onClick={handleNewChat}
                    className="md:hidden" data-id="t639vyou0" data-path="src/components/layout/Header.tsx">

                    <MessageSquare className="mr-2 h-4 w-4" data-id="gp4esxaks" data-path="src/components/layout/Header.tsx" />
                    New Chat
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleClearHistory}
                    className="md:hidden" data-id="one2xxhor" data-path="src/components/layout/Header.tsx">

                    <RotateCcw className="mr-2 h-4 w-4" data-id="51hqoshuf" data-path="src/components/layout/Header.tsx" />
                    Clear History
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="md:hidden" data-id="fu13trsw6" data-path="src/components/layout/Header.tsx" />
                  <DropdownMenuItem onClick={logout} data-id="i3myhdwpp" data-path="src/components/layout/Header.tsx">
                    <LogOut className="mr-2 h-4 w-4" data-id="tru1yj5wr" data-path="src/components/layout/Header.tsx" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} data-id="46hetsqw1" data-path="src/components/layout/Header.tsx" />
    </>);

};

export default Header;