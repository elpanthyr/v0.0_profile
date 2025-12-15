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
      <div className="w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect x="1" y="1" width="10" height="10" fill="#f25022" />
          <rect x="13" y="1" width="10" height="10" fill="#7fba00" />
          <rect x="1" y="13" width="10" height="10" fill="#00a4ef" />
          <rect x="13" y="13" width="10" height="10" fill="#ffb900" />
        </svg>
      </div>
    ),
    company: "Microsoft Research",
    role: "Research Fellow",
    period: "July 2025 - Present",
    type: "On Site",
    description: "Working on Real time AI systems",
    link: "https://www.microsoft.com/en-us/research/lab/microsoft-research-india/",
  },
  {
    logo: (
      <div className="w-10 h-10 flex items-center justify-center text-foreground">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      </div>
    ),
    company: "Apple",
    role: "ML Intern",
    period: "January 2025 - June 2025",
    type: "On Site",
    description: "Part of the Unified Intelligence team",
    link: "https://www.apple.com/",
  },
  {
    logo: (
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500">
        <span className="text-lg font-bold text-primary-foreground">C</span>
      </div>
    ),
    company: "CognitiveLab",
    role: "AI Researcher",
    period: "January 2023 - Present",
    type: "On Site",
    description:
      "Pioneered one of India's first Kannada bilingual Large Language Model - Ambari-7b. Developed Cognitune, an enterprise-grade LLMops platform, reducing time to production by 60%.",
    link: "https://cognitivelab.in/",
    badge: "Building a Research Lab",
  },
  {
    logo: (
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-foreground">
        <span className="text-lg font-bold text-background">N</span>
      </div>
    ),
    company: "NVIDIA",
    role: "AI Solutions Architect Intern",
    period: "June 2024 - December 2024",
    type: "Remote",
    description: "Worked on enterprise AI solutions and deployment strategies.",
    link: "https://nvidia.com/",
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
