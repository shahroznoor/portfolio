import type { Experience } from '@/lib/types';
import { SectionHeading } from './section-heading';
import ExperienceItem from './experience-item';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="bg-secondary">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <SectionHeading editable>Work Experience</SectionHeading>
        <div className="relative flex flex-col gap-12 pt-4">
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 md:left-1/2"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
