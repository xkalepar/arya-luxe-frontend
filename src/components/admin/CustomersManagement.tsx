
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Customer } from '@/types';
import { Search } from 'lucide-react';

const CustomersManagement = () => {
  // Mock customers data
  const [customers] = useState<Customer[]>([
    {
      id: '1',
      name: 'أحمد المالكي',
      email: 'ahmed@email.com',
      phone: '0501234567',
      city: 'الرياض',
      totalOrders: 5,
      totalSpent: 2250,
      createdAt: new Date('2023-08-15'),
    },
    {
      id: '2',
      name: 'فاطمة العتيبي',
      email: 'fatima@email.com',
      phone: '0509876543',
      city: 'جدة',
      totalOrders: 3,
      totalSpent: 1420,
      createdAt: new Date('2023-09-20'),
    },
    {
      id: '3',
      name: 'محمد السعيد',
      email: 'mohammed@email.com',
      phone: '0551234567',
      city: 'الدمام',
      totalOrders: 8,
      totalSpent: 3680,
      createdAt: new Date('2023-07-10'),
    },
    {
      id: '4',
      name: 'نورا الأحمد',
      email: 'nora@email.com',
      phone: '0569876543',
      city: 'الرياض',
      totalOrders: 2,
      totalSpent: 890,
      createdAt: new Date('2023-11-05'),
    },
    {
      id: '5',
      name: 'خالد البراك',
      email: 'khalid@email.com',
      phone: '0547654321',
      city: 'مكة',
      totalOrders: 6,
      totalSpent: 2980,
      createdAt: new Date('2023-06-18'),
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const totalCustomers = customers.length;
  const totalRevenue = customers.reduce((sum, customer) => sum + customer.totalSpent, 0);
  const averageOrderValue = totalRevenue / customers.reduce((sum, customer) => sum + customer.totalOrders, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold arabic-heading text-luxury-black">إدارة العملاء</h1>
        <p className="text-gray-600">إجمالي العملاء: {totalCustomers}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-luxury-black">{totalCustomers}</p>
              <p className="text-gray-600">إجمالي العملاء</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-gold">{totalRevenue.toLocaleString()} ر.س</p>
              <p className="text-gray-600">إجمالي الإيرادات</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{Math.round(averageOrderValue)} ر.س</p>
              <p className="text-gray-600">متوسط قيمة الطلب</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">البحث في العملاء</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="البحث بالاسم، البريد أو رقم الهاتف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">قائمة العملاء</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاسم</TableHead>
                <TableHead>البريد الإلكتروني</TableHead>
                <TableHead>الهاتف</TableHead>
                <TableHead>المدينة</TableHead>
                <TableHead>عدد الطلبات</TableHead>
                <TableHead>إجمالي المشتريات</TableHead>
                <TableHead>تاريخ التسجيل</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell className="text-gray-600">{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.city}</TableCell>
                  <TableCell>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {customer.totalOrders}
                    </span>
                  </TableCell>
                  <TableCell className="font-bold text-gold">
                    {customer.totalSpent.toLocaleString()} ر.س
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {customer.createdAt.toLocaleDateString('ar-SA')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredCustomers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">لا توجد نتائج للبحث "{searchTerm}"</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Customers */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">أفضل العملاء</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers
              .sort((a, b) => b.totalSpent - a.totalSpent)
              .slice(0, 5)
              .map((customer, index) => (
                <div key={customer.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-luxury-black">{customer.name}</p>
                      <p className="text-sm text-gray-600">{customer.city}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gold">{customer.totalSpent.toLocaleString()} ر.س</p>
                    <p className="text-sm text-gray-600">{customer.totalOrders} طلب</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomersManagement;
