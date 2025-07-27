
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const SocialMediaPage = () => {
  // Debug useTheme
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || {
    isDarkMode: false,
    themeClasses: {},
    toggleTheme: () => {},
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Override heroBg for social media theme (blue-purple gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900'
      : 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  };

  const socialMediaPackages = [
    {
      id: 'basic',
      name: 'Social Starter',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses building a social media presence.',
      features: [
        '2 social platforms (e.g., Facebook, Instagram)',
        '10 posts/month per platform',
        'Basic content creation',
        'Monthly analytics report',
        'Email support',
      ],
      ideal: 'Small businesses, startups',
      timeline: '2-3 months to see engagement',
    },
    {
      id: 'growth',
      name: 'Social Growth',
      price: '$1,199',
      period: '/month',
      description: 'Comprehensive strategy for growing brands.',
      features: [
        '4 social platforms',
        '20 posts/month per platform',
        'Content creation (graphics + captions)',
        'Targeted ad campaigns ($500 ad spend included)',
        'Bi-weekly analytics reports',
        'Phone & email support',
      ],
      ideal: 'Growing businesses, e-commerce',
      timeline: '1-2 months to see results',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Social Premium',
      price: '$2,999',
      period: '/month',
      description: 'Advanced social media management for large brands.',
      features: [
        'Unlimited social platforms',
        '40 posts/month per platform',
        'Premium content (videos, stories, reels)',
        'Advanced ad campaigns ($1,500 ad spend included)',
        'Influencer collaboration strategy',
        'Weekly analytics reports',
        'Dedicated account manager',
        'Priority support',
      ],
      ideal: 'Large brands, enterprises',
      timeline: '1 month to see results',
    },
  ];

  const socialMediaProcess = [
    {
      step: '01',
      title: 'Audience Research',
      description: 'Identify your target audience and their preferred platforms.',
      details: [
        'Demographic analysis',
        'Engagement pattern study',
        'Competitor social audit',
        'Hashtag research',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Content Strategy',
      description: 'Develop a tailored content plan for brand consistency.',
      details: [
        'Content calendar creation',
        'Visual design planning',
        'Ad campaign strategy',
        'Engagement tactics',
      ],
      duration: '1 week',
    },
    {
      step: '03',
      title: 'Campaign Execution',
      description: 'Launch and manage social media campaigns across platforms.',
      details: [
        'Content posting and scheduling',
        'Ad campaign management',
        'Community engagement',
        'Performance monitoring',
      ],
      duration: 'Ongoing',
    },
    {
      step: '04',
      title: 'Analytics & Optimization',
      description: 'Track performance and optimize for maximum engagement.',
      details: [
        'Engagement metrics analysis',
        'Campaign optimization',
        'Monthly reporting',
        'ROI tracking',
      ],
      duration: 'Ongoing',
    },
  ];

  const socialMediaTools = [
    { name: 'Hootsuite', icon: '📱', description: 'Schedule and manage social media posts' },
    { name: 'Canva', icon: '🎨', description: 'Create stunning social media graphics' },
    { name: 'Meta Business Suite', icon: '📊', description: 'Manage Facebook and Instagram campaigns' },
    { name: 'Sprout Social', icon: '🌱', description: 'Advanced social media analytics' },
    { name: 'Buffer', icon: '⏰', description: 'Streamline content scheduling' },
    { name: 'Later', icon: '🖼️', description: 'Plan Instagram and Pinterest visuals' },
  ];

  const caseStudies = [
    {
      client: 'FashionTrend Co.',
      industry: 'Retail',
      challenge: 'Low social media engagement',
      solution: 'Instagram and TikTok content strategy with influencer partnerships',
      results: [
        '500% increase in Instagram followers',
        '300% boost in engagement rate',
        '200% increase in website traffic',
        'ROI of 450% in 4 months',
      ],
      timeframe: '4 months',
      image: '👗',
    },
    {
      client: 'TechGadgets Ltd.',
      industry: 'Technology',
      challenge: 'Limited brand awareness on social platforms',
      solution: 'LinkedIn and Twitter ad campaigns with video content',
      results: [
        '400% growth in LinkedIn followers',
        '250% increase in ad conversions',
        '150% boost in brand mentions',
        'Top trending hashtag campaign',
      ],
      timeframe: '3 months',
      image: '💻',
    },
    {
      client: 'FoodieBites Cafe',
      industry: 'Hospitality',
      challenge: 'Low local customer engagement',
      solution: 'Facebook and Instagram local campaigns with user-generated content',
      results: [
        '350% increase in local followers',
        '200% growth in reservations',
        '300% increase in user-generated content',
        'Reduced ad CPA by 30%',
      ],
      timeframe: '5 months',
      image: '🍽️',
    },
  ];

  const faqData = [
    {
      question: 'Which social media platforms do you manage?',
      answer: 'We manage campaigns on Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and more, based on your audience.',
    },
    {
      question: 'How soon can I see results from social media marketing?',
      answer: 'Engagement can increase within weeks, while brand awareness and conversions typically take 1-3 months.',
    },
    {
      question: 'Do you create content for social media campaigns?',
      answer: 'Yes, we provide graphics, videos, stories, and captions tailored to your brand and audience.',
    },
    {
      question: 'Can you manage paid social media ads?',
      answer: 'Absolutely, we optimize ad campaigns on platforms like Meta, LinkedIn, and Twitter for maximum ROI.',
    },
    {
      question: 'How do you measure social media success?',
      answer: 'We track KPIs like engagement rate, follower growth, click-through rate, and ROI with detailed reports.',
    },
    {
      question: 'Do you offer influencer marketing services?',
      answer: 'Yes, we develop influencer strategies to amplify your brand’s reach and credibility.',
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
                <Link href="/" className={`${customThemeClasses.textMuted} hover:text-purple-600`}>
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
                <Link href="/services" className={`${customThemeClasses.textMuted} hover:text-purple-600`}>
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
                <span className={`font-medium ${customThemeClasses.text}`}>Social Media Marketing</span>
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
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-2xl">📱</span>
                <span>Social Media Solutions</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${customThemeClasses.text}`}>
                Social Media{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary}`}>
                Engage your audience and grow your brand with strategic social media campaigns.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border}`}
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>300% Engagement Boost</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border}`}
                >
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>1-3 Months Results</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Get Free Social Media Audit
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">400%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Average Follower Growth</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Campaigns Managed</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Client Satisfaction</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
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
                  <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
                    Comprehensive Social Media Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Build your brand and engage audiences with tailored social media strategies.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '📱',
                      title: 'Content Creation',
                      description: 'Craft engaging posts, graphics, videos, and stories for your audience.',
                    },
                    {
                      icon: '💸',
                      title: 'Paid Social Ads',
                      description: 'Run targeted ad campaigns to boost reach and conversions.',
                    },
                    {
                      icon: '🤝',
                      title: 'Influencer Marketing',
                      description: 'Partner with influencers to amplify your brand’s credibility.',
                    },
                    {
                      icon: '📈',
                      title: 'Analytics & Insights',
                      description: 'Track engagement and optimize campaigns with data-driven insights.',
                    },
                    {
                      icon: '🌐',
                      title: 'Multi-Platform Strategy',
                      description: 'Manage campaigns across Instagram, Facebook, LinkedIn, and more.',
                    },
                    {
                      icon: '👥',
                      title: 'Community Management',
                      description: 'Engage followers and build a loyal online community.',
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
                    Our Social Media Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    A proven approach to deliver impactful social media campaigns.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {socialMediaProcess.map((step, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-bold text-blue-600 flex-shrink-0">{step.step}</div>
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
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
                    Social Media Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Industry-leading tools to power your social media campaigns.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {socialMediaTools.map((tool, index) => (
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
                      'Google Analytics',
                      'Adobe Creative Suite',
                      'Trello',
                      'Brandwatch',
                      'BuzzSumo',
                      'Linktree',
                      'Capcut',
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
                    Social Media Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Choose the package that aligns with your social media goals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {socialMediaPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-8 ${
                        pkg.popular ? 'border-blue-600 shadow-lg' : customThemeClasses.border
                      } ${customThemeClasses.cardBg}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-bold mb-2 text-blue-600">
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
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
              Social Media Success{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              Discover how we’ve helped businesses grow their social media presence.
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
                  <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
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
      <section className={`py-20 transition-colors duration-500 ${customThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-6 ${customThemeClasses.text}`}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              Get answers to common questions about our social media marketing services.
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Boost Your Social Presence
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary}`}>
            Partner with Adsen to engage your audience and grow your brand online.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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
              <h3 className="text-2xl font-bold text-white mb-4">Adsen</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming businesses through innovative digital solutions since 2017.
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
                  'Digital Marketing',
                  'Web Development',
                  'Mobile Apps',
                  'Brand Design',
                  'Analytics & Insights',
                  'Cloud Solutions',
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

export default SocialMediaPage;
