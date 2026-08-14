import { EXPERIENCES } from '../constants';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import TimelineList from './ui/TimelineList';

const Experience = () => (
  <Section id="experience">
    <SectionHeader index="03" label="Experience" id="experience-heading" />
    <TimelineList items={EXPERIENCES} titleKey="role" subtitleKey="company" />
  </Section>
);

export default Experience;
