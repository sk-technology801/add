'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const EnterprisePage = () => {
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || {
    isDarkMode: false,
    themeClasses: {},
    toggleTheme: () => {},
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Override heroBg for enterprise theme (navy blue-silver gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-blue-950 to-gray-700'
      : 'bg-gradient-to-br from-blue-50 via-white to-gray-100',
    buttonHover: isDarkMode
      ? 'hover:bg-blue-600 hover:text-white'
      : 'hover:bg-blue-700 hover:text-white',
  };

  const enterprisePackages = [
    {
      id: 'core',
      name: 'Enterprise Core',
      price: 'Custom Quote',
      period: '',
      description: 'Essential enterprise solution for streamlined operations.',
      features: [
        'Custom ERP/CRM integration',
        'Up to 5 API integrations',
        'Basic cloud infrastructure setup',
        'Single-region deployment',
        'Standard security protocols',
        '3 months dedicated support',
      ],
      ideal: 'Mid-sized enterprises, growing organizations',
      timeline: '8-12 weeks delivery',
    },
    {
      id: 'advanced',
      name: 'Enterprise Advanced',
      price: 'Custom Quote',
      period: '',
      description: 'Scalable solution for complex enterprise needs.',
      features: [
        'Advanced ERP/CRM customization',
        'Up to 10 API integrations',
        'Multi-cloud infrastructure',
        'Multi-region deployment',
        'Enhanced security and compliance',
        '6 months dedicated support',
        'Dedicated account manager',
      ],
      ideal: 'Large enterprises, global operations',
      timeline: '12-16 weeks delivery',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Enterprise Premium',
      price: 'Custom Quote',
      period: '',
      description: 'Bespoke platform for mission-critical operations.',
      features: [
        'Fully custom enterprise platform',
        'Unlimited API integrations',
        'Hybrid cloud architecture',
        'Global multi-region support',
        'Advanced security (SOC 2, GDPR)',
        '12 months dedicated support',
        'Priority 24/7 support team',
      ],
      ideal: 'Global corporations, high-compliance industries',
      timeline: '16-24 weeks delivery',
    },
  ];

  const enterpriseProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understand your enterprise needs and define a strategy.',
      details: [
        'Business process analysis',
        'Stakeholder workshops',
        'Technology stack selection',
        'Compliance and security planning',
      ],
      duration: '2-4 weeks',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design a scalable and secure enterprise architecture.',
      details: [
        'Custom system architecture',
        'UI/UX for enterprise dashboards',
        'Prototype development',
        'Client feedback integration',
      ],
      duration: '3-5 weeks',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build and integrate your enterprise solution.',
      details: [
        'Custom software development',
        'ERP/CRM and API integrations',
        'Cloud infrastructure setup',
        'Performance and security testing',
      ],
      duration: '6-10 weeks',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launch with confidence and ongoing support.',
      details: [
        'Multi-region deployment',
        'User training and onboarding',
        'Compliance and performance audits',
        'Dedicated support setup',
      ],
      duration: '2-4 weeks',
    },
  ];

  const enterpriseTools = [
    { name: 'Salesforce', icon: '☁️', description: 'CRM for enterprise customer management' },
    { name: 'SAP', icon: '⚙️', description: 'ERP for streamlined business processes' },
    { name: 'AWS', icon: '☁️', description: 'Scalable cloud infrastructure' },
    { name: 'Azure', icon: '☁️', description: 'Secure cloud for enterprise workloads' },
    { name: 'Tableau', icon: '📊', description: 'Advanced analytics and insights' },
    { name: 'Postman', icon: '🚀', description: 'API development and testing' },
  ];

  const caseStudies = [
    {
      client: 'GlobalCorp',
      industry: 'Manufacturing',
      challenge: 'Fragmented systems and inefficient workflows',
      solution: 'Custom SAP integration with multi-cloud deployment',
      results: [
        '300% improvement in process efficiency',
        '50% reduction in operational costs',
        'Real-time global data access',
        '99.9% system uptime',
      ],
      timeframe: '6 months',
      image: '🏭',
    },
    {
      client: 'TechTrend',
      industry: 'Technology',
      challenge: 'Scalability issues with legacy CRM',
      solution: 'Salesforce customization with API integrations',
      results: [
        '200% increase in customer retention',
        '150% faster lead processing',
        'Seamless multi-region operations',
        'GDPR compliance achieved',
      ],
      timeframe: '5 months',
      image: '💻',
    },
    {
      client: 'HealthSys',
      industry: 'Healthcare',
      challenge: 'Non-compliant data systems',
      solution: 'Custom platform with HIPAA-compliant cloud',
      results: [
        '100% compliance with regulations',
        '400% faster data processing',
        'Improved patient data security',
        'Scalable for 10+ facilities',
      ],
      timeframe: '7 months',
      image: '🏥',
    },
  ];

  const faqData = [
    {
      question: 'What enterprise platforms do you support?',
      answer: 'We specialize in Salesforce, SAP, Oracle NetSuite, Microsoft Dynamics, and custom platforms.',
    },
    {
      question: 'How long does an enterprise solution take to implement?',
      answer: 'Timelines vary: 8-12 weeks for core solutions, 12-16 weeks for advanced, and 16-24 weeks for premium.',
    },
    {
      question: 'Can you ensure compliance with regulations?',
      answer: 'Yes, we implement GDPR, HIPAA, SOC 2, and other compliance standards as needed.',
    },
    {
      question: 'Do you provide custom API integrations?',
      answer: 'We offer tailored API integrations for seamless connectivity with existing systems.',
    },
    {
      question: 'How do you handle high-traffic systems?',
      answer: 'Our solutions use scalable cloud infrastructure (AWS, Azure) to ensure performance.',
    },
    {
      question: 'What support do you offer post-launch?',
      answer: 'We provide 3-12 months of dedicated support, including 24/7 priority options.',
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
              ? 'bg-blue-500 text-gray-900 hover:bg-blue-400'
              : 'bg-blue-900 text-white hover:bg-blue-800'
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
                <Link href="/" className={`${customThemeClasses.textMuted} hover:text-blue-500`}>
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
                <Link href="/services" className={`${customThemeClasses.textMuted} hover:text-blue-500`}>
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
                <span className={`font-medium ${customThemeClasses.text}`}>Enterprise Solutions</span>
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
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
                <span className="text-2xl">🏢</span>
                <span>Enterprise Excellence</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${customThemeClasses.text} animate-slide-up delay-100`}>
                Enterprise{' '}
                <span className="bg-gradient-to-r from-blue-900 to-gray-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary} animate-slide-up delay-200`}>
                Scalable, secure, and custom solutions for global enterprises.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-300">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border} animate-scale-in`}
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>300% Efficiency Boost</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border} animate-scale-in delay-100`}
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>8-24 Weeks Delivery</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
                <Link
                  href="/get-quote"
                  className="bg-gradient-to-r from-blue-900 to-gray-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 text-center animate-pulse-subtle"
                >
                  Request Solution Audit
                </Link>
                <Link
                  href="/contact"
                  className={`border-2 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-500 text-center ${
                    isDarkMode
                      ? 'border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white'
                      : 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
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
                  <div className="text-4xl font-extrabold text-blue-500 mb-2 animate-pulse-subtle">400%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Operational Efficiency</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-blue-900 mb-2 animate-pulse-subtle">100+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Enterprise Solutions</div>
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
                  <div className="text-4xl font-extrabold text-gray-600 mb-2 animate-pulse-subtle">12+</div>
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
              { id: 'pricing', name: 'Solutions', icon: '💼' },
            ].map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-900 to-gray-500 text-white shadow-2xl -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-blue-400'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900 border border-gray-200'
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
                    Enterprise-Grade Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    Transform your operations with scalable, secure, and custom enterprise systems.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '⚙️',
                      title: 'Custom ERP/CRM',
                      description: 'Tailored systems for seamless business operations.',
                    },
                    {
                      icon: '🔒',
                      title: 'Advanced Security',
                      description: 'Compliance with GDPR, HIPAA, and SOC 2 standards.',
                    },
                    {
                      icon: '☁️',
                      title: 'Cloud Infrastructure',
                      description: 'Scalable AWS/Azure solutions for global reach.',
                    },
                    {
                      icon: '🔌',
                      title: 'API Integrations',
                      description: 'Connect legacy systems with modern platforms.',
                    },
                    {
                      icon: '📊',
                      title: 'Data Analytics',
                      description: 'Real-time insights for strategic decisions.',
                    },
                    {
                      icon: '📞',
                      title: '24/7 Support',
                      description: 'Dedicated teams for uninterrupted operations.',
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
                    Our Enterprise Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    A proven methodology for delivering enterprise solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {enterpriseProcess.map((step, index) => (
                    <div key={index} className="relative animate-slide-up delay-${index * 100}">
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-extrabold text-blue-500 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${customThemeClasses.text}`}>{step.title}</h3>
                            <p className={`mb-4 ${customThemeClasses.textSecondary}`}>{step.description}</p>
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
                                  <span className={`text-sm ${customThemeClasses.textSecondary}`}>{detail}</span>
                                </div>
                              ))}
                            </div>
                            <div
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
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
                    Enterprise Technologies
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    Industry-leading tools for robust enterprise solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enterpriseTools.map((tool, index) => (
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
                      'Oracle NetSuite',
                      'Microsoft Dynamics',
                      'Google Cloud',
                      'Snowflake',
                      'Jenkins',
                      'Docker',
                      'Kubernetes',
                      'ServiceNow',
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
                    Enterprise Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
                    Tailored solutions for your enterprise needs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {enterprisePackages.map((pkg, index) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 p-8 ${
                        pkg.popular ? 'border-blue-500 shadow-xl' : customThemeClasses.border
                      } ${customThemeClasses.cardBg} animate-slide-up delay-${index * 100}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-900 to-gray-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-extrabold mb-2 text-blue-500">
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
                            ? 'bg-gradient-to-r from-blue-900 to-gray-500 text-white'
                            : isDarkMode
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        Request {pkg.name} Quote
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
              Enterprise Success{' '}
              <span className="bg-gradient-to-r from-blue-900 to-gray-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
              See how our solutions empower global enterprises.
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
                  <div className="text-sm text-blue-500 font-medium mb-2">{study.industry}</div>
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
                    className={`mt-4 inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300`}
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
              <span className="bg-gradient-to-r from-blue-900 to-gray-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
              Answers to common enterprise solution queries.
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
            <span className="bg-gradient-to-r from-blue-900 to-gray-500 bg-clip-text text-transparent">
              Transform Your Enterprise
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary} animate-slide-up delay-100`}>
            Partner with Adsen for scalable, secure enterprise solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-900 to-gray-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 animate-pulse-subtle"
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

export default EnterprisePage;