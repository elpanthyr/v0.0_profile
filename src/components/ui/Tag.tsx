import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs bg-tag text-tag-foreground rounded",
        className
      )}
    >
      {children}
    </span>
  );
};
