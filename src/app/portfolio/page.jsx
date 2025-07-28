'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const PortfolioPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [particles, setParticles] = useState([]);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Particle animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, () => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;
          if (newX < 0 || newX > window.innerWidth) p.speedX *= -1;
          if (newY < 0 || newY > window.innerHeight) p.speedY *= -1;
          return { ...p, x: newX, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(interval);
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

  const projectCategories = ['All', 'Web Development', 'Mobile App', 'Digital Marketing', 'Brand Design'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A fully responsive e-commerce website with advanced payment integration and user analytics.',
      image: '🖥️',
      details: 'Built using React, Node.js, and Stripe for seamless transactions. Improved client sales by 40%.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      client: 'ShopEasy Inc.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'Mobile App',
      description: 'A cross-platform mobile app for tracking workouts and nutrition plans.',
      image: '📱',
      details: 'Developed with Flutter for iOS and Android. Features real-time tracking and personalized recommendations.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      client: 'FitLife Co.',
      year: '2023'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'Digital Marketing',
      description: 'A targeted social media campaign that boosted brand engagement by 60%.',
      image: '📈',
      details: 'Leveraged Meta Ads and influencer partnerships to reach 1M+ users across platforms.',
      technologies: ['Meta Ads', 'Google Analytics', 'Hootsuite'],
      client: 'TrendVibe',
      year: '2024'
    },
    {
      id: 4,
      title: 'Corporate Branding',
      category: 'Brand Design',
      description: 'Complete brand identity redesign for a tech startup, including logo and UI kit.',
      image: '🎨',
      details: 'Created a modern, minimalist design system to enhance brand recognition.',
      technologies: ['Figma', 'Adobe Illustrator', 'Canva'],
      client: 'TechTrend Innovations',
      year: '2023'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'A sleek portfolio website for a creative agency with dynamic animations.',
      image: '🖥️',
      details: 'Built with Next.js and Tailwind CSS for optimal performance and SEO.',
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
      client: 'Creative Minds Agency',
      year: '2025'
    },
    {
      id: 6,
      title: 'Event Planning App',
      category: 'Mobile App',
      description: 'An app for organizing and managing events with real-time RSVPs and notifications.',
      image: '📱',
      details: 'Developed with React Native and integrated with Google Calendar API.',
      technologies: ['React Native', 'Google Calendar API', 'Node.js'],
      client: 'Eventify',
      year: '2024'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeClasses.bg} relative overflow-hidden`}>
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-blue-400'} opacity-20`}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

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
                Our Portfolio
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${themeClasses.textSecondary}`}>
              Explore our diverse range of projects showcasing innovation and excellence across industries.
            </p>
            <Link 
              href="/get-quote"
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.text}`}>
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${themeClasses.textSecondary}`}>
              Browse our projects by category to see how we bring ideas to life.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : `${themeClasses.cardBg} ${themeClasses.textSecondary} ${themeClasses.border} hover:bg-blue-600 hover:text-white`
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-2xl p-6 shadow-lg border ${themeClasses.cardBg} ${themeClasses.border} transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-in cursor-pointer`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`aspect-[4/3] flex items-center justify-center text-6xl mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl group-hover:scale-105 transition-transform duration-300`}>
                  {project.image}
                </div>
                <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                  {project.title}
                </h3>
                <p className={`text-sm ${themeClasses.textSecondary} mb-4`}>{project.category}</p>
                <p className={`text-sm leading-relaxed ${themeClasses.textSecondary}`}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className={`max-w-3xl w-full mx-4 rounded-2xl p-8 ${themeClasses.cardBg} ${themeClasses.border} max-h-[90vh] overflow-y-auto animate-slide-in-up`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${themeClasses.text}`}>{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className={`aspect-[4/3] flex items-center justify-center text-8xl mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl`}>
              {selectedProject.image}
            </div>
            <p className={`text-lg mb-4 ${themeClasses.textSecondary}`}>{selectedProject.details}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className={`text-sm font-semibold ${themeClasses.textSecondary}`}>Client</h3>
                <p className={themeClasses.text}>{selectedProject.client}</p>
              </div>
              <div>
                <h3 className={`text-sm font-semibold ${themeClasses.textSecondary}`}>Year</h3>
                <p className={themeClasses.text}>{selectedProject.year}</p>
              </div>
            </div>
            <div>
              <h3 className={`text-sm font-semibold ${themeClasses.textSecondary} mb-2`}>Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-600'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's collaborate to create your next big project. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Request Quote
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
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;