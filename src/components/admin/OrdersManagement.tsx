
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Order } from '@/types';
import { toast } from '@/hooks/use-toast';
import { Eye, Edit } from 'lucide-react';

const OrdersManagement = () => {
  // Mock orders data
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'LUX-001',
      customerName: 'أحمد المالكي',
      customerPhone: '0501234567',
      customerEmail: 'ahmed@email.com',
      address: 'الرياض، حي النرجس',
      city: 'الرياض',
      items: [],
      total: 450,
      status: 'pending',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: 'LUX-002',
      customerName: 'فاطمة العتيبي',
      customerPhone: '0509876543',
      customerEmail: 'fatima@email.com',
      address: 'جدة، حي الصفا',
      city: 'جدة',
      items: [],
      total: 320,
      status: 'processing',
      createdAt: new Date('2024-01-14'),
    },
    {
      id: 'LUX-003',
      customerName: 'محمد السعيد',
      customerPhone: '0551234567',
      customerEmail: 'mohammed@email.com',
      address: 'الدمام، حي الجامعة',
      city: 'الدمام',
      items: [],
      total: 680,
      status: 'shipped',
      createdAt: new Date('2024-01-13'),
    },
    {
      id: 'LUX-004',
      customerName: 'نورا الأحمد',
      customerPhone: '0569876543',
      customerEmail: 'nora@email.com',
      address: 'الرياض، حي العليا',
      city: 'الرياض',
      items: [],
      total: 290,
      status: 'delivered',
      createdAt: new Date('2024-01-12'),
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus as Order['status'] }
        : order
    ));
    toast({
      title: "تم تحديث حالة الطلب",
      description: `تم تحديث الطلب ${orderId} إلى ${getStatusText(newStatus)}`,
    });
  };

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold arabic-heading text-luxury-black">إدارة الطلبات</h1>
          <p className="text-gray-600">إجمالي الطلبات: {orders.length}</p>
        </div>
        <div className="flex items-center space-x-4 space-x-reverse">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="تصفية حسب الحالة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الطلبات</SelectItem>
              <SelectItem value="pending">في الانتظار</SelectItem>
              <SelectItem value="processing">قيد المعالجة</SelectItem>
              <SelectItem value="shipped">تم الشحن</SelectItem>
              <SelectItem value="delivered">تم التسليم</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">
                {orders.filter(o => o.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600">في الانتظار</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {orders.filter(o => o.status === 'processing').length}
              </p>
              <p className="text-sm text-gray-600">قيد المعالجة</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">
                {orders.filter(o => o.status === 'shipped').length}
              </p>
              <p className="text-sm text-gray-600">تم الشحن</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {orders.filter(o => o.status === 'delivered').length}
              </p>
              <p className="text-sm text-gray-600">تم التسليم</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">قائمة الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>رقم الطلب</TableHead>
                <TableHead>العميل</TableHead>
                <TableHead>المدينة</TableHead>
                <TableHead>المبلغ</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>التاريخ</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customerName}</p>
                      <p className="text-sm text-gray-500">{order.customerPhone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{order.city}</TableCell>
                  <TableCell className="font-bold text-gold">{order.total} ر.س</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusText(order.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.createdAt.toLocaleDateString('ar-SA')}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedOrder(order)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="arabic-heading">تفاصيل الطلب {order.id}</DialogTitle>
                          </DialogHeader>
                          {selectedOrder && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="font-semibold">العميل:</p>
                                  <p>{selectedOrder.customerName}</p>
                                </div>
                                <div>
                                  <p className="font-semibold">الهاتف:</p>
                                  <p>{selectedOrder.customerPhone}</p>
                                </div>
                                <div>
                                  <p className="font-semibold">البريد:</p>
                                  <p>{selectedOrder.customerEmail}</p>
                                </div>
                                <div>
                                  <p className="font-semibold">المدينة:</p>
                                  <p>{selectedOrder.city}</p>
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold">العنوان:</p>
                                <p>{selectedOrder.address}</p>
                              </div>
                              <div>
                                <p className="font-semibold">إجمالي المبلغ:</p>
                                <p className="text-2xl font-bold text-gold">{selectedOrder.total} ر.س</p>
                              </div>
                              <div>
                                <p className="font-semibold">الحالة الحالية:</p>
                                <Badge className={getStatusColor(selectedOrder.status)}>
                                  {getStatusText(selectedOrder.status)}
                                </Badge>
                              </div>
                              {selectedOrder.notes && (
                                <div>
                                  <p className="font-semibold">ملاحظات:</p>
                                  <p>{selectedOrder.notes}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Select 
                        value={order.status} 
                        onValueChange={(value) => updateOrderStatus(order.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">في الانتظار</SelectItem>
                          <SelectItem value="processing">قيد المعالجة</SelectItem>
                          <SelectItem value="shipped">تم الشحن</SelectItem>
                          <SelectItem value="delivered">تم التسليم</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersManagement;
