/** Small monospace tag used for technology lists. */
const Chip = ({ children, className = '' }) => (
  <span
    className={`border border-rule px-2.5 py-1 font-mono text-label uppercase text-ink-faint transition-colors duration-300 ${className}`}
  >
    {children}
  </span>
);

export default Chip;
