import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from '@/hooks/use-toast';

interface CartSidebarProps {
  open: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ open, onClose }) => {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    // Simulate checkout process
    toast({
      title: "Order Placed!",
      description: `Your order of ${totalItems} item(s) for $${totalPrice.toFixed(2)} has been placed successfully.`
    });

    clearCart();
    onClose();
  };

  return (
    <Sheet open={open} onOpenChange={onClose} data-id="ht6q4ahqu" data-path="src/components/cart/CartSidebar.tsx">
      <SheetContent className="w-full sm:max-w-md" data-id="sfi2e1evn" data-path="src/components/cart/CartSidebar.tsx">
        <SheetHeader data-id="5nms6f4s9" data-path="src/components/cart/CartSidebar.tsx">
          <SheetTitle className="flex items-center space-x-2" data-id="8zrimn31s" data-path="src/components/cart/CartSidebar.tsx">
            <ShoppingBag className="h-5 w-5" data-id="is2eqnoym" data-path="src/components/cart/CartSidebar.tsx" />
            <span data-id="oxwkwgxq2" data-path="src/components/cart/CartSidebar.tsx">Shopping Cart</span>
            {totalItems > 0 &&
            <Badge variant="secondary" data-id="39lpxk58n" data-path="src/components/cart/CartSidebar.tsx">{totalItems}</Badge>
            }
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full" data-id="y07oxpm4m" data-path="src/components/cart/CartSidebar.tsx">
          {items.length === 0 ?
          <div className="flex-1 flex items-center justify-center" data-id="t43o9u5px" data-path="src/components/cart/CartSidebar.tsx">
              <div className="text-center space-y-3" data-id="mk9l8iw7i" data-path="src/components/cart/CartSidebar.tsx">
                <ShoppingBag className="h-16 w-16 mx-auto text-gray-300" data-id="ermypqzjr" data-path="src/components/cart/CartSidebar.tsx" />
                <div data-id="cqj2k7pdk" data-path="src/components/cart/CartSidebar.tsx">
                  <h3 className="font-semibold text-gray-600" data-id="z6ochsk2t" data-path="src/components/cart/CartSidebar.tsx">Your cart is empty</h3>
                  <p className="text-sm text-gray-500" data-id="iud5tcste" data-path="src/components/cart/CartSidebar.tsx">Add some products to get started</p>
                </div>
              </div>
            </div> :

          <>
              <ScrollArea className="flex-1 mt-4" data-id="c7x1h0dun" data-path="src/components/cart/CartSidebar.tsx">
                <div className="space-y-4" data-id="yv5bwx55u" data-path="src/components/cart/CartSidebar.tsx">
                  <AnimatePresence data-id="0g4jp5upy" data-path="src/components/cart/CartSidebar.tsx">
                    {items.map((item) =>
                  <motion.div
                    key={item.product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center space-x-3 p-3 border rounded-lg" data-id="hxfzz1tai" data-path="src/components/cart/CartSidebar.tsx">

                        <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded" data-id="bvw9wex7p" data-path="src/components/cart/CartSidebar.tsx" />

                        
                        <div className="flex-1 min-w-0" data-id="td5a9a0ey" data-path="src/components/cart/CartSidebar.tsx">
                          <h4 className="font-medium text-sm line-clamp-2" data-id="sfxqs1xvw" data-path="src/components/cart/CartSidebar.tsx">
                            {item.product.name}
                          </h4>
                          <p className="text-sm text-gray-600" data-id="rut97mseh" data-path="src/components/cart/CartSidebar.tsx">
                            ${item.product.price.toFixed(2)}
                          </p>
                          
                          <div className="flex items-center space-x-2 mt-2" data-id="45rcpzrus" data-path="src/components/cart/CartSidebar.tsx">
                            <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="h-8 w-8" data-id="ip7iitp64" data-path="src/components/cart/CartSidebar.tsx">

                              <Minus className="h-3 w-3" data-id="3j50jkcxd" data-path="src/components/cart/CartSidebar.tsx" />
                            </Button>
                            
                            <span className="text-sm font-medium min-w-[2rem] text-center" data-id="1scdd6xwx" data-path="src/components/cart/CartSidebar.tsx">
                              {item.quantity}
                            </span>
                            
                            <Button
                          size="icon"
                          variant="outline"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="h-8 w-8" data-id="wnoa44v6p" data-path="src/components/cart/CartSidebar.tsx">

                              <Plus className="h-3 w-3" data-id="mrnz6llup" data-path="src/components/cart/CartSidebar.tsx" />
                            </Button>
                            
                            <Button
                          size="icon"
                          variant="outline"
                          onClick={() => removeFromCart(item.product.id)}
                          className="h-8 w-8 text-red-600 hover:text-red-700" data-id="n0hdllg1f" data-path="src/components/cart/CartSidebar.tsx">

                              <Trash2 className="h-3 w-3" data-id="6gg47njsa" data-path="src/components/cart/CartSidebar.tsx" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="text-sm font-semibold" data-id="htq5tg8th" data-path="src/components/cart/CartSidebar.tsx">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              </ScrollArea>
              
              <div className="border-t pt-4 space-y-4" data-id="11rmve1v6" data-path="src/components/cart/CartSidebar.tsx">
                <div className="flex items-center justify-between" data-id="exo5y06j2" data-path="src/components/cart/CartSidebar.tsx">
                  <span className="text-sm text-gray-600" data-id="ubyavuccn" data-path="src/components/cart/CartSidebar.tsx">Items ({totalItems})</span>
                  <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700" data-id="kuqi7dx13" data-path="src/components/cart/CartSidebar.tsx">

                    Clear Cart
                  </Button>
                </div>
                
                <Separator data-id="50jfkppvf" data-path="src/components/cart/CartSidebar.tsx" />
                
                <div className="flex items-center justify-between text-lg font-bold" data-id="zxj1uf08e" data-path="src/components/cart/CartSidebar.tsx">
                  <span data-id="pfb2euzkh" data-path="src/components/cart/CartSidebar.tsx">Total</span>
                  <span data-id="obr7hxk0w" data-path="src/components/cart/CartSidebar.tsx">${totalPrice.toFixed(2)}</span>
                </div>
                
                <Button
                onClick={handleCheckout}
                className="w-full"
                size="lg" data-id="gsw7h8by8" data-path="src/components/cart/CartSidebar.tsx">

                  Checkout
                </Button>
              </div>
            </>
          }
        </div>
      </SheetContent>
    </Sheet>);

};

export default CartSidebar;