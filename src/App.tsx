import React from 'react';
import { Navigation } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { EducationSection } from './components/education-section';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { AwardsSection } from './components/awards-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;