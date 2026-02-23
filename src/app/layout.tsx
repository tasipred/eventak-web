import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "منصة هدهد",
  description: "خطط لمناسبتك بذكاء.. ودع العروض تأتيك! منصة سعودية مبتكرة تربطك بأفضل مقدمي خدمات المناسبات عبر الواتساب. ولائم، قهوجية، تصوير، مكياج، ترفيه وأكثر.",
  keywords: [
    "منصة هدهد", 
    "مناسبات", 
    "سعودي", 
    "زفاف", 
    "حفل", 
    "قهوجية", 
    "ولائم", 
    "تصوير", 
    "مكياج",
    "ترفيه",
    "توزيعات",
    "حلويات",
    "خطوبة",
    "عرس",
    "الرياض",
    "جدة",
    "الدمام"
  ],
  authors: [{ name: "hudhud Team" }],
  creator: "hudhud",
  publisher: "hudhud",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hudhudbot.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "منصة هدهد",
    description: "خطط لمناسبتك بذكاء.. ودع العروض تأتيك! منصة سعودية تربطك بأفضل مقدمي خدمات المناسبات.",
    url: "https://hudhudbot.com",
    siteName: "منصة هدهد",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "منصة هدهد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "منصة هدهد",
    description: "خطط لمناسبتك بذكاء.. ودع العروض تأتيك!",
    images: ["/logo.png"],
    creator: "@hudhudbot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${cairo.variable} font-sans antialiased bg-background text-foreground selection:bg-emerald-500/20`}
        style={{ fontFamily: "var(--font-cairo), system-ui, sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
