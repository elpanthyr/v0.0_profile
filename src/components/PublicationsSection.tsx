import { Tag } from "./ui/Tag";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Publication {
  venue: string;
  venueColor: string;
  title: string;
  conference: string;
  year: string;
  status: string;
  description: string;
  tags: string[];
}

const publications: Publication[] = [
  {
    venue: "ICCV 2025",
    venueColor: "bg-blue-100 text-blue-700",
    title:
      "Nayana: A Foundation for Document-Centric Vision-Language Models via Multi-Task, Multimodal, and Multilingual Data Synthesis",
    conference: "Workshop on Computer Vision for Developing Countries (CV4DC)",
    year: "2025",
    status: "Accepted",
    description:
      "A comprehensive approach to generating synthetic datasets for training vision-language models on document understanding tasks across multiple languages.",
    tags: ["Dataset Generation", "Multimodal AI", "Document Understanding"],
  },
  {
    venue: "CVPR 2025",
    venueColor: "bg-purple-100 text-purple-700",
    title: "ViViD - Vision Language model for Unified Visual Understanding of Documents",
    conference: "Emergent Visual Abilities and Limits of Foundation Models (EVAL-FoMo 2025)",
    year: "2025",
    status: "Accepted",
    description:
      "A vision-language model specifically optimized for document understanding tasks, capable of processing diverse document formats with high accuracy.",
    tags: ["Vision-Language Models", "Document Understanding", "Multimodal AI"],
  },
  {
    venue: "NAACL 2025",
    venueColor: "bg-green-100 text-green-700",
    title: "Nayana OCR: A Scalable Framework for Document OCR in Low-Resource Languages",
    conference: "Language Models for Underserved Communities",
    year: "2025",
    status: "Accepted",
    description:
      "Development of a specialized OCR system designed for low-resource Indic languages, addressing unique challenges in character recognition and document processing.",
    tags: ["OCR", "Low-Resource Languages", "Document Processing"],
  },
];

export const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPublications = showAll ? publications : publications.slice(0, 2);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Academic Publications</h2>
        <p className="text-sm text-muted-foreground">
          Research papers and academic contributions
        </p>
      </div>
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
              {pub.conference} • {pub.year} •{" "}
              <span className="text-green-600">{pub.status}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-3">{pub.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
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
