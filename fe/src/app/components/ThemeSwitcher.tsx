'use client';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setIsDark(currentTheme === 'dark');
      document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
      // Default to light theme if no theme is saved
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme to localStorage
  };

  return (
    <button onClick={toggleTheme} className="btn btn-primary swap swap-rotate">
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <div className="swap-on">🌙 Dark Mode</div>
      <div className="swap-off">🌞 Light Mode</div>
    </button>
  );
};

export default ThemeSwitcher;
