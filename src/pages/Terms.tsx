
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-luxury-black mb-4">
          الشروط والأحكام
        </h1>
        <p className="text-gray-600">
          آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
        </p>
      </div>

      <div className="space-y-8">
        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">القبول بالشروط</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              مرحباً بك في لكس آريا. باستخدامك لموقعنا الإلكتروني أو خدماتنا، فإنك توافق على الالتزام
              بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">تعريفات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-2">
              <p><strong>"الشركة"</strong> أو <strong>"نحن"</strong> تشير إلى لكس آريا</p>
              <p><strong>"المستخدم"</strong> أو <strong>"أنت"</strong> تشير إلى الشخص الذي يستخدم خدماتنا</p>
              <p><strong>"الخدمات"</strong> تشير إلى جميع المنتجات والخدمات المقدمة من خلال موقعنا</p>
              <p><strong>"المنتجات"</strong> تشير إلى العطور والمنتجات ذات الصلة المعروضة للبيع</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">استخدام الموقع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <p>يحق لك استخدام موقعنا للأغراض الشخصية والقانونية فقط. يُمنع عليك:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>استخدام الموقع لأي أغراض غير قانونية</li>
                <li>محاولة الوصول غير المصرح به لأنظمتنا</li>
                <li>نشر أو إرسال محتوى ضار أو مسيء</li>
                <li>انتهاك حقوق الملكية الفكرية</li>
                <li>التدخل في عمل الموقع أو خوادمنا</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">الطلبات والمدفوعات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <h4 className="font-semibold text-luxury-black">شروط الطلب:</h4>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>جميع الطلبات تخضع لتوفر المنتجات</li>
                <li>الأسعار قابلة للتغيير دون إشعار مسبق</li>
                <li>نحتفظ بالحق في إلغاء أي طلب لأسباب تقنية أو قانونية</li>
                <li>يجب تأكيد الطلب خلال 24 ساعة من تقديمه</li>
              </ul>
              
              <h4 className="font-semibold text-luxury-black">طرق الدفع:</h4>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الدفع عند الاستلام</li>
                <li>البطاقات الائتمانية (فيزا، ماستركارد)</li>
                <li>مدى</li>
                <li>المحافظ الإلكترونية (STC Pay، Apple Pay)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">التوصيل</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>التوصيل داخل الرياض: 24-48 ساعة</li>
                <li>التوصيل خارج الرياض: 2-3 أيام عمل</li>
                <li>التوصيل مجاني للطلبات أكثر من 200 ريال داخل الرياض</li>
                <li>رسوم التوصيل خارج الرياض: 20 ريال للطلبات أقل من 300 ريال</li>
                <li>المشتري مسؤول عن تقديم عنوان صحيح ومفصل</li>
                <li>في حالة عدم تواجدك، سيتم تأجيل التوصيل لليوم التالي</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">الإرجاع والاستبدال</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <h4 className="font-semibold text-luxury-black">شروط الإرجاع:</h4>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>يمكن إرجاع المنتجات خلال 7 أيام من تاريخ الاستلام</li>
                <li>يجب أن تكون المنتجات في حالتها الأصلية وغير مفتوحة</li>
                <li>الإرجاع لأسباب تتعلق بجودة المنتج مجاني</li>
                <li>الإرجاع لأسباب شخصية يتحمل المشتري رسوم الشحن</li>
                <li>لا يمكن إرجاع المنتجات المخصصة أو ذات الطبيعة الشخصية</li>
              </ul>
              
              <h4 className="font-semibold text-luxury-black">عملية الإرجاع:</h4>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>تواصل مع خدمة العملاء خلال فترة الإرجاع المسموحة</li>
                <li>احصل على رقم إرجاع من فريق الدعم</li>
                <li>أرسل المنتج مع رقم الإرجاع</li>
                <li>سيتم معالجة الاسترداد خلال 5-7 أيام عمل</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">الضمان ومسؤولية المنتج</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>جميع منتجاتنا أصلية ومضمونة 100%</li>
                <li>نضمن جودة المنتجات عند التسليم</li>
                <li>لا نتحمل مسؤولية سوء الاستخدام أو التخزين غير الصحيح</li>
                <li>تختلف فترة الصلاحية حسب نوع المنتج والشركة المصنعة</li>
                <li>في حالة وجود عيب في المنتج، سيتم استبداله مجاناً</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">الملكية الفكرية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <p>
                جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصاميم،
                محمية بموجب قوانين الملكية الفكرية. لا يجوز نسخ أو توزيع أو تعديل أي من هذه المحتويات
                دون موافقة كتابية مسبقة منا.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">إخلاء المسؤولية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>نبذل قصارى جهدنا لضمان دقة المعلومات على الموقع</li>
                <li>لا نضمن عدم انقطاع أو خلو الموقع من الأخطاء</li>
                <li>لا نتحمل مسؤولية أي أضرار ناتجة عن استخدام الموقع</li>
                <li>المستخدم مسؤول عن حماية معلوماته الشخصية</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">القانون الساري</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي نزاع ينشأ من استخدام
              موقعنا أو خدماتنا سيتم حله وفقاً للقوانين السعودية وأمام المحاكم المختصة في المملكة.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">تعديل الشروط</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التعديلات على هذه الصفحة
              مع تاريخ التحديث. استمرارك في استخدام خدماتنا بعد التعديل يعني موافقتك على الشروط الجديدة.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">تواصل معنا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-2">
              <p>لأي استفسارات حول الشروط والأحكام، يمكنك التواصل معنا:</p>
              <ul className="space-y-1">
                <li><strong>البريد الإلكتروني:</strong> legal@luxearya.com</li>
                <li><strong>الهاتف:</strong> +966 50 123 4567</li>
                <li><strong>العنوان:</strong> الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
