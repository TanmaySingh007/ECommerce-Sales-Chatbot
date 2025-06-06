import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { Bot, ShoppingBag, MessageSquare, Search } from 'lucide-react';

interface AuthPageProps {
  onSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const features = [
  {
    icon: <Bot className="h-8 w-8 text-blue-600" data-id="z078762po" data-path="src/pages/AuthPage.tsx" />,
    title: "AI-Powered Assistant",
    description: "Get personalized product recommendations and shopping guidance"
  },
  {
    icon: <Search className="h-8 w-8 text-green-600" data-id="n67zuz6gp" data-path="src/pages/AuthPage.tsx" />,
    title: "Smart Search",
    description: "Find products quickly with natural language search"
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-purple-600" data-id="x86dto68m" data-path="src/pages/AuthPage.tsx" />,
    title: "Seamless Shopping",
    description: "Browse, compare, and purchase products with ease"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-orange-600" data-id="qm6r02g1l" data-path="src/pages/AuthPage.tsx" />,
    title: "Conversational Commerce",
    description: "Shop through natural conversations with our AI assistant"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4" data-id="2d7ae70pv" data-path="src/pages/AuthPage.tsx">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center" data-id="oil8icj7o" data-path="src/pages/AuthPage.tsx">
        {/* Left Side - Features */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} data-id="lwp6oz37s" data-path="src/pages/AuthPage.tsx">

          <div className="text-center lg:text-left" data-id="z4gkggd0n" data-path="src/pages/AuthPage.tsx">
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-3 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }} data-id="pbngcr00f" data-path="src/pages/AuthPage.tsx">

              <div className="p-3 bg-blue-600 rounded-xl" data-id="ykbu7q7q3" data-path="src/pages/AuthPage.tsx">
                <Bot className="h-8 w-8 text-white" data-id="f4s55m5d5" data-path="src/pages/AuthPage.tsx" />
              </div>
              <div data-id="9kcqx7vdc" data-path="src/pages/AuthPage.tsx">
                <h1 className="text-3xl font-bold text-gray-900" data-id="95yremwlj" data-path="src/pages/AuthPage.tsx">ShopBot</h1>
                <p className="text-sm text-gray-600" data-id="93k092hlh" data-path="src/pages/AuthPage.tsx">AI Shopping Assistant</p>
              </div>
            </motion.div>
            
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }} data-id="9y5jz9xp9" data-path="src/pages/AuthPage.tsx">

              Shop Smarter with AI
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }} data-id="mny1tl18n" data-path="src/pages/AuthPage.tsx">

              Experience the future of e-commerce with our intelligent shopping assistant.
              Find products, get recommendations, and complete purchases through natural conversations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-id="ctwlxf052" data-path="src/pages/AuthPage.tsx">
            {features.map((feature, index) =>
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -2 }} data-id="gj294r6vn" data-path="src/pages/AuthPage.tsx">

                <div className="flex items-start space-x-3" data-id="2cm8xqbub" data-path="src/pages/AuthPage.tsx">
                  <div className="flex-shrink-0" data-id="bzn4s5lo1" data-path="src/pages/AuthPage.tsx">
                    {feature.icon}
                  </div>
                  <div data-id="2tdfue83s" data-path="src/pages/AuthPage.tsx">
                    <h3 className="font-semibold text-gray-900 mb-1" data-id="sm6mcuru2" data-path="src/pages/AuthPage.tsx">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600" data-id="oedx93id4" data-path="src/pages/AuthPage.tsx">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} data-id="p3xq2qjtg" data-path="src/pages/AuthPage.tsx">

          <AnimatePresence mode="wait" data-id="j85vo8m2i" data-path="src/pages/AuthPage.tsx">
            {isLogin ?
            <motion.div
              key="login"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.3 }} data-id="oy6l7i8io" data-path="src/pages/AuthPage.tsx">

                <LoginForm onToggleMode={toggleMode} onSuccess={onSuccess} data-id="u4vssidzu" data-path="src/pages/AuthPage.tsx" />
              </motion.div> :

            <motion.div
              key="register"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.3 }} data-id="qtdu3l6y9" data-path="src/pages/AuthPage.tsx">

                <RegisterForm onToggleMode={toggleMode} onSuccess={onSuccess} data-id="ggorz0ix5" data-path="src/pages/AuthPage.tsx" />
              </motion.div>
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </div>);

};

export default AuthPage;