import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

// The inline script in index.html has already stamped data-theme before first
// paint; read it back rather than recomputing, so the two never disagree.
const readTheme = () => {
  if (typeof document === 'undefined') return 'dark';

  const stamped = document.documentElement.getAttribute('data-theme');
  if (stamped === 'light' || stamped === 'dark') return stamped;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* localStorage unavailable (private mode, blocked cookies) */
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* nothing to persist to; the in-memory theme still applies */
    }
  }, [theme]);

  // Follow the OS only while the visitor has not made an explicit choice.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');

    const handleChange = (event) => {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch {
        /* treat an unreadable store as "no explicit choice" */
      }
      setTheme(event.matches ? 'light' : 'dark');
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
