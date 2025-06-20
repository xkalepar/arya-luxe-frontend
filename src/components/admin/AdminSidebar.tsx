
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
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === 'collapsed';

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin';
  };

  return (
    <Sidebar side="right" className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <div className="text-xl font-bold arabic-heading text-center">
          <span className="text-foreground">لكس</span>
          <span className="text-luxury-rose-primary mr-1">آريا</span>
        </div>
        {!isCollapsed && (
          <p className="text-center text-sm text-muted-foreground mt-1">لوحة الإدارة</p>
        )}
      </div>

      <SidebarTrigger className="m-2 self-start" />

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
                          ? 'bg-luxury-rose-primary/10 text-luxury-rose-primary font-medium' 
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
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
                  {!isCollapsed && <span>تسجيل الخروج</span>}
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
