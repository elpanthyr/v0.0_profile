import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkExperience } from "@/components/WorkExperience";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { EducationSection } from "@/components/EducationSection";

const Index = () => {
  return (
    <>
      <head>
        <title>Adithya S Kolavi - AI Researcher</title>
        <meta
          name="description"
          content="AI Researcher building Generative AI solutions at Scale. Currently deep into Vision-Language Models and Agentic Systems."
        />
      </head>
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <div className="space-y-12">
            <HeroSection
              name="Adithya S Kolavi"
              title="AI Researcher, Building Generative AI solutions at Scale"
              imageUrl="https://adithyask.com/adithyask.jpeg"
            />

            <AboutSection
              content="Building AI that actually works! Currently deep into Vision-Language Models and Agentic Systems, with hands-on experience taking AI projects from wild ideas to real products. Love tinkering with model fine-tuning and cloud deployments. Big open-source enthusiast - you'll find me contributing to projects that make AI more accessible to everyone."
            />

            <WorkExperience />

            <OpenSourceSection />

            <PublicationsSection />

            <EducationSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
