"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActiveLink = (path) => {
    return pathname === path;
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Digital Marketing', href: '/services/digital-marketing' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'SEO Services', href: '/services/seo' },
        { name: 'Social Media', href: '/services/social-media' },
        { name: 'Content Marketing', href: '/services/content-marketing' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'E-commerce', href: '/solutions/ecommerce' },
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Startups', href: '/solutions/startups' },
        { name: 'Small Business', href: '/solutions/small-business' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AdSen
                </span>
                <span className="text-xs text-gray-500 -mt-1">Digital Solutions</span>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center space-x-1 ${
                    isActiveLink(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transform transition-all duration-300 ${
                      activeDropdown === item.name 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Enhanced CTA Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <Link 
              href="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Talk to Us
            </Link>
            
            <Link 
              href="/get-quote" 
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-gray-700 hover:text-blue-600 focus:outline-none rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link 
                    href={item.href} 
                    className={`flex-1 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      isActiveLink(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => handleDropdown(item.name)}
                      className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg className={`w-5 h-5 transform transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 py-2 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              <Link 
                href="/contact"
                className="block text-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Talk to Us
              </Link>
              <Link 
                href="/get-quote" 
                className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg text-base font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;