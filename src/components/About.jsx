import { ABOUT_STATS, ABOUT_TEXT } from '../constants';
import portrait from '../assets/sohanProfilePic.webp';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import TextLink from './ui/TextLink';

const About = () => (
  <Section id="about">
    <SectionHeader index="01" label="About" id="about-heading" />

    <div className="grid gap-12 md:grid-cols-5 md:gap-16">
      <Reveal className="md:col-span-2">
        <img
          src={portrait}
          alt="Sohan Fernando"
          width="800"
          height="800"
          loading="lazy"
          decoding="async"
          className="aspect-square w-full object-cover grayscale transition-all duration-700 ease-editorial hover:grayscale-0"
        />
      </Reveal>

      <div className="md:col-span-3">
        <Reveal delay={0.1}>
          <p className="max-w-prose text-lead text-ink-muted">{ABOUT_TEXT}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-rule pt-8">
            {ABOUT_STATS.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-ink md:text-4xl">{value}</span>
                  <span className="mt-2 block font-mono text-label uppercase text-ink-faint">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 font-mono text-label uppercase">
          <TextLink href="#projects">See selected work</TextLink>
        </Reveal>
      </div>
    </div>
  </Section>
);

export default About;
