import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "DigitalBoost Agency - Digital Marketing Solutions | Solusi Pemasaran Digital",
  description: "Transform your business with our comprehensive digital marketing services. SEO, Social Media, PPC, Web Development & more. | Transformasikan bisnis Anda dengan layanan pemasaran digital komprehensif kami.",
  keywords: "digital marketing, SEO, social media marketing, PPC, web development, brand strategy, pemasaran digital, media sosial",
  authors: [{ name: "DigitalBoost Agency" }],
  openGraph: {
    title: "DigitalBoost Agency - Digital Marketing Solutions",
    description: "Transform your business with our comprehensive digital marketing services.",
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalBoost Agency - Digital Marketing Solutions",
    description: "Transform your business with our comprehensive digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}