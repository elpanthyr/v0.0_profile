import { Tag } from "./ui/Tag";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Publication {
  venue: string;
  venueColor: string;
  title: string;
  year: string;
  status: string;
  description: string;
  tags: string[];
  url?: string;
}

const publications: Publication[] = [
  {
    venue: "Zenodo",
    venueColor: "bg-blue-100 text-blue-700",
    title:
      "Quantum-Enhanced Spiking Neural Network on FPGA for Real-Time Industrial Anomaly Detection",
    year: "2025",
    status: "Accepted",
    description:
      "A hardware-efficient neuromorphic framework that leverages quantum-inspired learning dynamics on FPGA for robust edge-level detection of abnormal patterns in time-series signals.",
    tags: ["Neuromorphic Computing", "Quantum-Inspired Learning", "FPGA", "Edge AI", "Anomaly Detection"],
    url: "https://doi.org/10.5281/zenodo.20140111",
  },
  {
    venue: "Zenodo",
    venueColor: "bg-blue-100 text-blue-700",
    title:
      "XGBoost-Driven Predictive Modelling for Performance Optimization of Direct Evaporative Cooling Integrated with Phase Change Plates in Data Centers",
    year: "2026",
    status: "Accepted",
    description:
      "A SHAP-validated, Bayesian-optimized XGBoost surrogate framework integrating soft-constraint Pareto mapping for real-time energy minimization and strict ASHRAE thermal compliance in non-linear data center cooling systems.",
    tags: ["Machine Learning", "XGBoost", "Data Center Cooling", "SHAP", "Multi-Objective Optimization", "Direct Evaporative Cooling"],
    url: "https://doi.org/10.5281/zenodo.20055333",
}
];

export const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPublications = showAll ? publications : publications.slice(0, 2);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <h2 className="text-lg font-semibold mb-6">Academic Publications</h2>
      <div className="space-y-4">
        {displayedPublications.map((pub, index) => (
          <div key={index} className="p-4 border border-border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${pub.venueColor}`}>
                {pub.venue}
              </span>
            </div>
            <h3 className="font-medium mb-1">{pub.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {pub.venue} • {pub.year} •{" "}
              <span className="text-green-600">{pub.status}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-3">{pub.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {pub.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            {/* Read Paper link (opens DOI in a new tab) */}
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-sky-600 hover:underline"
              >
                Read Paper
              </a>
            )}
          </div>
        ))}
      </div>
      {publications.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {showAll ? "Show less" : "Show more publications"}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </section>
  );
};
