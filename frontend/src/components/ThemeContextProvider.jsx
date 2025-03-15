import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [isSet, setIsSet] = useState(true);

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Load the preferred language from localStorage (default to English)
  const storedLanguage = localStorage.getItem("preferredLanguage");

  console.log(storedLanguage);
  const [language, setLanguage] = useState(storedLanguage);

  // Function to change language and store in localStorage
  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("preferredLanguage", newLang);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isSet, setIsSet, language, changeLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
