"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Store,
  MessageCircle,
  CheckCircle2,
  Loader2,
  ChefHat,
  Coffee,
  Gift,
  Camera,
  PartyPopper,
  Wrench,
  Sparkles,
  MoreHorizontal,
  Star,
  Heart,
  Users,
  Zap,
  Shield,
} from "lucide-react";

const categories = [
  { id: "ولائم وذبائح", label: "ولائم وذبائح", icon: ChefHat, color: "orange" },
  { id: "قهوجية وضيافة", label: "قهوجية وضيافة", icon: Coffee, color: "amber" },
  { id: "توزيعات وحلويات", label: "توزيعات وحلويات", icon: Gift, color: "pink" },
  { id: "تصوير وميديا", label: "تصوير وميديا", icon: Camera, color: "purple" },
  { id: "ترفيه وفعاليات", label: "ترفيه وفعاليات", icon: PartyPopper, color: "cyan" },
  { id: "تأجير معدات", label: "تأجير معدات", icon: Wrench, color: "slate" },
  { id: "تجميل ومكياج", label: "تجميل ومكياج", icon: Sparkles, color: "rose" },
  { id: "خدمات أخرى", label: "خدمات أخرى", icon: MoreHorizontal, color: "emerald" },
];

const cities = [
  "الرياض",
  "جدة",
  "الدمام",
  "مكة",
  "المدينة",
  "الطائف",
  "تبوك",
  "أبها",
  "أخرى",
];

const benefits = [
  {
    icon: Users,
    title: "عملاء جدد",
    description: "وصول مباشر لعملاء يبحثون عن خدماتك",
  },
  {
    icon: Zap,
    title: "بدون عمولات",
    description: "لا توجد رسوم أو عمولات على الصفقات",
  },
  {
    icon: Shield,
    title: "موثوقية",
    description: "انضم لشبكة مقدمي خدمات موثوقين",
  },
];

export default function VendorSignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    whatsapp: "",
    city: "",
    categories: [] as string[],
    description: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter((c) => c !== categoryId),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.categories.length === 0) {
      setError("الرجاء اختيار تصنيف واحد على الأقل");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/vendor-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          categories: JSON.stringify(formData.categories),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError(data.error || "حدث خطأ أثناء التسجيل");
      }
    } catch {
      setError("حدث خطأ أثناء التسجيل. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50/30 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl" />
        
        <Card className="w-full max-w-lg text-center border-emerald-200 shadow-2xl shadow-emerald-100/50 overflow-hidden relative">
          {/* Gradient Top */}
          <div className="h-2 bg-gradient-to-l from-emerald-500 to-green-600" />
          
          <CardContent className="p-12 space-y-8">
            <div className="relative inline-flex">
              <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 animate-pulse-glow">
                <CheckCircle2 className="w-14 h-14 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-gray-900">تم التسجيل بنجاح!</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                شكراً لتسجيلك معنا. سيتم التواصل معك قريباً عبر الواتساب.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Button
                asChild
                className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white h-14 text-lg font-bold shadow-lg shadow-emerald-500/25 rounded-2xl"
              >
                <Link href="/">العودة للرئيسية</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 h-14 text-lg font-medium rounded-2xl"
              >
                <a href="https://wa.me/966551315886" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  تواصل معنا عبر واتساب
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <Link href="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group">
              <div className="w-10 h-10 bg-gray-100 group-hover:bg-emerald-100 rounded-xl flex items-center justify-center transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:text-emerald-600" />
              </div>
              <span className="font-medium hidden sm:inline">العودة للرئيسية</span>
            </Link>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="إيفنتاك"
                className="w-12 h-12 rounded-2xl shadow-lg shadow-emerald-500/20"
              />
              <div>
                <span className="text-xl font-bold text-gradient">إيفنتاك</span>
                <p className="text-[10px] text-gray-400 -mt-1">سوق المناسبات</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Side - Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex">
                <Badge className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium border-0">
                  <Heart className="w-4 h-4 ml-2 text-amber-500" />
                  انضم لنا
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                سجل كـ<span className="text-gradient">مقدم خدمة</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                انضم لشبكة إيفنتاك وابدأ باستقبال طلبات العملاء مباشرة عبر الواتساب
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-emerald-200 text-sm">انضم الآن لـ</p>
                  <p className="text-2xl font-bold">+500 مقدم خدمة</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-sm text-emerald-200 mr-2">تقييم العملاء</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-3">
            <Card className="border-gray-200/50 shadow-2xl shadow-gray-200/50 overflow-hidden">
              {/* Gradient Top */}
              <div className="h-1.5 bg-gradient-to-l from-emerald-500 via-green-500 to-emerald-600" />
              
              <CardHeader className="space-y-2 border-b border-gray-100 bg-gray-50/50 p-6">
                <CardTitle className="text-2xl font-bold text-gray-900">معلومات النشاط</CardTitle>
                <CardDescription className="text-gray-500">
                  أدخل بيانات نشاطك التجاري
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Business Name */}
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-right block text-gray-700 font-medium">
                      اسم المحل / النشاط <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      placeholder="مثال: مطبخ أم محمد للولائم"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      required
                      className="text-right h-12 text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-right block text-gray-700 font-medium">
                      رقم الواتساب <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <MessageCircle className="w-5 h-5 text-emerald-500" />
                      </div>
                      <Input
                        id="whatsapp"
                        placeholder="05xxxxxxxx"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        required
                        className="text-right pr-12 h-12 text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                        dir="ltr"
                      />
                    </div>
                    <p className="text-sm text-gray-500 text-right">
                      أدخل الرقم بدون رمز الدولة (سيتم إضافة 966 تلقائياً)
                    </p>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <Label className="text-right block text-gray-700 font-medium">
                      المدينة <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                    >
                      <SelectTrigger className="text-right h-12 text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl">
                        <SelectValue placeholder="اختر المدينة" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Categories */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-right block text-gray-700 font-medium">
                        التصنيفات <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-gray-500 text-right mt-1">
                        اختر التصنيفات التي تناسب نشاطك
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {categories.map((category) => {
                        const IconComponent = category.icon;
                        const isSelected = formData.categories.includes(category.id);
                        return (
                          <label
                            key={category.id}
                            htmlFor={category.id}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              isSelected
                                ? "border-emerald-500 bg-emerald-50 shadow-md shadow-emerald-100"
                                : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-sm"
                            }`}
                          >
                            <Checkbox
                              id={category.id}
                              checked={isSelected}
                              onCheckedChange={(checked) =>
                                handleCategoryChange(category.id, checked as boolean)
                              }
                              className="data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                            />
                            <IconComponent className={`w-5 h-5 ${isSelected ? 'text-emerald-600' : 'text-gray-400'}`} />
                            <span className={`text-sm font-medium ${isSelected ? 'text-emerald-700' : 'text-gray-700'}`}>
                              {category.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-right block text-gray-700 font-medium">
                      وصف مختصر
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="اكتب نبذة عن خدماتك وخبرتك..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="text-right min-h-[120px] resize-none border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-right flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 font-bold">!</span>
                      </div>
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white h-14 text-lg font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 rounded-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin ml-2" />
                        جاري التسجيل...
                      </>
                    ) : (
                      <>
                        <Store className="w-5 h-5 ml-2" />
                        إرسال الطلب
                      </>
                    )}
                  </Button>

                  {/* Terms */}
                  <p className="text-sm text-gray-500 text-center">
                    بالضغط على "إرسال الطلب" فإنك توافق على{" "}
                    <Link href="#" className="text-emerald-600 hover:underline font-medium">
                      شروط الاستخدام
                    </Link>{" "}
                    و{" "}
                    <Link href="#" className="text-emerald-600 hover:underline font-medium">
                      سياسة الخصوصية
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 relative overflow-hidden">
        <div className="h-1 bg-gradient-to-l from-emerald-500 via-green-500 to-emerald-600" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="إيفنتاك" className="w-10 h-10 rounded-xl" />
              <span className="font-bold">إيفنتاك</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} إيفنتاك. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
