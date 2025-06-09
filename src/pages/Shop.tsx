
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || '');
  const [priceFilter, setPriceFilter] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Price filter
    if (priceFilter) {
      switch (priceFilter) {
        case 'under-300':
          filtered = filtered.filter(product => product.price < 300);
          break;
        case '300-500':
          filtered = filtered.filter(product => product.price >= 300 && product.price <= 500);
          break;
        case 'over-500':
          filtered = filtered.filter(product => product.price > 500);
          break;
      }
    }

    // Sort
    if (sortBy) {
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          filtered.sort((a, b) => a.nameArabic.localeCompare(b.nameArabic));
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [categoryFilter, priceFilter, sortBy]);

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const clearFilters = () => {
    setCategoryFilter('');
    setPriceFilter('');
    setSortBy('');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold arabic-heading text-luxury-black mb-4">
          جميع العطور
        </h1>
        <p className="text-gray-600 text-lg">
          اكتشف مجموعتنا الكاملة من العطور الفاخرة ({filteredProducts.length} منتج)
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">تصفية النتائج:</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 max-w-4xl">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="نوع العطر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="رجالي">رجالي</SelectItem>
                <SelectItem value="نسائي">نسائي</SelectItem>
                <SelectItem value="للجنسين">للجنسين</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <SelectValue placeholder="السعر" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-300">أقل من 300 ر.س</SelectItem>
                <SelectItem value="300-500">300 - 500 ر.س</SelectItem>
                <SelectItem value="over-500">أكثر من 500 ر.س</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">الاسم</SelectItem>
                <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={clearFilters} className="border-gold text-gold hover:bg-gold hover:text-black">
              مسح الفلاتر
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">لا توجد منتجات مطابقة للبحث</p>
          <Button onClick={clearFilters} className="mt-4">
            عرض جميع المنتجات
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover-scale border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.nameArabic}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      خصم
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-4 left-4 bg-gray-500 text-white">
                      غير متوفر
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold arabic-heading text-luxury-black mb-2">
                    {product.nameArabic}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.descriptionArabic}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="text-lg font-bold text-gold">
                        {product.price} ر.س
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          {product.originalPrice} ر.س
                        </span>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500">
                    الحجم: {product.volume}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 space-x-2 space-x-reverse">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="flex-1 bg-luxury-black hover:bg-gray-800 text-white disabled:bg-gray-300"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
                </Button>
                <Link to={`/product/${product.id}`} className="flex-1">
                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                    التفاصيل
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
