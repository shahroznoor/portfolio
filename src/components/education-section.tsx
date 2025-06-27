import type { Education } from '@/lib/types';
import { SectionHeading } from './section-heading';
import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <SectionHeading editable>Education</SectionHeading>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.id} className="flex items-start p-6 gap-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                            <h3 className="font-semibold font-headline">{edu.institution}</h3>
                            <p className="text-sm text-muted-foreground">{edu.degree}</p>
                        </div>
                        <Badge variant="outline">{edu.duration}</Badge>
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
