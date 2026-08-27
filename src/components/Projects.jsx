import { PROFILE, PROJECTS } from '../constants';
import Chip from './ui/Chip';
import Reveal from './ui/Reveal';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import TextLink from './ui/TextLink';

const Projects = () => (
  <Section id="projects">
    <SectionHeader index="05" label="Selected Work" id="projects-heading" />

    <ol className="border-t border-rule">
      {PROJECTS.map((project, index) => (
        <Reveal
          as="li"
          key={project.title}
          delay={index * 0.06}
          className="group border-b border-rule"
        >
          <article className="-mx-4 grid grid-cols-1 gap-x-10 px-4 py-10 transition-colors duration-500 ease-editorial hover:bg-surface md:grid-cols-[4rem_1fr_auto] md:py-12">
            <span className="font-mono text-label text-ink-faint transition-colors duration-300 group-hover:text-accent md:pt-3">
              ({String(index + 1).padStart(2, '0')})
            </span>

            <div className="mt-4 md:mt-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-3xl leading-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-4xl">
                  {project.title}
                </h3>
                {project.year && (
                  <span className="font-mono text-label uppercase text-ink-faint">{project.year}</span>
                )}
              </div>

              <p className="mt-4 max-w-prose font-display text-lead text-ink-muted">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Chip>{tech}</Chip>
                  </li>
                ))}
              </ul>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-label uppercase">
                  {project.liveUrl && (
                    <TextLink href={project.liveUrl} external aria-label={`View ${project.title} live`}>
                      Live
                    </TextLink>
                  )}
                  {project.githubUrl && (
                    <TextLink href={project.githubUrl} external aria-label={`View source for ${project.title}`}>
                      Code
                    </TextLink>
                  )}
                </div>
              )}
            </div>

            {/* Preview surfaces on hover for pointer users; it is decorative,
                so it stays out of the accessibility tree and off small screens. */}
            <div aria-hidden="true" className="hidden lg:block lg:w-56">
              <img
                src={project.image}
                alt=""
                width="448"
                height="336"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full translate-y-3 object-cover opacity-0 grayscale transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          </article>
        </Reveal>
      ))}
    </ol>

    <Reveal delay={0.1} className="mt-12 font-mono text-label uppercase">
      <TextLink href={PROFILE.githubProfile} external>
        More on GitHub
      </TextLink>
    </Reveal>
  </Section>
);

export default Projects;
