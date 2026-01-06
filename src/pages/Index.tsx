import { Head } from 'vite-react-ssg'
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
      <Head>
        <title>Deenathayalan A - Embedded Systems & Quantum Computing Engineer</title>
        <meta
          name="description"
          content="Embedded Systems & Quantum Computing Engineer. DevOps, FPGA design, and quantum machine learning enthusiast."
        />
        <meta property="og:title" content="Deenathayalan A - Portfolio" />
        <meta property="og:description" content="Embedded Systems & Quantum Computing Engineer specializing in DevOps, FPGA design, and quantum machine learning." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deenathayalan A - Portfolio" />
        <meta name="twitter:description" content="Embedded Systems & Quantum Computing Engineer" />
        <link rel="canonical" href="https://deenathayalan.dev/" />
      </Head>
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-3 md:px-6 py-6 md:py-20">
          <div className="space-y-6 md:space-y-12">
          <HeroSection
            name="Deenathayalan A"
            title="Embedded Systems & Quantum Computing Engineer"
            imageUrl={profileImage}
          />

          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#publications" className="hover:text-foreground transition-colors">Publications</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
          </nav>

          <div id="about">
            <AboutSection
              content={
                <> 
                <span>Building quantum-enhanced systems and embedded solutions!</span>
                <br />
                <span>Currently focused on FPGA neuromorphic architectures and QML.</span>
                </> 
              }
            />
          </div>

          <div id="experience">
            <WorkExperience />
          </div>

          <div id="projects">
            <OpenSourceSection />
          </div>

          <div id="publications">
            <PublicationsSection />
          </div>

          <div id="education">
            <EducationSection />
          </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
