
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const SolutionsPage = () => {
  // Debug useTheme
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || {
    isDarkMode: false,
    themeClasses: {},
    toggleTheme: () => {},
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Override heroBg for solutions theme (orange-amber gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900'
      : 'bg-gradient-to-br from-orange-50 via-white to-amber-50',
  };

  const solutionsPackages = [
    {
      id: 'basic',
      name: 'Core Solutions',
      price: '$2,499',
      period: '/month',
      description: 'Essential digital solutions for startups and small businesses.',
      features: [
        '5-page website with responsive design',
        'Basic SEO and content strategy',
        'Social media setup (2 platforms)',
        'Google Analytics integration',
        '1 month support',
      ],
      ideal: 'Startups, small businesses',
      timeline: '4-6 weeks to launch',
    },
    {
      id: 'growth',
      name: 'Growth Solutions',
      price: '$5,999',
      period: '/month',
      description: 'Comprehensive digital strategy for growing businesses.',
      features: [
        '10-page dynamic website with CMS',
        'Advanced SEO and content marketing',
        'Social media management (4 platforms)',
        'E-commerce setup (up to 50 products)',
        'Monthly analytics reports',
        '3 months support',
      ],
      ideal: 'Mid-sized businesses, e-commerce',
      timeline: '6-8 weeks to launch',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Enterprise Solutions',
      price: '$12,999',
      period: '/month',
      description: 'End-to-end digital transformation for large organizations.',
      features: [
        'Custom website with unlimited pages',
        'Premium SEO and content strategy',
        'Full social media management (all platforms)',
        'Advanced e-commerce and API integrations',
        'Weekly analytics and performance reports',
        'Dedicated account manager',
        '6 months support',
      ],
      ideal: 'Large brands, enterprises',
      timeline: '8-12 weeks to launch',
    },
  ];

  const solutionsProcess = [
    {
      step: '01',
      title: 'Strategy & Planning',
      description: 'Develop a tailored digital strategy to meet your goals.',
      details: [
        'Business goal analysis',
        'Audience and competitor research',
        'Integrated solution roadmap',
        'Technology and platform selection',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Create user-friendly designs and robust digital platforms.',
      details: [
        'UI/UX design for web and mobile',
        'Custom website development',
        'Content creation and optimization',
        'Social media asset design',
      ],
      duration: '3-5 weeks',
    },
    {
      step: '03',
      title: 'Implementation & Integration',
      description: 'Launch solutions with seamless integrations.',
      details: [
        'Website and campaign launch',
        'Social media and ad setup',
        'Third-party tool integrations',
        'Performance optimization',
      ],
      duration: '2-3 weeks',
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Track performance and optimize for results.',
      details: [
        'Analytics and KPI tracking',
        'A/B testing for campaigns',
        'Content and SEO optimization',
        'Monthly performance reports',
      ],
      duration: 'Ongoing',
    },
  ];

  const solutionsTools = [
    { name: 'Next.js', icon: '▲', description: 'Build fast, scalable web applications' },
    { name: 'HubSpot', icon: '📈', description: 'CRM and marketing automation' },
    { name: 'Google Analytics', icon: '📊', description: 'Track website and campaign performance' },
    { name: 'Shopify', icon: '🛒', description: 'Robust e-commerce solutions' },
    { name: 'Semrush', icon: '🔍', description: 'SEO and content optimization' },
    { name: 'Figma', icon: '🎨', description: 'Collaborative design for UI/UX' },
  ];

  const caseStudies = [
    {
      client: 'GrowEasy Retail',
      industry: 'Retail',
      challenge: 'Fragmented online presence and low conversions',
      solution: 'Integrated website, e-commerce, and social media campaigns',
      results: [
        '350% increase in online sales',
        '200% boost in website traffic',
        '150% growth in social engagement',
        '40% reduction in bounce rate',
      ],
      timeframe: '5 months',
      image: '🛍️',
    },
    {
      client: 'TechFlow Inc.',
      industry: 'Technology',
      challenge: 'Inefficient digital workflows and poor user engagement',
      solution: 'Custom web app with CRM integration and content strategy',
      results: [
        '300% increase in lead generation',
        '250% faster user onboarding',
        '100% uptime for web app',
        '20% increase in customer retention',
      ],
      timeframe: '6 months',
      image: '💻',
    },
    {
      client: 'HealthVibe Clinic',
      industry: 'Healthcare',
      challenge: 'Limited online visibility and patient engagement',
      solution: 'SEO-optimized website, social media, and email campaigns',
      results: [
        '400% increase in website traffic',
        '200% growth in patient inquiries',
        '150% boost in social followers',
        'Top 3 rankings for 15+ keywords',
      ],
      timeframe: '4 months',
      image: '🩺',
    },
  ];

  const faqData = [
    {
      question: 'What are integrated digital solutions?',
      answer: 'We combine web development, digital marketing, content, and analytics to create a cohesive strategy.',
    },
    {
      question: 'How long does it take to implement a solution?',
      answer: 'Timelines range from 4-12 weeks, depending on the package and project complexity.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide 1-6 months of support, including updates and performance optimization.',
    },
    {
      question: 'Can you integrate with existing systems?',
      answer: 'Absolutely, we integrate with CRMs, e-commerce platforms, and custom APIs.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We track KPIs like traffic, conversions, engagement, and ROI with detailed reports.',
    },
    {
      question: 'Are solutions tailored to specific industries?',
      answer: 'Yes, we customize solutions for industries like retail, healthcare, tech, and more.',
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
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              : 'bg-orange-600 text-white hover:bg-orange-700'
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
                <Link href="/" className={`${customThemeClasses.textMuted} hover:text-orange-600`}>
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
                <span className={`font-medium ${customThemeClasses.text}`}>Solutions</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`py-16 transition-colors duration-500 ${customThemeClasses.heroBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-2xl">🚀</span>
                <span>Integrated Digital Solutions</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${customThemeClasses.text}`}>
                Digital{' '}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary}`}>
                Transform your business with end-to-end digital strategies.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border}`}
                >
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>350% ROI Growth</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border}`}
                >
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>4-12 Weeks Launch</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Get Free Digital Audit
                </Link>
                <Link
                  href="/contact"
                  className={`border-2 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center ${
                    isDarkMode
                      ? 'border-white text-white hover:bg-white hover:text-gray-900'
                      : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-orange-600 mb-2">400%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Average Traffic Growth</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-amber-600 mb-2">150+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Projects Delivered</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-indigo-600 mb-2">97%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Client Satisfaction</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">8+</div>
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
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg transform -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-orange-600 border border-gray-200'
                }`}
                aria-label={`View ${tab.name}`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
                    Integrated Digital Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Combine web, marketing, and analytics for maximum impact.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '💻',
                      title: 'Custom Web Development',
                      description: 'Responsive websites with advanced functionality.',
                    },
                    {
                      icon: '📈',
                      title: 'Digital Marketing',
                      description: 'SEO, content, and social media campaigns.',
                    },
                    {
                      icon: '📊',
                      title: 'Analytics & Insights',
                      description: 'Data-driven strategies for growth.',
                    },
                    {
                      icon: '🛒',
                      title: 'E-commerce Solutions',
                      description: 'Scalable online stores with secure payments.',
                    },
                    {
                      icon: '🔗',
                      title: 'System Integrations',
                      description: 'Seamless integration with CRMs and APIs.',
                    },
                    {
                      icon: '📱',
                      title: 'Mobile Optimization',
                      description: 'Mobile-first designs for better engagement.',
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
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
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
                    Our Solutions Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    A strategic approach to deliver cohesive digital solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {solutionsProcess.map((step, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-bold text-orange-600 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${customThemeClasses.text}`}>{step.title}</h3>
                            <p className={`mb-4 ${customThemeClasses.textSecondary}`}>{step.description}</p>
                            <div className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <svg
                                    className="w-4 h-4 text-orange-500 flex-shrink-0"
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
                                isDarkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'
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
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
                    Solutions Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Industry-leading tools for integrated digital solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solutionsTools.map((tool, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-2xl border text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                    >
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${customThemeClasses.text}`}>{tool.name}</h3>
                      <p className={`text-sm ${customThemeClasses.textSecondary}`}>{tool.description}</p>
                    </div>
                  ))}
                </div>
                <div className={`p-8 rounded-2xl border ${customThemeClasses.cardBg} ${customThemeClasses.border}`}>
                  <h3 className={`text-2xl font-bold mb-6 text-center ${customThemeClasses.text}`}>
                    Additional Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                      'React',
                      'WordPress',
                      'Google Ads',
                      'Mailchimp',
                      'Stripe',
                      'AWS',
                      'Hotjar',
                      'Zapier',
                    ].map((tech, index) => (
                      <div key={index} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm font-medium ${customThemeClasses.text}`}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
                    Solutions Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Choose the package that aligns with your digital goals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {solutionsPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-8 ${
                        pkg.popular ? 'border-orange-600 shadow-lg' : customThemeClasses.border
                      } ${customThemeClasses.cardBg}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-bold mb-2 text-orange-600">
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
                              className="w-4 h-4 text-orange-500 flex-shrink-0"
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
                        className={`block text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                          pkg.popular
                            ? 'bg-orange-600 text-white hover:bg-orange-700'
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
            <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
              Digital Solutions Success{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              See how our integrated solutions drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
              >
                <div
                  className={`aspect-[4/3] flex items-center justify-center text-6xl ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  {study.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-600 font-medium mb-2">{study.industry}</div>
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
                    className={`mt-4 inline-flex items-center space-x-2 text-orange-600 hover:text-orange-800 dark:hover:text-orange-400 font-medium transition-colors`}
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
            <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              Answers to common questions about our digital solutions.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 transition-all duration-300 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
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
          <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
            Ready to{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary}`}>
            Partner with Adsen for integrated digital solutions that drive results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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

export default SolutionsPage;
