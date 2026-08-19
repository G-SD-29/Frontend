import type { CSSProperties, ReactNode } from "react";

// TypeScript prüft children als renderbaren Inhalt und style als CSS-Objekt.
type PanelProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const Panel = ({ children, style }: PanelProps) => {
  return (
    <div style={{ border: "1px solid #94a3b8", padding: "1rem", ...style }}>
      {children}
    </div>
  );
};

export default Panel;
