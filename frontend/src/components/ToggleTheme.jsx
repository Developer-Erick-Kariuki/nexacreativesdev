import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
import { SunIcon } from "lucide-react";
import { FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? " bg-slate-800/50" : "bg-slate-300/50"
      } transition-all hover:scale-105 p-2 rounded-full duration-300 ease-linear`}
    >
      {theme === "dark" ? (
        <FiMoon
          size={20}
          className="cursor-pointer hover:scale-105"
          onClick={() => setTheme("light")}
        />
      ) : (
        <SunIcon
          size={20}
          className="cursor-pointer hover:scale-105"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
