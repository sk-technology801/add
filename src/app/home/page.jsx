'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 500, clients: 200, years: 8, satisfaction: 99 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress),
          satisfaction: Math.floor(targets.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Boost your online presence with strategic campaigns that drive real results and ROI.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy']
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and applications built with cutting-edge technology and best practices.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development', 'API Integration']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive growth.',
      features: ['iOS Development', 'Android Development', 'React Native', 'UI/UX Design']
    },
    {
      icon: '🎨',
      title: 'Brand Design',
      description: 'Create a memorable brand identity that resonates with your target audience.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Visual Identity']
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Data-driven insights to optimize your digital strategy and maximize performance.',
      features: ['Performance Tracking', 'User Behavior Analysis', 'Conversion Optimization', 'Custom Dashboards']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your digital transformation.',
      features: ['Cloud Migration', 'DevOps Services', 'Security Solutions', 'Backup & Recovery']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'AdSen transformed our digital presence completely. Our online sales increased by 300% within 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'The team at AdSen delivered beyond expectations. Their strategic approach helped us reach new markets.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'Professional, reliable, and results-driven. AdSen is our go-to partner for all digital solutions.',
      rating: 5
    }
  ];

  const portfolioItems = [
    { title: 'E-commerce Platform', category: 'Web Development', image: '🛍️' },
    { title: 'Mobile Banking App', category: 'Mobile Development', image: '🏦' },
    { title: 'Brand Identity Design', category: 'Branding', image: '🎨' },
    { title: 'Digital Marketing Campaign', category: 'Marketing', image: '📈' }
  ];

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDarkMode ? 'bg-gray-800' : 'bg-white',
    sectionBg: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
    heroBg: isDarkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900' 
      : 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    border: isDarkMode ? 'border-gray-700' : 'border-gray-100'
  };

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
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${themeClasses.heroBg}`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDarkMode ? 'bg-purple-500' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDarkMode ? 'bg-blue-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
          <div className={`absolute top-40 left-40 w-80 h-80 ${isDarkMode ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />
              <span className={themeClasses.text}>That Drive Growth</span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${themeClasses.textSecondary}`}>
              We transform businesses through innovative digital strategies, cutting-edge technology, 
              and data-driven insights that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/get-quote"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/portfolio"
                className={`flex items-center space-x-2 px-6 py-4 rounded-full border-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-blue-400 border-gray-600 hover:border-blue-400' 
                    : 'text-gray-700 hover:text-blue-600 border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="font-semibold">View Our Work</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{counters.projects}+</div>
                <div className={`text-sm ${themeClasses.textSecondary}`}>Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{counters.clients}+</div>
                <div className={`text-sm ${themeClasses.textSecondary}`}>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">{counters.years}+</div>
                <div className={`text-sm ${themeClasses.textSecondary}`}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{counters.satisfaction}%</div>
                <div className={`text-sm ${themeClasses.textSecondary}`}>Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-gray-400' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
              isDarkMode ? 'bg-gray-400' : 'bg-gray-400'
            }`}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              Comprehensive digital solutions tailored to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border ${
                  themeClasses.cardBg
                } ${themeClasses.border}`}
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${themeClasses.textSecondary}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-sm ${themeClasses.textSecondary}`}>
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}>
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AdSen</span>?
              </h2>
              <p className={`text-lg mb-8 leading-relaxed ${themeClasses.textSecondary}`}>
                With over 8 years of experience in digital transformation, we've helped hundreds of businesses 
                achieve their goals through innovative solutions and strategic thinking.
              </p>
              
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
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>Lightning Fast Delivery</h3>
                    <p className={themeClasses.textSecondary}>We deliver projects on time without compromising on quality.</p>
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
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>Quality Guaranteed</h3>
                    <p className={themeClasses.textSecondary}>Every project goes through rigorous testing and quality assurance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? 'bg-green-900' : 'bg-green-100'
                  }`}>
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>Expert Team</h3>
                    <p className={themeClasses.textSecondary}>Our certified professionals stay updated with the latest technologies.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6" id="stats-section">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{counters.projects}+</div>
                    <div className="text-blue-100">Completed Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{counters.clients}+</div>
                    <div className="text-blue-100">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{counters.years}+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">{counters.satisfaction}%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our Latest <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              Explore some of our recent projects that showcase our expertise and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${themeClasses.cardBg}`}
              >
                <div className={`aspect-square flex items-center justify-center text-6xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-600' 
                    : 'bg-gradient-to-br from-blue-100 to-purple-100'
                }`}>
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{item.category}</div>
                  <h3 className={`text-xl font-bold group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="text-white font-semibold">View Project</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-full absolute inset-0'
                  }`}
                >
                  <div className={`rounded-2xl p-8 md:p-12 text-center transition-colors duration-500 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                  }`}>
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className={`text-xl md:text-2xl mb-8 italic leading-relaxed ${themeClasses.textSecondary}`}>
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className={`font-bold text-lg ${themeClasses.text}`}>{testimonial.name}</div>
                      <div className="text-blue-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 w-8' 
                      : isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together. 
            Get a free consultation and see how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Theme Options Panel */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`p-4 rounded-2xl shadow-2xl transition-all duration-300 ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center space-x-3">
            <span className={`text-sm font-medium ${themeClasses.text}`}>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            <div className="relative">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="sr-only"
              />
              <div 
                onClick={toggleTheme}
                className={`w-12 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-0.5'
                } mt-0.5`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
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

export default HomePage;