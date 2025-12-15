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
    name: "omniparse",
    description:
      "Ingest, parse, and optimize any data format ➡️ from documents to multimedia ➡️ for enhanced compatibility with GenAI frameworks",
    stars: 6754,
    forks: 534,
    language: "Python",
    tags: ["ingestion-api", "ocr", "omniparser", "parse-server"],
    url: "https://github.com/adithya-s-k/omniparse",
  },
  {
    name: "AI-Engineering.academy",
    description: "Mastering Applied AI, One Concept at a Time",
    stars: 1608,
    forks: 179,
    language: "Jupyter Notebook",
    tags: ["fine-tuning", "finetuning", "finetuning-llms", "inference"],
    url: "https://github.com/adithya-s-k/AI-Engineering.academy",
  },
  {
    name: "LLM-Alchemy-Chamber",
    description: "Collection of tools and recipes for fine-tuning and deploying LLMs",
    stars: 856,
    forks: 92,
    language: "Python",
    tags: ["llm", "fine-tuning", "deployment"],
    url: "https://github.com/adithya-s-k/LLM-Alchemy-Chamber",
  },
];

export const OpenSourceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedRepos = showAll ? repositories : repositories.slice(0, 2);
  const totalStars = repositories.reduce((acc, repo) => acc + repo.stars, 0);

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Featured Open Source Work</h2>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 text-star fill-star" />
          <span className="font-medium">{(totalStars / 1000).toFixed(1)}k</span>
          <span className="text-muted-foreground">total stars</span>
        </div>
      </div>
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
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {repo.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <Tag>{repo.language}</Tag>
              {repo.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </a>
        ))}
      </div>
      {repositories.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {showAll ? "Show less" : "Show more repositories"}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </section>
  );
};
