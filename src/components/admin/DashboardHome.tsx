
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, Clock } from 'lucide-react';
import { products } from '@/data/products';

const DashboardHome = () => {
  // Mock data for dashboard stats
  const stats = {
    totalProducts: products.length,
    totalOrders: 156,
    totalCustomers: 89,
    totalRevenue: 45600,
    pendingOrders: 12,
    monthlyGrowth: 15.3,
  };

  const recentOrders = [
    { id: 'LUX-001', customer: 'أحمد المالكي', total: 450, status: 'pending', time: '5 دقائق' },
    { id: 'LUX-002', customer: 'فاطمة العتيبي', total: 320, status: 'processing', time: '15 دقيقة' },
    { id: 'LUX-003', customer: 'محمد السعيد', total: 680, status: 'shipped', time: '30 دقيقة' },
    { id: 'LUX-004', customer: 'نورا الأحمد', total: 290, status: 'delivered', time: '1 ساعة' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-purple-600 bg-purple-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'في الانتظار';
      case 'processing': return 'قيد المعالجة';
      case 'shipped': return 'تم الشحن';
      case 'delivered': return 'تم التسليم';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold arabic-heading text-luxury-black mb-2">
          مرحباً بك في لوحة الإدارة
        </h1>
        <p className="text-gray-600">
          إليك نظرة سريعة على أحدث إحصائيات متجرك
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-gold">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">إجمالي المنتجات</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalProducts}</p>
              </div>
              <Package className="h-8 w-8 text-gold" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">إجمالي الطلبات</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalOrders}</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">إجمالي العملاء</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalCustomers}</p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">إجمالي المبيعات</p>
                <p className="text-2xl font-bold text-luxury-black">{stats.totalRevenue.toLocaleString()} ر.س</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="arabic-heading flex items-center">
              <Clock className="h-5 w-5 ml-2" />
              الطلبات المعلقة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">{stats.pendingOrders}</p>
              <p className="text-gray-600">طلب في انتظار المعالجة</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="arabic-heading flex items-center">
              <TrendingUp className="h-5 w-5 ml-2" />
              النمو الشهري
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">+{stats.monthlyGrowth}%</p>
              <p className="text-gray-600">مقارنة بالشهر الماضي</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">أحدث الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div>
                      <p className="font-medium text-luxury-black">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="text-left">
                    <p className="font-medium text-luxury-black">{order.total} ر.س</p>
                    <p className="text-sm text-gray-500">منذ {order.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
