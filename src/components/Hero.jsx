import { motion } from 'framer-motion';

import { HERO_CONTENT, PROFILE, SOCIALS } from '../constants';
import TextLink from './ui/TextLink';

// Each line sits inside an overflow-hidden mask and slides up into view.
const line = (delay) => ({
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

const fade = (delay) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } },
});

const Hero = () => (
  <section id="top" aria-label="Introduction" className="relative flex min-h-svh flex-col justify-center pb-20 pt-32">
    <div className="mx-auto w-full max-w-content px-6 md:px-10 lg:px-16">
      <motion.p
        variants={fade(0.1)}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 font-mono text-label uppercase text-ink-faint"
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        {PROFILE.availability}
      </motion.p>

      <h1 className="mt-10 font-display text-display-lg text-ink">
        <span className="block overflow-hidden">
          <motion.span variants={line(0.2)} initial="hidden" animate="visible" className="block">
            {PROFILE.firstName}
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span variants={line(0.32)} initial="hidden" animate="visible" className="block">
            {PROFILE.lastName}
            <span className="text-accent">—</span>
          </motion.span>
        </span>
      </h1>

      <motion.div
        variants={fade(0.55)}
        initial="hidden"
        animate="visible"
        className="mt-10 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-label uppercase text-ink-faint sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="text-ink">{PROFILE.role}</span>
        <span>{PROFILE.location}</span>
      </motion.div>

      <motion.p
        variants={fade(0.65)}
        initial="hidden"
        animate="visible"
        className="mt-12 max-w-prose text-lead text-ink-muted"
      >
        {HERO_CONTENT}
      </motion.p>

      <motion.div
        variants={fade(0.78)}
        initial="hidden"
        animate="visible"
        className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-label uppercase"
      >
        <TextLink href={PROFILE.resumeUrl} external>
          Résumé
        </TextLink>
        <TextLink href="#contact">Get in touch</TextLink>

        <span aria-hidden="true" className="hidden h-px flex-1 bg-rule sm:block" />

        <ul className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, label, url }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink-faint transition-colors duration-300 hover:text-accent"
              >
                <Icon className="text-base" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Hero;
