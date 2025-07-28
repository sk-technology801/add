'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const SEOServicePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPackage, setSelectedPackage] = useState('professional');

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  // Detect system theme preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    sectionBg: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
    heroBg: isDarkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
      : 'bg-gradient-to-br from-blue-50 via-white to-green-50',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    borderLight: isDarkMode ? 'border-gray-600' : 'border-gray-100'
  };

  const seoPackages = [
    {
      id: 'starter',
      name: 'SEO Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting their SEO journey',
      features: [
        'Keyword research (up to 20 keywords)',
        'On-page optimization (5 pages)',
        'Basic technical SEO audit',
        'Google My Business optimization',
        'Monthly reporting',
        'Email support'
      ],
      ideal: 'Small businesses, local services',
      timeline: '3-4 months to see results'
    },
    {
      id: 'professional',
      name: 'SEO Professional',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive SEO strategy for growing businesses',
      features: [
        'Keyword research (up to 50 keywords)',
        'On-page optimization (15 pages)',
        'Technical SEO optimization',
        'Content creation (4 blog posts)',
        'Link building (10 quality backlinks)',
        'Local SEO optimization',
        'Competitor analysis',
        'Bi-weekly reporting',
        'Phone & email support'
      ],
      ideal: 'Growing businesses, e-commerce',
      timeline: '2-3 months to see results',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'SEO Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'Advanced SEO solution for large businesses',
      features: [
        'Unlimited keyword research',
        'Complete website optimization',
        'Advanced technical SEO',
        'Content strategy (8 blog posts)',
        'Premium link building (25 backlinks)',
        'International SEO',
        'E-commerce SEO',
        'Advanced competitor analysis',
        'Weekly reporting',
        'Dedicated account manager',
        'Priority support'
      ],
      ideal: 'Large businesses, enterprises',
      timeline: '1-2 months to see results'
    }
  ];

  const seoProcess = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'Comprehensive analysis of your website\'s current SEO performance, technical issues, and opportunities.',
      details: [
        'Technical SEO audit',
        'Keyword gap analysis',
        'Competitor research',
        'Site architecture review'
      ],
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized SEO strategy based on your business goals and target audience.',
      details: [
        'Keyword strategy',
        'Content roadmap',
        'Technical optimization plan',
        'Link building strategy'
      ],
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the SEO strategy with on-page optimization, content creation, and technical improvements.',
      details: [
        'On-page optimization',
        'Content creation',
        'Technical fixes',
        'Internal linking'
      ],
      duration: 'Ongoing'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, reporting, and optimization to improve rankings and traffic.',
      details: [
        'Performance tracking',
        'Monthly reporting',
        'Strategy refinement',
        'ROI analysis'
      ],
      duration: 'Ongoing'
    }
  ];

  const seoTools = [
    { name: 'Google Analytics', icon: '📊', description: 'Traffic analysis and user behavior tracking' },
    { name: 'Google Search Console', icon: '🔍', description: 'Search performance monitoring' },
    { name: 'SEMrush', icon: '📈', description: 'Keyword research and competitor analysis' },
    { name: 'Ahrefs', icon: '🔗', description: 'Backlink analysis and content research' },
    { name: 'Screaming Frog', icon: '🕷️', description: 'Technical SEO auditing' },
    { name: 'GTMetrix', icon: '⚡', description: 'Page speed optimization' }
  ];

  const caseStudies = [
    {
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'Low organic visibility and traffic',
      solution: 'Comprehensive SEO strategy with technical optimization',
      results: [
        '300% increase in organic traffic',
        '250% increase in keyword rankings',
        '180% increase in conversion rate',
        'ROI of 420% within 6 months'
      ],
      timeframe: '6 months',
      image: '🏢'
    },
    {
      client: 'Local Restaurant Chain',
      industry: 'Food & Beverage',
      challenge: 'Poor local search visibility',
      solution: 'Local SEO optimization and Google My Business enhancement',
      results: [
        '400% increase in local searches',
        'Top 3 rankings for 85% of target keywords',
        '200% increase in phone calls',
        '150% increase in foot traffic'
      ],
      timeframe: '4 months',
      image: '🍕'
    },
    {
      client: 'E-commerce Fashion Store',
      industry: 'E-commerce',
      challenge: 'High competition in fashion keywords',
      solution: 'Long-tail keyword strategy and content marketing',
      results: [
        '350% increase in organic revenue',
        '280% increase in product page visits',
        '220% increase in average session duration',
        'Reduced cost per acquisition by 45%'
      ],
      timeframe: '8 months',
      image: '👗'
    }
  ];

  const faqData = [
    {
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. You can typically expect to see initial improvements in 3-4 months, with significant results showing in 6-12 months. The timeline depends on your industry competition, website condition, and the scope of optimization needed.'
    },
    {
      question: 'What makes your SEO approach different?',
      answer: 'Our SEO approach is data-driven and customized for each client. We focus on technical excellence, high-quality content, and ethical link-building practices. We provide transparent reporting and work as an extension of your team.'
    },
    {
      question: 'Do you guarantee first-page rankings?',
      answer: 'While we cannot guarantee specific rankings (as search algorithms are constantly changing), we guarantee improved visibility, increased organic traffic, and better search performance based on historical data and proven strategies.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work with businesses across all industries including e-commerce, healthcare, technology, legal, real estate, hospitality, and more. Our strategies are customized based on industry-specific challenges and opportunities.'
    },
    {
      question: 'How do you measure SEO success?',
      answer: 'We track multiple KPIs including organic traffic growth, keyword ranking improvements, conversion rate increases, and ROI. We provide detailed monthly reports with actionable insights and recommendations.'
    },
    {
      question: 'Do you handle technical SEO issues?',
      answer: 'Yes, technical SEO is a core part of our service. We handle site speed optimization, mobile responsiveness, crawl errors, schema markup, SSL certificates, and other technical factors that impact search performance.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClasses.bg}`}>
      {/* Theme Toggle Button */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isDarkMode 
              ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>

      {/* Breadcrumb */}
      <div className={`pt-24 pb-4 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className={`${themeClasses.textMuted} hover:text-blue-600`}>Home</Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${themeClasses.textMuted}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/services" className={`${themeClasses.textMuted} hover:text-blue-600`}>Services</Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${themeClasses.textMuted}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className={`font-medium ${themeClasses.text}`}>SEO Optimization</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`py-16 transition-colors duration-500 ${themeClasses.heroBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-2xl">🔍</span>
                <span>Search Engine Optimization</span>
              </div>
              
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${themeClasses.text}`}>
                SEO{' '}
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent">
                  Optimization
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${themeClasses.textSecondary}`}>
                Boost your search rankings and drive organic traffic with our comprehensive SEO strategies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } border ${themeClasses.border}`}>
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm font-medium ${themeClasses.text}`}>300% Traffic Increase</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } border ${themeClasses.border}`}>
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm font-medium ${themeClasses.text}`}>3-6 Months Results</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-quote"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Get Free SEO Audit
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
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Average Traffic Increase</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>SEO Projects Completed</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Client Retention Rate</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-orange-600 mb-2">6+</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Years SEO Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Tabs */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'overview', name: 'Overview', icon: '📋' },
              { id: 'process', name: 'Our Process', icon: '⚡' },
              { id: 'tools', name: 'Tools & Tech', icon: '🛠️' },
              { id: 'pricing', name: 'Packages', icon: '💰' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-gray-200'
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
                  <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
                    Complete SEO Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${themeClasses.textSecondary}`}>
                    Our comprehensive SEO services cover every aspect of search engine optimization to maximize your online visibility and drive qualified traffic.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🔍',
                      title: 'Keyword Research',
                      description: 'In-depth keyword analysis to identify high-value opportunities and target the right search terms for your business.'
                    },
                    {
                      icon: '⚙️',
                      title: 'Technical SEO',
                      description: 'Optimize your website\'s technical foundation including site speed, mobile responsiveness, and crawlability.'
                    },
                    {
                      icon: '📝',
                      title: 'Content Optimization',
                      description: 'Create and optimize high-quality content that engages users and ranks well in search engines.'
                    },
                    {
                      icon: '🔗',
                      title: 'Link Building',
                      description: 'Develop high-quality backlinks from authoritative websites to boost your domain authority and rankings.'
                    },
                    {
                      icon: '📍',
                      title: 'Local SEO',
                      description: 'Optimize your local search presence to attract customers in your geographic area.'
                    },
                    {
                      icon: '📊',
                      title: 'SEO Analytics',
                      description: 'Track, measure, and report on your SEO performance with detailed analytics and insights.'
                    }
                  ].map((service, index) => (
                    <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${themeClasses.cardBg} ${themeClasses.border}`}>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${themeClasses.text}`}>{service.title}</h3>
                      <p className={`${themeClasses.textSecondary}`}>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
                    Our SEO Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${themeClasses.textSecondary}`}>
                    A systematic approach to SEO that ensures sustainable results and long-term success.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {seoProcess.map((step, index) => (
                    <div key={index} className="relative">
                      <div className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${themeClasses.cardBg} ${themeClasses.border}`}>
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-bold text-blue-600 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${themeClasses.text}`}>{step.title}</h3>
                            <p className={`mb-4 ${themeClasses.textSecondary}`}>{step.description}</p>
                            
                            <div className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  <span className={`text-sm ${themeClasses.textSecondary}`}>{detail}</span>
                                </div>
                              ))}
                            </div>

                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                            }`}>
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
                  <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
                    Professional SEO Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${themeClasses.textSecondary}`}>
                    We use industry-leading tools and technologies to deliver comprehensive SEO analysis and optimization.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {seoTools.map((tool, index) => (
                    <div key={index} className={`p-6 rounded-2xl border text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${themeClasses.cardBg} ${themeClasses.border}`}>
                      <div className="text-4xl mb-4">{tool.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 ${themeClasses.text}`}>{tool.name}</h3>
                      <p className={`text-sm ${themeClasses.textSecondary}`}>{tool.description}</p>
                    </div>
                  ))}
                </div>

                <div className={`p-8 rounded-2xl border ${themeClasses.cardBg} ${themeClasses.border}`}>
                  <h3 className={`text-2xl font-bold mb-6 text-center ${themeClasses.text}`}>
                    Additional Technologies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {['Google Tag Manager', 'Schema Markup', 'Core Web Vitals', 'Mobile Testing', 'Site Audit Tools', 'Rank Tracking', 'Competitor Analysis', 'Content Optimization'].map((tech, index) => (
                      <div key={index} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <span className={`text-sm font-medium ${themeClasses.text}`}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
                    SEO Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${themeClasses.textSecondary}`}>
                    Choose the SEO package that best fits your business needs and budget.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {seoPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-8 ${
                        pkg.popular ? 'border-blue-600 shadow-lg' : themeClasses.border
                      } ${themeClasses.cardBg}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-bold mb-2 text-blue-600">
                        {pkg.price}
                        <span className={`text-sm font-normal ${themeClasses.textSecondary}`}>{pkg.period}</span>
                      </div>
                      <p className={`mb-6 ${themeClasses.textSecondary}`}>{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className={`${themeClasses.textSecondary}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm mb-4">
                        <span className={`font-medium ${themeClasses.text}`}>Ideal for: </span>
                        <span className={themeClasses.textSecondary}>{pkg.ideal}</span>
                      </div>
                      <div className="text-sm mb-6">
                        <span className={`font-medium ${themeClasses.text}`}>Timeline: </span>
                        <span className={themeClasses.textSecondary}>{pkg.timeline}</span>
                      </div>
                      <Link
                        href="/get-quote"
                        className={`block text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                          pkg.popular
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
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
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
              SEO Success <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${themeClasses.textSecondary}`}>
              Discover how we’ve helped businesses like yours achieve remarkable SEO results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${themeClasses.cardBg} ${themeClasses.border}`}
              >
                <div className={`aspect-[4/3] flex items-center justify-center text-6xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  {study.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                  <h3 className={`text-xl font-bold mb-3 ${themeClasses.text}`}>{study.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className={`font-medium ${themeClasses.text}`}>Challenge: </span>
                      <span className={themeClasses.textSecondary}>{study.challenge}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${themeClasses.text}`}>Solution: </span>
                      <span className={themeClasses.textSecondary}>{study.solution}</span>
                    </div>
                    <div>
                      <span className={`font-medium ${themeClasses.text}`}>Results: </span>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className={themeClasses.textSecondary}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className={`font-medium ${themeClasses.text}`}>Timeframe: </span>
                      <span className={themeClasses.textSecondary}>{study.timeframe}</span>
                    </div>
                  </div>
                  <Link
                    href="/portfolio"
                    className={`mt-4 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium transition-colors`}
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
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${themeClasses.textSecondary}`}>
              Get answers to common questions about our SEO services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border p-6 transition-all duration-300 ${themeClasses.cardBg} ${themeClasses.border}`}
              >
                <h3 className={`text-lg font-semibold mb-3 ${themeClasses.text}`}>{faq.question}</h3>
                <p className={`text-sm ${themeClasses.textSecondary}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${themeClasses.text}`}>
            Ready to <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Boost Your Rankings</span>?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${themeClasses.textSecondary}`}>
            Partner with Adsen to elevate your search engine visibility and drive more organic traffic.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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

export default SEOServicePage;