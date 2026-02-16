import { createContext, useContext, useEffect, useState } from "react";

const THEME_KEY = "cstd-theme";
const themes = { light: "light", dark: "dark", system: "system" };

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || themes.system;
    } catch {
      return themes.system;
    }
  });

  const [resolvedTheme, setResolvedTheme] = useState("dark"); // 'light' | 'dark'

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (isDark) => {
      root.classList.remove("light", "dark");
      root.classList.add(isDark ? "dark" : "light");
      setResolvedTheme(isDark ? "dark" : "light");
    };

    if (theme === themes.system) {
      const resolveSystemTheme = () => {
        const hour = new Date().getHours();
        if (hour >= 18) return true; // Past 6pm → dark
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      };

      const update = () => applyTheme(resolveSystemTheme());
      update();

      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", update);

      // Re-check every minute to catch 6pm / 6am transitions
      const interval = setInterval(update, 60000);

      return () => {
        mq.removeEventListener("change", update);
        clearInterval(interval);
      };
    }

    applyTheme(theme === themes.dark);
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
