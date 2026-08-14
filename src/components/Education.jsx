import { EDUCATION } from '../constants';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import TimelineList from './ui/TimelineList';

const Education = () => (
  <Section id="education">
    <SectionHeader index="04" label="Education" id="education-heading" />
    <TimelineList items={EDUCATION} titleKey="degree" subtitleKey="institution" />
  </Section>
);

export default Education;
