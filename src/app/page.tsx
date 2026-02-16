"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  MessageCircle,
  ChefHat,
  Camera,
  Sparkles,
  Users,
  Handshake,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Star,
  Heart,
  PartyPopper,
  Wand2,
  Coffee,
  Gift,
  Wrench,
  MoreHorizontal,
  Shield,
  TrendingUp,
  Clock,
  Instagram,
  Twitter,
  ChevronDown,
  Play,
  ArrowRight,
  Gem,
  Award,
  Globe,
} from "lucide-react";

const services = [
  {
    id: "ولائم وذبائح",
    title: "ولائم وذبائح",
    description: "ولائم، ذبائح، مندي، عربي، كبسة ومأكولات تقليدية",
    icon: ChefHat,
    gradient: "from-orange-500 to-amber-600",
    lightGradient: "from-orange-100 to-amber-100",
    iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
  },
  {
    id: "قهوجية وضيافة",
    title: "قهوجية وضيافة",
    description: "قهوة عربية، تمور، ضيافة، معجنات ومشروبات",
    icon: Coffee,
    gradient: "from-amber-500 to-yellow-600",
    lightGradient: "from-amber-100 to-yellow-100",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    id: "توزيعات وحلويات",
    title: "توزيعات وحلويات",
    description: "توزيعات، حلويات، عصائر، تمور وهدايا",
    icon: Gift,
    gradient: "from-pink-500 to-rose-600",
    lightGradient: "from-pink-100 to-rose-100",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
  },
  {
    id: "تصوير وميديا",
    title: "تصوير وميديا",
    description: "تصوير فوتوغرافي، فيديو، درون ومونتاج",
    icon: Camera,
    gradient: "from-violet-500 to-purple-600",
    lightGradient: "from-violet-100 to-purple-100",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    id: "ترفيه وفعاليات",
    title: "ترفيه وفعاليات",
    description: "فرق موسيقية، مطربين، ألعاب ومسرح",
    icon: PartyPopper,
    gradient: "from-cyan-500 to-teal-600",
    lightGradient: "from-cyan-100 to-teal-100",
    iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
  },
  {
    id: "تجميل ومكياج",
    title: "تجميل ومكياج",
    description: "مكياج، كوافير، عناية بالبشرة وتجميل",
    icon: Wand2,
    gradient: "from-rose-500 to-pink-600",
    lightGradient: "from-rose-100 to-pink-100",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
  },
  {
    id: "تأجير معدات",
    title: "تأجير معدات",
    description: "خيام، كراسي، طاولات، صوت وإضارة",
    icon: Wrench,
    gradient: "from-slate-500 to-gray-600",
    lightGradient: "from-slate-100 to-gray-100",
    iconBg: "bg-gradient-to-br from-slate-500 to-gray-600",
  },
  {
    id: "خدمات أخرى",
    title: "خدمات أخرى",
    description: "خدمات إضافية متنوعة لمناسباتك",
    icon: MoreHorizontal,
    gradient: "from-emerald-500 to-green-600",
    lightGradient: "from-emerald-100 to-green-100",
    iconBg: "bg-gradient-to-br from-emerald-500 to-green-600",
  },
];

const steps = [
  {
    number: 1,
    title: "أرسل طلبك عبر واتساب",
    description: "تواصل معنا وأخبرنا عن تفاصيل مناسبتك وخدماتك المطلوبة",
    icon: MessageCircle,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    number: 2,
    title: "استقبل عروض متنافسة",
    description: "مقدمو الخدمات المختصون يقدمون عروضهم وتختار الأنسب",
    icon: Handshake,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    number: 3,
    title: "اختر الأفضل وتواصل مباشرة",
    description: "قارن العروض واختر الأفضل وتواصل مع مقدم الخدمة مباشرة",
    icon: Star,
    gradient: "from-amber-500 to-orange-500",
  },
];

const trustIndicators = [
  {
    icon: Shield,
    text: "مقدمي خدمات موثوقين",
    description: "جميع مقدمي الخدمات مراجعين وموثوقين",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: TrendingUp,
    text: "بدون عمولات",
    description: "لا توجد رسوم أو عمولات خفية",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: Clock,
    text: "استجابة سريعة",
    description: "رد سريع على جميع الاستفسارات",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <img
                  src="/logo.png"
                  alt="إيفنتاك"
                  className="w-12 h-12 rounded-2xl shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                  <span className="text-gradient">إيفنتاك</span>
                </span>
                <p className={`text-xs transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-gray-500'}`}>سوق المناسبات</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/vendor-signup" className="hidden sm:block">
                <Button
                  variant="ghost"
                  className={`font-medium transition-all duration-300 ${scrolled ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50' : 'text-gray-600 hover:text-emerald-600 hover:bg-white/50'}`}
                >
                  سجل كمقدم خدمة
                </Button>
              </Link>
              <Button
                asChild
                className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 font-medium px-6 h-12 rounded-xl"
              >
                <a href="https://wa.me/14155238886" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">تواصل عبر واتساب</span>
                  <span className="sm:hidden">تواصل</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-white" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Large gradient orbs */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/60 to-green-200/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/50 to-orange-100/30 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-100/30 via-transparent to-teal-100/30 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          {/* Floating shapes */}
          <div className="absolute top-32 right-20 w-4 h-4 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-48 left-32 w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
          <div className="absolute bottom-40 right-40 w-5 h-5 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-l from-emerald-50 to-white text-emerald-700 px-5 py-2.5 text-sm font-medium border border-emerald-200/50 shadow-sm backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 ml-2 text-amber-500" />
                أول منصة ذكية للمناسبات في السعودية
              </Badge>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="إيفنتاك"
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl shadow-2xl shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg rotate-12 animate-pulse">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                خطط لمناسبتك{" "}
                <span className="text-gradient relative inline-block">
                  بذكاء
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-emerald-500/30" viewBox="0 0 200 16" preserveAspectRatio="none">
                    <path d="M0,12 Q50,2 100,12 T200,12" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
                <br />
                <span className="text-gray-400 font-light text-3xl sm:text-4xl lg:text-5xl">ودع العروض تأتيك!</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                منصة سعودية مبتكرة تربطك بأفضل مقدمي خدمات المناسبات
                <br className="hidden sm:block" />
                <span className="text-emerald-600 font-medium">فقط أرسل طلبك عبر الواتساب واستقبل عروض متنافسة</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-3 h-14 px-8 text-lg font-bold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] rounded-2xl group"
              >
                <a href="https://wa.me/14155238886" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  تواصل عبر واتساب
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Link href="/vendor-signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-3 h-14 px-8 text-lg font-bold border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300 hover:scale-[1.02] rounded-2xl bg-white/80 backdrop-blur-sm group"
                >
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  سجل كمقدم خدمة
                </Button>
              </Link>
            </div>

            {/* WhatsApp Number */}
            <div className="pt-4">
              <a 
                href="https://wa.me/14155238886"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">رقم الواتساب</p>
                  <p className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors" dir="ltr">
                    +1 (415) 523-8886
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-gray-400">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5 text-emerald-500" />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="group flex items-center justify-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${indicator.bgColor} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <indicator.icon className={`w-7 h-7 ${indicator.color}`} />
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-900 block">{indicator.text}</span>
                  <span className="text-sm text-gray-500">{indicator.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium border-0">
              كيف تعمل المنصة؟
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              ثلاث خطوات <span className="text-gradient">بسيطة</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              احصل على أفضل العروض لمناسبتك بكل سهولة وسرعة
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5">
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-300 via-teal-300 to-amber-300 opacity-40" />
              <div className="absolute left-0 w-1/2 h-full bg-gradient-to-l from-emerald-400 to-teal-400 animate-pulse" style={{ animationDuration: '3s' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={step.number} 
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Card className="group bg-white border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient Top Border */}
                    <div className={`h-2 bg-gradient-to-l ${step.gradient}`} />
                    
                    <CardContent className="p-8 text-center space-y-6">
                      {/* Step Number */}
                      <div className="flex justify-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <Badge variant="outline" className="text-sm font-medium border-gray-200">
                            الخطوة {step.number}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <ArrowLeft className="w-6 h-6 text-emerald-400 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-100/50 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium border-0">
              خدماتنا
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
              كل ما تحتاجه <span className="text-gradient">لمناسبتك</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              نربطك بأفضل مقدمي الخدمات في مختلف المجالات
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <a
                  key={service.id}
                  href="https://wa.me/14155238886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                    style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  />
                  <Card className="h-full bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer group">
                    <CardContent className="p-6 space-y-4">
                      <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-emerald-600 transition-colors pt-2">
                        <span>اطلب الآن</span>
                        <ArrowLeft className="w-4 h-4 mr-1 transform group-hover:-translate-x-2 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <div>
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-4 py-2 text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 ml-2 text-amber-400" />
                  لمقدمي الخدمات
                </Badge>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  انضم لشبكة إيفنتاك
                  <br />
                  <span className="text-emerald-200">ووسع دائرة عملائك</span>
                </h2>
              </div>
              
              <p className="text-xl text-emerald-100 leading-relaxed max-w-lg">
                سجل كحساب مقدم خدمة واحصل على فرص عمل جديدة بشكل يومي
              </p>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "وصول مباشر للعملاء المحتملين" },
                  { icon: Handshake, text: "بدون عمولات أو رسوم خفية" },
                  { icon: Zap, text: "نظام سهل وبسيط للغاية" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/vendor-signup">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-700 hover:bg-emerald-50 gap-3 h-14 px-8 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-xl"
                  >
                    <Heart className="w-5 h-5 text-amber-500" />
                    سجل الآن كمقدم خدمة
                  </Button>
                </Link>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 gap-3 h-14 px-8 text-lg font-medium backdrop-blur-sm rounded-xl"
                >
                  <a href="https://wa.me/14155238886" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    تواصل معنا
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-dark rounded-3xl p-8 lg:p-10 space-y-8 border border-white/10 shadow-2xl">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">لماذا إيفنتاك؟</h3>
                <p className="text-emerald-200">نقدم لك أفضل الفرص</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "+500", label: "مقدم خدمة", icon: Users },
                  { value: "+1000", label: "طلب شهرياً", icon: TrendingUp },
                  { value: "0%", label: "عمولات", icon: Zap },
                  { value: "24/7", label: "دعم متواصل", icon: Clock },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-emerald-300" />
                    <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                    <div className="text-emerald-200 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-center text-emerald-200 text-sm">تقييم العملاء لجودة الخدمات</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-100/50 via-transparent to-teal-100/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-10 lg:p-16 border border-gray-100 shadow-2xl shadow-emerald-100/20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative text-center space-y-8">
              <div className="inline-flex">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                  جاهز لبدء <span className="text-gradient">التخطيط</span>؟
                </h2>
                
                <p className="text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
                  أرسل طلبك الآن عبر الواتساب واحصل على عروض من أفضل مقدمي الخدمات
                </p>
              </div>
              
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="https://wa.me/14155238886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">رقم الواتساب</p>
                    <p className="font-bold text-2xl text-gray-900" dir="ltr">+1 (415) 523-8886</p>
                  </div>
                </a>
                
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-3 h-16 px-12 text-lg font-bold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] rounded-2xl group"
                >
                  <a href="https://wa.me/14155238886" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    ابدأ الآن عبر الواتساب
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Top Border Gradient */}
        <div className="h-1 bg-gradient-to-l from-emerald-500 via-green-500 to-emerald-600" />
        
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="إيفنتاك"
                    className="w-14 h-14 rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">إيفنتاك</h3>
                  <p className="text-gray-400 text-sm">سوق المناسبات السعودي</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md text-lg">
                منصة سعودية مبتكرة تربط العملاء بأفضل مقدمي خدمات المناسبات
                بكل سهولة وشفافية عبر الواتساب.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 rounded-xl h-12"
                >
                  <a href="https://wa.me/14155238886" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    تواصل عبر الواتساب
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold">روابط سريعة</h4>
              <ul className="space-y-4">
                {[
                  { href: "#how-it-works", label: "كيف تعمل المنصة" },
                  { href: "#services", label: "الخدمات" },
                  { href: "/vendor-signup", label: "سجل كمقدم خدمة" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold">تواصل معنا</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/14155238886" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span dir="ltr">+1 (415) 523-8886</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@eventak.sa</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>الرياض، السعودية</span>
                </li>
              </ul>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110 transform duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110 transform duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} إيفنتاك. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  سياسة الخصوصية
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  الشروط والأحكام
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
