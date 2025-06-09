
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardHome from '@/components/admin/DashboardHome';
import ProductsManagement from '@/components/admin/ProductsManagement';
import CategoriesManagement from '@/components/admin/CategoriesManagement';
import OrdersManagement from '@/components/admin/OrdersManagement';
import CustomersManagement from '@/components/admin/CustomersManagement';
import SettingsManagement from '@/components/admin/SettingsManagement';
import ContentManagement from '@/components/admin/ContentManagement';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('adminAuth');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/products" element={<ProductsManagement />} />
              <Route path="/categories" element={<CategoriesManagement />} />
              <Route path="/orders" element={<OrdersManagement />} />
              <Route path="/customers" element={<CustomersManagement />} />
              <Route path="/settings" element={<SettingsManagement />} />
              <Route path="/content" element={<ContentManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
