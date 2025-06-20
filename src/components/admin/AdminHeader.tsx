
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="bg-card border-b border-border h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 space-x-reverse">
        <h1 className="text-xl font-semibold arabic-heading text-foreground">
          لوحة إدارة لكس آريا
        </h1>
      </div>
      
      <div className="flex items-center space-x-4 space-x-reverse">
        <Link to="/" target="_blank">
          <Button variant="outline" size="sm" className="border-luxury-rose-primary text-luxury-rose-primary hover:bg-luxury-rose-primary hover:text-white">
            <ExternalLink className="h-4 w-4 ml-2" />
            عرض المتجر
          </Button>
        </Link>
        <SidebarTrigger />
      </div>
    </header>
  );
};

export default AdminHeader;
