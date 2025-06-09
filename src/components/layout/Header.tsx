
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { Menu, ShoppingBag, User } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'العطور', href: '/shop' },
    { name: 'من نحن', href: '/about' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-luxury-pearl border-b border-luxury-warm-gray/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="text-2xl font-bold arabic-heading">
              <span className="text-luxury-charcoal">لكس</span>
              <span className="text-luxury-royal-purple mr-1">آريا</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-luxury-royal-purple ${
                  isActive(item.href) ? 'text-luxury-royal-purple font-semibold' : 'text-luxury-warm-gray'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link to="/admin" className="hidden md:block">
              <Button variant="ghost" size="sm" className="text-luxury-warm-gray hover:text-luxury-royal-purple hover:bg-luxury-royal-purple/10">
                <User className="h-4 w-4 ml-2" />
                الإدارة
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-luxury-warm-gray hover:text-luxury-royal-purple hover:bg-luxury-royal-purple/10">
                <ShoppingBag className="h-4 w-4 ml-2" />
                السلة
                {state.itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-luxury-royal-purple text-white text-xs animate-luxury-glow">
                    {state.itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="text-luxury-warm-gray">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-luxury-pearl">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-2xl font-bold arabic-heading text-center pb-4 border-b border-luxury-warm-gray/20">
                    <span className="text-luxury-charcoal">لكس</span>
                    <span className="text-luxury-royal-purple mr-1">آريا</span>
                  </Link>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                        isActive(item.href) 
                          ? 'bg-luxury-royal-purple/10 text-luxury-royal-purple' 
                          : 'text-luxury-warm-gray hover:bg-luxury-cream'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium py-2 px-4 rounded-lg text-luxury-warm-gray hover:bg-luxury-cream border-t border-luxury-warm-gray/20 pt-4 mt-4"
                  >
                    <User className="h-4 w-4 ml-2 inline" />
                    لوحة الإدارة
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
