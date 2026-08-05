import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { TodoProvider } from "./context/TodoContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
