import { Tag } from "./ui/Tag";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  date: string;
  readTime: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    date: "2025-06-11",
    readTime: "8 min read",
    title: "Cursor for Image Editing: A Multi-Agent Approach for Visual Content Creation",
    description:
      "A novel multi-agent system that redefines how we generate and refine visual content, presented at the Multi-Agent Workshops at AAAI 2025.",
    tags: ["Multi-Agent Systems", "Computer Vision", "Image Generation"],
    url: "#",
  },
  {
    date: "2025-05-20",
    readTime: "6 min read",
    title: "Building Scalable Document Processing Pipelines",
    description:
      "How we built omniparse to handle millions of documents with enterprise-grade reliability.",
    tags: ["Engineering", "Open Source", "Python"],
    url: "#",
  },
];

export const BlogSection = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Latest Blog Posts</h2>
          <p className="text-sm text-muted-foreground">Recent articles and insights</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm hover:underline"
        >
          View all posts
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="text-xs text-muted-foreground mb-2">
              {post.date} • {post.readTime}
            </div>
            <h3 className="font-medium mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
