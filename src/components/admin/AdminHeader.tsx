
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 space-x-reverse">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold arabic-heading text-luxury-black">
          لوحة إدارة لكس آريا
        </h1>
      </div>
      
      <div className="flex items-center space-x-4 space-x-reverse">
        <Link to="/" target="_blank">
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 ml-2" />
            عرض المتجر
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
