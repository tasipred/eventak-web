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
} from "lucide-react";

const services = [
  {
    id: "ولائم وذبائح",
    title: "ولائم وذبائح",
    description: "ولائم، ذبائح، مندي، عربي، كبسة ومأكولات تقليدية",
    icon: ChefHat,
    gradient: "from-orange-400 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200/60",
    hoverShadow: "hover:shadow-orange-200/40",
  },
  {
    id: "قهوجية وضيافة",
    title: "قهوجية وضيافة",
    description: "قهوة عربية، تمور، ضيافة، معجنات ومشروبات",
    icon: Coffee,
    gradient: "from-amber-500 to-yellow-600",
    bgGradient: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200/60",
    hoverShadow: "hover:shadow-amber-200/40",
  },
  {
    id: "توزيعات وحلويات",
    title: "توزيعات وحلويات",
    description: "توزيعات، حلويات، عصائر، تمور وهدايا",
    icon: Gift,
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    borderColor: "border-pink-200/60",
    hoverShadow: "hover:shadow-pink-200/40",
  },
  {
    id: "تصوير وميديا",
    title: "تصوير وميديا",
    description: "تصوير فوتوغرافي، فيديو، درون ومونتاج",
    icon: Camera,
    gradient: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
    borderColor: "border-purple-200/60",
    hoverShadow: "hover:shadow-purple-200/40",
  },
  {
    id: "ترفيه وفعاليات",
    title: "ترفيه وفعاليات",
    description: "فرق موسيقية، مطربين، ألعاب ومسرح",
    icon: PartyPopper,
    gradient: "from-cyan-400 to-teal-500",
    bgGradient: "from-cyan-50 to-teal-50",
    borderColor: "border-cyan-200/60",
    hoverShadow: "hover:shadow-cyan-200/40",
  },
  {
    id: "تجميل ومكياج",
    title: "تجميل ومكياج",
    description: "مكياج، كوافير، عناية بالبشرة وتجميل",
    icon: Wand2,
    gradient: "from-rose-400 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    borderColor: "border-rose-200/60",
    hoverShadow: "hover:shadow-rose-200/40",
  },
  {
    id: "تأجير معدات",
    title: "تأجير معدات",
    description: "خيام، كراسي، طاولات، صوت وإضارة",
    icon: Wrench,
    gradient: "from-slate-400 to-gray-600",
    bgGradient: "from-slate-50 to-gray-50",
    borderColor: "border-slate-200/60",
    hoverShadow: "hover:shadow-slate-200/40",
  },
  {
    id: "خدمات أخرى",
    title: "خدمات أخرى",
    description: "خدمات إضافية متنوعة لمناسباتك",
    icon: MoreHorizontal,
    gradient: "from-emerald-400 to-green-500",
    bgGradient: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-200/60",
    hoverShadow: "hover:shadow-emerald-200/40",
  },
];

const steps = [
  {
    number: 1,
    title: "أرسل طلبك عبر واتساب",
    description: "تواصل معنا وأخبرنا عن تفاصيل مناسبتك وخدماتك المطلوبة",
    icon: MessageCircle,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    number: 2,
    title: "استقبل عروض متنافسة",
    description: "مقدمو الخدمات المختصون يقدمون عروضهم وتختار الأنسب",
    icon: Handshake,
    gradient: "from-emerald-500 to-teal-600",
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
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: TrendingUp,
    text: "بدون عمولات",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    icon: Clock,
    text: "استجابة سريعة",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="إيفنتاك"
                  className="w-12 h-12 rounded-2xl shadow-lg shadow-emerald-500/20"
                />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient">إيفنتاك</span>
                <p className="text-[10px] text-gray-400 -mt-1">سوق المناسبات</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/vendor-signup" className="hidden sm:block">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 font-medium"
                >
                  سجل كمقدم خدمة
                </Button>
              </Link>
              <Button
                asChild
                className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 font-medium px-5"
              >
                <a href="https://wa.me/966551315886" target="_blank" rel="noopener noreferrer">
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
        <div className="absolute inset-0 hero-pattern" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-green-300/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-orange-300/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/20 to-transparent rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-10 animate-fade-in-up">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-l from-emerald-50 to-green-50 text-emerald-700 px-5 py-2.5 text-sm font-medium border border-emerald-200/50 shadow-sm"
              >
                <Sparkles className="w-4 h-4 ml-2 text-amber-500" />
                أول منصة ذكية للمناسبات في السعودية
              </Badge>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <img
                  src="/logo.png"
                  alt="إيفنتاك"
                  className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-3xl shadow-2xl shadow-emerald-500/20 animate-pulse-glow"
                />
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg rotate-12">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                خطط لمناسبتك{" "}
                <span className="text-gradient relative">
                  بذكاء
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
                <br />
                <span className="text-gray-400 font-light">ودع العروض تأتيك!</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                منصة سعودية مبتكرة تربطك بأفضل مقدمي خدمات المناسبات
                <br className="hidden sm:block" />
                <span className="text-emerald-600">فقط أرسل طلبك عبر الواتساب واستقبل عروض متنافسة</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-3 h-16 px-10 text-lg font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] rounded-2xl"
              >
                <a href="https://wa.me/966551315886" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  تواصل عبر واتساب
                  <ArrowLeft className="w-5 h-5" />
                </a>
              </Button>
              <Link href="/vendor-signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-3 h-16 px-10 text-lg font-bold border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 hover:scale-[1.02] rounded-2xl bg-white/50 backdrop-blur"
                >
                  <Users className="w-5 h-5" />
                  سجل كمقدم خدمة
                </Button>
              </Link>
            </div>

            {/* WhatsApp Number */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-l from-gray-50 to-gray-100 px-6 py-3 rounded-2xl border border-gray-200/50 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">رقم الواتساب</p>
                  <a 
                    href="https://wa.me/966551315886" 
                    className="font-bold text-xl text-gray-900 hover:text-emerald-600 transition-colors"
                    dir="ltr"
                  >
                    +966 55 131 5886
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-emerald-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
              >
                <div className={`w-14 h-14 ${indicator.bgColor} rounded-2xl flex items-center justify-center`}>
                  <indicator.icon className={`w-7 h-7 ${indicator.color}`} />
                </div>
                <span className="text-lg font-bold text-gray-900">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 mb-20">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium">
              كيف تعمل المنصة؟
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              ثلاث خطوات <span className="text-gradient">بسيطة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              احصل على أفضل العروض لمناسبتك بكل سهولة وسرعة
            </p>
          </div>

          {/* Steps with Connected Lines */}
          <div className="relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-500 via-emerald-400 to-amber-500 opacity-20" />
              <div className="absolute left-1/4 right-1/4 h-full bg-gradient-to-l from-emerald-500 to-amber-500 animate-pulse" style={{ animationDuration: '3s' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <Card className="group bg-white/80 backdrop-blur-sm border-gray-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient Top Border */}
                    <div className={`h-1.5 bg-gradient-to-l ${step.gradient}`} />
                    
                    <CardContent className="p-8 text-center space-y-5">
                      {/* Step Number */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Mobile Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 mb-16">
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium">
              خدماتنا
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              كل ما تحتاجه <span className="text-gradient">لمناسبتك</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نربطك بأفضل مقدمي الخدمات في مختلف المجالات
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`service-card group bg-gradient-to-br ${service.bgGradient} ${service.borderColor} border hover:shadow-2xl ${service.hoverShadow} overflow-hidden cursor-pointer`}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/* Hover Arrow */}
                    <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-emerald-600 transition-colors">
                      <span>اطلب الآن</span>
                      <ArrowLeft className="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full translate-x-1/4 translate-y-1/4" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20" />
        </div>
        
        {/* Animated Gradient */}
        <div className="absolute inset-0 opacity-50 animate-gradient" style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-4 py-2 text-sm font-medium">
                <Heart className="w-4 h-4 ml-2 text-amber-400" />
                لمقدمي الخدمات
              </Badge>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                انضم لشبكة إيفنتاك
                <br />
                <span className="text-emerald-200">ووسع دائرة عملائك</span>
              </h2>
              
              <p className="text-xl text-emerald-100 leading-relaxed max-w-lg">
                سجل كحساب مقدم خدمة واحصل على فرص عمل جديدة بشكل يومي
              </p>

              <div className="space-y-5">
                {[
                  { icon: Users, text: "وصول مباشر للعملاء المحتملين" },
                  { icon: Handshake, text: "بدون عمولات أو رسوم خفية" },
                  { icon: Zap, text: "نظام سهل وبسيط للغاية" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
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
                    className="bg-white text-emerald-700 hover:bg-emerald-50 gap-3 h-14 px-8 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-2xl"
                  >
                    <Heart className="w-5 h-5 text-amber-500" />
                    سجل الآن كمقدم خدمة
                  </Button>
                </Link>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 gap-3 h-14 px-8 text-lg font-medium backdrop-blur-sm rounded-2xl"
                >
                  <a href="https://wa.me/966551315886" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    تواصل معنا
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-dark rounded-3xl p-8 lg:p-10 space-y-8 border border-white/10">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">لماذا إيفنتاك؟</h3>
                <p className="text-emerald-200">نقدم لك أفضل الفرص</p>
              </div>
              
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "+500", label: "مقدم خدمة" },
                  { value: "+1000", label: "طلب شهرياً" },
                  { value: "0%", label: "عمولات" },
                  { value: "24/7", label: "دعم متواصل" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/15 transition-colors">
                    <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                    <div className="text-emerald-200 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="flex justify-center pt-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-center text-emerald-200 text-sm">تقييم العملاء لجودة الخدمات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 rounded-[2.5rem] p-12 lg:p-16 border border-emerald-100 shadow-2xl shadow-emerald-100/30 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative text-center space-y-8">
              <div className="inline-flex">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 animate-pulse-glow">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                جاهز لبدء <span className="text-gradient">التخطيط</span>؟
              </h2>
              
              <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
                أرسل طلبك الآن عبر الواتساب واحصل على عروض من أفضل مقدمي الخدمات
              </p>
              
              <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
                <Phone className="w-6 h-6 text-emerald-600" />
                <span className="text-2xl font-bold text-gray-900" dir="ltr">
                  +966 55 131 5886
                </span>
              </div>
              
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-3 h-18 px-12 text-xl font-bold shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-[1.02] rounded-2xl"
              >
                <a href="https://wa.me/966551315886" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-7 h-7" />
                  ابدأ الآن عبر الواتساب
                  <ArrowLeft className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative overflow-hidden">
        {/* Top Border Gradient */}
        <div className="h-1 bg-gradient-to-l from-emerald-500 via-green-500 to-emerald-600" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.png"
                  alt="إيفنتاك"
                  className="w-14 h-14 rounded-2xl shadow-lg"
                />
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
                  size="sm"
                  className="bg-gradient-to-l from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white gap-2 rounded-xl"
                >
                  <a href="https://wa.me/966551315886" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    تواصل عبر الواتساب
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold">روابط سريعة</h4>
              <ul className="space-y-4">
                {[
                  { href: "#how-it-works", label: "كيف تعمل المنصة" },
                  { href: "#services", label: "الخدمات" },
                  { href: "/vendor-signup", label: "سجل كمقدم خدمة" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 className="text-lg font-bold">تواصل معنا</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/966551315886" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span dir="ltr">+966 55 131 5886</span>
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
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors">
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
