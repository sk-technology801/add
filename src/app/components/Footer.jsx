'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = ({ isDarkMode, toggleTheme }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [particles, setParticles] = useState([]);

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
    } else {
      console.log('Subscribed with email:', email);
      setEmail('');
      setEmailError('');
    }
  };

  // Particle animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 10 }, () => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * 200, // Limit particles to footer height
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
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
          if (newY < 0 || newY > 200) p.speedY *= -1;
          return { ...p, x: newX, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const themeClasses = {
    bg: isDarkMode ? 'bg-gray-950' : 'bg-white',
    text: isDarkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
    border: isDarkMode ? 'border-gray-800 border-opacity-50' : 'border-gray-200',
    inputFocus: isDarkMode ? 'focus:ring-purple-500' : 'focus:ring-blue-500',
    hoverText: isDarkMode ? 'hover:text-purple-400' : 'hover:text-blue-600',
    socialBg: isDarkMode ? 'bg-gray-800 hover:bg-purple-700' : 'bg-gray-200 hover:bg-blue-600',
    gradientBorder: isDarkMode ? 'border border-transparent bg-gradient-to-r from-blue-600/20 to-purple-600/20' : ''
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/get-quote' }
  ];

  const socialLinks = [
    { icon: '🐦', href: 'https://x.com', label: 'X' },
    { icon: '🔗', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '📷', href: 'https://instagram.com', label: 'Instagram' },
    { icon: '📘', href: 'https://facebook.com', label: 'Facebook' }
  ];

  return (
    <footer className={`relative py-12 transition-colors duration-500 ${themeClasses.bg} ${themeClasses.gradientBorder} overflow-hidden`}>
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${themeClasses.text}`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AdSen
              </span>
            </h3>
            <p className={`text-sm leading-relaxed ${themeClasses.textSecondary}`}>
              Empowering businesses with cutting-edge digital solutions since 2017. Let's shape your future.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${themeClasses.text}`}>Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`text-sm ${themeClasses.textSecondary} ${themeClasses.hoverText} transition-colors duration-300`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${themeClasses.text}`}>Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className={themeClasses.textSecondary}>
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (123) 456-7890</span>
                </span>
              </li>
              <li className={themeClasses.textSecondary}>
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@adsen.com</span>
                </span>
              </li>
              <li className={themeClasses.textSecondary}>
                <span className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Innovation Drive, Tech City, TX 75001</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${themeClasses.text}`}>Stay Connected</h4>
            <p className={`text-sm mb-4 ${themeClasses.textSecondary}`}>
              Join our newsletter for exclusive updates and industry insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                placeholder="Your Email"
                className={`px-4 py-3 rounded-lg border ${emailError ? 'border-red-500' : themeClasses.border} ${themeClasses.text} ${themeClasses.cardBg} ${themeClasses.inputFocus} focus:outline-none transition-all duration-300`}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className={`mt-12 pt-8 border-t ${themeClasses.border} flex flex-col md:flex-row justify-between items-center`}>
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full ${themeClasses.socialBg} text-lg ${themeClasses.textSecondary} hover:text-white transition-all duration-300 transform hover:scale-110`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className={`text-sm ${themeClasses.textSecondary}`}>
            © {new Date().getFullYear()} AdSen. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;