
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold arabic-heading text-luxury-black mb-4">
          سياسة الخصوصية
        </h1>
        <p className="text-gray-600">
          آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
        </p>
      </div>

      <div className="space-y-8">
        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">مقدمة</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none text-right">
            <p className="text-gray-600 leading-relaxed">
              نحن في لكس آريا نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه
              كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي تقدمها لنا عند استخدام موقعنا الإلكتروني
              أو خدماتنا.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">المعلومات التي نجمعها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-600">
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">المعلومات الشخصية:</h4>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>الاسم الكامل</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                  <li>العنوان البريدي</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-luxury-black mb-2">معلومات الطلبات:</h4>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>تفاصيل المنتجات المطلوبة</li>
                  <li>تفضيلات الدفع والتوصيل</li>
                  <li>تاريخ الطلبات السابقة</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">كيفية استخدام معلوماتك</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>معالجة وتنفيذ طلباتك</li>
              <li>التواصل معك بخصوص طلباتك</li>
              <li>تحسين خدماتنا ومنتجاتنا</li>
              <li>إرسال العروض والتحديثات (بموافقتك)</li>
              <li>الامتثال للمتطلبات القانونية</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">حماية معلوماتك</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <p>
                نتخذ التدابير الأمنية المناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به
                أو التغيير أو الكشف أو التدمير. تشمل هذه التدابير:
              </p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>التشفير الآمن لجميع البيانات الحساسة</li>
                <li>الوصول المحدود للموظفين المخولين فقط</li>
                <li>مراقبة أمنية مستمرة لأنظمتنا</li>
                <li>تحديث منتظم لبروتوكولات الأمان</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">مشاركة المعلومات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <p>
                لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة، باستثناء الحالات التالية:
              </p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>شركات التوصيل لتنفيذ طلباتك</li>
                <li>مقدمي خدمات الدفع للمعاملات المالية</li>
                <li>عند الحاجة للامتثال للقوانين المعمول بها</li>
                <li>بموافقتك الصريحة</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">حقوقك</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-4">
              <p>لديك الحق في:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح أو تحديث معلوماتك</li>
                <li>حذف معلوماتك الشخصية</li>
                <li>إلغاء الاشتراك في الرسائل التسويقية</li>
                <li>تقديم شكوى بخصوص استخدام معلوماتك</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">ملفات تعريف الارتباط (Cookies)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. هذه الملفات تساعدنا في فهم
              كيفية استخدامك للموقع وتخصيص المحتوى وفقاً لتفضيلاتك. يمكنك إدارة إعدادات ملفات
              تعريف الارتباط من خلال متصفحك.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">التحديثات على السياسة</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية
              عبر البريد الإلكتروني أو من خلال إشعار على موقعنا. ننصحك بمراجعة هذه السياسة
              بانتظام للبقاء على اطلاع بكيفية حمايتنا لمعلوماتك.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gold/20">
          <CardHeader>
            <CardTitle className="arabic-heading">تواصل معنا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-gray-600 space-y-2">
              <p>إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا:</p>
              <ul className="space-y-1">
                <li><strong>البريد الإلكتروني:</strong> privacy@luxearya.com</li>
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

export default Privacy;
