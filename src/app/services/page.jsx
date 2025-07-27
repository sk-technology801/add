'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const ServicesPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    sectionBg: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
    heroBg: isDarkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
      : 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
    borderLight: isDarkMode ? 'border-gray-600' : 'border-gray-100'
  };

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'marketing', name: 'Digital Marketing', icon: '📈' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'design', name: 'Design & Branding', icon: '🎨' },
    { id: 'consulting', name: 'Consulting', icon: '💡' }
  ];

  const detailedServices = [
    {
      id: 'seo',
      category: 'marketing',
      icon: '🔍',
      title: 'SEO Optimization',
      subtitle: 'Boost Your Search Rankings',
      description: 'Comprehensive SEO strategies that drive organic traffic and improve search engine visibility.',
      features: [
        'Keyword Research & Analysis',
        'On-Page & Technical SEO',
        'Link Building Strategies',
        'Local SEO Optimization',
        'SEO Audits & Reporting',
        'Competitor Analysis'
      ],
      price: 'Starting from $999/month',
      timeline: '3-6 months',
      deliverables: ['SEO Strategy Document', 'Monthly Reports', 'Keyword Rankings', 'Traffic Analytics'],
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
      caseStudy: {
        client: 'TechCorp Inc.',
        result: '300% increase in organic traffic',
        timeframe: '6 months'
      }
    },
    {
      id: 'ppc',
      category: 'marketing',
      icon: '💰',
      title: 'PPC Advertising',
      subtitle: 'Maximize Your Ad Spend ROI',
      description: 'Data-driven pay-per-click campaigns across Google Ads, Facebook, and other platforms.',
      features: [
        'Campaign Strategy & Setup',
        'Ad Copy & Creative Design',
        'Bid Management & Optimization',
        'Landing Page Optimization',
        'Conversion Tracking',
        'Performance Analytics'
      ],
      price: 'Starting from $1,299/month',
      timeline: '1-3 months',
      deliverables: ['Campaign Setup', 'Ad Creatives', 'Landing Pages', 'Performance Reports'],
      technologies: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Google Tag Manager'],
      caseStudy: {
        client: 'E-commerce Store',
        result: '400% ROAS improvement',
        timeframe: '3 months'
      }
    },
    {
      id: 'social-media',
      category: 'marketing',
      icon: '📱',
      title: 'Social Media Marketing',
      subtitle: 'Build Your Social Presence',
      description: 'Strategic social media management to engage audiences and build brand awareness.',
      features: [
        'Content Strategy & Planning',
        'Social Media Management',
        'Community Engagement',
        'Influencer Partnerships',
        'Social Media Advertising',
        'Analytics & Reporting'
      ],
      price: 'Starting from $799/month',
      timeline: '2-4 months',
      deliverables: ['Content Calendar', 'Social Posts', 'Engagement Reports', 'Growth Analytics'],
      technologies: ['Hootsuite', 'Buffer', 'Facebook Business', 'Instagram Business'],
      caseStudy: {
        client: 'Fashion Brand',
        result: '250% follower growth',
        timeframe: '4 months'
      }
    },
    {
      id: 'web-development',
      category: 'development',
      icon: '🌐',
      title: 'Web Development',
      subtitle: 'Custom Web Solutions',
      description: 'Full-stack web development with modern frameworks and responsive design.',
      features: [
        'Custom Web Applications',
        'Responsive Design',
        'E-commerce Development',
        'CMS Integration',
        'API Development',
        'Performance Optimization'
      ],
      price: 'Starting from $2,999',
      timeline: '4-12 weeks',
      deliverables: ['Website/App', 'Source Code', 'Documentation', 'Training'],
      technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify'],
      caseStudy: {
        client: 'SaaS Startup',
        result: '50% faster load times',
        timeframe: '8 weeks'
      }
    },
    {
      id: 'mobile-apps',
      category: 'development',
      icon: '📲',
      title: 'Mobile App Development',
      subtitle: 'iOS & Android Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: [
        'iOS App Development',
        'Android App Development',
        'React Native Development',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      price: 'Starting from $5,999',
      timeline: '8-16 weeks',
      deliverables: ['Mobile App', 'App Store Listing', 'User Manual', 'Support Package'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      caseStudy: {
        client: 'FinTech Company',
        result: '100K+ downloads in 3 months',
        timeframe: '12 weeks'
      }
    },
    {
      id: 'branding',
      category: 'design',
      icon: '🎨',
      title: 'Brand Identity Design',
      subtitle: 'Create Your Visual Identity',
      description: 'Complete brand identity packages that make your business memorable and professional.',
      features: [
        'Logo Design & Variations',
        'Brand Guidelines',
        'Color Palette & Typography',
        'Business Card Design',
        'Marketing Materials',
        'Brand Strategy Consultation'
      ],
      price: 'Starting from $1,499',
      timeline: '2-4 weeks',
      deliverables: ['Logo Package', 'Brand Guidelines', 'Marketing Materials', 'Brand Assets'],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Brand Research Tools'],
      caseStudy: {
        client: 'Healthcare Startup',
        result: '85% brand recognition increase',
        timeframe: '4 weeks'
      }
    },
    {
      id: 'ui-ux',
      category: 'design',
      icon: '✨',
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Intuitive user interfaces and experiences that convert visitors into customers.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
        'Mobile-First Design'
      ],
      price: 'Starting from $2,499',
      timeline: '3-6 weeks',
      deliverables: ['Design Mockups', 'Prototypes', 'Design System', 'User Testing Report'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      caseStudy: {
        client: 'E-learning Platform',
        result: '60% increase in user engagement',
        timeframe: '5 weeks'
      }
    },
    {
      id: 'digital-strategy',
      category: 'consulting',
      icon: '🎯',
      title: 'Digital Strategy Consulting',
      subtitle: 'Strategic Digital Planning',
      description: 'Comprehensive digital transformation strategies tailored to your business goals.',
      features: [
        'Digital Audit & Assessment',
        'Strategy Development',
        'Technology Roadmap',
        'Market Analysis',
        'ROI Projections',
        'Implementation Planning'
      ],
      price: 'Starting from $1,999',
      timeline: '2-4 weeks',
      deliverables: ['Strategy Document', 'Roadmap', 'Implementation Plan', 'ROI Analysis'],
      technologies: ['Analytics Tools', 'Market Research', 'Business Intelligence', 'Consulting Frameworks'],
      caseStudy: {
        client: 'Manufacturing Company',
        result: '35% digital revenue increase',
        timeframe: '3 weeks'
      }
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? detailedServices 
    : detailedServices.filter(service => service.category === selectedCategory);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business needs and create a detailed project roadmap.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts develop a customized strategy aligned with your goals.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with regular updates and quality checkpoints.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'We launch your project and continuously optimize for better results.',
      icon: '🚀'
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

      {/* Hero Section */}
      <section className={`pt-24 pb-16 transition-colors duration-500 ${themeClasses.heroBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Premium Digital Services</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${themeClasses.text}`}>
              Our Expert{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${themeClasses.textSecondary}`}>
              Comprehensive digital solutions designed to accelerate your business growth 
              and maximize your online potential.
            </p>
          </div>

          {/* Service Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  themeClasses.cardBg
                } border ${themeClasses.border}`}
              >
                {/* Service Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                          {service.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {serviceCategories.find(cat => cat.id === service.category)?.name}
                    </div>
                  </div>

                  <p className={`text-lg leading-relaxed mb-6 ${themeClasses.textSecondary}`}>
                    {service.description}
                  </p>

                  {/* Pricing & Timeline */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm font-medium ${themeClasses.text}`}>{service.price}</span>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm font-medium ${themeClasses.text}`}>{service.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="px-8 pb-6">
                  <h4 className={`font-semibold mb-4 ${themeClasses.text}`}>Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${themeClasses.textSecondary}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className={`px-8 py-6 border-t ${themeClasses.borderLight}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${themeClasses.text}`}>Case Study: {service.caseStudy.client}</p>
                      <p className="text-sm text-green-600 font-semibold">{service.caseStudy.result}</p>
                      <p className={`text-xs ${themeClasses.textMuted}`}>Delivered in {service.caseStudy.timeframe}</p>
                    </div>
                    <Link
                      href={`/services/${service.id}`}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${themeClasses.cardBg} border ${themeClasses.border}`}>
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <h3 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>{step.title}</h3>
                  <p className={`leading-relaxed ${themeClasses.textSecondary}`}>{step.description}</p>
                </div>
                
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
                Why Choose Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Services?
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-blue-900' : 'bg-blue-100'
                  }`}>
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>Expert Team</h3>
                    <p className={themeClasses.textSecondary}>
                      Our certified professionals have years of experience and stay updated with the latest industry trends.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
                  }`}>
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>Proven Results</h3>
                    <p className={themeClasses.textSecondary}>
                      Track record of delivering measurable results and ROI for our clients across various industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-green-900' : 'bg-green-100'
                  }`}>
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>24/7 Support</h3>
                    <p className={themeClasses.textSecondary}>
                      Round-the-clock support and maintenance to ensure your digital assets perform optimally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-orange-900' : 'bg-orange-100'
                  }`}>
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>Scalable Solutions</h3>
                    <p className={themeClasses.textSecondary}>
                      Our solutions grow with your business, ensuring long-term success and adaptability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border}`}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Projects Completed</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border}`}>
                  <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Happy Clients</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border}`}>
                  <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Satisfaction Rate</div>
                </div>
                <div className={`p-6 rounded-2xl text-center ${themeClasses.cardBg} border ${themeClasses.border}`}>
                  <div className="text-4xl font-bold text-pink-600 mb-2">8+</div>
                  <div className={`text-sm ${themeClasses.textSecondary}`}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'TechStart Inc.',
                service: 'SEO Optimization',
                result: '300% traffic increase',
                content: 'AdSen\'s SEO strategy transformed our online visibility. We went from page 5 to top 3 rankings for our main keywords.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                company: 'E-commerce Plus',
                service: 'PPC Advertising',
                result: '400% ROAS improvement',
                content: 'Their PPC campaigns generated incredible ROI. Our conversion rates doubled within the first month.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                company: 'Fashion Forward',
                service: 'Social Media Marketing',
                result: '250% follower growth',
                content: 'Our social media presence exploded! Engagement rates increased dramatically and sales followed.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${themeClasses.cardBg} border ${themeClasses.border}`}>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div className={`text-center mb-4 px-3 py-1 rounded-full text-xs font-medium inline-block ${
                  isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                }`}>
                  {testimonial.service}
                </div>
                
                <blockquote className={`text-lg italic mb-6 leading-relaxed ${themeClasses.textSecondary}`}>
                  "{testimonial.content}"
                </blockquote>
                
                <div className="text-center">
                  <div className={`font-bold ${themeClasses.text}`}>{testimonial.name}</div>
                  <div className={`text-sm ${themeClasses.textMuted}`}>{testimonial.company}</div>
                  <div className="text-green-600 font-semibold text-sm mt-2">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How do you determine the right service for my business?',
                answer: 'We start with a comprehensive audit of your current digital presence and business goals. Our team analyzes your industry, competitors, and target audience to recommend the most effective services for your specific needs.'
              },
              {
                question: 'What is included in your service packages?',
                answer: 'Each service package includes strategy development, implementation, regular reporting, and ongoing optimization. We also provide dedicated account management and 24/7 support for all our clients.'
              },
              {
                question: 'How long does it take to see results?',
                answer: 'Results vary by service type. PPC campaigns can show results within days, while SEO typically takes 3-6 months. Social media growth usually becomes apparent within 2-3 months. We provide realistic timelines during our initial consultation.'
              },
              {
                question: 'Do you work with businesses of all sizes?',
                answer: 'Yes, we work with startups, SMBs, and enterprise clients. Our scalable solutions are designed to grow with your business, and we customize our approach based on your budget and requirements.'
              },
              {
                question: 'What makes your services different from competitors?',
                answer: 'Our data-driven approach, transparent reporting, and dedicated account management set us apart. We focus on measurable ROI and maintain long-term partnerships with our clients rather than one-off projects.'
              }
            ].map((faq, index) => (
              <div key={index} className={`rounded-2xl border transition-all duration-300 hover:shadow-lg ${themeClasses.cardBg} ${themeClasses.border}`}>
                <details className="group">
                  <summary className={`p-6 cursor-pointer flex items-center justify-between ${themeClasses.text} hover:text-blue-600 transition-colors`}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className={`px-6 pb-6 ${themeClasses.textSecondary}`}>
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="animate-float absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
            <div className="animate-float-delayed absolute bottom-20 right-10 w-24 h-24 bg-white opacity-5 rounded-full"></div>
            <div className="animate-float absolute top-1/2 left-1/2 w-16 h-16 bg-white opacity-5 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Choose the service that fits your needs, or let us create a custom solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;