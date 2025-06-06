import React, { useState } from 'react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Star, ShoppingCart, Check, Heart, Eye, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const { addToCart, isInCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const inCart = isInCart(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const isFilled = i < Math.floor(rating);
      const isHalf = i === Math.floor(rating) && rating % 1 !== 0;

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }} data-id="me09tqcos" data-path="src/components/product/ProductCard.tsx">

          <Star
            className={`h-3 w-3 ${
            isFilled ? 'text-yellow-400 fill-current' :
            isHalf ? 'text-yellow-400 fill-current opacity-50' :
            'text-gray-300'}`
            } data-id="mskwbeoqp" data-path="src/components/product/ProductCard.tsx" />

        </motion.div>);

    });
  };

  const getBadgeColor = () => {
    if (!product.inStock) return 'destructive';
    if (product.rating >= 4.8) return 'default';
    if (product.rating >= 4.5) return 'secondary';
    return 'outline';
  };

  const getBadgeText = () => {
    if (!product.inStock) return 'Out of Stock';
    if (product.rating >= 4.8) return '⭐ Premium';
    if (product.rating >= 4.5) return '🏆 Bestseller';
    return 'Popular';
  };

  const getDiscountPercentage = () => {
    // Simulate discount for products under $100
    if (product.price < 100) {
      return Math.floor(Math.random() * 20) + 10; // 10-30% discount
    }
    return 0;
  };

  const discount = getDiscountPercentage();
  const originalPrice = discount > 0 ? product.price * (1 + discount / 100) : null;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)} data-id="xw9o13b1k" data-path="src/components/product/ProductCard.tsx">

      <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border-0 shadow-lg backdrop-blur-sm bg-white/95 ${
      compact ? 'h-full' : ''}`
      } data-id="mvcq5a3jd" data-path="src/components/product/ProductCard.tsx">
        <div className="relative overflow-hidden" data-id="cg6jxg6pe" data-path="src/components/product/ProductCard.tsx">
          <motion.img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover transition-all duration-500 group-hover:scale-110 ${
            compact ? 'h-32' : 'h-48'}`
            }
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }} data-id="xsuowzahw" data-path="src/components/product/ProductCard.tsx" />

          
          {/* Gradient overlay on hover */}
          <AnimatePresence data-id="r9zmvuhc3" data-path="src/components/product/ProductCard.tsx">
            {isHovered &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-id="zuve9la1a" data-path="src/components/product/ProductCard.tsx" />

            }
          </AnimatePresence>

          {/* Stock overlay */}
          {!product.inStock &&
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center" data-id="y4e3xp295" data-path="src/components/product/ProductCard.tsx">
              <Badge variant="destructive" className="text-lg px-4 py-2 animate-pulse" data-id="w2lt3nlb1" data-path="src/components/product/ProductCard.tsx">
                Out of Stock
              </Badge>
            </div>
          }

          {/* Top badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1" data-id="4ch6xms29" data-path="src/components/product/ProductCard.tsx">
            {product.rating >= 4.5 && product.inStock &&
            <Badge className={`px-2 py-1 text-xs font-semibold shadow-lg ${
            product.rating >= 4.8 ?
            'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
            'bg-gradient-to-r from-green-500 to-emerald-500 text-white'}`
            } data-id="ckb3a2441" data-path="src/components/product/ProductCard.tsx">
                {getBadgeText()}
              </Badge>
            }
            {discount > 0 &&
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 text-xs font-bold shadow-lg" data-id="0pm9arnxk" data-path="src/components/product/ProductCard.tsx">
                -{discount}%
              </Badge>
            }
          </div>

          {/* Action buttons */}
          <AnimatePresence data-id="6h7brp9m8" data-path="src/components/product/ProductCard.tsx">
            {isHovered &&
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-2 right-2 flex flex-col gap-2" data-id="6jhgf3ghj" data-path="src/components/product/ProductCard.tsx">

                <motion.button
                onClick={handleLike}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full backdrop-blur-sm border shadow-lg transition-all ${
                isLiked ?
                'bg-red-500 text-white border-red-500' :
                'bg-white/90 text-gray-600 border-white/20 hover:bg-red-50'}`
                } data-id="76799e44i" data-path="src/components/product/ProductCard.tsx">

                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} data-id="l65tdqux2" data-path="src/components/product/ProductCard.tsx" />
                </motion.button>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-lg transition-all" data-id="2dsojx2pn" data-path="src/components/product/ProductCard.tsx">

                  <Eye className="h-4 w-4" data-id="jv0vzay8p" data-path="src/components/product/ProductCard.tsx" />
                </motion.button>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        
        <CardContent className={compact ? 'p-3' : 'p-4'} data-id="aemy6q61a" data-path="src/components/product/ProductCard.tsx">
          <div className="space-y-3" data-id="t6s4yphf1" data-path="src/components/product/ProductCard.tsx">
            <div className="flex items-start justify-between" data-id="a5uixipd3" data-path="src/components/product/ProductCard.tsx">
              <h3 className={`font-semibold text-gray-900 line-clamp-2 leading-tight ${
              compact ? 'text-sm' : 'text-base'}`
              } data-id="znlk62crs" data-path="src/components/product/ProductCard.tsx">
                {product.name}
              </h3>
            </div>
            
            <p className={`text-gray-600 line-clamp-2 leading-relaxed ${
            compact ? 'text-xs' : 'text-sm'}`
            } data-id="o16ihf4i1" data-path="src/components/product/ProductCard.tsx">
              {product.description}
            </p>
            
            {/* Rating */}
            <div className="flex items-center justify-between" data-id="yx56c86yx" data-path="src/components/product/ProductCard.tsx">
              <div className="flex items-center space-x-2" data-id="yt0m3l6mw" data-path="src/components/product/ProductCard.tsx">
                <div className="flex items-center space-x-1" data-id="fro19xjcu" data-path="src/components/product/ProductCard.tsx">
                  {renderStars(product.rating)}
                </div>
                <span className={`text-gray-500 font-medium ${
                compact ? 'text-xs' : 'text-sm'}`
                } data-id="n0f1clcx9" data-path="src/components/product/ProductCard.tsx">
                  {product.rating}
                </span>
              </div>
              <span className={`text-gray-400 ${
              compact ? 'text-xs' : 'text-sm'}`
              } data-id="oykcc2p62" data-path="src/components/product/ProductCard.tsx">
                ({product.reviews.toLocaleString()})
              </span>
            </div>
            
            {/* Price and brand */}
            <div className="flex items-center justify-between" data-id="0t4el4tci" data-path="src/components/product/ProductCard.tsx">
              <div className="flex flex-col" data-id="vjgpt1p0p" data-path="src/components/product/ProductCard.tsx">
                <div className="flex items-center space-x-2" data-id="q4ab45foo" data-path="src/components/product/ProductCard.tsx">
                  <span className={`font-bold text-gray-900 ${
                  compact ? 'text-sm' : 'text-lg'}`
                  } data-id="5781d7znr" data-path="src/components/product/ProductCard.tsx">
                    ${product.price.toFixed(2)}
                  </span>
                  {originalPrice &&
                  <span className={`text-gray-400 line-through ${
                  compact ? 'text-xs' : 'text-sm'}`
                  } data-id="9wh8n9xkp" data-path="src/components/product/ProductCard.tsx">
                      ${originalPrice.toFixed(2)}
                    </span>
                  }
                </div>
                {discount > 0 &&
                <span className="text-green-600 text-xs font-semibold" data-id="aiv589bbw" data-path="src/components/product/ProductCard.tsx">
                    Save ${(originalPrice! - product.price).toFixed(2)}
                  </span>
                }
              </div>
              <Badge variant="secondary" className={`${compact ? 'text-xs px-2 py-1' : 'px-3 py-1'} font-medium`} data-id="qpk2oaar3" data-path="src/components/product/ProductCard.tsx">
                {product.brand}
              </Badge>
            </div>

            {/* Quick specs preview */}
            {!compact && product.specifications &&
            <div className="flex flex-wrap gap-1" data-id="y7cl3nz2n" data-path="src/components/product/ProductCard.tsx">
                {Object.entries(product.specifications).slice(0, 2).map(([key, value]) =>
              <Badge key={key} variant="outline" className="text-xs px-2 py-1" data-id="o94c1icyc" data-path="src/components/product/ProductCard.tsx">
                    {value}
                  </Badge>
              )}
              </div>
            }
          </div>
        </CardContent>
        
        {!compact &&
        <CardFooter className="p-4 pt-0 space-y-2" data-id="0jguq9ewk" data-path="src/components/product/ProductCard.tsx">
            <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-id="hm4aoaux2" data-path="src/components/product/ProductCard.tsx">
              <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || inCart}
              className={`w-full transition-all duration-300 ${
              inCart ?
              'bg-green-500 hover:bg-green-600 text-white' :
              'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'}`
              }
              variant={inCart ? "default" : "default"} data-id="5vtrp9bz2" data-path="src/components/product/ProductCard.tsx">

                {inCart ?
              <>
                    <Check className="mr-2 h-4 w-4" data-id="7ahprtn0z" data-path="src/components/product/ProductCard.tsx" />
                    Added to Cart
                  </> :

              <>
                    <ShoppingCart className="mr-2 h-4 w-4" data-id="onhdstgsl" data-path="src/components/product/ProductCard.tsx" />
                    Add to Cart
                  </>
              }
              </Button>
            </motion.div>
            
            {product.inStock &&
          <div className="flex items-center justify-center space-x-1 text-green-600" data-id="fmqv67qjc" data-path="src/components/product/ProductCard.tsx">
                <Zap className="h-3 w-3" data-id="fxagc026i" data-path="src/components/product/ProductCard.tsx" />
                <span className="text-xs font-medium" data-id="1surex0v6" data-path="src/components/product/ProductCard.tsx">Fast Delivery Available</span>
              </div>
          }
          </CardFooter>
        }
        
        {compact &&
        <CardFooter className="p-3 pt-0" data-id="wbrlmnzd1" data-path="src/components/product/ProductCard.tsx">
            <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-id="1kh5qa7qa" data-path="src/components/product/ProductCard.tsx">
              <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || inCart}
              size="sm"
              className={`w-full text-xs transition-all duration-300 ${
              inCart ?
              'bg-green-500 hover:bg-green-600 text-white' :
              'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'}`
              }
              variant={inCart ? "default" : "default"} data-id="kvkc2v4xj" data-path="src/components/product/ProductCard.tsx">

                {inCart ?
              <>
                    <Check className="mr-1 h-3 w-3" data-id="0w0cpj38q" data-path="src/components/product/ProductCard.tsx" />
                    In Cart
                  </> :

              <>
                    <ShoppingCart className="mr-1 h-3 w-3" data-id="m1u3s8w9w" data-path="src/components/product/ProductCard.tsx" />
                    Add
                  </>
              }
              </Button>
            </motion.div>
          </CardFooter>
        }
      </Card>
    </motion.div>);

};

export default ProductCard;