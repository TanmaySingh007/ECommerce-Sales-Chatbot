import React, { useState } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Grid, List, Search, Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  compact?: boolean;
  maxItems?: number;
  showControls?: boolean;
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  compact = false,
  maxItems,
  showControls = false,
  title
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'default' | 'price' | 'rating' | 'name'>('default');
  const [filterBy, setFilterBy] = useState<'all' | 'inStock' | 'featured'>('all');

  let displayProducts = [...products];

  // Apply filters
  if (filterBy === 'inStock') {
    displayProducts = displayProducts.filter((p) => p.inStock);
  } else if (filterBy === 'featured') {
    displayProducts = displayProducts.filter((p) => p.rating >= 4.5);
  }

  // Apply sorting
  switch (sortBy) {
    case 'price':
      displayProducts.sort((a, b) => a.price - b.price);
      break;
    case 'rating':
      displayProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'name':
      displayProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Keep original order
      break;
  }

  // Apply max items limit
  if (maxItems) {
    displayProducts = displayProducts.slice(0, maxItems);
  }

  if (displayProducts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16" data-id="w0t7siim1" data-path="src/components/product/ProductGrid.tsx">

        <div className="max-w-md mx-auto" data-id="o3ldjvmlx" data-path="src/components/product/ProductGrid.tsx">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center" data-id="rj4xa4qo7" data-path="src/components/product/ProductGrid.tsx">
            <Search className="h-10 w-10 text-gray-400" data-id="kjyp0s7r7" data-path="src/components/product/ProductGrid.tsx" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="ffuiqu5gt" data-path="src/components/product/ProductGrid.tsx">No products found</h3>
          <p className="text-gray-600 mb-6" data-id="8sn573cs6" data-path="src/components/product/ProductGrid.tsx">Try adjusting your search criteria or browse our categories to discover amazing products.</p>
          <Button variant="outline" className="hover:bg-blue-50" data-id="1ukfksdkm" data-path="src/components/product/ProductGrid.tsx">
            Browse All Categories
          </Button>
        </div>
      </motion.div>);

  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="space-y-6" data-id="d53yn7y0z" data-path="src/components/product/ProductGrid.tsx">
      {/* Header */}
      {(title || showControls) &&
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" data-id="3tvxt936d" data-path="src/components/product/ProductGrid.tsx">

          {title &&
        <div className="flex items-center space-x-2" data-id="3po72be94" data-path="src/components/product/ProductGrid.tsx">
              <Sparkles className="h-5 w-5 text-yellow-500" data-id="7iugjlytu" data-path="src/components/product/ProductGrid.tsx" />
              <h3 className="text-xl font-semibold text-gray-900" data-id="5vhmjmje2" data-path="src/components/product/ProductGrid.tsx">{title}</h3>
              <Badge variant="secondary" className="px-2 py-1 text-xs" data-id="5ahtaotq6" data-path="src/components/product/ProductGrid.tsx">
                {displayProducts.length} items
              </Badge>
            </div>
        }
          
          {showControls &&
        <div className="flex items-center space-x-3" data-id="v14karkj6" data-path="src/components/product/ProductGrid.tsx">
              {/* View Mode Toggle */}
              <div className="flex items-center border rounded-lg p-1" data-id="pdb22ff1o" data-path="src/components/product/ProductGrid.tsx">
                <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              className="px-2 py-1 h-8"
              onClick={() => setViewMode('grid')} data-id="j14wj2enf" data-path="src/components/product/ProductGrid.tsx">

                  <Grid className="h-4 w-4" data-id="yy77eypdb" data-path="src/components/product/ProductGrid.tsx" />
                </Button>
                <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              className="px-2 py-1 h-8"
              onClick={() => setViewMode('list')} data-id="7jeze7mso" data-path="src/components/product/ProductGrid.tsx">

                  <List className="h-4 w-4" data-id="vid461da6" data-path="src/components/product/ProductGrid.tsx" />
                </Button>
              </div>
              
              {/* Sort Dropdown */}
              <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="border rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" data-id="jmqhq9cmk" data-path="src/components/product/ProductGrid.tsx">

                <option value="default" data-id="nah8e0dia" data-path="src/components/product/ProductGrid.tsx">Sort by: Default</option>
                <option value="price" data-id="32bubfuoh" data-path="src/components/product/ProductGrid.tsx">Sort by: Price</option>
                <option value="rating" data-id="wpgut3hno" data-path="src/components/product/ProductGrid.tsx">Sort by: Rating</option>
                <option value="name" data-id="jnuuzk06y" data-path="src/components/product/ProductGrid.tsx">Sort by: Name</option>
              </select>
              
              {/* Filter Dropdown */}
              <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as any)}
            className="border rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" data-id="9lbyeuoot" data-path="src/components/product/ProductGrid.tsx">

                <option value="all" data-id="dz506qv8g" data-path="src/components/product/ProductGrid.tsx">All Products</option>
                <option value="inStock" data-id="vzqha0q4r" data-path="src/components/product/ProductGrid.tsx">In Stock</option>
                <option value="featured" data-id="wa8ykkn4c" data-path="src/components/product/ProductGrid.tsx">Featured</option>
              </select>
            </div>
        }
        </motion.div>
      }

      {/* Products Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${
        viewMode === 'grid' ?
        compact ?
        'grid grid-cols-2 lg:grid-cols-3 gap-4' :
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' :
        'flex flex-col gap-4'}`
        } data-id="9hiuo32y8" data-path="src/components/product/ProductGrid.tsx">

        <AnimatePresence mode="popLayout" data-id="gd8y335si" data-path="src/components/product/ProductGrid.tsx">
          {displayProducts.map((product, index) =>
          <motion.div
            key={product.id}
            variants={itemVariants}
            layout
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.8 }}
            className={viewMode === 'list' ? 'w-full' : ''} data-id="rytbofafp" data-path="src/components/product/ProductGrid.tsx">

              <ProductCard
              product={product}
              compact={compact || viewMode === 'list'} data-id="i4sq93p04" data-path="src/components/product/ProductGrid.tsx" />

            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Load More Button (if there are more products) */}
      {maxItems && products.length > maxItems &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center pt-8" data-id="urtfnfnq0" data-path="src/components/product/ProductGrid.tsx">

          <Button
          variant="outline"
          size="lg"
          className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-300" data-id="55b9z5qx4" data-path="src/components/product/ProductGrid.tsx">

            Load More Products
            <span className="ml-2 text-sm text-gray-500" data-id="8qgg00vjj" data-path="src/components/product/ProductGrid.tsx">({products.length - maxItems} more)</span>
          </Button>
        </motion.div>
      }
    </div>);

};

export default ProductGrid;