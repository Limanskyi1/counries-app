"use client"
import { FC, ReactNode, createContext, useEffect, useState } from "react";

interface IThemeProvider {
  children: ReactNode;
}
interface IThemeContext {
  theme: string;
  toggleTheme:() => void
}
type ThemeType = "light" | "dark";

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme:() => {},
});

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    if (typeof window !== 'undefined'){
      const themeFromLS = localStorage.getItem("theme") as ThemeType;
      setTheme(themeFromLS);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  },[theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme",newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme ,toggleTheme}}>{children}</ThemeContext.Provider>
  );
};
