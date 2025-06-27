'use client';
import { useState } from 'react';
import { generatePersonalStatement } from '@/ai/flows/generate-personal-statement';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Wand2, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SectionHeading } from './section-heading';

interface HeroSectionProps {
  name: string;
  headline: string;
  about: string;
}

export default function HeroSection({ name, headline, about: initialAbout }: HeroSectionProps) {
  const [about, setAbout] = useState(initialAbout);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateStatement = async () => {
    setIsLoading(true);
    try {
      const result = await generatePersonalStatement({ linkedinData: initialAbout });
      if (result.personalStatement) {
        setAbout(result.personalStatement);
        toast({
          title: "Success",
          description: "Personal statement generated successfully.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate personal statement.",
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="about" className="container mx-auto max-w-5xl px-4 py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-headline">
            {name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{headline}</p>

          <div className="mt-8">
            <SectionHeading editable>About Me</SectionHeading>
            <p className="text-base leading-relaxed text-foreground/80">{about}</p>
          </div>
        </div>
        <div className="row-start-1 lg:col-start-3 lg:row-start-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold font-headline">Tools</h3>
              <p className="text-sm text-muted-foreground mb-4">Enhance your profile with AI</p>
              <div className="flex flex-col gap-3">
                <Button onClick={handleGenerateStatement} disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  {isLoading ? 'Generating...' : 'Generate Statement'}
                </Button>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export as PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
