
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-luxury-black mb-6">
          من نحن
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          رحلة في عالم العطور الفاخرة والأصالة العربية
        </p>
      </section>

      {/* Brand Story */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold arabic-heading text-luxury-black mb-6">
              قصة <span className="text-gold">لكس آريا</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                في قلب المملكة العربية السعودية، ولدت فكرة لكس آريا من شغف عميق بعالم العطور
                والروائح الفاخرة. بدأت رحلتنا برؤية واضحة: تقديم أجود أنواع العطور العربية
                الأصيلة التي تحكي قصة التراث والأناقة.
              </p>
              <p>
                نحن نؤمن بأن العطر ليس مجرد رائحة، بل هو توقيع شخصي وذكرى خالدة تبقى عالقة
                في الأذهان. لذلك، نحرص على انتقاء كل عطر بعناية فائقة من أرقى دور العطور
                العالمية والمحلية.
              </p>
              <p>
                اليوم، نفتخر بأن نكون جزءاً من لحظاتكم المميزة، ونسعى لأن نكون الوجهة الأولى
                لمحبي العطور الفاخرة في المملكة والخليج العربي.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop"
              alt="عطور لكس آريا"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-gold/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-black">🎯</span>
              </div>
              <h3 className="text-2xl font-bold arabic-heading text-luxury-black mb-4">
                رؤيتنا
              </h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الريادة في عالم العطور الفاخرة، ونجعل من كل عطر تجربة استثنائية
                تحكي قصة الأناقة والفخامة العربية الأصيلة.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gold/20 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-black">💎</span>
              </div>
              <h3 className="text-2xl font-bold arabic-heading text-luxury-black mb-4">
                رسالتنا
              </h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم أجود أنواع العطور العربية والعالمية، مع ضمان الجودة والأصالة،
                وتوفير تجربة تسوق مميزة تليق بذوق عملائنا الكرام.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16 bg-luxury-beige rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold arabic-heading text-luxury-black text-center mb-12">
          قيمنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl text-black">✨</span>
            </div>
            <h4 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
              الجودة
            </h4>
            <p className="text-gray-600">
              نلتزم بأعلى معايير الجودة في جميع منتجاتنا
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl text-black">🤝</span>
            </div>
            <h4 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
              الثقة
            </h4>
            <p className="text-gray-600">
              نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl text-black">🌟</span>
            </div>
            <h4 className="text-xl font-semibold arabic-heading text-luxury-black mb-2">
              التميز
            </h4>
            <p className="text-gray-600">
              نسعى للتميز في كل ما نقدمه من منتجات وخدمات
            </p>
          </div>
        </div>
      </section>

      {/* Team or Store Info */}
      <section className="text-center">
        <h2 className="text-3xl font-bold arabic-heading text-luxury-black mb-8">
          تواصل معنا
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-8 leading-relaxed">
            نحن هنا لخدمتكم ومساعدتكم في اختيار العطر المثالي.
            لا تترددوا في التواصل معنا لأي استفسار أو مساعدة.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-luxury-black mb-2">الهاتف</h4>
              <p className="text-gray-600">+966 50 123 4567</p>
            </div>
            <div>
              <h4 className="font-semibold text-luxury-black mb-2">البريد الإلكتروني</h4>
              <p className="text-gray-600">info@luxearya.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-luxury-black mb-2">الموقع</h4>
              <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
