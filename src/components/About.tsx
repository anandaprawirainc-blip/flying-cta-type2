"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    {
      key: 'experience',
      number: '8+',
      icon: '🏆'
    },
    {
      key: 'clients',
      number: '500+',
      icon: '👥'
    },
    {
      key: 'growth',
      number: '300%',
      icon: '📈'
    },
    {
      key: 'team',
      number: '25+',
      icon: '⭐'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('about.subtitle')}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.key} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t(`about.${stat.key}.title`)}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t(`about.${stat.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-96">
              <Image 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09fc9041-5ccb-4059-afc2-56fc5957f940.png"
                alt="Professional digital marketing team working together in modern office"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Certified Experts</p>
                  <p className="text-sm text-gray-600">Google & Facebook Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-lg text-gray-600">
              How we deliver exceptional results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Strategy</h4>
              <p className="text-gray-600">Analyze your business and create a custom strategy</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
              <p className="text-gray-600">Execute campaigns across all digital channels</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
              <p className="text-gray-600">Monitor performance and optimize for better results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
              <p className="text-gray-600">Scale successful campaigns for maximum ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}