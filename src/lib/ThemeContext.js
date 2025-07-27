'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Optionally check localStorage or system preference
    const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(dark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const themeClasses = isDarkMode
    ? 'bg-black text-white'
    : 'bg-white text-black';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
