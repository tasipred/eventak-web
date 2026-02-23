import Link from "next/link";
import { ArrowRight, Bot, Zap, Shield, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      {/* 
        NAVBAR: Sleek, glassmorphism dark mode navbar 
      */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white mt-1">Hudhud</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#docs" className="hover:text-white transition-colors">Documentation</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link 
              href="/register" 
              className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* 
        HERO SECTION: High contrast, subtle radial glow, focused typography 
      */}
      <main className="relative pt-32 pb-24 overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl rounded-full" />
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-emerald-400 mb-8 mt-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing the Next-Gen AI Bot Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            Automate your workflow. <br className="hidden md:block" />
            <span className="text-white">Intelligently.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            Deploy powerful, context-aware AI agents in seconds. Connect your data, train your models, and watch your productivity scale effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-3.5 rounded-full font-semibold transition-all group"
            >
              Start Building Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/demo" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all"
            >
              View Live Demo
            </Link>
          </div>
        </div>

        {/* Hero Image / Dashboard Mockup Preview */}
        <div className="relative max-w-6xl mx-auto mt-20 px-6">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-4 shadow-2xl">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-zinc-950 aspect-[16/9] flex items-center justify-center">
               <div className="text-zinc-600 font-mono text-sm flex flex-col items-center gap-4">
                  <Bot className="w-12 h-12 text-zinc-800" />
                  <span>[ Replace this box with a screenshot of your dashboard ]</span>
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* 
        FEATURES SECTION: Dark cards, neon hover borders 
      */}
      <section id="features" className="py-24 border-t border-white/5 relative z-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for scale and speed</h2>
            <p className="text-zinc-400 text-lg">Everything you need to deploy enterprise-grade AI assistants without the overhead.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                <Zap className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast API</h3>
              <p className="text-zinc-400 leading-relaxed">
                Connect your bot to any platform with our ultra-low latency API infrastructure. Deploys to the edge globally.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                <Bot className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom AI Models</h3>
              <p className="text-zinc-400 leading-relaxed">
                Train off your own data. Upload PDFs, connect Notion, or scrape your website to give your bot perfect context.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                <Shield className="w-6 h-6 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-zinc-400 leading-relaxed">
                SOC2 compliant by default. Your data is encrypted at rest and never used to train global AI models.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 
        FOOTER: Clean, minimal 
      */}
      <footer className="border-t border-white/5 py-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Hudhud Platform. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Discord</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
