'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const StartupsPage = () => {
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

  // Override heroBg for startups theme (teal-orange gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-teal-950 to-orange-900'
      : 'bg-gradient-to-br from-teal-50 via-white to-orange-50',
    buttonHover: isDarkMode
      ? 'hover:bg-teal-600 hover:text-white'
      : 'hover:bg-orange-600 hover:text-white',
  };

  const startupPackages = [
    {
      id: 'lean',
      name: 'Lean Startup',
      price: '$1,999',
      period: '/one-time',
      description: 'Launch your MVP quickly and cost-effectively.',
      features: [
        'MVP development (up to 3 features)',
        'Basic cloud hosting setup',
        'Core UI/UX design',
        '1 payment gateway integration',
        'Basic SEO optimization',
        '1 month support',
      ],
      ideal: 'Early-stage startups, solo founders',
      timeline: '2-4 weeks delivery',
    },
    {
      id: 'growth',
      name: 'Startup Growth',
      price: '$4,999',
      period: '/one-time',
      description: 'Scale your startup with a robust platform.',
      features: [
        'MVP with up to 7 features',
        'Custom UI/UX design',
        'Advanced cloud hosting',
        'Multiple payment gateways',
        'Basic analytics setup',
        '3 months support',
      ],
      ideal: 'Seed-funded startups, small teams',
      timeline: '4-6 weeks delivery',
      popular: true,
    },
    {
      id: 'scale',
      name: 'Startup Scale',
      price: '$9,999',
      period: '/one-time',
      description: 'Build a scalable solution for rapid growth.',
      features: [
        'Custom platform development',
        'Advanced UI/UX with prototyping',
        'Scalable cloud infrastructure',
        'API and CRM integration',
        'Advanced analytics and SEO',
        '6 months support',
        'Dedicated project manager',
      ],
      ideal: 'Series A startups, growing businesses',
      timeline: '6-10 weeks delivery',
    },
  ];

  const startupProcess = [
    {
      step: '01',
      title: 'Ideation & Validation',
      description: 'Refine your startup idea and validate market fit.',
      details: [
        'Idea workshop and feedback',
        'Market research and analysis',
        'Feature prioritization',
        'MVP scope definition',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create a user-friendly prototype for your MVP.',
      details: [
        'Wireframes and UI/UX design',
        'Interactive prototype development',
        'User testing and feedback',
        'Design revisions',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build and integrate your startup’s MVP.',
      details: [
        'Agile development sprints',
        'Core feature implementation',
        'Cloud hosting setup',
        'Basic integrations (e.g., payments)',
      ],
      duration: '2-4 weeks',
    },
    {
      step: '04',
      title: 'Launch & Growth',
      description: 'Launch your MVP and plan for growth.',
      details: [
        'Testing and bug fixes',
        'Launch strategy and execution',
        'User onboarding support',
        'Growth analytics setup',
      ],
      duration: '1-2 weeks',
    },
  ];

  const startupTools = [
    { name: 'Next.js', icon: '⚛️', description: 'Fast, scalable web development' },
    { name: 'Firebase', icon: '🔥', description: 'Real-time backend for MVPs' },
    { name: 'Stripe', icon: '💳', description: 'Secure payment processing' },
    { name: 'Figma', icon: '🎨', description: 'Collaborative UI/UX design' },
    { name: 'Google Analytics', icon: '📊', description: 'Track user behavior' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing for growth' },
  ];

  const caseStudies = [
    {
      client: 'QuickApp',
      industry: 'SaaS',
      challenge: 'No product to validate market fit',
      solution: 'Next.js MVP with Firebase backend',
      results: [
        'Launched MVP in 3 weeks',
        '500 early adopters in first month',
        '75% user retention rate',
        'Secured seed funding',
      ],
      timeframe: '2 months',
      image: '🚀',
    },
    {
      client: 'FitBuddy',
      industry: 'Health Tech',
      challenge: 'Slow user acquisition',
      solution: 'Mobile-optimized MVP with Stripe and analytics',
      results: [
        '200% increase in sign-ups',
        '150% faster checkout process',
        '50% reduction in bounce rate',
        'Ranked top 10 in niche keywords',
      ],
      timeframe: '3 months',
      image: '🏋️',
    },
    {
      client: 'EduGrow',
      industry: 'EdTech',
      challenge: 'Complex user onboarding',
      solution: 'Custom platform with CRM integration',
      results: [
        '300% growth in user base',
        '80% faster onboarding',
        '100% uptime during launch',
        'Integrated referral program',
      ],
      timeframe: '4 months',
      image: '📚',
    },
  ];

  const faqData = [
    {
      question: 'What is an MVP, and why do startups need it?',
      answer: 'An MVP (Minimum Viable Product) is a basic version of your product to test market fit. It helps startups launch quickly and iterate based on feedback.',
    },
    {
      question: 'How fast can you build my startup’s MVP?',
      answer: 'We deliver MVPs in 2-10 weeks, depending on complexity: 2-4 weeks for Lean, 4-6 weeks for Growth, and 6-10 weeks for Scale.',
    },
    {
      question: 'Can you integrate payment systems?',
      answer: 'Yes, we integrate Stripe, PayPal, and other gateways for secure transactions.',
    },
    {
      question: 'Do you offer SEO for startups?',
      answer: 'We provide basic to advanced SEO to boost visibility and attract early adopters.',
    },
    {
      question: 'Can your solutions scale with my startup?',
      answer: 'Our MVPs are built on scalable platforms like Firebase and Next.js to support growth.',
    },
    {
      question: 'What support do you provide post-launch?',
      answer: 'We offer 1-6 months of support, including updates, bug fixes, and growth consulting.',
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
              ? 'bg-teal-500 text-gray-900 hover:bg-teal-400'
              : 'bg-orange-600 text-white hover:bg-orange-500'
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
                <Link href="/" className={`${customThemeClasses.textMuted || 'text-gray-500'} hover:text-teal-500`}>
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
                <Link href="/services" className={`${customThemeClasses.textMuted || 'text-gray-500'} hover:text-teal-500`}>
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
                <span className={`font-medium ${customThemeClasses.text || 'text-gray-900'}`}>Startup Solutions</span>
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
              <div className="inline-flex items-center space-x-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
                <span className="text-2xl">🚀</span>
                <span>Startup Success</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 ${customThemeClasses.text || 'text-gray-900'} animate-slide-up delay-100`}>
                Startup{' '}
                <span className="bg-gradient-to-r from-teal-900 to-orange-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-200`}>
                Launch and scale your startup with agile, budget-friendly MVPs.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-slide-up delay-300">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border || 'border-gray-200'} animate-scale-in`}
                >
                  <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text || 'text-gray-900'}`}>300% User Growth</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border || 'border-gray-200'} animate-scale-in delay-100`}
                >
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text || 'text-gray-900'}`}>2-10 Weeks Launch</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
                <Link
                  href="/get-quote"
                  className="bg-gradient-to-r from-teal-900 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 text-center animate-pulse-subtle"
                >
                  Get Free MVP Audit
                </Link>
                <Link
                  href="/contact"
                  className={`border-2 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-500 text-center ${
                    isDarkMode
                      ? 'border-teal-500 text-teal-500 hover:bg-teal-600 hover:text-white'
                      : 'border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white'
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
                  <div className="text-4xl font-extrabold text-teal-500 mb-2 animate-pulse-subtle">400%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>User Acquisition</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-orange-500 mb-2 animate-pulse-subtle">150+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>MVPs Launched</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-indigo-600 mb-2 animate-pulse-subtle">98%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary || 'text-gray-600'}`}>Client Satisfaction</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg || 'bg-white'} border ${customThemeClasses.border || 'border-gray-200'} hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div className="text-4xl font-extrabold text-yellow-600 mb-2 animate-pulse-subtle">8+</div>
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
                    ? 'bg-gradient-to-r from-teal-900 to-orange-500 text-white shadow-2xl -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-teal-400'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-orange-500 border border-gray-200'
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
                    Startup Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    Build, launch, and grow your startup with lean, scalable MVPs.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🚀',
                      title: 'MVP Development',
                      description: 'Launch core features to test market fit fast.',
                    },
                    {
                      icon: '💳',
                      title: 'Payment Integration',
                      description: 'Secure payments to monetize from day one.',
                    },
                    {
                      icon: '📱',
                      title: 'Mobile Optimization',
                      description: 'Responsive designs for seamless user experiences.',
                    },
                    {
                      icon: '🔍',
                      title: 'SEO & Growth',
                      description: 'Boost visibility to attract early adopters.',
                    },
                    {
                      icon: '📊',
                      title: 'Analytics Setup',
                      description: 'Track user behavior for data-driven growth.',
                    },
                    {
                      icon: '☁️',
                      title: 'Cloud Hosting',
                      description: 'Scalable infrastructure for growing startups.',
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
                    Our Startup Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    A lean approach to get your startup to market fast.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {startupProcess.map((step, index) => (
                    <div key={index} className={`relative animate-slide-up delay-${index * 100}`}>
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${customThemeClasses.cardBg || 'bg-white'} ${customThemeClasses.border || 'border-gray-200'}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-extrabold text-teal-500 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${customThemeClasses.text || 'text-gray-900'}`}>{step.title}</h3>
                            <p className={`mb-4 ${customThemeClasses.textSecondary || 'text-gray-600'}`}>{step.description}</p>
                            <div className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <svg
                                    className="w-4 h-4 text-teal-500 flex-shrink-0"
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
                                isDarkMode ? 'bg-teal-900 text-orange-200' : 'bg-teal-100 text-teal-800'
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
                    Startup Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    Lean, powerful technologies to fuel startup growth.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {startupTools.map((tool, index) => (
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
                      'React Native',
                      'Vercel',
                      'Heroku',
                      'Mixpanel',
                      'Hotjar',
                      'Zapier',
                      'PayPal',
                      'Trello',
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
                    Startup Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
                    Affordable plans to launch and grow your startup.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {startupPackages.map((pkg, index) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 p-8 ${
                        pkg.popular ? 'border-teal-500 shadow-xl' : customThemeClasses.border || 'border-gray-200'
                      } ${customThemeClasses.cardBg || 'bg-white'} animate-slide-up delay-${index * 100}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-900 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text || 'text-gray-900'}`}>{pkg.name}</h3>
                      <div className="text-4xl font-extrabold mb-2 text-teal-500">
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
                              className="w-4 h-4 text-teal-500 flex-shrink-0"
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
                            ? 'bg-gradient-to-r from-teal-900 to-orange-500 text-white'
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
              Startup Success{' '}
              <span className="bg-gradient-to-r from-teal-900 to-orange-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
              See how we’ve helped startups launch and grow.
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
                  <div className="text-sm text-teal-500 font-medium mb-2">{study.industry}</div>
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
                    className={`mt-4 inline-flex items-center space-x-2 text-teal-500 hover:text-teal-600 dark:hover:text-orange-400 font-medium transition-colors duration-300`}
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
              <span className="bg-gradient-to-r from-teal-900 to-orange-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
              Answers to common startup solution queries.
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
            <span className="bg-gradient-to-r from-teal-900 to-orange-500 bg-clip-text text-transparent">
              Launch Your Startup
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary || 'text-gray-600'} animate-slide-up delay-100`}>
            Partner with Adsen to build and scale your MVP.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-900 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 animate-pulse-subtle"
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

export default StartupsPage;