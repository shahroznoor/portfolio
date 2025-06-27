'use client';
import { useState } from 'react';
import { summarizeExperience } from '@/ai/flows/summarize-experience';
import type { Experience } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Wand2, Briefcase } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ExperienceItemProps {
  experience: Experience;
  isLeft: boolean;
}

export default function ExperienceItem({ experience, isLeft }: ExperienceItemProps) {
  const [summary, setSummary] = useState<string[] | undefined>(experience.summaryPoints);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const result = await summarizeExperience({ experienceDescription: experience.description });
      if (result.summaryPoints) {
        setSummary(result.summaryPoints);
        toast({
          title: 'Summary Generated',
          description: `AI successfully summarized your experience at ${experience.company}.`,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate summary.',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className={cn('relative flex w-full items-start justify-between', isLeft ? 'md:flex-row-reverse' : 'md:flex-row')}>
      <div className="hidden md:flex flex-col items-center w-1/2" />
      <div className="absolute left-4 top-0 h-full w-8 -translate-x-1/2 md:left-1/2 flex justify-center">
         <div className="sticky top-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Briefcase className="h-4 w-4" />
        </div>
      </div>
      <div className={cn("w-full md:w-1/2", isLeft ? 'md:pr-8' : 'md:pl-8')}>
        <Card className="w-full shadow-md">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                    <CardTitle className="font-headline">{experience.title}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                </div>
                <Badge variant="outline" className="whitespace-nowrap">{experience.duration}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {summary ? (
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {summary.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{experience.description}</p>
            )}
            <div className="mt-4">
              <Button onClick={handleSummarize} disabled={isLoading} size="sm" variant="outline">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                {isLoading ? 'Summarizing...' : (summary ? 'Re-summarize' : 'Summarize with AI')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
