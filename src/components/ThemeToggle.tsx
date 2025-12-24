import { useEffect, useState } from "react";
import { Sun, Moon, Star } from "lucide-react";
import { useTheme } from "next-themes";
export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <button
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative transition-transform duration-300">
        {isDark ? (
          <Sun className="w-5 h-5 text-foreground transition-all duration-300" />
        ) : (
          <div className="relative">
            <Moon className="w-5 h-5 text-foreground transition-all duration-300" />
            <Star className="w-2 h-2 text-foreground absolute -top-1 -right-1 fill-current" />
          </div>
        )}
      </div>
    </button>
  );
};
