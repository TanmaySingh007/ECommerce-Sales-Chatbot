import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import ChatInterface from '@/components/chat/ChatInterface';
import { useChat } from '@/contexts/ChatContext';
import { motion } from 'motion/react';

const ChatPage: React.FC = () => {
  const { currentSession, createNewSession } = useChat();

  useEffect(() => {
    // Create initial session if none exists
    if (!currentSession) {
      createNewSession();
    }
  }, [currentSession, createNewSession]);

  return (
    <div className="h-screen flex flex-col bg-gray-50" data-id="2dot0x0e2" data-path="src/pages/ChatPage.tsx">
      <Header data-id="71pe47ksx" data-path="src/pages/ChatPage.tsx" />
      
      <motion.main
        className="flex-1 container mx-auto p-4 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }} data-id="7iv65f7qn" data-path="src/pages/ChatPage.tsx">

        <div className="bg-white rounded-lg shadow-sm border h-full" data-id="rtd82u8t0" data-path="src/pages/ChatPage.tsx">
          <ChatInterface data-id="gfo7yv7rj" data-path="src/pages/ChatPage.tsx" />
        </div>
      </motion.main>
    </div>);

};

export default ChatPage;