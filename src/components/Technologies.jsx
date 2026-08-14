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
            className="grid grid-cols-1 gap-x-10 gap-y-4 border-b border-rule py-8 md:grid-cols-[10rem_1fr] md:py-10 lg:grid-cols-[14rem_1fr]"
          >
            <dt className="font-mono text-label uppercase text-ink-faint md:pt-2">{category}</dt>
            <dd className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {items.map(({ icon: Icon, name }) => (
                <span
                  key={name}
                  className="group inline-flex items-center gap-2.5 font-display text-xl text-ink transition-colors duration-300 hover:text-accent md:text-2xl"
                >
                  <Icon aria-hidden="true" className="text-base text-ink-faint transition-colors duration-300 group-hover:text-accent" />
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
