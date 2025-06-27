import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import WhyEnverSection from '@/components/why-enver-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import { profileData } from '@/lib/placeholder-data';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyEnverSection />
        <ProjectsSection projects={profileData.projects} />
        <ContactSection />
      </main>
      <footer className="text-center p-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Enver. All rights reserved.
      </footer>
    </div>
  );
}
