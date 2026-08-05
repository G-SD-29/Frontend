import { useLanguage } from "../hooks/useLanguage.js";
import LanguageButton from "./LanguageButton.jsx";
import ThemeButton from "./ThemeButton.jsx";

function DashboardHeader() {
  const { texts } = useLanguage();

  return (
    <header className="dashboard-header">
      <div>
        <p>{texts.subtitle}</p>
        <h1>{texts.title}</h1>
      </div>
      <div>
        <ThemeButton />
        <LanguageButton />
      </div>
    </header>
  );
}

export default DashboardHeader;
