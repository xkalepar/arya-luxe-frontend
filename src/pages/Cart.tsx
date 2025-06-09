
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">السلة فارغة</h1>
          <p className="text-gray-600 mb-8">لا توجد منتجات في سلة التسوق</p>
          <Link to="/shop">
            <Button size="lg" className="bg-luxury-black hover:bg-gray-800 text-white">
              تصفح العطور
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold arabic-heading text-luxury-black mb-4">
          سلة التسوق
        </h1>
        <p className="text-gray-600">
          لديك {state.itemCount} منتج في السلة
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.product.id} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.nameArabic}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-luxury-black mb-1">
                      {item.product.nameArabic}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.product.category} • {item.product.volume}
                    </p>
                    <p className="text-lg font-bold text-gold">
                      {item.product.price} ر.س
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-1 text-center min-w-[3rem]">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Item Total */}
                  <div className="text-left sm:text-right">
                    <p className="text-lg font-bold text-luxury-black">
                      {(item.product.price * item.quantity).toFixed(2)} ر.س
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Clear Cart */}
          <div className="flex justify-end pt-4">
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-red-500 border-red-200 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 ml-2" />
              إفراغ السلة
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="border-gold/20 shadow-lg sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold arabic-heading text-luxury-black mb-6">
                ملخص الطلب
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>المجموع الفرعي:</span>
                  <span>{state.total.toFixed(2)} ر.س</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>التوصيل:</span>
                  <span className="text-green-600">مجاني</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>الإجمالي:</span>
                    <span className="text-gold">{state.total.toFixed(2)} ر.س</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Link to="/checkout" className="w-full block">
                  <Button size="lg" className="w-full bg-gold hover:bg-gold/90 text-black font-semibold">
                    إتمام الطلب
                  </Button>
                </Link>
                <Link to="/shop" className="w-full block">
                  <Button variant="outline" size="lg" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                    متابعة التسوق
                  </Button>
                </Link>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 p-4 bg-luxury-beige rounded-lg">
                <h3 className="font-semibold text-luxury-black mb-2">معلومات التوصيل</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• توصيل مجاني داخل الرياض</li>
                  <li>• التوصيل خلال 2-3 أيام عمل</li>
                  <li>• إمكانية الدفع عند الاستلام</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
