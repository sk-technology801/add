
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const EcommercePage = () => {
  // Debug useTheme
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || {
    isDarkMode: false,
    themeClasses: {},
    toggleTheme: () => {},
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Override heroBg for e-commerce theme (deep purple-emerald gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-purple-950 to-emerald-900'
      : 'bg-gradient-to-br from-purple-50 via-white to-emerald-50',
    buttonHover: isDarkMode
      ? 'hover:bg-emerald-600 hover:text-white'
      : 'hover:bg-purple-700 hover:text-white',
  };

  const ecommercePackages = [
    {
      id: 'basic',
      name: 'E-commerce Starter',
      price: '$3,499',
      period: '/one-time',
      description: 'Launch a professional online store for small businesses.',
      features: [
        'Up to 50 products',
        'Shopify or WooCommerce setup',
        'Basic SEO optimization',
        'Payment gateway integration',
        'Responsive design',
        '1 month support',
      ],
      ideal: 'Small businesses, startups',
      timeline: '3-5 weeks delivery',
    },
    {
      id: 'growth',
      name: 'E-commerce Growth',
      price: '$7,999',
      period: '/one-time',
      description: 'Scalable e-commerce solution for growing brands.',
      features: [
        'Up to 200 products',
        'Custom Shopify or WooCommerce theme',
        'Advanced SEO and product optimization',
        'Multiple payment gateways',
        'Basic analytics setup',
        '3 months support',
      ],
      ideal: 'Mid-sized businesses, expanding stores',
      timeline: '5-7 weeks delivery',
      popular: true,
    },
    {
      id: 'premium',
      name: 'E-commerce Premium',
      price: '$14,999',
      period: '/one-time',
      description: 'Enterprise-grade e-commerce platform for large-scale operations.',
      features: [
        'Unlimited products',
        'Custom e-commerce platform',
        'Premium SEO and marketing integration',
        'Advanced analytics and CRM integration',
        'Multi-store setup',
        '6 months support',
        'Dedicated project manager',
      ],
      ideal: 'Large brands, enterprises',
      timeline: '8-12 weeks delivery',
    },
  ];

  const ecommerceProcess = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Define your e-commerce goals and product strategy.',
      details: [
        'Market and audience analysis',
        'Product catalog planning',
        'Platform and feature selection',
        'Competitor benchmarking',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create a user-friendly and visually stunning store design.',
      details: [
        'Custom UI/UX design',
        'Interactive prototypes',
        'Mobile-first responsive design',
        'Client feedback and revisions',
      ],
      duration: '2-3 weeks',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build and integrate your e-commerce platform.',
      details: [
        'Platform setup (Shopify, WooCommerce, etc.)',
        'Payment and shipping integrations',
        'Product and inventory setup',
        'Performance optimization',
      ],
      duration: '3-5 weeks',
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Ensure a flawless launch with rigorous testing.',
      details: [
        'Cross-browser and device testing',
        'Checkout and payment testing',
        'SEO and performance audits',
        'Store launch and training',
      ],
      duration: '1-2 weeks',
    },
  ];

  const ecommerceTools = [
    { name: 'Shopify', icon: '🛒', description: 'Leading e-commerce platform for scalability' },
    { name: 'WooCommerce', icon: '🛍️', description: 'Flexible WordPress e-commerce solution' },
    { name: 'Stripe', icon: '💳', description: 'Secure payment processing' },
    { name: 'Figma', icon: '🎨', description: 'Collaborative design for store UI/UX' },
    { name: 'Google Analytics', icon: '📊', description: 'Track store performance and sales' },
    { name: 'Klaviyo', icon: '📧', description: 'Email marketing for customer retention' },
  ];

  const caseStudies = [
    {
      client: 'TrendyThreads',
      industry: 'Fashion Retail',
      challenge: 'Low online sales and poor user experience',
      solution: 'Custom Shopify store with SEO and email marketing',
      results: [
        '400% increase in online revenue',
        '250% boost in mobile conversions',
        '50% reduction in cart abandonment',
        'Top 5 rankings for key product terms',
      ],
      timeframe: '4 months',
      image: '👗',
    },
    {
      client: 'GadgetZone',
      industry: 'Electronics',
      challenge: 'Complex product catalog with slow website',
      solution: 'WooCommerce store with advanced filtering and analytics',
      results: [
        '300% faster page load times',
        '200% increase in average order value',
        '150% growth in repeat customers',
        '80% reduction in bounce rate',
      ],
      timeframe: '5 months',
      image: '📱',
    },
    {
      client: 'OrganicBites',
      industry: 'Food & Beverage',
      challenge: 'No online ordering system',
      solution: 'Shopify store with subscription model and CRM integration',
      results: [
        '500% growth in online orders',
        '300% increase in subscription sign-ups',
        '200% boost in customer retention',
        'Integrated loyalty program',
      ],
      timeframe: '6 months',
      image: '🥗',
    },
  ];

  const faqData = [
    {
      question: 'Which e-commerce platforms do you support?',
      answer: 'We specialize in Shopify, WooCommerce, Magento, and custom solutions tailored to your needs.',
    },
    {
      question: 'How long does it take to build an online store?',
      answer: 'Timelines vary: 3-5 weeks for basic stores, 5-7 weeks for growth stores, and 8-12 weeks for premium solutions.',
    },
    {
      question: 'Can you integrate payment gateways?',
      answer: 'Yes, we integrate Stripe, PayPal, Square, and other gateways for secure transactions.',
    },
    {
      question: 'Do you provide SEO for e-commerce?',
      answer: 'We offer basic to advanced SEO, including product optimization and keyword strategies.',
    },
    {
      question: 'Can you handle high-traffic stores?',
      answer: 'Our solutions are optimized for scalability, ensuring performance during peak traffic.',
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Yes, we provide 1-6 months of support, including updates and maintenance.',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${customThemeClasses.bg}`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-emerald-500 text-gray-900 hover:bg-emerald-400'
              : 'bg-purple-900 text-white hover:bg-purple-800'
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
      <div className={`pt-24 pb-4 ${customThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className={`${customThemeClasses.textMuted} hover:text-emerald-500`}>
                  Home
                </Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${customThemeClasses.textMuted}`} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link href="/services" className={`${customThemeClasses.textMuted} hover:text-emerald-500`}>
                  Services
                </Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${customThemeClasses.textMuted}`} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <span className={`font-medium ${customThemeClasses.text}`}>E-commerce</span>
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
              <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-emerald-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
                <span className="text-2xl">🛒</span>
                <span>E-commerce Excellence</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up delay-100`}>
                E-commerce{' '}
                <span className="bg-gradient-to-r from-purple-900 to-emerald-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary} animate-slide-up delay-200`}>
                Build high-conversion online stores that scale with your business.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-300">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border} animate-scale-in`}
                >
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>400% Sales Growth</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border} animate-scale-in delay-100`}
                >
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>3-12 Weeks Launch</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
                <Link
                  href="/get-quote"
                  className="bg-gradient-to-r from-purple-900 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 text-center animate-pulse-subtle"
                >
                  Get Free Store Audit
                </Link>
                <Link
                  href="/contact"
                  className={`border-2 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-500 text-center ${
                    isDarkMode
                      ? 'border-emerald-500 text-emerald-500 hover:bg-emerald-600 hover:text-white'
                      : 'border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white'
                  }`}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in delay-200">
              <div className="grid grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-emerald-500 mb-2 animate-pulse-subtle">500%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Average Revenue Growth</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-purple-900 mb-2 animate-pulse-subtle">200+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Stores Launched</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-indigo-600 mb-2 animate-pulse-subtle">99%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Client Satisfaction</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-orange-600 mb-2 animate-pulse-subtle">10+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.sectionBg}`}>
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
                    ? 'bg-gradient-to-r from-purple-900 to-emerald-500 text-white shadow-2xl -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-emerald-400'
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-900 border border-gray-200'
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
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
                    Premium E-commerce Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    Launch a high-performance online store that drives sales and customer loyalty.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🛍️',
                      title: 'Custom Store Design',
                      description: 'Unique, conversion-focused designs for your brand.',
                    },
                    {
                      icon: '💳',
                      title: 'Secure Payments',
                      description: 'Seamless integration with trusted payment gateways.',
                    },
                    {
                      icon: '📦',
                      title: 'Inventory Management',
                      description: 'Efficient systems for product and order tracking.',
                    },
                    {
                      icon: '🔍',
                      title: 'SEO & Marketing',
                      description: 'Boost visibility with advanced SEO and campaigns.',
                    },
                    {
                      icon: '📱',
                      title: 'Mobile Optimization',
                      description: 'Mobile-first stores for seamless shopping.',
                    },
                    {
                      icon: '📈',
                      title: 'Analytics Integration',
                      description: 'Track sales and customer behavior with precision.',
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg} ${customThemeClasses.border} animate-slide-up delay-${index * 100}`}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text}`}>{service.title}</h3>
                      <p className={`${customThemeClasses.textSecondary}`}>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
                    Our E-commerce Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    A proven approach to deliver high-conversion online stores.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {ecommerceProcess.map((step, index) => (
                    <div key={index} className="relative animate-slide-up delay-${index * 100}">
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-extrabold text-emerald-500 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${customThemeClasses.text}`}>{step.title}</h3>
                            <p className={`mb-4 ${customThemeClasses.textSecondary}`}>{step.description}</p>
                            <div className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <svg
                                    className="w-4 h-4 text-emerald-500 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className={`text-sm ${customThemeClasses.textSecondary}`}>{detail}</span>
                                </div>
                              ))}
                            </div>
                            <div
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                isDarkMode ? 'bg-purple-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
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
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
                    E-commerce Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    Cutting-edge technologies for seamless online stores.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ecommerceTools.map((tool, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg} ${customThemeClasses.border} animate-slide-up delay-${index * 100}`}
                    >
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text}`}>{tool.name}</h3>
                      <p className={`text-sm ${customThemeClasses.textSecondary}`}>{tool.description}</p>
                    </div>
                  ))}
                </div>
                <div className={`p-8 rounded-2xl border ${customThemeClasses.cardBg} ${customThemeClasses.border} animate-slide-up delay-200`}>
                  <h3 className={`text-2xl font-bold mb-6 text-center ${customThemeClasses.text}`}>
                    Additional Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                      'PayPal',
                      'Magento',
                      'BigCommerce',
                      'ShipStation',
                      'Mailchimp',
                      'Hotjar',
                      'Google Ads',
                      'Zapier',
                    ].map((tech, index) => (
                      <div key={index} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} animate-scale-in delay-${index * 50}`}>
                        <span className={`text-sm font-medium ${customThemeClasses.text}`}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-12 animate-fade-in">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
                    E-commerce Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    Choose the package that powers your online store.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {ecommercePackages.map((pkg, index) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 p-8 ${
                        pkg.popular ? 'border-emerald-500 shadow-xl' : customThemeClasses.border
                      } ${customThemeClasses.cardBg} animate-slide-up delay-${index * 100}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-900 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-extrabold mb-2 text-emerald-500">
                        {pkg.price}
                        <span className={`text-sm font-normal ${customThemeClasses.textSecondary}`}>
                          {pkg.period}
                        </span>
                      </div>
                      <p className={`mb-6 ${customThemeClasses.textSecondary}`}>{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-emerald-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={`${customThemeClasses.textSecondary}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm mb-4">
                        <span className={`font-medium ${customThemeClasses.text}`}>Ideal for: </span>
                        <span className={customThemeClasses.textSecondary}>{pkg.ideal}</span>
                      </div>
                      <div className="text-sm mb-6">
                        <span className={`font-medium ${customThemeClasses.text}`}>Timeline: </span>
                        <span className={customThemeClasses.textSecondary}>{pkg.timeline}</span>
                      </div>
                      <Link
                        href="/get-quote"
                        className={`block text-center px-6 py-3 rounded-full font-semibold transition-all duration-500 ${customThemeClasses.buttonHover} ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-purple-900 to-emerald-500 text-white'
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
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
              E-commerce Success{' '}
              <span className="bg-gradient-to-r from-purple-900 to-emerald-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
              Discover how our e-commerce solutions transform businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg} ${customThemeClasses.border} animate-slide-up delay-${index * 100}`}
              >
                <div
                  className={`aspect-[4/3] flex items-center justify-center text-6xl ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  {study.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-emerald-500 font-medium mb-2">{study.industry}</div>
                  <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text}`}>{study.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className={`font-medium ${customThemeClasses.text}`}>Challenge: </span>
                      <span className={customThemeClasses.textSecondary}>{study.challenge}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${customThemeClasses.text}`}>Solution: </span>
                      <span className={customThemeClasses.textSecondary}>{study.solution}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${customThemeClasses.text}`}>Results: </span>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className={customThemeClasses.textSecondary}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className={`font-medium ${customThemeClasses.text}`}>Timeframe: </span>
                      <span className={customThemeClasses.textSecondary}>{study.timeframe}</span>
                    </div>
                  </div>
                  <Link
                    href="/portfolio"
                    className={`mt-4 inline-flex items-center space-x-2 text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-300`}
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
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-purple-900 to-emerald-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
              Answers to common questions about our e-commerce solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 transition-all duration-500 hover:shadow-lg hover:scale-102 ${customThemeClasses.cardBg} ${customThemeClasses.border} animate-slide-up delay-${index * 100}`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${customThemeClasses.text}`}>{faq.question}</h3>
                <p className={`text-sm ${customThemeClasses.textSecondary}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up`}>
            Ready to{' '}
            <span className="bg-gradient-to-r from-purple-900 to-emerald-500 bg-clip-text text-transparent">
              Launch Your Online Store
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
            Partner with Adsen to build a high-conversion e-commerce platform.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 animate-pulse-subtle"
          >
            <span>Get Started Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    
    </div>
  );
};

export default EcommercePage;
