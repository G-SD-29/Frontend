import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { useLanguage } from "../hooks/useLanguage.js";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { texts } = useLanguage();
  const buttonLabel =
    theme === "light" ? texts.switchToDarkTheme : texts.switchToLightTheme;

  return (
    <button type="button" onClick={toggleTheme}>
      {buttonLabel}
    </button>
  );
}

export default ThemeButton;
