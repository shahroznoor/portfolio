import type { Skill } from '@/lib/types';
import { SectionHeading } from './section-heading';
import { Card, CardContent } from '@/components/ui/card';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <SectionHeading editable>Skills & Expertise</SectionHeading>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <Card key={skill.id} className="p-4 transition-all hover:shadow-lg hover:border-primary/50">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                <skill.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
