import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function DashboardShell({ children }) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("DashboardShell must be used inside a ThemeProvider.");
  }

  const { theme } = themeContext;

  return (
    <main className={`dashboard-shell dashboard dashboard--${theme}`}>
      <div className="dashboard-shell__inner">{children}</div>
    </main>
  );
}

export default DashboardShell;
