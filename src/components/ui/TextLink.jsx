/**
 * The site's only link/button style: text with a rule that wipes in from the
 * left on hover. Renders an <a> by default, or a <button> when given onClick
 * without an href.
 */
const TextLink = ({
  href,
  onClick,
  children,
  external = false,
  className = '',
  tone = 'ink',
  ...rest
}) => {
  const toneClass = tone === 'accent' ? 'text-accent' : 'text-ink';

  const content = (
    <>
      <span>{children}</span>
      {external && (
        <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          ↗
        </span>
      )}
      <span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-editorial group-hover:origin-left group-hover:scale-x-100"
      />
    </>
  );

  const classes = `group relative inline-flex items-center ${toneClass} transition-colors duration-300 hover:text-accent ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
};

export default TextLink;
