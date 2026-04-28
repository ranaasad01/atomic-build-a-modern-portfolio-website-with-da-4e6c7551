"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center
        bg-slate-100 dark:bg-slate-800 
        hover:bg-indigo-100 dark:hover:bg-indigo-900/40
        border border-slate-200 dark:border-slate-700
        text-slate-600 dark:text-slate-300
        hover:text-indigo-600 dark:hover:text-indigo-400
        transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      <Sun
        size={16}
        className="absolute transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={16}
        className="absolute transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}
