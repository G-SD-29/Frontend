import { createContext, useState } from "react";

const translations = {
  en: {
    title: "ToDo Dashboard",
    subtitle: "Context Demo",
    tasks: "Tasks",
    empty: "No tasks yet.",
    switchLanguage: "Switch to German",
    switchToDarkTheme: "Switch to dark theme",
    switchToLightTheme: "Switch to light theme",
    newTask: "New task",
    add: "Add",
    delete: "Delete",
    of: "of",
    completed: "completed",
  },
  de: {
    title: "ToDo Dashboard",
    subtitle: "Context-Demo",
    tasks: "Aufgaben",
    empty: "Noch keine Aufgaben.",
    switchLanguage: "Zu Englisch wechseln",
    switchToDarkTheme: "Zum dunklen Theme wechseln",
    switchToLightTheme: "Zum hellen Theme wechseln",
    newTask: "Neue Aufgabe",
    add: "Hinzufügen",
    delete: "Löschen",
    of: "von",
    completed: "erledigt",
  },
};

const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function switchLanguage() {
    setLanguage((currentLanguage) => {
      return currentLanguage === "en" ? "de" : "en";
    });
  }

  const value = {
    language,
    texts: translations[language],
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
