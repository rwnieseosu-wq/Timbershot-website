import { Hero } from "@/components/hero";
import {
  HomeIntroCards,
  MaterialsSection,
  PhilosophyAndSignup,
  ProjectsSection,
  ResourcesSection,
  ToolsSection,
  WorkshopSection
} from "@/components/home-sections";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <SiteHeader />
      <main className="container-shell py-8 md:py-10">
        <div className="space-y-2">
          <Hero />
          <HomeIntroCards />
          <ProjectsSection />
          <ToolsSection />
          <MaterialsSection />
          <WorkshopSection />
          <PhilosophyAndSignup />
          <ResourcesSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
