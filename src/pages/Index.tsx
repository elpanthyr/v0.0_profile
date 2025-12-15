import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkExperience } from "@/components/WorkExperience";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { EducationSection } from "@/components/EducationSection";
import profileImage from "@/assets/profile.webp";

const Index = () => {
  return (
    <>
      <head>
        <title>Deenathayalan A - Embedded Systems & Quantum Computing Engineer</title>
        <meta
          name="description"
          content="Embedded Systems & Quantum Computing Engineer. DevOps, FPGA design, and quantum machine learning enthusiast."
        />
      </head>
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <div className="space-y-12">
            <HeroSection
              name="Deenathayalan A"
              title="Embedded Systems & Quantum Computing Engineer"
              imageUrl={profileImage}
            />

            <AboutSection
              content="Building quantum-enhanced systems and embedded solutions! Currently focused on FPGA neuromorphic architectures and quantum machine learning. Experienced in DevOps, containerization, and industrial automation. Samsung Student Fellowship recipient and IBM Qiskit Advocate."
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
