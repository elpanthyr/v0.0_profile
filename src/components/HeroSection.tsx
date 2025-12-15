import { SocialLinks } from "./SocialLinks";

interface HeroSectionProps {
  name: string;
  title: string;
  imageUrl: string;
}

export const HeroSection = ({ name, title, imageUrl }: HeroSectionProps) => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-6 animate-fade-in">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{name}</h1>
          <p className="text-muted-foreground mt-1">{title}</p>
        </div>
        <SocialLinks />
      </div>
      <div className="shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover"
        />
      </div>
    </section>
  );
};
