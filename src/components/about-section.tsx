
'use client';
import { generatePersonalStatement } from '@/ai/flows/generate-personal-statement';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from './section-heading';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { useState } from 'react';

interface AboutSectionProps {
  content: string;
}

export default function AboutSection({ content: initialContent }: AboutSectionProps) {
  const [content, setContent] = useState(initialContent);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const result = await generatePersonalStatement({ linkedinData: content });
      if (result.personalStatement) {
        setContent(result.personalStatement);
        toast({
          title: 'Personal Statement Generated',
          description: 'AI successfully generated a new personal statement.',
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate personal statement.',
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <SectionHeading editable>About Me</SectionHeading>
        <Card className="shadow-lg">
          <CardContent className="p-6 md:p-8">
            <p className="text-muted-foreground whitespace-pre-line">{content}</p>
            <div className="mt-6">
              <Button onClick={handleGenerate} disabled={isLoading} size="sm" variant="outline">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                {isLoading ? 'Generating...' : 'Rewrite with AI'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
