import Reveal from './Reveal';

/**
 * The editorial section header: a mono index and label on the left, with a
 * hairline rule running out to the right edge.
 *
 *   (01)  ABOUT ────────────────────────────────────────────
 */
const SectionHeader = ({ index, label, id, description }) => (
  <header className="mb-10 md:mb-14">
    <Reveal className="flex items-baseline gap-4 md:gap-6">
      <span className="font-mono text-label text-accent">({index})</span>
      <h2 id={id} className="font-mono text-label-lg uppercase text-ink">
        {label}
      </h2>
      <span aria-hidden="true" className="h-px flex-1 translate-y-[-0.2em] bg-rule" />
    </Reveal>

    {description && (
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-prose font-display text-display-sm text-ink">{description}</p>
      </Reveal>
    )}
  </header>
);

export default SectionHeader;
