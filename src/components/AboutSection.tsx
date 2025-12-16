interface AboutSectionProps {
  content: string;
}

export const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-lg font-semibold mb-4">About</h2>
      <p className="text-muted-foreground leading-relaxed">{content}</p>
    </section>
  );
};
