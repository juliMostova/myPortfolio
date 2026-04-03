import React, { createContext, useContext, useEffect, useState } from "react";

export interface IThemeContext{
  theme:'light' | 'dark';
  toggleTheme:()=>void;
}

export interface  IThemeProviderProps {
  children:React.ReactNode;
}


export const ThemeContext = createContext<IThemeContext | undefined>(undefined);


export const useTheme =()=>{
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context;
};

function ThemeProvider({ children }:IThemeProviderProps) {
  const [theme, setTheme] = useState<'light'|'dark'>(
    () => localStorage.getItem("theme") as "light" | "dark"|| "light"
  );


  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
