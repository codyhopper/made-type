"use client"; // This component needs to be client-side

import { useTheme } from "../providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="after:absolute after:dark:content-['Dark'] after:content-['Light']" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme:&nbsp;
    </button>
  );
}
