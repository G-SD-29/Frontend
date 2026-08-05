import { useLanguage } from "../hooks/useLanguage.js";

function LanguageButton() {
  const { texts, switchLanguage } = useLanguage();

  return (
    <button type="button" onClick={switchLanguage}>
      {texts.switchLanguage}
    </button>
  );
}

export default LanguageButton;
