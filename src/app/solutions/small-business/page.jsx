'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const SmallBusinessPage = () => {
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || {
    isDarkMode: false,
    themeClasses: {
      bg: 'bg-gray-100',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      sectionBg: 'bg-gray-50',
      cardBg: 'bg-white',
      border: 'border-gray-200',
    },
    toggleTheme: () => console.warn('Theme toggle not implemented'),
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Override heroBg for small business theme (blue-green gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-blue-950 to-green-900'
      : 'bg-gradient-to-br from-blue-50 via-white to-green-50',
    buttonHover: isDarkMode
      ? 'hover:bg-blue-600 hover:text-white'
      : 'hover:bg-green-600 hover:text-white',
  };

  const smallBusinessPackages = [
    {
      id: 'basic',
      name: 'Basic Business',
      price: '$999',
      period: '/one-time',
      description: 'Get online with a professional website.',
      features: [
        'Responsive website (up to 5 pages)',
        'Basic local SEO',
        'Contact form integration',
        'Google Business Profile setup',
        '1 month support',
      ],
      ideal: 'New small businesses, freelancers',
      timeline: '1-3 weeks delivery',
    },
    {
      id: 'growth',
      name: 'Business Growth',
      price: '$2,499',
      period: '/one-time',
      description: 'Expand with e-commerce and marketing.',
      features: [
        'E-commerce website (up to 10 products)',
        'Advanced local SEO',
        'Basic CRM integration',
        'Social media setup',
        '3 months support',
      ],
      ideal: 'Growing small businesses, retailers',
      timeline: '3-5 weeks delivery',
      popular: true,
    },
    {
      id: 'pro',
      name: 'Business Pro',
      price: '$4,999',
      period: '/one-time',
      description: 'Scale with advanced features and analytics.',
      features: [
        'Custom website with e-commerce',
        'Advanced SEO and analytics',
        'CRM and email marketing integration',
        'Social media and ad campaign setup',
        '6 months support',
        'Dedicated account manager',
      ],
      ideal: 'Established small businesses',
      timeline: '5-8 weeks delivery',
    },
  ];

  const smallBusinessProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your business and goals.',
      details: [
        'Business needs assessment',
        'Competitor analysis',
        'Website feature planning',
        'Local market research',
      ],
      duration: '1 week',
    },
    {
      step: '02',
      title: 'Design & Branding',
      description: 'Create a professional, branded website.',
      details: [
        'Custom UI/UX design',
        'Logo and branding guidelines',
        'Responsive design mockups',
        'Client feedback and revisions',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '03',
      title: 'Development & Setup',
      description: 'Build and integrate your website.',
      details: [
        'Website development',
        'E-commerce or contact form setup',
        'Local SEO optimization',
        'Basic integrations (e.g., CRM)',
      ],
      duration: '1-3 weeks',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Launch your site and grow your presence.',
      details: [
        'Testing and quality assurance',
        'Website launch',
        'Training and handover',
        'Post-launch support',
      ],
      duration: '1 week',
    },
  ];

  const smallBusinessTools = [
    { name: 'Next.js', icon: '⚛️', description: 'Fast, responsive websites' },
    { name: 'Shopify', icon: '🛒', description: 'Easy e-commerce setup' },
    { name: 'Google Analytics', icon: '📊', description: 'Track customer behavior' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing campaigns' },
    { name: 'Canva', icon: '🎨', description: 'Simple branding tools' },
    { name: 'Square', icon: '💳', description: 'Secure payment processing' },
  ];

  const caseStudies = [
    {
      client: 'LocalBakery',
      industry: 'Food & Beverage',
      challenge: 'No online presence',
      solution: 'Responsive website with local SEO',
      results: [
        'Launched site in 2 weeks',
        '300% increase in online orders',
        'Top 5 local search ranking',
        '50% growth in foot traffic',
      ],
      timeframe: '1 month',
      image: '🥐',
    },
    {
      client: 'CityPlumb',
      industry: 'Home Services',
      challenge: 'Low lead generation',
      solution: 'Website with contact form and SEO',
      results: [
        '200% increase in leads',
        '80% faster response time',
        'Top 3 Google Maps ranking',
        'Integrated booking system',
      ],
      timeframe: '2 months',
      image: '🔧',
    },
    {
      client: 'BoutiqueTrend',
      industry: 'Retail',
      challenge: 'Limited online sales',
      solution: 'Shopify store with social media',
      results: [
        '150% e-commerce revenue growth',
        '500+ social media followers',
        '50% faster checkout process',
        'Improved customer retention',
      ],
      timeframe: '3 months',
      image: '🛍️',
    },
  ];

  const faqData = [
    {
      question: 'How quickly can I get a website for my small business?',
      answer: 'We deliver websites in 1-8 weeks, depending on the package: 1-3 weeks for Basic, 3-5 weeks for Growth, and 5-8 weeks for Pro.',
    },
    {
      question: 'What is local SEO, and why do I need it?',
      answer: 'Local SEO optimizes your online presence to attract nearby customers, boosting visibility on Google Maps and local searches.',
    },
    {
      question: 'Can you set up online payments?',
      answer: 'Yes, we integrate secure payment gateways like Square and Shopify Payments for seamless transactions.',
    },
    {
      question: 'Do you offer marketing services?',
      answer: 'We provide email marketing, social media setup, and ad campaigns to help small businesses grow.',
    },
    {
      question: 'Will my website work on mobile devices?',
      answer: 'All our websites are fully responsive, ensuring a great experience on mobile, tablet, and desktop.',
    },
    {
      question: 'What support do you offer after launch?',
      answer: 'We provide 1-6 months of support, including updates, bug fixes, and training, depending on your package.',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${customThemeClasses.bg || 'bg-gray-100'}`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-blue-500 text-gray-900 hover:bg-blue-400'
              : 'bg-green-600 text-white hover:bg-green-500'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Breadcrumb */}
      <div className={`pt-24 pb-4 ${customThemeClasses.sectionBg || 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className={`${customThemeClasses.textMuted || 'text-gray-500'} hover:text-blue-500`}>
                  Home
                </Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${customThemeClasses.textMuted || 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link href="/services" className={`${customThemeClasses.textMuted || 'text-gray-500'} hover:text-blue-500`}>
                  Services
                </Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${customThemeClasses.textMuted || 'text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Small Business Solutions</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`py-16 transition-colors duration-500 ${customThemeClasses.heroBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
                <span className="text-2xl">🏢</span>
                <span>Small Business Success</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up delay-100`}>
                Small Business{' '}
                <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-200`}>
                Grow your small business with affordable, professional websites and marketing.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-300">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border || 'border-gray-200'} animate-scale-in`}
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text || 'text-gray-900'}`}>200% Lead Growth</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border || 'border-gray-200'} animate-scale-in delay-100`}
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text || 'text-gray-900'}`}>1-8 Weeks Launch</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
                <Link
                  href="/get-quote"
                  className="bg-gradient-to-r from-blue-900 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 text-center animate-pulse-subtle"
                >
                  Get Free Website Audit
                </Link>
                <Link
                  href="/contact"
                  className={`border-2 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-500 text-center ${
                    isDarkMode
                      ? 'border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white'
                      : 'border-green-500 text-green-500 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in delay-200">
              <div className="grid grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-blue-500 mb-2 animate-pulse-subtle">300%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>Online Visibility</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-green-500 mb-2 animate-pulse-subtle">100+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>Websites Launched</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-indigo-600 mb-2 animate-pulse-subtle">95%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>Client Satisfaction</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-yellow-600 mb-2 animate-pulse-subtle">7+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.sectionBg || 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'overview', name: 'Overview', icon: '📋' },
              { id: 'process', name: 'Our Process', icon: '⚡' },
              { id: 'tools', name: 'Tools & Tech', icon: '🛠️' },
              { id: 'pricing', name: 'Packages', icon: '💰' },
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-900 to-green-500 text-white shadow-2xl -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-green-500 border border-gray-200'
                } animate-slide-up delay-${index * 100}`}
                aria-label={`View ${tab.name}`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
                    Small Business Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    Professional websites and marketing to grow your small business.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🌐',
                      title: 'Professional Websites',
                      description: 'Custom, responsive sites to showcase your business.',
                    },
                    {
                      icon: '🔍',
                      title: 'Local SEO',
                      description: 'Boost visibility in local search results.',
                    },
                    {
                      icon: '🛒',
                      title: 'E-commerce Setup',
                      description: 'Sell products online with secure payments.',
                    },
                    {
                      icon: '📧',
                      title: 'Email Marketing',
                      description: 'Engage customers with targeted campaigns.',
                    },
                    {
                      icon: '📊',
                      title: 'Analytics',
                      description: 'Track performance for smarter decisions.',
                    },
                    {
                      icon: '📱',
                      title: 'Mobile Optimization',
                      description: 'Seamless experience across all devices.',
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'} animate-slide-up delay-${index * 100}`}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text || 'text-gray-900'}`}>{service.title}</h3>
                      <p className={`${customThemeClasses.textSecondary || 'text-gray-600'}`}>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
                    Our Small Business Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    A streamlined approach to boost your business online.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {smallBusinessProcess.map((step, index) => (
                    <div key={index} className={`relative animate-slide-up delay-${index * 100}`}>
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-extrabold text-blue-500 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${customThemeClasses.text || 'text-gray-900'}`}>{step.title}</h3>
                            <p className={`mb-4 ${customThemeClasses.textSecondary || 'text-gray-600'}`}>{step.description}</p>
                            <div className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <svg
                                    className="w-4 h-4 text-blue-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>{detail}</span>
                                </div>
                              ))}
                            </div>
                            <div
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                isDarkMode ? 'bg-blue-900 text-green-200' : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              Duration: {step.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'tools' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
                    Small Business Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    Simple, powerful tools to grow your business.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {smallBusinessTools.map((tool, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'} animate-slide-up delay-${index * 100}`}
                    >
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text || 'text-gray-900'}`}>{tool.name}</h3>
                      <p className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>{tool.description}</p>
                    </div>
                  ))}
                </div>
                <div className={`p-8 rounded-2xl border ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'} animate-slide-up delay-200`}>
                  <h3 className={`text-2xl font-bold mb-6 text-center ${customThemeClasses.text || 'text-gray-900'}`}>
                    Additional Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                      'WordPress',
                      'WooCommerce',
                      'HubSpot',
                      'Google Ads',
                      'Zapier',
                      'Trello',
                      'QuickBooks',
                      'Slack',
                    ].map((tech, index) => (
                      <div key={index} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} animate-scale-in delay-${index * 50}`}>
                        <span className={`text-sm font-medium ${customThemeClasses.text || 'text-gray-900'}`}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
                    Small Business Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    Affordable plans to get your business online and growing.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {smallBusinessPackages.map((pkg, index) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 p-8 ${
                        pkg.popular ? 'border-blue-500 shadow-xl' : customThemeClasses.border || 'border-gray-200'
                      } ${customThemeClasses.cardBg || 'bg-white'} animate-slide-up delay-${index * 100}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-900 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text || 'text-gray-900'}`}>{pkg.name}</h3>
                      <div className="text-4xl font-extrabold mb-2 text-blue-500">
                        {pkg.price}
                        <span className={`text-sm font-normal ${customThemeClasses.textSecondary || 'text-gray-600'}`}>
                          {pkg.period}
                        </span>
                      </div>
                      <p className={`mb-6 ${customThemeClasses.textSecondary || 'text-gray-600'}`}>{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-blue-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={`${customThemeClasses.textSecondary || 'text-gray-600'}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm mb-4">
                        <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Ideal for: </span>
                        <span className={customThemeClasses.textSecondary || 'text-gray-600'}>{pkg.ideal}</span>
                      </div>
                      <div className="text-sm mb-6">
                        <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Timeline: </span>
                        <span className={customThemeClasses.textSecondary || 'text-gray-600'}>{pkg.timeline}</span>
                      </div>
                      <Link
                        href="/get-quote"
                        className={`block text-center px-6 py-3 rounded-full font-semibold transition-all duration-500 ${customThemeClasses.buttonHover} ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-blue-900 to-green-500 text-white'
                            : isDarkMode
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        Choose {pkg.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.bg || 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
              Small Business Success{' '}
              <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
              See how we’ve helped small businesses thrive online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'} animate-slide-up delay-${index * 100}`}
              >
                <div
                  className={`aspect-[4/3] flex items-center justify-center text-6xl ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  {study.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-500 font-medium mb-2">{study.industry}</div>
                  <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text || 'text-gray-900'}`}>{study.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Challenge: </span>
                      <span className={customThemeClasses.textSecondary || 'text-gray-600'}>{study.challenge}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Solution: </span>
                      <span className={customThemeClasses.textSecondary || 'text-gray-600'}>{study.solution}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Results: </span>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className={customThemeClasses.textSecondary || 'text-gray-600'}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Timeframe: </span>
                      <span className={customThemeClasses.textSecondary || 'text-gray-600'}>{study.timeframe}</span>
                    </div>
                  </div>
                  <Link
                    href="/portfolio"
                    className={`mt-4 inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:hover:text-green-400 font-medium transition-colors duration-300`}
                  >
                    <span>View Full Case Study</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.sectionBg || 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
              Answers to common small business solution queries.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 transition-all duration-500 hover:shadow-lg hover:scale-102 ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'} animate-slide-up delay-${index * 100}`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${customThemeClasses.text || 'text-gray-900'}`}>{faq.question}</h3>
                <p className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.bg || 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up`}>
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-900 to-green-500 bg-clip-text text-transparent">
              Grow Your Business
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
            Partner with Adsen to build your online presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 animate-pulse-subtle"
          >
            <span>Get Started Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Adsen</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering small businesses with affordable, scalable solutions since 2017.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  'Professional Websites',
                  'Local SEO',
                  'E-commerce Setup',
                  'Email Marketing',
                  'Analytics',
                  'Mobile Optimization',
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  Email: <a href="mailto:info@adsen.com" className="hover:text-blue-400">info@adsen.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a>
                </li>
                <li>Address: 123 Digital Avenue, Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Adsen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SmallBusinessPage;