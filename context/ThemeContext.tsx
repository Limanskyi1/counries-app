"use client"
import { FC, ReactNode, createContext, useEffect, useState } from "react";

interface IThemeProvider {
  children: ReactNode;
}
interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}
type ThemeType = "light" | "dark";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
