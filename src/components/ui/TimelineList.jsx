import Chip from './Chip';
import Reveal from './Reveal';

// Groups consecutive items that share the same subtitle (company / institution)
// so a company with several roles renders as one entry instead of repeating
// its name for every role.
const groupConsecutive = (items, key) => {
  const groups = [];
  items.forEach((item) => {
    const current = groups.at(-1);
    if (current && current[0][key] === item[key]) {
      current.push(item);
    } else {
      groups.push([item]);
    }
  });
  return groups;
};

// A grouped company's left-margin date spans its earliest role's start to its
// most recent role's end. Items arrive newest-first, so that's the last and
// first entries in the group respectively.
const spanYears = (group) => {
  const oldest = group.at(-1);
  const start = oldest.year.split(' — ')[0] ?? oldest.year;
  const end = group[0].year.split(' — ')[1] ?? group[0].year;
  return `${start} — ${end}`;
};

/**
 * Two-column editorial list shared by Experience and Education: the period sits
 * in the left margin in mono, the entry itself occupies the measure on the
 * right, with a hairline rule between rows. When several rows share the same
 * subtitle (e.g. two roles at the same company), they collapse into a single
 * row with the company as the headline and each role listed underneath,
 * connected by a vertical rule.
 *
 * @param items    entries to render
 * @param titleKey  field holding the row's headline (e.g. "role", "degree")
 * @param subtitleKey field holding the secondary line (e.g. "company", "institution")
 */
const TimelineList = ({ items, titleKey, subtitleKey }) => (
  <ol className="border-t border-rule">
    {groupConsecutive(items, subtitleKey).map((group, index) => {
      const [primary] = group;
      const grouped = group.length > 1;

      return (
        <Reveal
          as="li"
          key={`${primary[subtitleKey]}-${primary.year}`}
          delay={index * 0.08}
          className="group grid grid-cols-1 gap-x-10 gap-y-3 border-b border-rule py-8 md:grid-cols-[10rem_1fr] md:py-10 lg:grid-cols-[14rem_1fr]"
        >
          <span className="font-mono text-label uppercase text-ink-faint transition-colors duration-300 group-hover:text-accent md:pt-1.5">
            {grouped ? spanYears(group) : primary.year}
          </span>

          <div>
            <h3 className="font-display text-2xl leading-snug text-ink md:text-3xl">
              {primary[subtitleKey]}
            </h3>

            {!grouped && (
              <p className="mt-1 font-mono text-label uppercase text-accent">{primary[titleKey]}</p>
            )}

            {grouped ? (
              <div className="relative mt-6">
                {/* The line sits at this wrapper's true left edge (no padding
                    here, so left-0 means left-0). Role content is pushed over
                    with a margin instead, and each dot is pulled back by that
                    same margin so it lands back on the line. The line occupies
                    x=0→1px, so its centre is at 0.5px — the dot is translated
                    by -50% plus that half pixel to sit dead on it. */}
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-rule" />

                <ol className="ml-8">
                  {group.map((role) => (
                    <li key={`${role[titleKey]}-${role.year}`} className="relative pb-8 last:pb-0">
                      <span className="absolute -left-8 top-1.5 h-2 w-2 translate-x-[calc(-50%+0.5px)] rounded-full bg-accent" />

                      <p className="font-mono text-label uppercase text-accent">{role[titleKey]}</p>
                      <span className="mt-1 block font-mono text-label uppercase text-ink-faint">{role.year}</span>
                      <p className="mt-3 max-w-prose font-display text-lead text-ink-muted">{role.description}</p>

                      {role.technologies?.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {role.technologies.map((tech) => (
                            <li key={tech}>
                              <Chip>{tech}</Chip>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <>
                <p className="mt-4 max-w-prose font-display text-lead text-ink-muted">{primary.description}</p>

                {primary.technologies?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {primary.technologies.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </Reveal>
      );
    })}
  </ol>
);

export default TimelineList;
