import type { ReactNode } from "react";

interface ControlSectionProps {
  title: string;
  children: ReactNode;
}

export function ControlSection({ title, children }: ControlSectionProps) {
  return (
    <section className="portal-control-section">
      <h3 className="portal-control-title">{title}</h3>
      <div>{children}</div>
    </section>
  );
}
