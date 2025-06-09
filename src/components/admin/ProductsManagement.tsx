
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { products as initialProducts } from '@/data/products';
import { Product } from '@/types';
import { toast } from '@/hooks/use-toast';
import { Edit, Trash2, Plus, Eye } from 'lucide-react';

const ProductsManagement = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nameArabic: '',
    price: '',
    originalPrice: '',
    description: '',
    descriptionArabic: '',
    image: '',
    category: 'للجنسين',
    volume: '',
    featured: false,
    inStock: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nameArabic || !formData.price || !formData.descriptionArabic) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    const productData: Product = {
      id: editingProduct?.id || Date.now().toString(),
      name: formData.name,
      nameArabic: formData.nameArabic,
      price: Number(formData.price),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
      description: formData.description,
      descriptionArabic: formData.descriptionArabic,
      image: formData.image || 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
      category: formData.category as 'رجالي' | 'نسائي' | 'للجنسين',
      volume: formData.volume,
      featured: formData.featured,
      inStock: formData.inStock,
    };

    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? productData : p));
      toast({
        title: "تم تحديث المنتج",
        description: "تم تحديث المنتج بنجاح",
      });
    } else {
      setProducts(prev => [...prev, productData]);
      toast({
        title: "تم إضافة المنتج",
        description: "تم إضافة المنتج بنجاح",
      });
    }

    resetForm();
    setIsDialogOpen(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      nameArabic: '',
      price: '',
      originalPrice: '',
      description: '',
      descriptionArabic: '',
      image: '',
      category: 'للجنسين',
      volume: '',
      featured: false,
      inStock: true,
    });
    setEditingProduct(null);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      nameArabic: product.nameArabic,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      description: product.description,
      descriptionArabic: product.descriptionArabic,
      image: product.image,
      category: product.category,
      volume: product.volume,
      featured: product.featured,
      inStock: product.inStock,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    toast({
      title: "تم حذف المنتج",
      description: "تم حذف المنتج بنجاح",
    });
  };

  const handleAddNew = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold arabic-heading text-luxury-black">إدارة المنتجات</h1>
          <p className="text-gray-600">إجمالي المنتجات: {products.length}</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="bg-gold hover:bg-gold/90 text-black">
              <Plus className="h-4 w-4 ml-2" />
              إضافة منتج جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="arabic-heading">
                {editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nameArabic">الاسم بالعربية *</Label>
                  <Input
                    id="nameArabic"
                    name="nameArabic"
                    value={formData.nameArabic}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم بالإنجليزية</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">السعر *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalPrice">السعر الأصلي (اختياري)</Label>
                  <Input
                    id="originalPrice"
                    name="originalPrice"
                    type="number"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">التصنيف *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="رجالي">رجالي</SelectItem>
                      <SelectItem value="نسائي">نسائي</SelectItem>
                      <SelectItem value="للجنسين">للجنسين</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="volume">الحجم</Label>
                  <Input
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleInputChange}
                    placeholder="100ml"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">رابط الصورة</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="descriptionArabic">الوصف بالعربية *</Label>
                <Textarea
                  id="descriptionArabic"
                  name="descriptionArabic"
                  value={formData.descriptionArabic}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">الوصف بالإنجليزية</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked }))}
                  />
                  <Label htmlFor="featured">منتج مميز</Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Switch
                    id="inStock"
                    checked={formData.inStock}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, inStock: checked }))}
                  />
                  <Label htmlFor="inStock">متوفر</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-2 space-x-reverse pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    resetForm();
                    setIsDialogOpen(false);
                  }}
                >
                  إلغاء
                </Button>
                <Button type="submit" className="bg-luxury-black hover:bg-gray-800 text-white">
                  {editingProduct ? 'تحديث' : 'إضافة'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">قائمة المنتجات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الصورة</TableHead>
                <TableHead>الاسم</TableHead>
                <TableHead>التصنيف</TableHead>
                <TableHead>السعر</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>مميز</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.nameArabic}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{product.nameArabic}</p>
                      <p className="text-sm text-gray-500">{product.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <span className="font-bold text-gold">{product.price} ر.س</span>
                      {product.originalPrice && (
                        <span className="line-through text-gray-500 text-sm">
                          {product.originalPrice} ر.س
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {product.inStock ? 'متوفر' : 'غير متوفر'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {product.featured && (
                      <Badge className="bg-gold/10 text-gold">مميز</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(product)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductsManagement;
