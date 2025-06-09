
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { CheckCircle2 } from 'lucide-react';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    address: '',
    city: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.customerPhone || !formData.address || !formData.city) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      const orderId = `LUX-${Date.now()}`;
      
      // Clear cart and show success message
      clearCart();
      
      toast({
        title: "تم تأكيد طلبك بنجاح!",
        description: `رقم الطلب: ${orderId}`,
      });

      setIsSubmitting(false);
      navigate('/');
    }, 2000);
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">لا يمكن إتمام الطلب</h1>
          <p className="text-gray-600 mb-8">السلة فارغة</p>
          <Button onClick={() => navigate('/shop')}>
            العودة للمتجر
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold arabic-heading text-luxury-black mb-4">
          إتمام الطلب
        </h1>
        <p className="text-gray-600">
          يرجى ملء البيانات المطلوبة لإتمام طلبك
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="arabic-heading">معلومات التوصيل</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customerName">الاسم الكامل *</Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customerPhone">رقم الهاتف *</Label>
                    <Input
                      id="customerPhone"
                      name="customerPhone"
                      type="tel"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customerEmail">البريد الإلكتروني</Label>
                  <Input
                    id="customerEmail"
                    name="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">العنوان التفصيلي *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="أدخل عنوانك بالتفصيل"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">المدينة *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="الرياض"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">ملاحظات إضافية</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="أي ملاحظات خاصة بالطلب"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-black font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "جارٍ معالجة الطلب..."
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      تأكيد الطلب ({state.total.toFixed(2)} ر.س)
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="border-gold/20 shadow-lg sticky top-8">
            <CardHeader>
              <CardTitle className="arabic-heading">ملخص الطلب</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center py-2 border-b">
                    <div className="flex-1">
                      <h4 className="font-medium text-luxury-black">{item.product.nameArabic}</h4>
                      <p className="text-sm text-gray-600">الكمية: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-gold">
                      {(item.product.price * item.quantity).toFixed(2)} ر.س
                    </span>
                  </div>
                ))}

                <div className="space-y-2 pt-4">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع الفرعي:</span>
                    <span>{state.total.toFixed(2)} ر.س</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>التوصيل:</span>
                    <span className="text-green-600">مجاني</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>الضريبة (15%):</span>
                    <span>{(state.total * 0.15).toFixed(2)} ر.س</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-xl font-bold">
                      <span>الإجمالي النهائي:</span>
                      <span className="text-gold">{(state.total * 1.15).toFixed(2)} ر.س</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 p-4 bg-luxury-beige rounded-lg">
                <h3 className="font-semibold text-luxury-black mb-2">طرق الدفع المتاحة</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• الدفع عند الاستلام</li>
                  <li>• فيزا / ماستركارد</li>
                  <li>• مدى</li>
                  <li>• STC Pay</li>
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="mt-4 p-4 bg-luxury-beige rounded-lg">
                <h3 className="font-semibold text-luxury-black mb-2">معلومات التوصيل</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• التوصيل خلال 2-3 أيام عمل</li>
                  <li>• توصيل مجاني للطلبات أكثر من 200 ر.س</li>
                  <li>• متابعة الطلب عبر الواتساب</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
