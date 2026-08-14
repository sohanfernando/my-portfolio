import Chip from './Chip';
import Reveal from './Reveal';

/**
 * Two-column editorial list shared by Experience and Education: the period sits
 * in the left margin in mono, the entry itself occupies the measure on the
 * right, with a hairline rule between rows.
 *
 * @param items    entries to render
 * @param titleKey  field holding the row's headline (e.g. "role", "degree")
 * @param subtitleKey field holding the secondary line (e.g. "company", "institution")
 */
const TimelineList = ({ items, titleKey, subtitleKey }) => (
  <ol className="border-t border-rule">
    {items.map((item, index) => (
      <Reveal
        as="li"
        key={`${item[subtitleKey]}-${item.year}`}
        delay={index * 0.08}
        className="group grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 md:grid-cols-[10rem_1fr] md:py-10 lg:grid-cols-[14rem_1fr]"
      >
        <span className="font-mono text-label uppercase text-ink-faint transition-colors duration-300 group-hover:text-accent md:pt-1.5">
          {item.year}
        </span>

        <div>
          <h3 className="font-display text-2xl leading-snug text-ink md:text-3xl">
            {item[titleKey]}
          </h3>
          <p className="mt-1 font-mono text-label uppercase text-accent">{item[subtitleKey]}</p>
          <p className="mt-4 max-w-prose text-lead text-ink-muted">{item.description}</p>

          {item.technologies?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <Chip>{tech}</Chip>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    ))}
  </ol>
);

export default TimelineList;
