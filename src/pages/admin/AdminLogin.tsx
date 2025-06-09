
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Dummy credentials check
    if (formData.email === 'admin@luxearya.com' && formData.password === '123456') {
      // Simulate loading
      setTimeout(() => {
        localStorage.setItem('adminAuth', 'true');
        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: "مرحباً بك في لوحة الإدارة",
        });
        navigate('/admin/dashboard');
        setIsLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        toast({
          title: "خطأ في تسجيل الدخول",
          description: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
          variant: "destructive",
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-beige flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold arabic-heading">
            <span className="text-luxury-black">لكس</span>
            <span className="text-gold mr-1">آريا</span>
          </div>
          <p className="text-gray-600 mt-2">لوحة الإدارة</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-center arabic-heading flex items-center justify-center">
              <Lock className="h-5 w-5 ml-2" />
              تسجيل الدخول
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="admin@luxearya.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-luxury-black hover:bg-gray-800 text-white"
                disabled={isLoading}
              >
                {isLoading ? "جارٍ تسجيل الدخول..." : "دخول"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-sm text-gray-700 mb-2">بيانات التجربة:</h3>
              <p className="text-sm text-gray-600">البريد: admin@luxearya.com</p>
              <p className="text-sm text-gray-600">كلمة المرور: 123456</p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Store */}
        <div className="text-center mt-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-luxury-black"
          >
            العودة للمتجر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
