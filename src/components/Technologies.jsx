import { TECHNOLOGIES, TECH_CATEGORIES } from '../constants';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

const Technologies = () => (
  <Section id="technologies">
    <SectionHeader index="02" label="Stack" id="technologies-heading" />

    <dl className="border-t border-rule">
      {TECH_CATEGORIES.map((category, index) => {
        const items = TECHNOLOGIES.filter((tech) => tech.category === category);
        if (items.length === 0) return null;

        return (
          <Reveal
            key={category}
            delay={index * 0.08}
            className="grid grid-cols-1 gap-x-10 gap-y-4 border-b border-rule py-7 md:grid-cols-[11rem_1fr] md:py-9 lg:grid-cols-[15rem_1fr]"
          >
            <dt className="font-mono text-label uppercase text-ink-faint md:pt-1.5">{category}</dt>
            <dd className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {items.map(({ icon: Icon, name }) => (
                <span
                  key={name}
                  className="group inline-flex items-center gap-2 font-display text-lg text-ink transition-colors duration-300 hover:text-accent md:text-xl"
                >
                  {Icon && (
                    <Icon
                      aria-hidden="true"
                      className="text-sm text-ink-faint transition-colors duration-300 group-hover:text-accent"
                    />
                  )}
                  {name}
                </span>
              ))}
            </dd>
          </Reveal>
        );
      })}
    </dl>
  </Section>
);

export default Technologies;
