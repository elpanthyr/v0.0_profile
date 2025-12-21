import { Tag } from "./ui/Tag";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import magmaLogo from "@/assets/magma.jpeg";
import printellectLogo from "@/assets/printellect.jpeg";
import quaxLogo from "@/assets/quax.jpeg";
import srmsatLogo from "@/assets/srmsat.jpeg";
import discordLogo from "@/assets/discord.jpeg";
import srmistLogo from "@/assets/srmist.png";
import iswdpLogo from "@/assets/iswdp.jpg";
import ibmLogo from "@/assets/ibm.png";

interface Experience {
  logo: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
}

const experiences: Experience[] = [
  {
    logo: ibmLogo,
    company: "IBM",
    role: "Qiskit Advocate",
    period: "Oct 2025 - Present",
    type: "Remote",
    description: "Designing a RL-based framework for optimal selection of noise factors and extrapolators for ZNE.",
  },
  {
    logo: srmistLogo,
    company: "SRMIST",
    role: "Research Associate",
    period: "Sep 2025 - Present",
    type: "On Site",
    description: "Building quantum computing applications for medical field.",
  },
  {
    logo: magmaLogo,
    company: "Magma - Linux Foundation",
    role: "DevOps Engineer",
    period: "July 2025 - Nov 2025",
    type: "Remote",
    description: "Optimized CI/CD pipelines reducing build times by 35%. Implemented containerized environments with Docker and Kubernetes improving deployment scalability by 50%.",
  },
  {
    logo: iswdpLogo,
    company: "ISWDP",
    role: "Student Trainee",
    period: "July 2025 - Aug 2025",
    type: "Remote",
    description: "Performed TCAD simulations using Synopsys Sentaurus suite to analyze electrical characteristics of MOSFETs and developed 2D structures by simulating fabrication processes.",
  },
  {
    logo: printellectLogo,
    company: "Printellect Inc",
    role: "Embedded Systems Intern",
    period: "June 2025 - July 2025",
    type: "On Site",
    description: "Developed Raspberry Pi–based print-job gateway using IPP, cutting peak-hour wait times by 60%.",
  },
  {
    logo: quaxLogo,
    company: "Quax Engineering Consultant",
    role: "Instrumentation & Control Intern",
    period: "June 2025",
    type: "On Site",
    description: "Integrated HART transmitters into OpenPLC via OPC-UA, cutting alarm response time by 40%.",
  },
  {
    logo: srmsatLogo,
    company: "Team SRMSAT, Space Systems Laboratory",
    role: "Avionics Systems Engineer",
    period: "Aug 2024 - Oct 2025",
    type: "On Site",
    description: "Simulated real-time ADCS in Scilab; integrated reaction-wheel & magnetometer control, boosting stability 70%.",
  },
  {
    logo: discordLogo,
    company: "Discord",
    role: "Bot Developer, Server Moderator & Owner",
    period: "Feb 2021 - June 2025",
    type: "Self-employed",
    description: "Developed a discord bot which fetches and parses RSS feeds every 30–60 seconds, handling 1k+ items/day.",
  },
];

export const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-lg font-semibold mb-6">Work Experience</h2>

      <div className="flex flex-col">
        {displayedExperiences.map((exp, index) => (
          <div key={exp.company} className="flex gap-4">
            
            {/* Timeline Column */}
            <div className="flex flex-col items-center shrink-0 w-10">
              {/* Top Segment: Grow to center the logo. Opacity 0 for first item. */}
              <div 
                className={`w-[2px] flex-1 bg-border dark:bg-muted-foreground/30 ${
                  index === 0 ? "opacity-0" : "opacity-100"
                }`} 
              />

              {/* Logo: Positioned center relative to card via flex segments above/below */}
              <div className="relative z-10 shrink-0">
                <div className="w-10 h-10 rounded-lg border border-border bg-background shadow-sm flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Bottom Segment: Grow to center the logo. Opacity 0 for last item. */}
              <div 
                className={`w-[2px] flex-1 bg-border dark:bg-muted-foreground/30 ${
                  index === displayedExperiences.length - 1 ? "opacity-0" : "opacity-100"
                }`} 
              />
            </div>

            {/* Content Column: Added pb-8 for spacing between items */}
            <div className={`flex-1 ${index === displayedExperiences.length - 1 ? "pb-0" : "pb-8"}`}>
              <div className="p-3 sm:p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors bg-background/50 h-full flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0 sm:gap-1">
                  <span className="font-medium break-words text-foreground">{exp.company}</span>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mt-1">
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                  <Tag>{exp.type}</Tag>
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {experiences.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 w-full flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {showAll ? "Show less" : "Show more experiences"}
          <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
        </button>
      )}
    </section>
  );
};
