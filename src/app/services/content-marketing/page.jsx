
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

const ContentMarketingPage = () => {
  // Debug useTheme
  const theme = useTheme();
  console.log('useTheme result:', theme);
  const { isDarkMode, themeClasses, toggleTheme } = theme || {
    isDarkMode: false,
    themeClasses: {},
    toggleTheme: () => {},
  };

  const [activeTab, setActiveTab] = useState('overview');

  // Override heroBg for content marketing theme (green-teal gradient)
  const customThemeClasses = {
    ...themeClasses,
    heroBg: isDarkMode
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-green-900'
      : 'bg-gradient-to-br from-green-50 via-white to-teal-50',
  };

  const contentMarketingPackages = [
    {
      id: 'basic',
      name: 'Content Starter',
      price: '$599',
      period: '/month',
      description: 'Ideal for businesses starting with content marketing.',
      features: [
        '4 blog posts/month (500-700 words)',
        'Basic SEO optimization',
        'Social media snippets',
        'Monthly content calendar',
        'Email support',
      ],
      ideal: 'Small businesses, startups',
      timeline: '2-3 months to see traffic growth',
    },
    {
      id: 'growth',
      name: 'Content Growth',
      price: '$1,499',
      period: '/month',
      description: 'Robust content strategy for growing brands.',
      features: [
        '8 blog posts/month (700-1000 words)',
        'Advanced SEO optimization',
        '2 video scripts/month',
        'Social media content (10 posts/month)',
        'Bi-weekly analytics reports',
        'Phone & email support',
      ],
      ideal: 'Mid-sized businesses, e-commerce',
      timeline: '1-2 months to see results',
      popular: true,
    },
    {
      id: 'premium',
      name: 'Content Premium',
      price: '$3,499',
      period: '/month',
      description: 'Comprehensive content marketing for established brands.',
      features: [
        '12 blog posts/month (1000-1500 words)',
        'Premium SEO & keyword strategy',
        '4 video scripts/month',
        'Social media content (20 posts/month)',
        'Whitepapers or eBooks (1/quarter)',
        'Weekly analytics reports',
        'Dedicated content strategist',
        'Priority support',
      ],
      ideal: 'Large brands, enterprises',
      timeline: '1 month to see results',
    },
  ];

  const contentMarketingProcess = [
    {
      step: '01',
      title: 'Content Audit & Strategy',
      description: 'Analyze existing content and develop a tailored strategy.',
      details: [
        'Content gap analysis',
        'Keyword research',
        'Audience persona development',
        'Competitor content audit',
      ],
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Content Creation',
      description: 'Produce high-quality, engaging content for your audience.',
      details: [
        'Blog post writing',
        'Video script development',
        'Social media content creation',
        'Graphic design for visuals',
      ],
      duration: '2-4 weeks',
    },
    {
      step: '03',
      title: 'Content Distribution',
      description: 'Share content across relevant channels for maximum reach.',
      details: [
        'Blog publishing',
        'Social media posting',
        'Email newsletter integration',
        'Content syndication',
      ],
      duration: 'Ongoing',
    },
    {
      step: '04',
      title: 'Performance Tracking',
      description: 'Monitor and optimize content performance.',
      details: [
        'Traffic and engagement analytics',
        'SEO performance tracking',
        'Content optimization',
        'Monthly ROI reports',
      ],
      duration: 'Ongoing',
    },
  ];

  const contentMarketingTools = [
    { name: 'Semrush', icon: '🔍', description: 'Keyword research and SEO analytics' },
    { name: 'Grammarly', icon: '✍️', description: 'Ensure error-free, polished content' },
    { name: 'Canva', icon: '🎨', description: 'Create engaging visuals for content' },
    { name: 'Ahrefs', icon: '📊', description: 'Competitor analysis and backlink tracking' },
    { name: 'BuzzSumo', icon: '🔥', description: 'Identify trending content topics' },
    { name: 'Trello', icon: '📋', description: 'Manage content calendars and workflows' },
  ];

  const caseStudies = [
    {
      client: 'HealthWell Co.',
      industry: 'Healthcare',
      challenge: 'Low website traffic and engagement',
      solution: 'Blog strategy with SEO-optimized health guides and social snippets',
      results: [
        '400% increase in organic traffic',
        '250% boost in engagement rate',
        '150% growth in social shares',
        'Top 3 rankings for 20+ keywords',
      ],
      timeframe: '5 months',
      image: '🩺',
    },
    {
      client: 'TechTrend Innovations',
      industry: 'Technology',
      challenge: 'Limited thought leadership presence',
      solution: 'Whitepapers and LinkedIn articles with targeted distribution',
      results: [
        '300% increase in LinkedIn engagement',
        '200% growth in website leads',
        '5 industry awards for content',
        'Featured in 3 tech publications',
      ],
      timeframe: '4 months',
      image: '💡',
    },
    {
      client: 'EcoLiving Blog',
      industry: 'Lifestyle',
      challenge: 'Low audience retention',
      solution: 'Video content series and SEO blog posts with email campaigns',
      results: [
        '350% increase in returning visitors',
        '200% growth in email subscribers',
        '150% boost in ad revenue',
        '30% reduction in bounce rate',
      ],
      timeframe: '6 months',
      image: '🌿',
    },
  ];

  const faqData = [
    {
      question: 'What types of content do you create?',
      answer: 'We create blog posts, video scripts, social media content, whitepapers, eBooks, and email newsletters tailored to your brand.',
    },
    {
      question: 'How does content marketing improve SEO?',
      answer: 'High-quality, keyword-optimized content boosts search rankings, drives organic traffic, and increases dwell time.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'SEO and traffic improvements typically start in 1-3 months, with significant results in 3-6 months.',
    },
    {
      question: 'Do you offer content distribution services?',
      answer: 'Yes, we distribute content via blogs, social media, email newsletters, and syndication platforms.',
    },
    {
      question: 'Can you handle content for niche industries?',
      answer: 'Absolutely, we conduct in-depth research to create specialized content for any industry.',
    },
    {
      question: 'How do you measure content performance?',
      answer: 'We track metrics like organic traffic, engagement, conversions, and ROI with detailed reports.',
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
              : 'bg-green-600 text-white hover:bg-green-700'
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
                <Link href="/" className={`${customThemeClasses.textMuted} hover:text-green-600`}>
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
                <Link href="/services" className={`${customThemeClasses.textMuted} hover:text-green-600`}>
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
                <span className={`font-medium ${customThemeClasses.text}`}>Content Marketing</span>
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
              <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="text-2xl">✍️</span>
                <span>Content Marketing Solutions</span>
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${customThemeClasses.text}`}>
                Content{' '}
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Marketing
                </span>
              </h1>
              <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${customThemeClasses.textSecondary}`}>
                Drive engagement and conversions with high-quality, strategic content.
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
                  <span className={`text-sm font-medium ${customThemeClasses.text}`}>400% Traffic Growth</span>
                </div>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${customThemeClasses.border}`}
                >
                  <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
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
                  className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Get Free Content Audit
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
                  <div className="text-4xl font-bold text-green-600 mb-2">350%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Average Traffic Increase</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-teal-600 mb-2">200+</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Content Projects Delivered</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className={`text-sm ${customThemeClasses.textSecondary}`}>Client Satisfaction</div>
                </div>
                <div
                  className={`p-6 rounded-2xl text-center ${customThemeClasses.cardBg} border ${customThemeClasses.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-4xl font-bold text-orange-600 mb-2">6+</div>
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
                    ? 'bg-green-600 text-white shadow-lg transform -translate-y-1'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-green-600 border border-gray-200'
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
                    Comprehensive Content Marketing Solutions
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Create compelling content to engage audiences and boost your brand’s visibility.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '✍️',
                      title: 'Blog Writing',
                      description: 'Engaging, SEO-optimized blog posts to drive traffic.',
                    },
                    {
                      icon: '🎥',
                      title: 'Video Content',
                      description: 'Scripts and storyboards for impactful video marketing.',
                    },
                    {
                      icon: '📧',
                      title: 'Email Newsletters',
                      description: 'Targeted email campaigns to nurture leads.',
                    },
                    {
                      icon: '📈',
                      title: 'SEO Optimization',
                      description: 'Keyword-driven content to improve search rankings.',
                    },
                    {
                      icon: '📚',
                      title: 'Whitepapers & eBooks',
                      description: 'In-depth content to establish thought leadership.',
                    },
                    {
                      icon: '📱',
                      title: 'Social Media Content',
                      description: 'Snippets and visuals for cross-platform engagement.',
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
                    Our Content Marketing Process
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    A strategic approach to deliver high-impact content.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contentMarketingProcess.map((step, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${customThemeClasses.cardBg} ${customThemeClasses.border}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl font-bold text-green-600 flex-shrink-0">{step.step}</div>
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
                                isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
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
                    Content Marketing Tools
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Industry-leading tools to create and optimize content.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contentMarketingTools.map((tool, index) => (
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
                      'HubSpot',
                      'WordPress',
                      'Yoast SEO',
                      'Mailchimp',
                      'Surfer SEO',
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
                    Content Marketing Packages
                  </h2>
                  <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
                    Choose the package that aligns with your content marketing goals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contentMarketingPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 p-8 ${
                        pkg.popular ? 'border-green-600 shadow-lg' : customThemeClasses.border
                      } ${customThemeClasses.cardBg}`}
                    >
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-4 ${customThemeClasses.text}`}>{pkg.name}</h3>
                      <div className="text-4xl font-bold mb-2 text-green-600">
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
                            ? 'bg-green-600 text-white hover:bg-green-700'
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
              Content Marketing Success{' '}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              See how our content strategies have driven results for businesses.
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
                  <div className="text-sm text-green-600 font-medium mb-2">{study.industry}</div>
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
                    className={`mt-4 inline-flex items-center space-x-2 text-green-600 hover:text-green-800 dark:hover:text-green-400 font-medium transition-colors`}
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
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto ${customThemeClasses.textSecondary}`}>
              Answers to common questions about our content marketing services.
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
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Elevate Your Content
            </span>
            ?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${customThemeClasses.textSecondary}`}>
            Partner with Adsen to create content that engages and converts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
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
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
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
                  Email: <a href="mailto:info@adsen.com" className="hover:text-green-400">info@adsen.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+1234567890" className="hover:text-green-400">+1 (234) 567-890</a>
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

export default ContentMarketingPage;
