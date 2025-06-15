
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Home, ShoppingBag, Heart, User, Store } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const { state } = useCart();

  const navigation = [
    { name: 'الرئيسية', href: '/', icon: Home },
    { name: 'العطور', href: '/shop', icon: Store },
    { name: 'السلة', href: '/cart', icon: ShoppingBag, badge: state.itemCount },
    { name: 'من نحن', href: '/about', icon: Heart },
    { name: 'الإدارة', href: '/admin', icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 backdrop-blur-sm">
      <div className="flex items-center justify-around h-16 px-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-2 px-1 relative transition-all duration-300 ${
                isActive(item.href) 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <div className="relative">
                <Icon className="h-5 w-5 mb-1" />
                {item.badge && item.badge > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
