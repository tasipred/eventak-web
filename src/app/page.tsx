import Link from "next/link";
import { ArrowLeft, Bot, Zap, Shield, Sparkles } from "lucide-react";

// أيقونة الواتساب مخصصة لتتناسب مع التصميم
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white mt-1">هدهد</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">المميزات</Link>
            <Link href="#how-it-works" className="hover:text-white transition-colors">كيف نعمل؟</Link>
            <Link href="#partners" className="hover:text-white transition-colors">مزودو الخدمات</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              انضم كمزود خدمة
            </Link>
            <Link 
              href="https://wa.me/YOUR_NUMBER" 
              className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
            >
              خطط مناسبتك
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl rounded-full" />
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-emerald-400 mb-8 mt-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>المساعد الذكي الأول لخدمات المناسبات</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            نظّم مناسبتك.<br className="hidden md:block" />
            <span className="text-white">بذكاء وسهولة.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            منصة هدهد تربطك مباشرة بأفضل مقدمي خدمات المناسبات عبر الواتساب. مساعدك الشخصي المدعوم بالذكاء الاصطناعي لحجز وتنظيم مناسباتك في ثوانٍ.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://wa.me/+14155238886" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3.5 rounded-full font-semibold transition-all group"
            >
              تحدث مع هدهد الآن
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#features" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all"
            >
              كيف تعمل المنصة؟
            </Link>
          </div>
        </div>

        {/* WhatsApp Chat Call-to-Action Section */}
        <div className="relative max-w-4xl mx-auto mt-20 px-6">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-2 shadow-2xl hover:border-emerald-500/20 transition-all duration-500 group">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-zinc-950 py-16 px-8 flex flex-col items-center justify-center text-center relative">
               
               {/* Decorative subtle background for the WhatsApp section */}
               <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

               <div className="relative z-10 w-24 h-24 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-shadow duration-500">
                  <WhatsAppIcon className="w-12 h-12 text-emerald-400" />
               </div>
               
               <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-4">
                 مساعدك متاح على الواتساب
               </h3>
               
               <p className="relative z-10 text-zinc-400 max-w-md mx-auto mb-8 leading-relaxed">
                 لا حاجة لتحميل أي تطبيقات جديدة. قم بمراسلة هدهد عبر الواتساب واخبره عن مناسبتك، وسيقوم بالبحث، ترشيح المزودين، ومساعدتك في الحجز فوراً.
               </p>
               
               <Link 
                 href="https://wa.me/YOUR_NUMBER"
                 target="_blank"
                 className="relative z-10 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105"
               >
                 <WhatsAppIcon className="w-5 h-5" />
                 فتح محادثة واتساب
               </Link>
            </div>
          </div>
        </div>
      </main>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 border-t border-white/5 relative z-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">أسرع لغة لتجهيز مناسبتك</h2>
            <p className="text-zinc-400 text-lg">كل ما تحتاجه لتنظيم حفل زفافك، تخرجك، أو أي مناسبة خاصة بمكان واحد وعبر تطبيقك المفضل.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                <Bot className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ذكاء اصطناعي يفهمك</h3>
              <p className="text-zinc-400 leading-relaxed">
                تحدث بلغة طبيعية، وهدهد سيقترح لك أفضل الخيارات بناءً على مبيزانيتك، ذوقك، ونوع مناسبتك.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                <Zap className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">سرعة في التواصل</h3>
              <p className="text-zinc-400 leading-relaxed">
                لا حاجة للبحث الطويل ومراسلة عشرات الحسابات. هدهد يربطك بمقدم الخدمة المناسب والمتاح فوراً في ثوانٍ.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                <Shield className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">مزودين موثوقين</h3>
              <p className="text-zinc-400 leading-relaxed">
                نتعامل مع أفضل مزودي الخدمات المعتمدين والموثوقين لضمان تنفيذ مناسبتك بأعلى درجات الاحترافية والجودة.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} منصة هدهد. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">تويتر</Link>
            <Link href="#" className="hover:text-white transition-colors">انستجرام</Link>
            <Link href="https://wa.me/YOUR_NUMBER" className="hover:text-white transition-colors">واتساب</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
