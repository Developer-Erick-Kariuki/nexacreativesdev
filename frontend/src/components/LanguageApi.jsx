import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(ThemeContext);

  return (
    <div>
      <label> Language </label>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
