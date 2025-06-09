
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const Home = () => {
  const { addItem } = useCart();
  const featuredProducts = products.filter(product => product.featured);

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-luxury-black to-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold arabic-heading mb-6">
              مرحباً بك في <span className="text-gold">لكس آريا</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              اكتشف عالم العطور الفاخرة والأصيلة التي تحكي قصة الأناقة العربية
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-3 text-lg">
                اكتشف العطور
                <ShoppingBag className="mr-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading text-luxury-black mb-4">
            العطور المميزة
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            مجموعة مختارة من أجود العطور الفاخرة التي تناسب جميع الأذواق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover-scale border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.nameArabic}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      خصم
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
                    {product.nameArabic}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.descriptionArabic}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-2xl font-bold text-gold">
                        {product.price} ر.س
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">
                          {product.originalPrice} ر.س
                        </span>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 space-x-2 space-x-reverse">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-luxury-black hover:bg-gray-800 text-white"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  أضف للسلة
                </Button>
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                    التفاصيل
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black">
              عرض جميع العطور
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-luxury-beige py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold arabic-heading text-luxury-black mb-4">
              لماذا تختار لكس آريا؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🌟</span>
              </div>
              <h3 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
                جودة عالية
              </h3>
              <p className="text-gray-600">
                عطور فاخرة مصنوعة من أجود المواد الطبيعية والزيوت العطرية الأصيلة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🚚</span>
              </div>
              <h3 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
                توصيل سريع
              </h3>
              <p className="text-gray-600">
                خدمة توصيل سريعة وآمنة إلى جميع أنحاء المملكة العربية السعودية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">💎</span>
              </div>
              <h3 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
                أصالة مضمونة
              </h3>
              <p className="text-gray-600">
                جميع منتجاتنا أصلية ومضمونة مع شهادات الجودة والأصالة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading text-luxury-black mb-4">
            آراء عملائنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-gold/20">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "عطور رائعة وجودة ممتازة. العود الملكي أصبح عطري المفضل!"
              </p>
              <div className="font-semibold text-luxury-black">
                أحمد المالكي
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "خدمة عملاء ممتازة وتوصيل سريع. أنصح بشدة!"
              </p>
              <div className="font-semibold text-luxury-black">
                فاطمة العتيبي
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "عطور أصيلة وثبات رائع. لكس آريا الأفضل في السوق!"
              </p>
              <div className="font-semibold text-luxury-black">
                محمد السعيد
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
