
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold arabic-heading mb-4">
              <span className="text-white">لكس</span>
              <span className="text-gold mr-1">آريا</span>
            </div>
            <p className="text-gray-300 mb-4">
              عطور فاخرة تحكي قصة الأناقة العربية
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                واتساب
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                إنستغرام
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-gold transition-colors">
                  العطور
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=رجالي" className="text-gray-300 hover:text-gold transition-colors">
                  عطور رجالية
                </Link>
              </li>
              <li>
                <Link to="/shop?category=نسائي" className="text-gray-300 hover:text-gold transition-colors">
                  عطور نسائية
                </Link>
              </li>
              <li>
                <Link to="/shop?category=للجنسين" className="text-gray-300 hover:text-gold transition-colors">
                  عطور للجنسين
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
            <ul className="space-y-2 text-gray-300">
              <li>الرياض، المملكة العربية السعودية</li>
              <li>+966 50 123 4567</li>
              <li>info@luxearya.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>© {currentYear} لكس آريا. جميع الحقوق محفوظة.</p>
            </div>
            <div className="flex space-x-6 space-x-reverse">
              <Link to="/privacy" className="text-gray-300 hover:text-gold transition-colors text-sm">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-gold transition-colors text-sm">
                الشروط والأحكام
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              بُني بواسطة الإبتكار التقني – <a href="https://www.ebtkar.tech" className="text-gold hover:text-gold-light transition-colors">www.ebtkar.tech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
