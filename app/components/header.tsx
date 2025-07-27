"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <header className="text-very-dark-blue dark:bg-dark-blue w-full bg-white px-4 py-8 shadow-md md:px-0 dark:text-white">
      <div className="mx-auto flex w-full justify-between md:w-11/12 xl:w-10/12">
        <h1 className="text-sm font-bold md:text-lg xl:text-xl">
          Where in the World?
        </h1>
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
      </div>
    </header>
  );
}
