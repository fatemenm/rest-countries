"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-1 text-xs xl:text-sm"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-5 w-5" strokeWidth={1} />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-5 w-5" strokeWidth={1} />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
