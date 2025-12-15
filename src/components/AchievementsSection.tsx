import { Tag } from "./ui/Tag";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface Achievement {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
}

const achievements: Achievement[] = [
  {
    title: "Omniparse Hits 6500 Stars on GitHub",
    date: "April 2025",
    description:
      "Omniparse, our open-source document parsing library, has reached 6500 stars on GitHub, making it one of the most popular libraries for document processing.",
    tags: ["Open Source", "GitHub", "Milestone"],
    links: [
      { label: "View Repository", url: "https://github.com/adithya-s-k/omniparse" },
    ],
  },
  {
    title: "Awarded LLaMA Impact Grant by Meta AI",
    date: "April 2025",
    description:
      "Cognitivelab was selected as one of the recipients of Meta's LLaMA Impact Grant for our work on extending large language models to under-resourced Indic languages.",
    tags: ["Award", "Grant", "Meta AI"],
    links: [
      {
        label: "Announcement",
        url: "https://about.fb.com/news/2025/04/llama-impact-grant-recipients/",
      },
    ],
  },
];

export const AchievementsSection = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Achievements & News</h2>
        <p className="text-sm text-muted-foreground">
          Latest updates, recognitions, and highlights
        </p>
      </div>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="p-4 border border-border rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium">{achievement.title}</h3>
              <span className="text-sm text-muted-foreground shrink-0 ml-4">
                {achievement.date}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              {achievement.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {achievement.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {achievement.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-foreground hover:underline"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ))}
              <button className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                Read more
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
