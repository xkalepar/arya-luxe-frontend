
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, ArrowRight, Star, Heart, Share2, Minus, Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => 
    p.id !== id && p.category === product?.category
  ).slice(0, 4);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">المنتج غير موجود</h1>
          <Link to="/shop">
            <Button>العودة للمتجر</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: "تم إضافة المنتج",
      description: `تم إضافة ${product.nameArabic} إلى السلة`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.nameArabic,
        text: product.descriptionArabic,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط المنتج إلى الحافظة",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between mb-4">
        <Link to="/shop">
          <Button variant="ghost" size="sm">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-primary text-primary' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Desktop Breadcrumb */}
      <nav className="hidden md:flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">الرئيسية</Link>
        <ArrowRight className="h-4 w-4" />
        <Link to="/shop" className="hover:text-primary">العطور</Link>
        <ArrowRight className="h-4 w-4" />
        <span className="text-foreground">{product.nameArabic}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.nameArabic}
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
            />
            {product.originalPrice && (
              <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                خصم {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge className="absolute top-4 left-4 bg-muted text-muted-foreground">
                غير متوفر
              </Badge>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold arabic-heading text-foreground mb-2">
              {product.nameArabic}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              {product.name}
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Badge variant="secondary" className="text-sm">
                {product.category}
              </Badge>
              <span className="text-muted-foreground text-sm">الحجم: {product.volume}</span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                {product.price} ر.س
              </span>
              {product.originalPrice && (
                <span className="text-lg md:text-xl text-muted-foreground line-through">
                  {product.originalPrice} ر.س
                </span>
              )}
            </div>
            {product.originalPrice && (
              <p className="text-green-600 font-medium">
                وفر {product.originalPrice - product.price} ر.س
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold arabic-heading text-foreground mb-3">
              وصف العطر
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {product.descriptionArabic}
            </p>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <label className="text-sm font-medium text-foreground">الكمية:</label>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-1 text-center min-w-[3rem]">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="lg"
              className="w-full"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {product.inStock ? `أضف ${quantity} إلى السلة` : 'غير متوفر حالياً'}
            </Button>
          </div>

          {/* Product Features */}
          <div className="bg-secondary/50 rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold arabic-heading text-foreground mb-4">
              مميزات المنتج
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary ml-2" />
                عطر أصلي 100%
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary ml-2" />
                ثبات يدوم طوال اليوم
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary ml-2" />
                مناسب للاستخدام اليومي
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary ml-2" />
                تركيبة فاخرة من أجود المواد
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-8 md:mt-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold arabic-heading text-foreground mb-6 md:mb-8">
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover-scale border-0 shadow-lg">
                <CardContent className="p-0">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.nameArabic}
                        className="w-full h-32 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-sm md:text-lg font-semibold arabic-heading text-foreground mb-2 line-clamp-1">
                        {relatedProduct.nameArabic}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm md:text-lg font-bold text-primary">
                          {relatedProduct.price} ر.س
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {relatedProduct.category}
                        </Badge>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
