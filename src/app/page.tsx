
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';
import { profileData } from '@/lib/placeholder-data';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header profileName={profileData.name} />
      <main className="flex-1">
        <HeroSection name={profileData.name} headline={profileData.headline} />
        <AboutSection content={profileData.about} />
        <ExperienceSection experiences={profileData.experience} />
        <SkillsSection skills={profileData.skills} />
        <ProjectsSection projects={profileData.projects} />
        <EducationSection education={profileData.education} />
        <ContactSection />
      </main>
      <footer className="text-center p-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profileData.name}. All rights reserved.
      </footer>
    </div>
  );
}
