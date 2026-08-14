/**
 * Semantic section wrapper carrying the site's vertical rhythm, content width
 * and the hairline rule that separates one section from the next.
 */
const Section = ({ id, children, className = '', divider = true }) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className={`${divider ? 'border-t border-rule' : ''} py-24 md:py-32 lg:py-40 ${className}`}
  >
    <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">{children}</div>
  </section>
);

export default Section;
