"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
      'nav.cta': 'Get Free Consultation',

      // Hero Section
      'hero.headline': 'Transform Your Business with',
      'hero.highlight': 'Digital Marketing Excellence',
      'hero.subheading': 'We help businesses grow through strategic digital marketing, innovative web solutions, and data-driven campaigns that deliver real results.',
      'hero.primaryCta': 'Start Your Growth Journey',
      'hero.secondaryCta': 'Watch Our Success Stories',
      'hero.trustText': 'Trusted by 500+ businesses worldwide',

      // Services Section
      'services.title': 'Our Digital Marketing Services',
      'services.subtitle': 'Comprehensive digital solutions to accelerate your business growth and maximize your online presence.',
      'services.seo.title': 'SEO & Content Marketing',
      'services.seo.description': 'Boost your search rankings and engage your audience with strategic content that converts.',
      'services.social.title': 'Social Media Management',
      'services.social.description': 'Build your brand presence across all social platforms with engaging content and community management.',
      'services.ppc.title': 'PPC Advertising',
      'services.ppc.description': 'Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other platforms.',
      'services.web.title': 'Web Development',
      'services.web.description': 'Create stunning, responsive websites that convert visitors into customers with modern design and functionality.',
      'services.brand.title': 'Brand Strategy',
      'services.brand.description': 'Develop a compelling brand identity that resonates with your target audience and drives business growth.',
      'services.analytics.title': 'Analytics & Reporting',
      'services.analytics.description': 'Track your success with comprehensive analytics and detailed reporting to optimize your marketing performance.',

      // About Section
      'about.title': 'Why Choose DigitalBoost Agency?',
      'about.subtitle': 'We combine creativity, technology, and data-driven strategies to deliver exceptional results for our clients.',
      'about.experience.title': '8+ Years Experience',
      'about.experience.description': 'Proven track record in digital marketing',
      'about.clients.title': '500+ Happy Clients',
      'about.clients.description': 'Businesses transformed worldwide',
      'about.growth.title': '300% Average Growth',
      'about.growth.description': 'ROI improvement for our clients',
      'about.team.title': 'Expert Team',
      'about.team.description': 'Certified digital marketing professionals',

      // Portfolio Section
      'portfolio.title': 'Success Stories',
      'portfolio.subtitle': 'See how we\'ve helped businesses achieve remarkable growth through strategic digital marketing.',
      'portfolio.case1.title': 'E-commerce Growth',
      'portfolio.case1.description': 'Increased online sales by 250% in 6 months',
      'portfolio.case1.metrics': '250% Sales Increase • 180% Traffic Growth • 45% Better Conversion',
      'portfolio.case2.title': 'Brand Awareness Campaign',
      'portfolio.case2.description': 'Built brand recognition from 0 to industry leader',
      'portfolio.case2.metrics': '500% Brand Awareness • 300% Social Following • 150% Lead Generation',
      'portfolio.case3.title': 'Local Business Expansion',
      'portfolio.case3.description': 'Helped local business expand to 5 new markets',
      'portfolio.case3.metrics': '400% Local Reach • 200% Customer Base • 180% Revenue Growth',

      // Contact Section
      'contact.title': 'Ready to Grow Your Business?',
      'contact.subtitle': 'Let\'s discuss how we can help you achieve your digital marketing goals.',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email Address',
      'contact.form.company': 'Company Name',
      'contact.form.message': 'Tell us about your project',
      'contact.form.submit': 'Send Message',
      'contact.info.title': 'Get in Touch',
      'contact.info.address': '123 Digital Street, Marketing City, MC 12345',
      'contact.info.phone': '+1 (555) 123-4567',
      'contact.info.email': 'hello@digitalboost.agency',

      // Footer
      'footer.description': 'Transforming businesses through innovative digital marketing solutions.',
      'footer.services.title': 'Services',
      'footer.company.title': 'Company',
      'footer.support.title': 'Support',
      'footer.rights': 'All rights reserved.',
    },
    id: {
      // Navigation
      'nav.home': 'Beranda',
      'nav.services': 'Layanan',
      'nav.about': 'Tentang',
      'nav.portfolio': 'Portofolio',
      'nav.contact': 'Kontak',
      'nav.cta': 'Konsultasi Gratis',

      // Hero Section
      'hero.headline': 'Transformasikan Bisnis Anda dengan',
      'hero.highlight': 'Keunggulan Pemasaran Digital',
      'hero.subheading': 'Kami membantu bisnis berkembang melalui strategi pemasaran digital, solusi web inovatif, dan kampanye berbasis data yang memberikan hasil nyata.',
      'hero.primaryCta': 'Mulai Perjalanan Pertumbuhan',
      'hero.secondaryCta': 'Lihat Kisah Sukses Kami',
      'hero.trustText': 'Dipercaya oleh 500+ bisnis di seluruh dunia',

      // Services Section
      'services.title': 'Layanan Pemasaran Digital Kami',
      'services.subtitle': 'Solusi digital komprehensif untuk mempercepat pertumbuhan bisnis dan memaksimalkan kehadiran online Anda.',
      'services.seo.title': 'SEO & Pemasaran Konten',
      'services.seo.description': 'Tingkatkan peringkat pencarian dan libatkan audiens dengan konten strategis yang mengkonversi.',
      'services.social.title': 'Manajemen Media Sosial',
      'services.social.description': 'Bangun kehadiran merek di semua platform sosial dengan konten menarik dan manajemen komunitas.',
      'services.ppc.title': 'Iklan PPC',
      'services.ppc.description': 'Maksimalkan ROI dengan kampanye iklan tertarget di Google, Facebook, dan platform lainnya.',
      'services.web.title': 'Pengembangan Web',
      'services.web.description': 'Ciptakan website yang menakjubkan dan responsif yang mengubah pengunjung menjadi pelanggan dengan desain dan fungsionalitas modern.',
      'services.brand.title': 'Strategi Merek',
      'services.brand.description': 'Kembangkan identitas merek yang menarik yang beresonansi dengan target audiens dan mendorong pertumbuhan bisnis.',
      'services.analytics.title': 'Analitik & Pelaporan',
      'services.analytics.description': 'Lacak kesuksesan Anda dengan analitik komprehensif dan pelaporan detail untuk mengoptimalkan kinerja pemasaran.',

      // About Section
      'about.title': 'Mengapa Memilih DigitalBoost Agency?',
      'about.subtitle': 'Kami menggabungkan kreativitas, teknologi, dan strategi berbasis data untuk memberikan hasil luar biasa bagi klien kami.',
      'about.experience.title': '8+ Tahun Pengalaman',
      'about.experience.description': 'Rekam jejak terbukti dalam pemasaran digital',
      'about.clients.title': '500+ Klien Puas',
      'about.clients.description': 'Bisnis yang ditransformasi di seluruh dunia',
      'about.growth.title': '300% Pertumbuhan Rata-rata',
      'about.growth.description': 'Peningkatan ROI untuk klien kami',
      'about.team.title': 'Tim Ahli',
      'about.team.description': 'Profesional pemasaran digital bersertifikat',

      // Portfolio Section
      'portfolio.title': 'Kisah Sukses',
      'portfolio.subtitle': 'Lihat bagaimana kami telah membantu bisnis mencapai pertumbuhan luar biasa melalui pemasaran digital strategis.',
      'portfolio.case1.title': 'Pertumbuhan E-commerce',
      'portfolio.case1.description': 'Meningkatkan penjualan online sebesar 250% dalam 6 bulan',
      'portfolio.case1.metrics': '250% Peningkatan Penjualan • 180% Pertumbuhan Traffic • 45% Konversi Lebih Baik',
      'portfolio.case2.title': 'Kampanye Kesadaran Merek',
      'portfolio.case2.description': 'Membangun pengenalan merek dari 0 menjadi pemimpin industri',
      'portfolio.case2.metrics': '500% Kesadaran Merek • 300% Pengikut Sosial • 150% Generasi Lead',
      'portfolio.case3.title': 'Ekspansi Bisnis Lokal',
      'portfolio.case3.description': 'Membantu bisnis lokal ekspansi ke 5 pasar baru',
      'portfolio.case3.metrics': '400% Jangkauan Lokal • 200% Basis Pelanggan • 180% Pertumbuhan Pendapatan',

      // Contact Section
      'contact.title': 'Siap Mengembangkan Bisnis Anda?',
      'contact.subtitle': 'Mari diskusikan bagaimana kami dapat membantu Anda mencapai tujuan pemasaran digital.',
      'contact.form.name': 'Nama Lengkap',
      'contact.form.email': 'Alamat Email',
      'contact.form.company': 'Nama Perusahaan',
      'contact.form.message': 'Ceritakan tentang proyek Anda',
      'contact.form.submit': 'Kirim Pesan',
      'contact.info.title': 'Hubungi Kami',
      'contact.info.address': 'Jl. Digital No. 123, Kota Pemasaran, KP 12345',
      'contact.info.phone': '+62 (21) 123-4567',
      'contact.info.email': 'hello@digitalboost.agency',

      // Footer
      'footer.description': 'Mentransformasi bisnis melalui solusi pemasaran digital yang inovatif.',
      'footer.services.title': 'Layanan',
      'footer.company.title': 'Perusahaan',
      'footer.support.title': 'Dukungan',
      'footer.rights': 'Semua hak dilindungi.',
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}