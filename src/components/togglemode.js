import React, { useState, useEffect } from 'react';
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'

const ToggleMode = () => {
  let websiteTheme;

  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  const [theme, setTheme] = useState(websiteTheme);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark');
    setTheme(websiteTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className='cta'>
        <button className='dark-switcher' onClick={ThemeToggle}>
            {theme === 'dark' ? (
              <span>
                <img className='theme-icon' src={sun} alt="Light Mode" />
              </span>
            ) : (
              <span>
                <img className='theme-icon' src={moon} alt="Dark Mode" />
              </span>
            )}
        </button>
    </nav>
  );
};

export default ToggleMode;