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
    period: "Oct 2025 - Feb 2026",
    type: "Remote",
    description:
      "Designing a RL-based framework for optimal selection of noise factors and extrapolators for ZNE.",
  },
  {
    logo: srmistLogo,
    company: "SRMIST",
    role: "Research Associate",
    period: "Sep 2025 - Present",
    type: "On Site",
    description:
      "Building quantum computing applications for medical field.",
  },
  {
    logo: magmaLogo,
    company: "Magma - Linux Foundation",
    role: "DevOps Engineer",
    period: "July 2025 - Nov 2025",
    type: "Remote",
    description:
      "Optimized CI/CD pipelines reducing build times by 35%. Implemented containerized environments with Docker and Kubernetes improving deployment scalability by 50%.",
  },
  {
    logo: iswdpLogo,
    company: "ISWDP",
    role: "Student Trainee",
    period: "July 2025 - Aug 2025",
    type: "Remote",
    description:
      "Performed TCAD simulations using Synopsys Sentaurus suite to analyze electrical characteristics of MOSFETs and developed 2D structures by simulating fabrication processes. Evaluated impact of design parameters on critical device metrics including threshold voltage and ON-resistance.",
  },
  {
    logo: quaxLogo,
    company: "Quax Engineering Consultant",
    role: "Instrumentation & Control Intern",
    period: "June 2025",
    type: "On Site",
    description:
      "Integrated HART transmitters into OpenPLC via OPC-UA, cutting alarm response time by 40%. Deployed Node-RED SCADA dashboard achieving 99.5% system uptime.",
  },
  {
    logo: srmsatLogo,
    company: "Team SRMSAT, Space Systems Laboratory",
    role: "Avionics Systems Engineer",
    period: "Aug 2024 - Oct 2025",
    type: "On Site",
    description:
      "Simulated real-time ADCS in Scilab; integrated reaction-wheel & magnetometer control, boosting stability 70%. Built custom STM32F4 RTOS and KiCAD PCB, cutting power use by 25%.",
  },
  {
    logo: discordLogo,
    company: "Discord",
    role: "Bot Developer, Server Moderator & Owner",
    period: "Feb 2021 - June 2025",
    type: "Self-employed",
    description:
      "Developed a discord bot which fetches and parses RSS feeds every 30–60 seconds, handling 1k+ items/day with <200 ms average processing latency per update. Posts deduplicated updates to Discord with 99.9% uptime, <1% duplicate rate, and supports 10+ feeds per server with rate-limit–safe batching.",
  },
];

export const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-lg font-semibold mb-6">Work Experience</h2>
      <div className="relative">
        {displayedExperiences.map((exp, index) => (
          <div
            key={exp.company}
            className={`flex gap-3 sm:gap-4 ${index < displayedExperiences.length - 1 ? 'mb-4' : ''}`}
          >
            
            <div className="relative flex flex-col items-center">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-10 h-10 rounded-lg object-cover z-10 relative shrink-0"
              />
              
              {index < displayedExperiences.length - 1 && (
                <div className="absolute top-10 w-[2px] h-[calc(100%+1rem)] bg-border dark:bg-muted-foreground/30" />
              )}
            </div>
            
            <div className="flex-1 min-w-0 p-2.5 sm:p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0 sm:gap-1">
                <span className="font-medium break-words">
                  {exp.company}
                </span>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mt-1">
                <p className="text-sm text-muted-foreground">{exp.role}</p>
                <Tag>{exp.type}</Tag>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      {experiences.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {showAll ? "Show less" : "Show more experiences"}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </section>
  );
};
