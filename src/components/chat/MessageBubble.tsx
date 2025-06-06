import React from 'react';
import { Message } from '@/types';
import { Button } from '@/components/ui/button';
import { Bot, User } from 'lucide-react';
import ProductGrid from '../product/ProductGrid';
import { motion } from 'motion/react';

interface MessageBubbleProps {
  message: Message;
  onSuggestionClick: (suggestion: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onSuggestionClick }) => {
  const formatTimestamp = (timestamp: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(timestamp);
  };

  const formatMessageContent = (content: string) => {
    // Convert markdown-style formatting to JSX
    const parts = content.split(/\n/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <div key={index} className="font-semibold text-gray-900 mt-2 mb-1" data-id="5eozp4aan" data-path="src/components/chat/MessageBubble.tsx">
            {part.slice(2, -2)}
          </div>);

      }
      if (part.startsWith('• ')) {
        return (
          <div key={index} className="ml-4 text-gray-700" data-id="d0vnvrenx" data-path="src/components/chat/MessageBubble.tsx">
            {part}
          </div>);

      }
      if (part.startsWith('🔍') || part.startsWith('📱') || part.startsWith('🛒') || part.startsWith('💬')) {
        return (
          <div key={index} className="text-gray-800 mt-1" data-id="4mrdffnv9" data-path="src/components/chat/MessageBubble.tsx">
            {part}
          </div>);

      }
      return part ?
      <div key={index} className="text-gray-700" data-id="rz7rf667c" data-path="src/components/chat/MessageBubble.tsx">
          {part}
        </div> :

      <div key={index} className="h-2" data-id="4vo1xkxl5" data-path="src/components/chat/MessageBubble.tsx" />;

    });
  };

  return (
    <motion.div
      className={`flex items-start space-x-3 ${
      message.isBot ? 'justify-start' : 'justify-end'}`
      }
      initial={{ opacity: 0, x: message.isBot ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }} data-id="3uf5qed5o" data-path="src/components/chat/MessageBubble.tsx">

      {message.isBot &&
      <div className="p-2 bg-blue-100 rounded-full flex-shrink-0" data-id="pbrrh0q7c" data-path="src/components/chat/MessageBubble.tsx">
          <Bot className="h-5 w-5 text-blue-600" data-id="6spf7uwc8" data-path="src/components/chat/MessageBubble.tsx" />
        </div>
      }
      
      <div className={`max-w-xs lg:max-w-md space-y-2 ${
      message.isBot ? 'order-2' : 'order-1'}`
      } data-id="wy1pyrljc" data-path="src/components/chat/MessageBubble.tsx">
        <div
          className={`rounded-lg p-3 ${
          message.isBot ?
          'bg-gray-100 text-gray-900' :
          'bg-blue-600 text-white ml-auto'}`
          } data-id="u1vam087h" data-path="src/components/chat/MessageBubble.tsx">

          <div className="text-sm leading-relaxed" data-id="y3trpk7ck" data-path="src/components/chat/MessageBubble.tsx">
            {formatMessageContent(message.content)}
          </div>
        </div>
        
        <div className={`text-xs text-gray-500 ${
        message.isBot ? 'text-left' : 'text-right'}`
        } data-id="kyyup3yev" data-path="src/components/chat/MessageBubble.tsx">
          {formatTimestamp(message.timestamp)}
        </div>

        {/* Product Grid for product messages */}
        {message.type === 'product' && message.data?.products &&
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3" data-id="l64uf73t2" data-path="src/components/chat/MessageBubble.tsx">

            <ProductGrid
            products={message.data.products}
            compact={true}
            maxItems={6} data-id="031fg1n0i" data-path="src/components/chat/MessageBubble.tsx" />

          </motion.div>
        }

        {/* Suggestions */}
        {message.data?.suggestions &&
        <motion.div
          className="flex flex-wrap gap-2 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }} data-id="wwkmmgnbo" data-path="src/components/chat/MessageBubble.tsx">

            {message.data.suggestions.map((suggestion: string, index: number) =>
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(suggestion)}
            className="text-xs hover:bg-blue-50 hover:border-blue-300" data-id="qsck310gc" data-path="src/components/chat/MessageBubble.tsx">

                {suggestion}
              </Button>
          )}
          </motion.div>
        }
      </div>

      {!message.isBot &&
      <div className="p-2 bg-blue-600 rounded-full flex-shrink-0" data-id="o91z5z4q8" data-path="src/components/chat/MessageBubble.tsx">
          <User className="h-5 w-5 text-white" data-id="hh2b7gi1y" data-path="src/components/chat/MessageBubble.tsx" />
        </div>
      }
    </motion.div>);

};

export default MessageBubble;