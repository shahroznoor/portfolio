import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';
import { profileData } from '@/lib/placeholder-data';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection
          name={profileData.name}
          headline={profileData.headline}
          about={profileData.about}
        />
        <ExperienceSection experiences={profileData.experience} />
        <ProjectsSection projects={profileData.projects} />
        <SkillsSection skills={profileData.skills} />
        <EducationSection education={profileData.education} />
        <ContactSection />
      </main>
      <footer className="text-center p-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} ProfileCanvas. All rights reserved.
      </footer>
    </div>
  );
}
