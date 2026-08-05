import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";

function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider.");
  }

  return context;
}

export { useLanguage };
