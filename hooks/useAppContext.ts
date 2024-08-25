import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
      throw new Error('useAppContext must beused within an AppProvider');
    }
    return context;
  };
  