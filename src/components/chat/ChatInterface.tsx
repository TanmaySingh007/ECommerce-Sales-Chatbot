import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat } from '@/contexts/ChatContext';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import MessageBubble from './MessageBubble';
import ProductGrid from '../product/ProductGrid';
import { motion, AnimatePresence } from 'motion/react';

const ChatInterface: React.FC = () => {
  const [message, setMessage] = useState('');
  const { currentSession, isLoading, sendMessage } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentSession?.messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const messageToSend = message.trim();
    setMessage('');
    await sendMessage(messageToSend);
    inputRef.current?.focus();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    inputRef.current?.focus();
  };

  if (!currentSession) {
    return (
      <div className="flex items-center justify-center h-full" data-id="lfg71egns" data-path="src/components/chat/ChatInterface.tsx">
        <div className="text-center space-y-4" data-id="p0uhk3a49" data-path="src/components/chat/ChatInterface.tsx">
          <Bot className="h-16 w-16 mx-auto text-gray-400" data-id="mrs9eqz1x" data-path="src/components/chat/ChatInterface.tsx" />
          <div data-id="7yo6v9fgv" data-path="src/components/chat/ChatInterface.tsx">
            <h3 className="text-lg font-semibold text-gray-600" data-id="o67qggq5t" data-path="src/components/chat/ChatInterface.tsx">No Active Chat</h3>
            <p className="text-sm text-gray-500" data-id="hd9sykf01" data-path="src/components/chat/ChatInterface.tsx">Start a new conversation to begin shopping</p>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="flex flex-col h-full" data-id="kvas1ra0h" data-path="src/components/chat/ChatInterface.tsx">
      {/* Chat Header */}
      <div className="border-b p-4 bg-white" data-id="z96vfg22t" data-path="src/components/chat/ChatInterface.tsx">
        <div className="flex items-center space-x-3" data-id="the2exbeg" data-path="src/components/chat/ChatInterface.tsx">
          <div className="p-2 bg-blue-100 rounded-full" data-id="cumvj9oo6" data-path="src/components/chat/ChatInterface.tsx">
            <Bot className="h-5 w-5 text-blue-600" data-id="0balm6vih" data-path="src/components/chat/ChatInterface.tsx" />
          </div>
          <div data-id="kzxj4j2mm" data-path="src/components/chat/ChatInterface.tsx">
            <h3 className="font-semibold text-gray-900" data-id="dnyfar9xv" data-path="src/components/chat/ChatInterface.tsx">Shopping Assistant</h3>
            <p className="text-sm text-gray-500" data-id="j4zelqo97" data-path="src/components/chat/ChatInterface.tsx">Here to help you find products</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef} data-id="n31300n56" data-path="src/components/chat/ChatInterface.tsx">
        <div className="space-y-4" data-id="f6x9i5ui1" data-path="src/components/chat/ChatInterface.tsx">
          <AnimatePresence data-id="6jhjljzaa" data-path="src/components/chat/ChatInterface.tsx">
            {currentSession.messages.map((msg, index) =>
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} data-id="9sxu3vv6j" data-path="src/components/chat/ChatInterface.tsx">

                <MessageBubble
                message={msg}
                onSuggestionClick={handleSuggestionClick} data-id="811m63f8q" data-path="src/components/chat/ChatInterface.tsx" />

              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading indicator */}
          {isLoading &&
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3" data-id="90nh00h9s" data-path="src/components/chat/ChatInterface.tsx">

              <div className="p-2 bg-gray-100 rounded-full" data-id="rxypso0aw" data-path="src/components/chat/ChatInterface.tsx">
                <Bot className="h-5 w-5 text-gray-600" data-id="utudka5c8" data-path="src/components/chat/ChatInterface.tsx" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs" data-id="c64c9sdus" data-path="src/components/chat/ChatInterface.tsx">
                <div className="flex items-center space-x-2" data-id="7n55j4no4" data-path="src/components/chat/ChatInterface.tsx">
                  <Loader2 className="h-4 w-4 animate-spin" data-id="m9v5b3ci8" data-path="src/components/chat/ChatInterface.tsx" />
                  <span className="text-sm text-gray-600" data-id="9nf47v2nl" data-path="src/components/chat/ChatInterface.tsx">Typing...</span>
                </div>
              </div>
            </motion.div>
          }
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t p-4 bg-white" data-id="mtaezvg64" data-path="src/components/chat/ChatInterface.tsx">
        <form onSubmit={handleSubmit} className="flex space-x-2" data-id="1x0c21e9n" data-path="src/components/chat/ChatInterface.tsx">
          <Input
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me about products, search for items, or get recommendations..."
            disabled={isLoading}
            className="flex-1"
            maxLength={500} data-id="l26spmeig" data-path="src/components/chat/ChatInterface.tsx" />

          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            size="icon" data-id="6m5p2dh5c" data-path="src/components/chat/ChatInterface.tsx">

            <Send className="h-4 w-4" data-id="yr7rljksq" data-path="src/components/chat/ChatInterface.tsx" />
          </Button>
        </form>
        
        {/* Quick suggestions */}
        <div className="mt-2 flex flex-wrap gap-2" data-id="d10yajirq" data-path="src/components/chat/ChatInterface.tsx">
          {['Show me phones', 'Find books', 'Browse electronics', 'What\'s new?'].map((suggestion) =>
          <Button
            key={suggestion}
            variant="outline"
            size="sm"
            onClick={() => handleSuggestionClick(suggestion)}
            disabled={isLoading}
            className="text-xs" data-id="y6dryd036" data-path="src/components/chat/ChatInterface.tsx">

              {suggestion}
            </Button>
          )}
        </div>
      </div>
    </div>);

};

export default ChatInterface;