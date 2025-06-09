
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

const SettingsManagement = () => {
  const [storeSettings, setStoreSettings] = useState({
    storeName: 'لكس آريا',
    storeNameEnglish: 'LUXE ARYA',
    phone: '+966 50 123 4567',
    email: 'info@luxearya.com',
    whatsapp: '+966 50 123 4567',
    address: 'الرياض، المملكة العربية السعودية',
    description: 'عطور فاخرة تحكي قصة الأناقة العربية',
    logo: '',
    enableNotifications: true,
    enableWhatsappSupport: true,
    enableReviews: true,
    autoApproveReviews: false,
  });

  const [shippingSettings, setShippingSettings] = useState({
    freeShippingThreshold: 200,
    localShippingCost: 0,
    nationalShippingCost: 20,
    internationalShippingCost: 50,
    estimatedDeliveryLocal: '24-48 ساعة',
    estimatedDeliveryNational: '2-3 أيام عمل',
    estimatedDeliveryInternational: '5-7 أيام عمل',
  });

  const [paymentSettings, setPaymentSettings] = useState({
    enableCOD: true,
    enableCreditCard: true,
    enableMada: true,
    enableStcPay: true,
    enableApplePay: false,
    taxRate: 15,
  });

  const handleStoreSettingsChange = (field: string, value: any) => {
    setStoreSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleShippingSettingsChange = (field: string, value: any) => {
    setShippingSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePaymentSettingsChange = (field: string, value: any) => {
    setPaymentSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveSettings = () => {
    // In a real app, this would save to a backend
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم حفظ جميع الإعدادات بنجاح",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold arabic-heading text-luxury-black">الإعدادات</h1>
          <p className="text-gray-600">إدارة إعدادات المتجر والنظام</p>
        </div>
        <Button onClick={handleSaveSettings} className="bg-gold hover:bg-gold/90 text-black">
          <Save className="h-4 w-4 ml-2" />
          حفظ الإعدادات
        </Button>
      </div>

      {/* Store Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">معلومات المتجر</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">اسم المتجر (عربي)</Label>
              <Input
                id="storeName"
                value={storeSettings.storeName}
                onChange={(e) => handleStoreSettingsChange('storeName', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeNameEnglish">اسم المتجر (إنجليزي)</Label>
              <Input
                id="storeNameEnglish"
                value={storeSettings.storeNameEnglish}
                onChange={(e) => handleStoreSettingsChange('storeNameEnglish', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                value={storeSettings.phone}
                onChange={(e) => handleStoreSettingsChange('phone', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                type="email"
                value={storeSettings.email}
                onChange={(e) => handleStoreSettingsChange('email', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="whatsapp">رقم الواتساب</Label>
              <Input
                id="whatsapp"
                value={storeSettings.whatsapp}
                onChange={(e) => handleStoreSettingsChange('whatsapp', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logo">رابط الشعار</Label>
              <Input
                id="logo"
                value={storeSettings.logo}
                onChange={(e) => handleStoreSettingsChange('logo', e.target.value)}
                placeholder="https://example.com/logo.png"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">العنوان</Label>
            <Input
              id="address"
              value={storeSettings.address}
              onChange={(e) => handleStoreSettingsChange('address', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">وصف المتجر</Label>
            <Textarea
              id="description"
              value={storeSettings.description}
              onChange={(e) => handleStoreSettingsChange('description', e.target.value)}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableNotifications"
                checked={storeSettings.enableNotifications}
                onCheckedChange={(checked) => handleStoreSettingsChange('enableNotifications', checked)}
              />
              <Label htmlFor="enableNotifications">تفعيل الإشعارات</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableWhatsappSupport"
                checked={storeSettings.enableWhatsappSupport}
                onCheckedChange={(checked) => handleStoreSettingsChange('enableWhatsappSupport', checked)}
              />
              <Label htmlFor="enableWhatsappSupport">دعم الواتساب</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableReviews"
                checked={storeSettings.enableReviews}
                onCheckedChange={(checked) => handleStoreSettingsChange('enableReviews', checked)}
              />
              <Label htmlFor="enableReviews">تفعيل التقييمات</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="autoApproveReviews"
                checked={storeSettings.autoApproveReviews}
                onCheckedChange={(checked) => handleStoreSettingsChange('autoApproveReviews', checked)}
              />
              <Label htmlFor="autoApproveReviews">الموافقة التلقائية على التقييمات</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">إعدادات الشحن</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="freeShippingThreshold">الحد الأدنى للشحن المجاني</Label>
              <Input
                id="freeShippingThreshold"
                type="number"
                value={shippingSettings.freeShippingThreshold}
                onChange={(e) => handleShippingSettingsChange('freeShippingThreshold', Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="localShippingCost">تكلفة الشحن المحلي</Label>
              <Input
                id="localShippingCost"
                type="number"
                value={shippingSettings.localShippingCost}
                onChange={(e) => handleShippingSettingsChange('localShippingCost', Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationalShippingCost">تكلفة الشحن الوطني</Label>
              <Input
                id="nationalShippingCost"
                type="number"
                value={shippingSettings.nationalShippingCost}
                onChange={(e) => handleShippingSettingsChange('nationalShippingCost', Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="estimatedDeliveryLocal">مدة التوصيل المحلي</Label>
              <Input
                id="estimatedDeliveryLocal"
                value={shippingSettings.estimatedDeliveryLocal}
                onChange={(e) => handleShippingSettingsChange('estimatedDeliveryLocal', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estimatedDeliveryNational">مدة التوصيل الوطني</Label>
              <Input
                id="estimatedDeliveryNational"
                value={shippingSettings.estimatedDeliveryNational}
                onChange={(e) => handleShippingSettingsChange('estimatedDeliveryNational', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="internationalShippingCost">تكلفة الشحن الدولي</Label>
              <Input
                id="internationalShippingCost"
                type="number"
                value={shippingSettings.internationalShippingCost}
                onChange={(e) => handleShippingSettingsChange('internationalShippingCost', Number(e.target.value))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">إعدادات الدفع</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableCOD"
                checked={paymentSettings.enableCOD}
                onCheckedChange={(checked) => handlePaymentSettingsChange('enableCOD', checked)}
              />
              <Label htmlFor="enableCOD">الدفع عند الاستلام</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableCreditCard"
                checked={paymentSettings.enableCreditCard}
                onCheckedChange={(checked) => handlePaymentSettingsChange('enableCreditCard', checked)}
              />
              <Label htmlFor="enableCreditCard">البطاقات الائتمانية</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableMada"
                checked={paymentSettings.enableMada}
                onCheckedChange={(checked) => handlePaymentSettingsChange('enableMada', checked)}
              />
              <Label htmlFor="enableMada">مدى</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableStcPay"
                checked={paymentSettings.enableStcPay}
                onCheckedChange={(checked) => handlePaymentSettingsChange('enableStcPay', checked)}
              />
              <Label htmlFor="enableStcPay">STC Pay</Label>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="enableApplePay"
                checked={paymentSettings.enableApplePay}
                onCheckedChange={(checked) => handlePaymentSettingsChange('enableApplePay', checked)}
              />
              <Label htmlFor="enableApplePay">Apple Pay</Label>
            </div>
          </div>

          <div className="pt-4">
            <div className="space-y-2">
              <Label htmlFor="taxRate">معدل الضريبة (%)</Label>
              <Input
                id="taxRate"
                type="number"
                value={paymentSettings.taxRate}
                onChange={(e) => handlePaymentSettingsChange('taxRate', Number(e.target.value))}
                className="w-32"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsManagement;
