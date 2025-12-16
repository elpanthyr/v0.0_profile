import { Tag } from "./ui/Tag";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import magmaLogo from "@/assets/magma.jpeg";
import printellectLogo from "@/assets/printellect.jpeg";
import quaxLogo from "@/assets/quax.jpeg";
import srmsatLogo from "@/assets/srmsat.jpeg";
import discordLogo from "@/assets/discord.jpeg";

interface Experience {
  logo: string;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  link?: string;
}

const experiences: Experience[] = [
  {
    logo: magmaLogo,
    company: "Magma - Linux Foundation",
    role: "DevOps Engineer",
    period: "July 2025 - Nov 2025",
    type: "Remote",
    description:
      "Optimized CI/CD pipelines reducing build times by 35%. Implemented containerized environments with Docker and Kubernetes improving deployment scalability by 50%.",
    link: "https://magmacore.org/",
  },
  {
    logo: printellectLogo,
    company: "Printellect Inc",
    role: "Embedded Systems Intern",
    period: "June 2025 - July 2025",
    type: "On Site",
    description:
      "Developed Raspberry Pi–based print-job gateway using IPP, cutting peak-hour wait times by 60%. Implemented queue-management daemon tripling daily print throughput from 100 to 300 jobs.",
    link: "https://printellect.com/",
  },
  {
    logo: quaxLogo,
    company: "Quax Engineering Consultant",
    role: "Instrumentation & Control Intern",
    period: "June 2025",
    type: "On Site",
    description:
      "Integrated HART transmitters into OpenPLC via OPC-UA, cutting alarm response time by 40%. Deployed Node-RED SCADA dashboard achieving 99.5% system uptime.",
    link: "#",
  },
  {
    logo: srmsatLogo,
    company: "Team SRMSAT, Space Systems Laboratory",
    role: "Avionics Systems Engineer",
    period: "Aug 2024 - Oct 2025",
    type: "On Site",
    description:
      "Simulated real-time ADCS in Scilab; integrated reaction-wheel & magnetometer control, boosting stability 70%. Built custom STM32F4 RTOS and KiCAD PCB, cutting power use by 25%.",
    link: "#",
  },
  {
    logo: discordLogo,
    company: "Discord",
    role: "Bot Developer, Server Moderator & Owner",
    period: "Feb 2021 - June 2025",
    type: "Self-employed",
    description:
      "Developed a discord bot which fetches and parses RSS feeds every 30–60 seconds, handling 1k+ items/day with <200 ms average processing latency per update. Posts deduplicated updates to Discord with 99.9% uptime, <1% duplicate rate, and supports 10+ feeds per server with rate-limit–safe batching.",
    link: "#",
  },
];

export const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-lg font-semibold mb-6">Work Experience</h2>
      <div className="space-y-0">
        {displayedExperiences.map((exp) => (
          <div
            key={exp.company}
            className="flex gap-4 p-4 -mx-4 rounded-lg transition-colors hover:bg-muted/50"
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  {exp.company}
                </a>
                <span className="text-sm text-muted-foreground shrink-0">{exp.period}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
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
