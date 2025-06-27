import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export default function WhyEnverSection() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl leading-tight">Why Enver Is The Best Choice?</h2>
            </div>
            <div>
                <p className="text-lg text-muted-foreground">Watch this one minute video so you understand why you should use our services!</p>
            </div>
        </div>
        <div className="mt-12 relative">
            <Image
              src="https://placehold.co/1200x600.png"
              alt="Team working"
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
              data-ai-hint="team collaboration"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg cursor-pointer group">
                <PlayCircle className="h-24 w-24 text-white/70 fill-primary/50 transition-all group-hover:text-white group-hover:fill-primary group-hover:scale-110" />
            </div>
        </div>
      </div>
    </section>
  );
}
