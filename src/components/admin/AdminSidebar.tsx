
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  ShoppingCart, 
  Users, 
  Settings, 
  FileText,
  LogOut
} from 'lucide-react';

const menuItems = [
  { title: 'الرئيسية', url: '/admin/dashboard', icon: LayoutDashboard },
  { title: 'المنتجات', url: '/admin/dashboard/products', icon: Package },
  { title: 'التصنيفات', url: '/admin/dashboard/categories', icon: Tags },
  { title: 'الطلبات', url: '/admin/dashboard/orders', icon: ShoppingCart },
  { title: 'العملاء', url: '/admin/dashboard/customers', icon: Users },
  { title: 'المحتوى', url: '/admin/dashboard/content', icon: FileText },
  { title: 'الإعدادات', url: '/admin/dashboard/settings', icon: Settings },
];

const AdminSidebar = () => {
  const { collapsed } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin';
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-60"} collapsible>
      {/* Logo */}
      <div className="p-4 border-b">
        <div className="text-xl font-bold arabic-heading text-center">
          <span className="text-luxury-black">لكس</span>
          <span className="text-gold mr-1">آريا</span>
        </div>
        {!collapsed && (
          <p className="text-center text-sm text-gray-600 mt-1">لوحة الإدارة</p>
        )}
      </div>

      <SidebarTrigger className="m-2 self-end" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className={`flex items-center space-x-3 space-x-reverse ${
                        isActive(item.url) 
                          ? 'bg-gold/10 text-gold font-medium' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  {!collapsed && <span>تسجيل الخروج</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
