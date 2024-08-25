import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
      throw new Error('useAppContext must beused within an AppProvider');
    }
    return context;
  };
  