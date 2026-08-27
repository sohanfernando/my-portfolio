/** @type {import('tailwindcss').Config} */

// Every colour resolves through a CSS custom property defined in src/index.css,
// so both themes are driven from a single place and no `dark:` variants are
// needed on individual elements.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        ink: {
          DEFAULT: token('ink'),
          muted: token('ink-muted'),
          faint: token('ink-faint'),
        },
        rule: token('rule'),
        accent: token('accent'),
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Editorial display scale — large sizes need negative tracking to
        // avoid looking loose, and tight leading to hold together as a block.
        'display-sm': ['clamp(2.5rem, 7vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(3.25rem, 10vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(4rem, 15vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.035em' }],
        // Mono labels: small, uppercase, generously tracked.
        label: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        'label-lg': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        lead: ['1.25rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        content: '68rem',
        prose: '42rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'reveal-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'rule-draw': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'rule-draw': 'rule-draw 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
