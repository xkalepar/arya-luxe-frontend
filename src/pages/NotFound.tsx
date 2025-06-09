
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-beige px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-6xl font-bold text-gold mb-4">404</div>
        <h1 className="text-2xl md:text-3xl font-bold arabic-heading text-luxury-black mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button className="bg-luxury-black hover:bg-gray-800 text-white">
              <ArrowRight className="mr-2 h-4 w-4" />
              العودة للرئيسية
            </Button>
          </Link>
          <div>
            <Link to="/shop" className="text-gold hover:text-gold/80 underline">
              تصفح العطور
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
