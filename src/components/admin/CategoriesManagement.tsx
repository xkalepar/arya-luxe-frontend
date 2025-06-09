
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { categories as initialCategories } from '@/data/products';
import { Category } from '@/types';
import { toast } from '@/hooks/use-toast';
import { Edit, Trash2, Plus } from 'lucide-react';

const CategoriesManagement = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    nameArabic: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nameArabic) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء الاسم العربي",
        variant: "destructive",
      });
      return;
    }

    const categoryData: Category = {
      id: editingCategory?.id || Date.now().toString(),
      name: formData.name,
      nameArabic: formData.nameArabic,
    };

    if (editingCategory) {
      setCategories(prev => prev.map(c => c.id === editingCategory.id ? categoryData : c));
      toast({
        title: "تم تحديث التصنيف",
        description: "تم تحديث التصنيف بنجاح",
      });
    } else {
      setCategories(prev => [...prev, categoryData]);
      toast({
        title: "تم إضافة التصنيف",
        description: "تم إضافة التصنيف بنجاح",
      });
    }

    resetForm();
    setIsDialogOpen(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      nameArabic: '',
    });
    setEditingCategory(null);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      nameArabic: category.nameArabic,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (categoryId: string) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
    toast({
      title: "تم حذف التصنيف",
      description: "تم حذف التصنيف بنجاح",
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
          <h1 className="text-3xl font-bold arabic-heading text-luxury-black">إدارة التصنيفات</h1>
          <p className="text-gray-600">إجمالي التصنيفات: {categories.length}</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew} className="bg-gold hover:bg-gold/90 text-black">
              <Plus className="h-4 w-4 ml-2" />
              إضافة تصنيف جديد
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="arabic-heading">
                {editingCategory ? 'تعديل التصنيف' : 'إضافة تصنيف جديد'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  {editingCategory ? 'تحديث' : 'إضافة'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories Table */}
      <Card>
        <CardHeader>
          <CardTitle className="arabic-heading">قائمة التصنيفات</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الاسم بالعربية</TableHead>
                <TableHead>الاسم بالإنجليزية</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.nameArabic}</TableCell>
                  <TableCell className="text-gray-600">{category.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(category)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(category.id)}
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

export default CategoriesManagement;
