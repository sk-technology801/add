'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const AboutPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0, satisfaction: 0 });

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

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in digital innovation.',
      image: '👤'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      description: 'Tech expert driving cutting-edge solutions.',
      image: '👩‍💻'
    },
    {
      name: 'Alex Brown',
      role: 'Lead Designer',
      description: 'Creative mind behind stunning visuals.',
      image: '🎨'
    },
    {
      name: 'Emily Wilson',
      role: 'Marketing Director',
      description: 'Strategist boosting brand growth.',
      image: '📈'
    }
  ];

  const milestones = [
    { year: '2017', event: 'AdSen founded with a mission to transform digital landscapes.' },
    { year: '2018', event: 'Launched first major web development project for a global client.' },
    { year: '2020', event: 'Expanded services to include mobile app development and cloud solutions.' },
    { year: '2022', event: 'Reached milestone of 200+ happy clients worldwide.' },
    { year: '2024', event: 'Completed 500+ projects with 99% client satisfaction.' },
    { year: '2025', event: 'Recognized as a leader in digital transformation.' }
  ];

  const values = [
    {
      icon: '🌟',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We build strong partnerships with our clients to achieve shared success.'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring top-quality results.'
    },
    {
      icon: '🔒',
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our dealings.'
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
      <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden transition-colors duration-500 ${themeClasses.heroBg}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDarkMode ? 'bg-purple-500' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
          <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDarkMode ? 'bg-blue-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
          <div className={`absolute top-40 left-40 w-80 h-80 ${isDarkMode ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About AdSen
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${themeClasses.textSecondary}`}>
              We're a passionate team dedicated to transforming businesses through innovative digital solutions and strategic expertise.
            </p>
            <Link 
              href="/contact"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              Discover the journey of AdSen and how we became a trusted partner in digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 leading-relaxed ${themeClasses.textSecondary}`}>
                Founded in 2017, AdSen began with a vision to revolutionize the digital landscape. Our team of innovators set out to empower businesses with tailored solutions, blending creativity with technology. Over the past 8 years, we've grown into a global leader, delivering over 500 projects with a 99% satisfaction rate.
              </p>
              <p className={`text-lg mb-6 leading-relaxed ${themeClasses.textSecondary}`}>
                From startups to enterprises, we partner with clients to achieve their goals through strategic thinking and cutting-edge solutions. Our commitment to excellence drives us to stay ahead of industry trends, ensuring every project delivers measurable impact.
              </p>
              <Link 
                href="/portfolio"
                className={`flex items-center space-x-2 px-6 py-4 rounded-full border-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-blue-400 border-gray-600 hover:border-blue-400' 
                    : 'text-gray-700 hover:text-blue-600 border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="font-semibold">See Our Work</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white" id="stats-section">
                <div className="grid grid-cols-2 gap-6">
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
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-20 transform rotate-2 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              Key moments that define AdSen's journey to excellence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`rounded-2xl p-6 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border}`}>
                    <h3 className={`text-xl font-bold mb-2 ${themeClasses.text}`}>{milestone.year}</h3>
                    <p className={`text-lg ${themeClasses.textSecondary}`}>{milestone.event}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-purple-600'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              Our talented professionals are dedicated to delivering excellence in every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`group rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border ${themeClasses.cardBg} ${themeClasses.border} animate-slide-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`aspect-square flex items-center justify-center text-6xl mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl group-hover:scale-105 transition-transform duration-300`}>
                  {member.image}
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                  {member.name}
                </h3>
                <p className={`text-blue-600 mb-2`}>{member.role}</p>
                <p className={`text-sm leading-relaxed ${themeClasses.textSecondary}`}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border ${themeClasses.cardBg} ${themeClasses.border} animate-slide-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${themeClasses.textSecondary}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission & Vision</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              We strive to empower businesses with innovative solutions and a vision for a digitally transformed future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`rounded-2xl p-8 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border} animate-slide-in`}>
              <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>Our Mission</h3>
              <p className={`text-lg leading-relaxed ${themeClasses.textSecondary}`}>
                To deliver innovative, high-quality digital solutions that empower businesses to achieve their goals and exceed expectations.
              </p>
            </div>
            <div className={`rounded-2xl p-8 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border} animate-slide-in`} style={{ animationDelay: '200ms' }}>
              <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>Our Vision</h3>
              <p className={`text-lg leading-relaxed ${themeClasses.textSecondary}`}>
                To be a global leader in digital transformation, creating impactful solutions that shape the future of business.
              </p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's create something extraordinary together. Contact us today for a free consultation.
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

      {/* Theme Options Panel */}
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
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(${props => props.index % 2 === 0 ? '-50px' : '50px'});
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) rotate(2deg); }
          50% { transform: scale(1.05) rotate(2deg); }
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
        .animate-slide-in {
          animation: slide-in 0.8s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;