
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const DigitalMarketingPage = () => {
  // Debug useTheme
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || { isDarkMode: false, themeClasses: {}, toggleTheme: () => {} };
  
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPackage, setSelectedPackage] = useState('professional');

  // Override heroBg for purple-blue scheme
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900'
      : 'bg-gradient-to-br from-purple-50 via-white to-blue-50',
  };

  const digitalMarketingPackages = [
    {
      id: 'starter',
      name: 'Marketing Starter',
      price: '$799',
      period: '/month',
      description: 'Ideal for small businesses starting their digital marketing journey',
      features: [
        'Basic SEO (10 keywords)',
        '1 PPC campaign setup',
        'Social media management (2 platforms)',
        'Monthly performance report',
        'Email support',
      ],
      ideal: 'Small businesses, local services',
      timeline: '3-4 months to see results',
    },
    {
      id: 'professional',
      name: 'Marketing Professional',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive digital marketing strategy for growing businesses',
      features: [
        'SEO optimization (30 keywords)',
        '3 PPC campaigns',
        'Social media management (4 platforms)',
        'Content creation (2 blog posts/month)',
        'Local SEO optimization',
        'Bi-weekly reporting',
        'Phone & email support',
      ],
      ideal: 'Growing businesses, e-commerce',
      timeline: '2-3 months to see results',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Marketing Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Advanced digital marketing solution for large businesses',
      features: [
        'Advanced SEO (unlimited keywords)',
        'Multi-platform PPC campaigns',
        'Social media strategy (all platforms)',
        'Content strategy (6 blog posts/month)',
        'Premium link building (20 backlinks)',
        'International marketing',
        'Weekly reporting',
        'Dedicated account manager',
        'Priority support',
      ],
      ideal: 'Large businesses, enterprises',
      timeline: '1-2 months to see results',
    },
  ];

  const marketingProcess = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Analyze your audience, competitors, and market to craft a tailored strategy.',
      details: [
        'Market research',
        'Competitor analysis',
        'Audience segmentation',
        'Keyword research',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a multi-channel marketing strategy aligned with your goals.',
      details: [
        'SEO strategy',
        'PPC campaign planning',
        'Social media content roadmap',
        'Analytics setup',
      ],
      duration: '1 week',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Launch campaigns across SEO, PPC, and social media platforms.',
      details: [
        'On-page SEO optimization',
        'Ad campaign launch',
        'Social media content posting',
        'Technical optimizations',
      ],
      duration: 'Ongoing',
    },
    {
      step: '04',
      title: 'Optimization & Reporting',
      description: 'Monitor performance, optimize campaigns, and provide detailed reports.',
      details: [
        'Performance tracking',
        'Campaign optimization',
        'Monthly reporting',
        'ROI analysis',
      ],
      duration: 'Ongoing',
    },
  ];

  const marketingTools = [
    { name: 'Google Analytics', icon: '📊', description: 'Track website traffic and user behavior' },
    { name: 'Google Ads', icon: '💰', description: 'Manage and optimize PPC campaigns' },
    { name: 'SEMrush', icon: '📈', description: 'Keyword research and competitor analysis' },
    { name: 'Hootsuite', icon: '📱', description: 'Social media scheduling and management' },
    { name: 'Ahrefs', icon: '🔗', description: 'Backlink analysis and content research' },
    { name: 'Google Tag Manager', icon: '🏷️', description: 'Manage tracking codes and events' },
  ];

  const caseStudies = [
    {
      client: 'TechCorp Inc.',
      industry: 'Technology',
      challenge: 'Low online visibility and lead generation',
      solution: 'Integrated SEO and PPC campaigns',
      results: [
        '300% increase in organic traffic',
        '400% ROAS from PPC campaigns',
        '150% increase in leads',
        'ROI of 380% within 6 months',
      ],
      timeframe: '6 months',
      image: '🏢',
    },
    {
      client: 'Local Retail Chain',
      industry: 'Retail',
      challenge: 'Limited local brand awareness',
      solution: 'Local SEO and social media marketing',
      results: [
        '350% increase in local searches',
        '200% growth in social media followers',
        '180% increase in store visits',
        'Top 3 local rankings for key terms',
      ],
      timeframe: '4 months',
      image: '🛍️',
    },
    {
      client: 'E-commerce Fashion Store',
      industry: 'E-commerce',
      challenge: 'High competition in online retail',
      solution: 'SEO, PPC, and social media content strategy',
      results: [
        '400% increase in organic revenue',
        '250% increase in ad conversions',
        '300% growth in social engagement',
        'Reduced CPA by 40%',
      ],
      timeframe: '8 months',
      image: '👗',
    },
  ];

  const faqData = [
    {
      question: 'What does your digital marketing service include?',
      answer: 'Our services include SEO optimization, PPC advertising, and social media marketing, with tailored strategies, campaign management, and detailed reporting.',
    },
    {
      question: 'How soon can I expect results from digital marketing?',
      answer: 'PPC campaigns can show results within days, SEO typically takes 3-6 months, and social media growth is noticeable within 2-3 months, depending on your goals.',
    },
    {
      question: 'Which platforms do you use for advertising?',
      answer: 'We manage campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, Twitter, and other platforms based on your target audience.',
    },
    {
      question: 'Can you work with businesses of any size?',
      answer: 'Yes, our solutions are scalable for startups, SMBs, and enterprises, customized to fit your budget and objectives.',
    },
    {
      question: 'How do you measure campaign success?',
      answer: 'We track KPIs like organic traffic, ad conversions, ROAS, social engagement, and ROI, providing transparent monthly reports.',
    },
    {
      question: 'Do you offer customized marketing strategies?',
      answer: 'Yes, every strategy is tailored to your business goals, industry, and target audience for maximum impact.',
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
              : 'bg-purple-600 text-white hover:bg-purple-700'
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
      <div className={`pt-24 pb-4 ${customThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className={`${customThemeClasses.textMuted} hover:text-purple-600`}>Home</Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${customThemeClasses.textMuted}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/services" className={`${customThemeClasses.textMuted} hover:text-purple-600`}>Services</Link>
              </li>
              <li>
                <svg className={`w-4 h-4 ${customThemeClasses.textMuted}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className={`font-medium ${customThemeClasses.text}`}>Digital Marketing</span>
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
              <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-2xl">📢</span>
                <span>Digital Marketing Solutions</span>
              </div>
              
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${customThemeClasses.text}`}>
                Digital{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary}`}>
                Amplify your brand with data-driven SEO, PPC, and social media strategies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } border ${customThemeClasses.border}`}>
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>400% ROI Increase</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } border ${customThemeClasses.border}`}>
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>1-6 Months Results</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/get-quote"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Get Free Marketing Audit
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
                <div className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-purple-600 mb-2">250%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Average ROI Increase</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Campaigns Managed</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}>
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Client Retention Rate</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}>
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
                    ? 'bg-purple-600 text-white shadow-lg transform -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-purple-600 border border-gray-200'
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
                    Complete Digital Marketing Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Our integrated digital marketing services combine SEO, PPC, and social media to maximize your online presence and drive growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🔍',
                      title: 'SEO Optimization',
                      description: 'Boost search rankings with keyword research, technical SEO, and content optimization.',
                    },
                    {
                      icon: '💰',
                      title: 'PPC Advertising',
                      description: 'Drive targeted traffic with optimized pay-per-click campaigns across multiple platforms.',
                    },
                    {
                      icon: '📱',
                      title: 'Social Media Marketing',
                      description: 'Engage audiences and build brand awareness with strategic social media campaigns.',
                    },
                    {
                      icon: '🔗',
                      title: 'Link Building',
                      description: 'Enhance domain authority with high-quality backlinks from reputable sources.',
                    },
                    {
                      icon: '📍',
                      title: 'Local Marketing',
                      description: 'Increase local visibility with targeted SEO and social media strategies.',
                    },
                    {
                      icon: '📊',
                      title: 'Analytics & Reporting',
                      description: 'Track campaign performance with detailed analytics and actionable insights.',
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
                    Our Digital Marketing Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    A proven methodology to deliver high-impact digital marketing campaigns.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {marketingProcess.map((step, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-bold text-purple-600 flex-shrink-0">{step.step}</div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold mb-3 ${customThemeClasses.text}`}>{step.title}</h3>
                            <p className={`mb-4 ${customThemeClasses.textSecondary}`}>{step.description}</p>
                            <div className="space-y-2 mb-4">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <svg
                                    className="w-4 h-4 text-green-500 flex-shrink-0"
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
                                isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
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
                    Professional Marketing Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    We leverage industry-leading tools to deliver comprehensive digital marketing campaigns.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {marketingTools.map((tool, index) => (
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
                      'Facebook Ads Manager',
                      'LinkedIn Ads',
                      'Buffer',
                      'Canva',
                      'Google Search Console',
                      'Hotjar',
                      'Mailchimp',
                      'Schema Markup',
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
                    Digital Marketing Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Choose the package that best fits your business needs and budget.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {digitalMarketingPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-8 ${
                        pkg.popular ? 'border-purple-600 shadow-lg' : customThemeClasses.border
                      } ${customThemeClasses.cardBg}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-bold mb-2 text-purple-600">
                        {pkg.price}
                        <span className={`text-sm font-normal ${customThemeClasses.textSecondary}`}>{pkg.period}</span>
                      </div>
                      <p className={`mb-6 ${customThemeClasses.textSecondary}`}>{pkg.description}</p>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0"
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
                            ? 'bg-purple-600 text-white hover:bg-purple-700'
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
              Marketing Success{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              Discover how we’ve helped businesses achieve remarkable digital marketing results.
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
                  <div className="text-sm text-purple-600 font-medium mb-2">{study.industry}</div>
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
                    className={`mt-4 inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 font-medium transition-colors`}
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
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              Get answers to common questions about our digital marketing services.
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
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Amplify Your Brand
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary}`}>
            Partner with Adsen to elevate your digital presence and drive measurable results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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

export default DigitalMarketingPage;
