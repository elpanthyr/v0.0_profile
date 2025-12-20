import { Star, GitFork, ChevronDown } from "lucide-react";
import { Tag } from "./ui/Tag";
import { useState } from "react";

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  tags: string[];
  url: string;
}

const repositories: Repository[] = [
  {
    name: "Xperia",
    description:
      "Hinge for solo travellers - a social matching platform for travel companions",
    stars: 0,
    forks: 1,
    language: "TypeScript",
    tags: ["travel", "social", "convex"],
    url: "https://github.com/elpanthyr/Xperia",
  },
  {
    name: "Synapse",
    description:
      "Social network v2 - next generation social networking platform",
    stars: 0,
    forks: 0,
    language: "TypeScript",
    tags: ["social-network", "web-app", "convex"],
    url: "https://github.com/elpanthyr/Synapse",
  },
  {
    name: "NQK",
    description:
      "Neural Quantum Kernel for Eye Disease Classification using quantum machine learning techniques",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
    tags: ["quantum-ml", "medical-ai", "classification"],
    url: "https://github.com/elpanthyr/NQK",
  },
  {
    name: "QuantumRL",
    description:
      "Quantum Reinforcement Learning for Eye Disease Classification combining RL with quantum computing",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
    tags: ["quantum", "reinforcement-learning", "healthcare"],
    url: "https://github.com/elpanthyr/QuantumRL",
  },
  {
    name: "EQIPO",
    description:
      "Electrostatic Quantum Inspired Path Optimization for autonomous UAV navigation",
    stars: 1,
    forks: 1,
    language: "Python",
    tags: ["quantum-inspired", "uav", "path-planning"],
    url: "https://github.com/elpanthyr/EQIPO",
  },
  {
    name: "GROKWARE",
    description:
      "Translates sign language into text and audio, while converting spoken words back to text using Grokband and Grokcom",
    stars: 0,
    forks: 1,
    language: "C++",
    tags: ["accessibility", "sign-language", "iot"],
    url: "https://github.com/elpanthyr/GROKWARE",
  },
  {
    name: "MediCLIP",
    description:
      "Zero-shot medical vs non-medical image classifier using CLIP-based vision models",
    stars: 0,
    forks: 0,
    language: "Python",
    tags: ["clip", "medical-imaging", "zero-shot"],
    url: "https://github.com/elpanthyr/MediCLIP",
  },
  {
    name: "KneeFlexIQ",
    description:
      "Smart knee rehabilitation with IoT sensors and AWS-powered ML for real-time feedback",
    stars: 0,
    forks: 1,
    language: "Python",
    tags: ["iot", "aws", "rehabilitation"],
    url: "https://github.com/elpanthyr/KneeFlexIQ",
  },
  {
    name: "AOCS_sim_cubesat",
    description:
      "CubeSat attitude and orbit control system simulation for satellite dynamics",
    stars: 0,
    forks: 0,
    language: "Scilab",
    tags: ["cubesat", "aerospace", "simulation"],
    url: "https://github.com/elpanthyr/AOCS_sim_cubesat",
  },
  {
    name: "Quantum_ckts",
    description:
      "Quantum circuit implementations and experiments from QGSS'25",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
    tags: ["qiskit", "quantum-circuits", "education"],
    url: "https://github.com/elpanthyr/Quantum_ckts",
  },
];

export const OpenSourceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRepos = showAll ? repositories : repositories.slice(0, 4);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h2 className="text-lg font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {displayedRepos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium">{repo.name}</h3>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {repo.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Tag>{repo.language}</Tag>
              {repo.tags.slice(0, 2).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </a>
        ))}
      </div>
      {repositories.length > 4 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {showAll ? "Show less" : "Show more projects"}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </section>
  );
};
