
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
      {/* Hero Section with Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Banner Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Rose Gradient Overlay */}
        <div className="absolute inset-0 gradient-rose-glow"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold arabic-heading mb-6 text-white">
                مرحباً بك في <span className="text-primary">لكس آريا</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                اكتشف عالم العطور الفاخرة والأصيلة التي تحكي قصة الأناقة العربية
              </p>
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg hover-scale">
                  اكتشف العطور
                  <ShoppingBag className="mr-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading text-foreground mb-4">
            العطور المميزة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            مجموعة مختارة من أجود العطور الفاخرة التي تناسب جميع الأذواق
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover-scale border-0 shadow-lg bg-card">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.nameArabic}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                      خصم
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold arabic-heading text-foreground mb-2">
                    {product.nameArabic}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {product.descriptionArabic}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-2xl font-bold text-primary">
                        {product.price} ر.س
                      </span>
                      {product.originalPrice && (
                        <span className="text-muted-foreground line-through">
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
                  className="flex-1 bg-foreground hover:bg-foreground/90 text-background"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  أضف للسلة
                </Button>
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    التفاصيل
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              عرض جميع العطور
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="gradient-luxury-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold arabic-heading text-foreground mb-4">
              لماذا تختار لكس آريا؟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🌟</span>
              </div>
              <h3 className="text-xl font-semibold arabic-heading text-foreground mb-2">
                جودة عالية
              </h3>
              <p className="text-muted-foreground">
                عطور فاخرة مصنوعة من أجود المواد الطبيعية والزيوت العطرية الأصيلة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🚚</span>
              </div>
              <h3 className="text-xl font-semibold arabic-heading text-foreground mb-2">
                توصيل سريع
              </h3>
              <p className="text-muted-foreground">
                خدمة توصيل سريعة وآمنة إلى جميع أنحاء المملكة العربية السعودية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">💎</span>
              </div>
              <h3 className="text-xl font-semibold arabic-heading text-foreground mb-2">
                أصالة مضمونة
              </h3>
              <p className="text-muted-foreground">
                جميع منتجاتنا أصلية ومضمونة مع شهادات الجودة والأصالة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold arabic-heading text-foreground mb-4">
            آراء عملائنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-primary/20 bg-card">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">⭐</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "عطور رائعة وجودة ممتازة. العود الملكي أصبح عطري المفضل!"
              </p>
              <div className="font-semibold text-foreground">
                أحمد المالكي
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">⭐</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "خدمة عملاء ممتازة وتوصيل سريع. أنصح بشدة!"
              </p>
              <div className="font-semibold text-foreground">
                فاطمة العتيبي
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-card">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">⭐</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "عطور أصيلة وثبات رائع. لكس آريا الأفضل في السوق!"
              </p>
              <div className="font-semibold text-foreground">
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
