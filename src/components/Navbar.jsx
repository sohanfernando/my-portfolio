import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

import { NAV_LINKS, PROFILE, SOCIALS } from '../constants';
import ThemeToggle from './ui/ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: accent whichever section currently occupies the viewport.
  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || isMenuOpen ? 'border-b border-rule bg-canvas/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-content items-center justify-between px-6 py-5 md:px-10 lg:px-16"
      >
        <a href="#top" className="font-mono text-label uppercase text-ink transition-colors hover:text-accent">
          {PROFILE.firstName} {PROFILE.lastName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? 'true' : undefined}
                className={`font-mono text-label uppercase transition-colors duration-300 hover:text-accent ${
                  activeSection === id ? 'text-accent' : 'text-ink-faint'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center border border-rule text-ink-faint transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
          >
            {isMenuOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-rule bg-canvas md:hidden"
          >
            <ul className="mx-auto w-full max-w-content px-6 py-4">
              {NAV_LINKS.map(({ id, label }, index) => (
                <li key={id} className="border-b border-rule last:border-b-0">
                  <a
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-baseline gap-4 py-4 font-display text-2xl text-ink transition-colors duration-300 hover:text-accent"
                  >
                    <span className="font-mono text-label text-accent">
                      ({String(index + 1).padStart(2, '0')})
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mx-auto flex w-full max-w-content gap-6 px-6 pb-8">
              {SOCIALS.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-ink-faint transition-colors duration-300 hover:text-accent"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
