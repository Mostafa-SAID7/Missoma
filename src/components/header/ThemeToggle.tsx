import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && (resolvedTheme ?? theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-300"
    >
      <span className="relative block w-5 h-5">
        <Sun
          size={20}
          strokeWidth={1.5}
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          size={20}
          strokeWidth={1.5}
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
