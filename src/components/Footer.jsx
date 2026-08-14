import { PROFILE, SOCIALS } from '../constants';

const Footer = () => (
  <footer className="border-t border-rule">
    <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-6 py-10 font-mono text-label uppercase text-ink-faint md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
      <p>
        © {new Date().getFullYear()} {PROFILE.firstName} {PROFILE.lastName}
      </p>

      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {SOCIALS.map(({ icon: Icon, label, url }) => (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-accent"
            >
              <Icon aria-hidden="true" className="text-sm" />
              {label}
            </a>
          </li>
        ))}
      </ul>

      <p>Built with React &amp; Tailwind</p>
    </div>
  </footer>
);

export default Footer;
