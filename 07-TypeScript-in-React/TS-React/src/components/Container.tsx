import type { CSSProperties, ReactNode } from "react";

// UI-Wrapper für Inhalte mit einem einheitlichen, sichtbaren Rahmen.
// Dadurch bleibt das Layout konsistent, auch wenn die Komponente in verschiedenen Bereichen verwendet wird.
type ContainerProps = {
  // ReactNode erlaubt das Rendern von beliebigem Inhalt, z. B. Text, Buttons oder andere Komponenten.
  children: ReactNode;
  // Optionales Styling, damit der Container an unterschiedliche Layout-Anforderungen angepasst werden kann.
  style?: CSSProperties;
};

// Die Komponente rendert einen einfachen Inhaltsblock mit Padding und visueller Abgrenzung.
const Container = ({ children, style }: ContainerProps) => {
  return (
    <main style={{ padding: "1rem", border: "2px dashed #888", ...style }}>
      {children}
    </main>
  );
};

export default Container;
