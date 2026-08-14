import { CONTACT, SOCIALS } from '../constants';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';

const Contact = () => (
  <Section id="contact">
    <SectionHeader index="06" label="Contact" id="contact-heading" />

    <Reveal>
      <p className="max-w-3xl font-display text-display-md text-ink">
        Let&rsquo;s work
        <br />
        together<span className="text-accent">.</span>
      </p>
    </Reveal>

    <Reveal delay={0.12} className="mt-12">
      <a
        href={`mailto:${CONTACT.email}`}
        className="group relative inline-block max-w-full break-words font-display text-2xl text-ink transition-colors duration-300 hover:text-accent sm:text-3xl md:text-4xl"
      >
        {CONTACT.email}
        <span
          aria-hidden="true"
          className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-current transition-transform duration-500 ease-editorial group-hover:origin-left group-hover:scale-x-0"
        />
      </a>
    </Reveal>

    <Reveal delay={0.2}>
      <dl className="mt-16 grid gap-8 border-t border-rule pt-8 font-mono text-label uppercase sm:grid-cols-3">
        <div>
          <dt className="text-ink-faint">Phone</dt>
          <dd className="mt-2">
            <a
              href={`tel:${CONTACT.phoneNo.replace(/\s/g, '')}`}
              className="text-ink transition-colors duration-300 hover:text-accent"
            >
              {CONTACT.phoneNo}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-ink-faint">Location</dt>
          <dd className="mt-2 text-ink">{CONTACT.address}</dd>
        </div>

        <div>
          <dt className="text-ink-faint">Elsewhere</dt>
          <dd className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {SOCIALS.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors duration-300 hover:text-accent"
              >
                {label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </Reveal>
  </Section>
);

export default Contact;
