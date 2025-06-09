
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-luxury-black mb-6">
          تواصل معنا
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          نحن هنا لمساعدتك وللإجابة على جميع استفساراتك
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl arabic-heading">أرسل لنا رسالة</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="05xxxxxxxx"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-black font-semibold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="border-gold/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">الهاتف</h3>
                    <p className="text-gray-600">+966 50 123 4567</p>
                    <p className="text-sm text-gray-500">من السبت إلى الخميس (9ص - 10م)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@luxearya.com</p>
                    <p className="text-sm text-gray-500">نرد خلال 24 ساعة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gold/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">الموقع</h3>
                    <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                    <p className="text-sm text-gray-500">متاح التوصيل لجميع المناطق</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp */}
          <Card className="border-green-200 shadow-lg bg-green-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                تواصل عبر الواتساب
              </h3>
              <p className="text-green-700 mb-4">
                للحصول على رد سريع ومساعدة فورية
              </p>
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  محادثة واتساب
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className="border-gold/20 shadow-lg">
            <CardHeader>
              <CardTitle className="arabic-heading">أوقات العمل</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">السبت - الخميس</span>
                  <span className="font-medium">9:00 ص - 10:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الجمعة</span>
                  <span className="font-medium">2:00 م - 10:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">خدمة العملاء</span>
                  <span className="font-medium">24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold arabic-heading text-luxury-black text-center mb-12">
          الأسئلة الشائعة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-gold/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-luxury-black mb-2">
                كيف يمكنني معرفة أن العطر أصلي؟
              </h3>
              <p className="text-gray-600">
                جميع عطورنا مستوردة مباشرة من الشركات المصنعة ومضمونة الأصالة 100%.
                نوفر شهادات الأصالة عند الطلب.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-luxury-black mb-2">
                ما هي مدة التوصيل؟
              </h3>
              <p className="text-gray-600">
                التوصيل داخل الرياض يتم خلال 24-48 ساعة، وخارج الرياض خلال 2-3 أيام عمل.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-luxury-black mb-2">
                هل يمكنني إرجاع المنتج؟
              </h3>
              <p className="text-gray-600">
                نقبل الإرجاع خلال 7 أيام من تاريخ الاستلام بشرط عدم فتح العبوة.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-luxury-black mb-2">
                هل التوصيل مجاني؟
              </h3>
              <p className="text-gray-600">
                التوصيل مجاني للطلبات أكثر من 200 ريال داخل الرياض، و300 ريال خارج الرياض.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
