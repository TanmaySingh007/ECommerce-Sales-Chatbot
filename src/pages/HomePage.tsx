import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ProductGrid from '@/components/product/ProductGrid';
import { getFeaturedProducts, getNewArrivals, getBestSellers, getDeals, getCategories } from '@/data/products';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  Headphones,
  ArrowRight,
  Zap,
  Gift,
  Sparkles,
  TrendingUp } from
'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts(8);
  const newArrivals = getNewArrivals(6);
  const bestSellers = getBestSellers(6);
  const deals = getDeals(6);
  const categories = getCategories();

  const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on orders over $50',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure transactions',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer service',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Gift,
    title: 'Easy Returns',
    description: '30-day return policy',
    color: 'from-orange-500 to-red-500'
  }];


  const stats = [
  { number: '150+', label: 'Products', icon: ShoppingBag },
  { number: '50K+', label: 'Happy Customers', icon: Star },
  { number: '98%', label: 'Satisfaction Rate', icon: Sparkles },
  { number: '24/7', label: 'Support', icon: Headphones }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50" data-id="2an92h2ew" data-path="src/pages/HomePage.tsx">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800" data-id="z231uq48o" data-path="src/pages/HomePage.tsx">
        <div className="absolute inset-0" data-id="olcz0gc2i" data-path="src/pages/HomePage.tsx">
          <div className="absolute inset-0 bg-black/20" data-id="94fziifzx" data-path="src/pages/HomePage.tsx" />
          <div className="absolute top-0 left-0 w-full h-full" data-id="hw8w875h7" data-path="src/pages/HomePage.tsx">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" data-id="dfgudh8aj" data-path="src/pages/HomePage.tsx" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse delay-1000" data-id="kc9vq2rw0" data-path="src/pages/HomePage.tsx" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24" data-id="v3bsrn2v9" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto" data-id="mexjh9p7f" data-path="src/pages/HomePage.tsx">

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6 border border-white/30" data-id="9o56aoq5k" data-path="src/pages/HomePage.tsx">

              <Zap className="h-4 w-4 mr-2 text-yellow-300" data-id="z64s62m0v" data-path="src/pages/HomePage.tsx" />
              <span className="text-sm font-medium" data-id="ajxhy3noo" data-path="src/pages/HomePage.tsx">New Arrivals Just Dropped!</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight" data-id="r9tcmvmfz" data-path="src/pages/HomePage.tsx">

              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent" data-id="trd5wyeyq" data-path="src/pages/HomePage.tsx">
                Products
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed" data-id="ou5ucl48k" data-path="src/pages/HomePage.tsx">

              Shop the latest trends in electronics, fashion, home &amp; living with 
              <span className="font-semibold text-white" data-id="8o379h2jd" data-path="src/pages/HomePage.tsx"> unbeatable prices</span> and 
              <span className="font-semibold text-white" data-id="y2a9zu819" data-path="src/pages/HomePage.tsx"> fast delivery</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-id="b8nut26x2" data-path="src/pages/HomePage.tsx">

              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/chat')} data-id="df2khv6s7" data-path="src/pages/HomePage.tsx">

                <ShoppingBag className="mr-2 h-5 w-5" data-id="0okixicd6" data-path="src/pages/HomePage.tsx" />
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" data-id="lt40kj6a0" data-path="src/pages/HomePage.tsx" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} data-id="5lur776t7" data-path="src/pages/HomePage.tsx">

                View Featured
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 hidden lg:block" data-id="7jy3xgkwe" data-path="src/pages/HomePage.tsx">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20" data-id="dcfefhy44" data-path="src/pages/HomePage.tsx">

            <Star className="h-8 w-8 text-yellow-300" data-id="chevyl93s" data-path="src/pages/HomePage.tsx" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-32 right-16 hidden lg:block" data-id="l9ru9l18n" data-path="src/pages/HomePage.tsx">
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20" data-id="y2fnrh094" data-path="src/pages/HomePage.tsx">

            <ShoppingBag className="h-8 w-8 text-white" data-id="hu31dhno6" data-path="src/pages/HomePage.tsx" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b" data-id="v8twv0yqf" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="yngzqdts0" data-path="src/pages/HomePage.tsx">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" data-id="xvobej0td" data-path="src/pages/HomePage.tsx">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center" data-id="f1j8v0824" data-path="src/pages/HomePage.tsx">

                  <div className="flex justify-center mb-4" data-id="97yiszpm9" data-path="src/pages/HomePage.tsx">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white shadow-lg" data-id="veukdur76" data-path="src/pages/HomePage.tsx">
                      <IconComponent className="h-6 w-6" data-id="t7u2rej9e" data-path="src/pages/HomePage.tsx" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2" data-id="fcmohr0e6" data-path="src/pages/HomePage.tsx">{stat.number}</div>
                  <div className="text-gray-600 font-medium" data-id="vlhdcbo3q" data-path="src/pages/HomePage.tsx">{stat.label}</div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50" data-id="6wtnuz89l" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="56p43cguc" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12" data-id="yhejkk9ug" data-path="src/pages/HomePage.tsx">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="pero80h2b" data-path="src/pages/HomePage.tsx">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="7txwtc71e" data-path="src/pages/HomePage.tsx">
              We're committed to providing the best shopping experience with premium quality and exceptional service
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="rzto0noet" data-path="src/pages/HomePage.tsx">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group" data-id="p51rl5rrj" data-path="src/pages/HomePage.tsx">

                  <Card className="h-full p-6 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm" data-id="hvagxanu3" data-path="src/pages/HomePage.tsx">
                    <CardContent className="p-0" data-id="m02qgozc3" data-path="src/pages/HomePage.tsx">
                      <div className="flex justify-center mb-4" data-id="xc5px18i3" data-path="src/pages/HomePage.tsx">
                        <div className={`p-4 bg-gradient-to-r ${feature.color} rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300`} data-id="14kl775kq" data-path="src/pages/HomePage.tsx">
                          <IconComponent className="h-8 w-8" data-id="n6rcn62gi" data-path="src/pages/HomePage.tsx" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3" data-id="40pdgga1u" data-path="src/pages/HomePage.tsx">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed" data-id="mmtage550" data-path="src/pages/HomePage.tsx">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white" data-id="pqnobwn9z" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="bnqcl63u8" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12" data-id="ks03o3dlx" data-path="src/pages/HomePage.tsx">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="e847i53zq" data-path="src/pages/HomePage.tsx">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600" data-id="vpapa9h4h" data-path="src/pages/HomePage.tsx">
              Explore our wide range of product categories
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4" data-id="t94g1o68q" data-path="src/pages/HomePage.tsx">
            {categories.map((category, index) =>
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} data-id="9dsxv8z6a" data-path="src/pages/HomePage.tsx">

                <Badge
                variant="outline"
                className="px-6 py-3 text-lg font-medium border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
                onClick={() => navigate('/chat')} data-id="6v4yz4gy9" data-path="src/pages/HomePage.tsx">

                  {category}
                </Badge>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" data-id="5kyy8cimk" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="4vd36bybu" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12" data-id="dls57gsap" data-path="src/pages/HomePage.tsx">

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-white mb-4 shadow-lg" data-id="v759nr0cb" data-path="src/pages/HomePage.tsx">
              <Star className="h-4 w-4 mr-2" data-id="a268e7o5e" data-path="src/pages/HomePage.tsx" />
              <span className="text-sm font-semibold" data-id="dhj0v5a4r" data-path="src/pages/HomePage.tsx">Featured Products</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="8xkw3e5tz" data-path="src/pages/HomePage.tsx">
              Premium Selection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="d330ueudm" data-path="src/pages/HomePage.tsx">
              Discover our handpicked premium products with the highest ratings and customer satisfaction
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} data-id="ggqynmqz9" data-path="src/pages/HomePage.tsx">

            <ProductGrid products={featuredProducts} maxItems={8} data-id="w0qfqrsnz" data-path="src/pages/HomePage.tsx" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12" data-id="am3g3d85t" data-path="src/pages/HomePage.tsx">

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/chat')} data-id="sbe45f6nw" data-path="src/pages/HomePage.tsx">

              View All Products
              <ArrowRight className="ml-2 h-5 w-5" data-id="2mq3rwvlu" data-path="src/pages/HomePage.tsx" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white" data-id="jfuwv7yno" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="5cvqotnih" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12" data-id="7ldqbvgix" data-path="src/pages/HomePage.tsx">

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full text-white mb-4 shadow-lg" data-id="730dkzcwu" data-path="src/pages/HomePage.tsx">
              <TrendingUp className="h-4 w-4 mr-2" data-id="6fo4gysrl" data-path="src/pages/HomePage.tsx" />
              <span className="text-sm font-semibold" data-id="19tk71m4s" data-path="src/pages/HomePage.tsx">Best Sellers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="hrmhmmdka" data-path="src/pages/HomePage.tsx">
              Customer Favorites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="9ktyagw3c" data-path="src/pages/HomePage.tsx">
              These are the products our customers love most - tried, tested, and highly rated
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} data-id="ujrvqz4e3" data-path="src/pages/HomePage.tsx">

            <ProductGrid products={bestSellers} maxItems={6} data-id="ytas9lyqv" data-path="src/pages/HomePage.tsx" />
          </motion.div>
        </div>
      </section>

      {/* Special Deals */}
      <section className="py-16 bg-gradient-to-r from-red-50 via-pink-50 to-orange-50" data-id="c0xkq54qb" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-4" data-id="zskeen9t3" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12" data-id="rmlsj2uec" data-path="src/pages/HomePage.tsx">

            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white mb-4 shadow-lg animate-pulse" data-id="hu9sa34b3" data-path="src/pages/HomePage.tsx">
              <Zap className="h-4 w-4 mr-2" data-id="0wefa5get" data-path="src/pages/HomePage.tsx" />
              <span className="text-sm font-semibold" data-id="xmaiydby8" data-path="src/pages/HomePage.tsx">Limited Time Offers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-id="3yq5f2u9q" data-path="src/pages/HomePage.tsx">
              Special Deals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="nhksvcnil" data-path="src/pages/HomePage.tsx">
              Don't miss out on these amazing deals - limited time offers with incredible savings
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} data-id="1uqpi10yb" data-path="src/pages/HomePage.tsx">

            <ProductGrid products={deals} maxItems={6} data-id="rbj04rcsr" data-path="src/pages/HomePage.tsx" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden" data-id="3gkyvh9tk" data-path="src/pages/HomePage.tsx">
        <div className="absolute inset-0" data-id="35lz0zhy8" data-path="src/pages/HomePage.tsx">
          <div className="absolute top-0 left-0 w-full h-full" data-id="xz5kipd0j" data-path="src/pages/HomePage.tsx">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" data-id="v66t6izx9" data-path="src/pages/HomePage.tsx" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" data-id="i6ujqv4fu" data-path="src/pages/HomePage.tsx" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative" data-id="o2qpxo5pb" data-path="src/pages/HomePage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} data-id="kcss3l43x" data-path="src/pages/HomePage.tsx">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="5gwt94wc2" data-path="src/pages/HomePage.tsx">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto" data-id="ni1cw2ifm" data-path="src/pages/HomePage.tsx">
              Join thousands of satisfied customers and discover your next favorite product today
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/chat')} data-id="9k9e6567p" data-path="src/pages/HomePage.tsx">

              <ShoppingBag className="mr-3 h-6 w-6" data-id="9ewgpioym" data-path="src/pages/HomePage.tsx" />
              Start Shopping Now
              <ArrowRight className="ml-3 h-6 w-6" data-id="3lyvlqb2z" data-path="src/pages/HomePage.tsx" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default HomePage;