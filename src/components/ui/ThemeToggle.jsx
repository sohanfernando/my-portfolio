import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      className={`flex h-9 w-9 items-center justify-center border border-rule text-ink-faint transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {theme === 'dark' ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
    </button>
  );
};

export default ThemeToggle;
