'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleItems, setVisibleItems] = useState([]);
  const postsPerPage = 6;
  const observerRef = useRef(null);

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const blogPosts = [
    {
      title: 'The Future of Digital Marketing in 2025',
      category: 'Marketing',
      image: '📊',
      excerpt: 'Explore the latest trends in digital marketing, including AI-driven campaigns and immersive storytelling.',
      content: 'Digital marketing is evolving rapidly in 2025, with AI-driven campaigns, personalized user experiences, and immersive storytelling leading the charge. This post dives into how businesses can leverage these trends to stay ahead of the competition.',
      author: 'Sarah Johnson',
      date: '2025-07-15',
      tags: ['marketing', 'AI', 'trends'],
      readTime: '5 min read'
    },
    {
      title: 'Building Scalable Web Applications with Next.js',
      category: 'Web Development',
      image: '💻',
      excerpt: 'Learn how to create scalable, high-performance web applications using Next.js and best practices.',
      content: 'Next.js has become a go-to framework for building scalable web applications. This post covers server-side rendering, API routes, and optimization techniques to ensure top performance and scalability.',
      author: 'Michael Chen',
      date: '2025-06-20',
      tags: ['web', 'Next.js', 'performance'],
      readTime: '7 min read'
    },
    {
      title: 'Mastering Mobile App Development with React Native',
      category: 'Mobile Development',
      image: '📱',
      excerpt: 'A guide to building cross-platform mobile apps with React Native, focusing on performance and UX.',
      content: 'React Native enables developers to build high-quality, cross-platform mobile apps with a single codebase. This post explores best practices for performance optimization and creating seamless user experiences.',
      author: 'Emily Davis',
      date: '2025-05-10',
      tags: ['mobile', 'React Native', 'UX'],
      readTime: '6 min read'
    },
    {
      title: 'Crafting Memorable Brand Identities',
      category: 'Branding',
      image: '🎨',
      excerpt: 'Discover the art and science behind creating brand identities that resonate with audiences.',
      content: 'A strong brand identity is key to standing out in a crowded market. This post covers the principles of effective logo design, color psychology, and creating cohesive brand guidelines.',
      author: 'Sarah Johnson',
      date: '2025-04-25',
      tags: ['branding', 'design', 'identity'],
      readTime: '4 min read'
    },
    {
      title: 'Leveraging Analytics for Business Growth',
      category: 'Analytics',
      image: '📈',
      excerpt: 'How to use data analytics to drive strategic decisions and maximize business performance.',
      content: 'Data analytics is transforming how businesses make decisions. This post explores tools and strategies for tracking user behavior, optimizing conversions, and building custom dashboards.',
      author: 'Michael Chen',
      date: '2025-03-15',
      tags: ['analytics', 'data', 'business'],
      readTime: '8 min read'
    },
    {
      title: 'Cloud Migration: Best Practices for Success',
      category: 'Cloud Solutions',
      image: '☁️',
      excerpt: 'Key considerations and strategies for a successful cloud migration journey.',
      content: 'Migrating to the cloud can be a game-changer for businesses. This post covers best practices for planning, executing, and securing a successful cloud migration, with insights from real-world projects.',
      author: 'Emily Davis',
      date: '2025-02-10',
      tags: ['cloud', 'migration', 'DevOps'],
      readTime: '6 min read'
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts
    .filter(post => 
      filter === 'All' || post.category === filter
    )
    .filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Lazy loading with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, entry.target.dataset.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [paginatedPosts]);

  // Keyboard navigation for pagination
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages]);

  // Reset page on filter or search change
  useEffect(() => {
    setCurrentPage(1);
    setVisibleItems([]);
  }, [filter, searchQuery]);

  const sharePost = (post) => {
    const shareUrl = `${window.location.origin}/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`;
    const shareText = `Check out this insightful blog post: ${post.title} by AdSen`;
    
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: shareText,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Blog post link copied to clipboard!');
    }
  };

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

      {/* Hero Section (Sticky, Centered, Lowered with Margin and Padding) */}
      <section className={`sticky top-[80px] z-10 transition-colors duration-500 ${themeClasses.heroBg}`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 mt-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDarkMode ? 'bg-purple-500' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob`}></div>
            <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDarkMode ? 'bg-blue-500' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000`}></div>
            <div className={`absolute top-40 left-40 w-80 h-80 ${isDarkMode ? 'bg-pink-500' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000`}></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Blog
              </span>
            </h1>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${themeClasses.textSecondary}`}>
              Discover insights, trends, and tips on digital solutions and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className={`py-12 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 mb-12">
            <div className="relative w-full sm:w-1/3">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-200'
                }`}
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            {filter !== 'All' && (
              <div className="flex justify-center gap-2">
                <div className={`px-4 py-1 rounded-full flex items-center gap-2 ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {filter}
                  <button
                    onClick={() => setFilter('All')}
                    className="text-sm"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className={`py-20 transition-colors duration-500 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {paginatedPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  data-id={post.title}
                  className={`blog-card group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${themeClasses.cardBg}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: visibleItems.includes(post.title) ? 1 : 0, y: visibleItems.includes(post.title) ? 0 : 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`aspect-[4/3] flex items-center justify-center text-8xl ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-gray-700 to-gray-600' 
                      : 'bg-gradient-to-br from-blue-100 to-purple-100'
                  }`}>
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                    <h3 className={`text-xl font-bold group-hover:text-blue-600 transition-colors ${themeClasses.text}`}>
                      {post.title}
                    </h3>
                    <p className={`mt-2 text-sm ${themeClasses.textSecondary}`}>{post.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>{tag}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between text-sm">
                      <div className={themeClasses.textSecondary}>By {post.author}</div>
                      <div className={themeClasses.textSecondary}>{post.date} • {post.readTime}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {page}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`max-w-3xl w-full rounded-2xl p-8 ${themeClasses.cardBg} ${themeClasses.border}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${themeClasses.text}`}>{selectedPost.title}</h2>
              <button 
                onClick={() => setSelectedPost(null)}
                className={`text-xl ${themeClasses.textSecondary}`}
              >
                ✕
              </button>
            </div>
            <div className={`aspect-[4/3] flex items-center justify-center text-8xl mb-6 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-700 to-gray-600' 
                : 'bg-gradient-to-br from-blue-100 to-purple-100'
            }`}>
              {selectedPost.image}
            </div>
            <p className={`text-lg mb-4 ${themeClasses.textSecondary}`}>{selectedPost.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <div className={`font-medium ${themeClasses.text}`}>Category:</div>
                <div className={themeClasses.textSecondary}>{selectedPost.category}</div>
              </div>
              <div>
                <div className={`font-medium ${themeClasses.text}`}>Author:</div>
                <div className={themeClasses.textSecondary}>{selectedPost.author}</div>
              </div>
              <div>
                <div className={`font-medium ${themeClasses.text}`}>Date:</div>
                <div className={themeClasses.textSecondary}>{selectedPost.date}</div>
              </div>
              <div>
                <div className={`font-medium ${themeClasses.text}`}>Read Time:</div>
                <div className={themeClasses.textSecondary}>{selectedPost.readTime}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map((tag, idx) => (
                <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link href={`/blog/${selectedPost.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Read Full Post
                </button>
              </Link>
              <button
                onClick={() => sharePost(selectedPost)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400'
                    : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          </motion.div>
        </motion.div>
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
            Want to Stay Updated?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Subscribe to our blog for the latest insights on digital solutions, technology, and business growth strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/subscribe"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Subscribe Now
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

export default BlogPage;