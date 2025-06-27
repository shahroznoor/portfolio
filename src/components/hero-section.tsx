
'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  name: string;
  headline: string;
}

export default function HeroSection({ name, headline }: HeroSectionProps) {
  return (
    <section id="home" className="container mx-auto max-w-7xl px-4 pt-16 pb-24 sm:pt-24 sm:pb-32 relative">
       <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
       <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <div className="relative inline-block">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl font-headline text-white">
              {name}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground md:text-2xl">{headline}</p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Github className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></a>
          </div>
        </div>
        <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-full blur-2xl"></div>
          <Image
            src="https://placehold.co/400x400.png"
            alt={name}
            width={400}
            height={400}
            className="relative rounded-full object-cover border-4 border-background"
            data-ai-hint="professional headshot"
            priority
          />
        </div>
      </div>
    </section>
  );
}
