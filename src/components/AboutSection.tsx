import { FileText } from "lucide-react";

interface AboutSectionProps {
  content: string;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-lg font-semibold mb-4">About</h2>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
      <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm hover:bg-muted transition-colors">
        <FileText className="w-4 h-4" />
        More About Me
      </button>
    </section>
  );
};
