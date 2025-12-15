import { Tag } from "./ui/Tag";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Experience {
  logo: React.ReactNode;
  company: string;
  role: string;
  period: string;
  type: string;
  description: string;
  link?: string;
  badge?: string;
}

const experiences: Experience[] = [
  {
    logo: (
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-red-500">
        <span className="text-lg font-bold text-primary-foreground">M</span>
      </div>
    ),
    company: "Magma - Linux Foundation",
    role: "DevOps Engineer",
    period: "July 2025 - Nov 2025",
    type: "Remote",
    description:
      "Optimized CI/CD pipelines reducing build times by 35%. Implemented containerized environments with Docker and Kubernetes improving deployment scalability by 50%.",
    link: "https://magmacore.org/",
  },
  {
    logo: (
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
        <span className="text-lg font-bold text-primary-foreground">P</span>
      </div>
    ),
    company: "Printellect Inc",
    role: "Embedded Systems Intern",
    period: "June 2025 - July 2025",
    type: "On Site",
    description:
      "Developed Raspberry Pi–based print-job gateway using IPP, cutting peak-hour wait times by 60%. Implemented queue-management daemon tripling daily print throughput from 100 to 300 jobs.",
    link: "https://printellect.com/",
  },
  {
    logo: (
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
        <span className="text-lg font-bold text-primary-foreground">Q</span>
      </div>
    ),
    company: "Quax Engineering Consultant",
    role: "Instrumentation & Control Intern",
    period: "June 2025",
    type: "On Site",
    description:
      "Integrated HART transmitters into OpenPLC via OPC-UA, cutting alarm response time by 40%. Deployed Node-RED SCADA dashboard achieving 99.5% system uptime.",
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
        {displayedExperiences.map((exp, index) => (
          <div
            key={exp.company}
            className={`flex gap-4 p-4 -mx-4 rounded-lg transition-colors ${
              exp.badge ? "bg-muted border border-border" : "hover:bg-muted/50"
            }`}
          >
            {exp.logo}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      {exp.company}
                    </a>
                    {exp.badge && (
                      <Tag className="text-[10px] bg-muted-foreground/10">
                        {exp.badge}
                      </Tag>
                    )}
                    {exp.badge && (
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                  <span>{exp.period}</span>
                  <Tag>{exp.type}</Tag>
                </div>
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
