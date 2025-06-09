
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const ContentManagement = () => {
  const [homeContent, setHomeContent] = useState({
    heroTitle: 'مرحباً بك في لكس آريا',
    heroSubtitle: 'اكتشف عالم العطور الفاخرة والأصيلة التي تحكي قصة الأناقة العربية',
    heroButtonText: 'اكتشف العطور',
    featuredSectionTitle: 'العطور المميزة',
    featuredSectionSubtitle: 'مجموعة مختارة من أجود العطور الفاخرة التي تناسب جميع الأذواق',
    whyChooseUsTitle: 'لماذا تختار لكس آريا؟',
    testimonialsTitle: 'آراء عملائنا',
  });

  const [aboutContent, setAboutContent] = useState({
    pageTitle: 'من نحن',
    pageSubtitle: 'رحلة في عالم العطور الفاخرة والأصالة العربية',
    storyTitle: 'قصة لكس آريا',
    storyContent: `في قلب المملكة العربية السعودية، ولدت فكرة لكس آريا من شغف عميق بعالم العطور والروائح الفاخرة. بدأت رحلتنا برؤية واضحة: تقديم أجود أنواع العطور العربية الأصيلة التي تحكي قصة التراث والأناقة.

نحن نؤمن بأن العطر ليس مجرد رائحة، بل هو توقيع شخصي وذكرى خالدة تبقى عالقة في الأذهان. لذلك، نحرص على انتقاء كل عطر بعناية فائقة من أرقى دور العطور العالمية والمحلية.

اليوم، نفتخر بأن نكون جزءاً من لحظاتكم المميزة، ونسعى لأن نكون الوجهة الأولى لمحبي العطور الفاخرة في المملكة والخليج العربي.`,
    visionTitle: 'رؤيتنا',
    visionContent: 'أن نكون الريادة في عالم العطور الفاخرة، ونجعل من كل عطر تجربة استثنائية تحكي قصة الأناقة والفخامة العربية الأصيلة.',
    missionTitle: 'رسالتنا',
    missionContent: 'تقديم أجود أنواع العطور العربية والعالمية، مع ضمان الجودة والأصالة، وتوفير تجربة تسوق مميزة تليق بذوق عملائنا الكرام.',
    valuesTitle: 'قيمنا',
  });

  const [contactContent, setContactContent] = useState({
    pageTitle: 'تواصل معنا',
    pageSubtitle: 'نحن هنا لمساعدتك وللإجابة على جميع استفساراتك',
    formTitle: 'أرسل لنا رسالة',
    workingHoursTitle: 'أوقات العمل',
    faqTitle: 'الأسئلة الشائعة',
    whatsappMessage: 'للحصول على رد سريع ومساعدة فورية',
  });

  const handleHomeContentChange = (field: string, value: string) => {
    setHomeContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAboutContentChange = (field: string, value: string) => {
    setAboutContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactContentChange = (field: string, value: string) => {
    setContactContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveContent = () => {
    // In a real app, this would save to a backend
    toast({
      title: "تم حفظ المحتوى",
      description: "تم حفظ جميع التعديلات بنجاح",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold arabic-heading text-luxury-black">إدارة المحتوى</h1>
          <p className="text-gray-600">تحرير نصوص ومحتوى صفحات الموقع</p>
        </div>
        <Button onClick={handleSaveContent} className="bg-gold hover:bg-gold/90 text-black">
          <Save className="h-4 w-4 ml-2" />
          حفظ التغييرات
        </Button>
      </div>

      {/* Home Page Content */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">محتوى الصفحة الرئيسية</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="heroTitle">عنوان القسم الرئيسي</Label>
            <Input
              id="heroTitle"
              value={homeContent.heroTitle}
              onChange={(e) => handleHomeContentChange('heroTitle', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="heroSubtitle">النص التوضيحي للقسم الرئيسي</Label>
            <Textarea
              id="heroSubtitle"
              value={homeContent.heroSubtitle}
              onChange={(e) => handleHomeContentChange('heroSubtitle', e.target.value)}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="heroButtonText">نص الزر الرئيسي</Label>
            <Input
              id="heroButtonText"
              value={homeContent.heroButtonText}
              onChange={(e) => handleHomeContentChange('heroButtonText', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="featuredSectionTitle">عنوان قسم المنتجات المميزة</Label>
              <Input
                id="featuredSectionTitle"
                value={homeContent.featuredSectionTitle}
                onChange={(e) => handleHomeContentChange('featuredSectionTitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whyChooseUsTitle">عنوان قسم "لماذا تختارنا"</Label>
              <Input
                id="whyChooseUsTitle"
                value={homeContent.whyChooseUsTitle}
                onChange={(e) => handleHomeContentChange('whyChooseUsTitle', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="featuredSectionSubtitle">النص التوضيحي للمنتجات المميزة</Label>
            <Textarea
              id="featuredSectionSubtitle"
              value={homeContent.featuredSectionSubtitle}
              onChange={(e) => handleHomeContentChange('featuredSectionSubtitle', e.target.value)}
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* About Page Content */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">محتوى صفحة "من نحن"</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="aboutPageTitle">عنوان الصفحة</Label>
              <Input
                id="aboutPageTitle"
                value={aboutContent.pageTitle}
                onChange={(e) => handleAboutContentChange('pageTitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storyTitle">عنوان قسم القصة</Label>
              <Input
                id="storyTitle"
                value={aboutContent.storyTitle}
                onChange={(e) => handleAboutContentChange('storyTitle', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pageSubtitle">النص التوضيحي للصفحة</Label>
            <Textarea
              id="pageSubtitle"
              value={aboutContent.pageSubtitle}
              onChange={(e) => handleAboutContentChange('pageSubtitle', e.target.value)}
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="storyContent">محتوى قصة الشركة</Label>
            <Textarea
              id="storyContent"
              value={aboutContent.storyContent}
              onChange={(e) => handleAboutContentChange('storyContent', e.target.value)}
              rows={8}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="visionTitle">عنوان الرؤية</Label>
              <Input
                id="visionTitle"
                value={aboutContent.visionTitle}
                onChange={(e) => handleAboutContentChange('visionTitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="missionTitle">عنوان الرسالة</Label>
              <Input
                id="missionTitle"
                value={aboutContent.missionTitle}
                onChange={(e) => handleAboutContentChange('missionTitle', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="visionContent">محتوى الرؤية</Label>
              <Textarea
                id="visionContent"
                value={aboutContent.visionContent}
                onChange={(e) => handleAboutContentChange('visionContent', e.target.value)}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="missionContent">محتوى الرسالة</Label>
              <Textarea
                id="missionContent"
                value={aboutContent.missionContent}
                onChange={(e) => handleAboutContentChange('missionContent', e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Page Content */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">محتوى صفحة "تواصل معنا"</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactPageTitle">عنوان الصفحة</Label>
              <Input
                id="contactPageTitle"
                value={contactContent.pageTitle}
                onChange={(e) => handleContactContentChange('pageTitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="formTitle">عنوان النموذج</Label>
              <Input
                id="formTitle"
                value={contactContent.formTitle}
                onChange={(e) => handleContactContentChange('formTitle', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPageSubtitle">النص التوضيحي للصفحة</Label>
            <Textarea
              id="contactPageSubtitle"
              value={contactContent.pageSubtitle}
              onChange={(e) => handleContactContentChange('pageSubtitle', e.target.value)}
              rows={2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="workingHoursTitle">عنوان أوقات العمل</Label>
              <Input
                id="workingHoursTitle"
                value={contactContent.workingHoursTitle}
                onChange={(e) => handleContactContentChange('workingHoursTitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="faqTitle">عنوان الأسئلة الشائعة</Label>
              <Input
                id="faqTitle"
                value={contactContent.faqTitle}
                onChange={(e) => handleContactContentChange('faqTitle', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsappMessage">رسالة الواتساب</Label>
              <Input
                id="whatsappMessage"
                value={contactContent.whatsappMessage}
                onChange={(e) => handleContactContentChange('whatsappMessage', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManagement;
