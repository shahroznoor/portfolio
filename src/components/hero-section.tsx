'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="container mx-auto max-w-7xl px-4 pt-24 pb-12 sm:pt-32 sm:pb-16 relative overflow-hidden">
      <svg width="48" height="22" viewBox="0 0 48 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-[25%] hidden lg:block">
            <path d="M2 12.375C2 12.375 9.58824 22 24 22C38.4118 22 46 12.375 46 12.375" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 2C2 2 9.58824 11.625 24 11.625C38.4118 11.625 46 2 46 2" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-20 right-10 hidden lg:block">
            <path d="M13 2V24" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
            <path d="M24 13L2 13" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-20 left-[48%] hidden lg:block">
            <path d="M38 19L20 37L2 19" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M38 3L20 21L2 3" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-20 right-5 hidden lg:block">
            <circle cx="11" cy="11" r="9.5" stroke="white" strokeOpacity="0.5" strokeWidth="3"/>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="z-10">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl font-headline leading-tight">
            Build Your Awesome Platform
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
          </p>
          <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
            Our Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute w-[70%] h-[90%] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-[40px] transform rotate-[20deg]"></div>
            <div className="absolute w-[70%] h-[90%] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-[40px] transform rotate-[10deg]"></div>
            <div className="relative w-[70%] h-[90%] z-10 transform -rotate-[5deg] bg-primary rounded-[40px] p-2">
              <Image
                  src="https://placehold.co/400x500.png"
                  alt="Awesome Platform"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full rounded-[32px]"
                  data-ai-hint="man pointing"
              />
            </div>
        </div>
      </div>
    </section>
  );
}
