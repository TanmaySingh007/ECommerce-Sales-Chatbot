import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ChatProvider } from "@/contexts/ChatContext";
import { CartProvider } from "@/contexts/CartContext";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes data-id="8qzllel9x" data-path="src/App.tsx">
      <Route path="/" element={<HomePage data-id="uqwft1r76" data-path="src/App.tsx" />} data-id="y9e3lwjlr" data-path="src/App.tsx" />
      <Route
        path="/auth"
        element={
        isAuthenticated ? <Navigate to="/chat" replace data-id="4v1a6v4jv" data-path="src/App.tsx" /> : <AuthPage onSuccess={() => {}} data-id="knikebqym" data-path="src/App.tsx" />
        } data-id="c3m6uoc62" data-path="src/App.tsx" />

      <Route
        path="/chat"
        element={
        isAuthenticated ? <ChatPage data-id="pamavw4b7" data-path="src/App.tsx" /> : <Navigate to="/auth" replace data-id="nm5kjjczl" data-path="src/App.tsx" />
        } data-id="5pswjpfar" data-path="src/App.tsx" />

      <Route path="*" element={<NotFound data-id="eru41x384" data-path="src/App.tsx" />} data-id="jv5uhqw48" data-path="src/App.tsx" />
    </Routes>);

};

const App = () =>
<QueryClientProvider client={queryClient} data-id="0bpxb7mf2" data-path="src/App.tsx">
    <TooltipProvider data-id="bmq0pcn16" data-path="src/App.tsx">
      <Toaster data-id="1tgh5imgo" data-path="src/App.tsx" />
      <BrowserRouter data-id="4fti9ijze" data-path="src/App.tsx">
        <AuthProvider data-id="b1aj086si" data-path="src/App.tsx">
          <CartProvider data-id="035i2llod" data-path="src/App.tsx">
            <ChatProvider data-id="zhydrgg3x" data-path="src/App.tsx">
              <AppContent data-id="0vfq5buxo" data-path="src/App.tsx" />
            </ChatProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;