import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-white/20 shadow-sm active:scale-95"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-healthcare-primary" />
      ) : (
        <Sun className="h-5 w-5 text-healthcare-secondary" />
      )}
    </button>
  );
};

export default ThemeToggle;
