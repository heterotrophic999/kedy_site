import type { ReactNode } from "react";
import { Container } from "./Container";
import { DecorativeLayer } from "./DecorativeLayer";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  tone?: "white" | "lilac" | "cream" | "blush";
  className?: string;
  decorate?: boolean;
};

const tones = {
  white: "bg-white",
  lilac: "bg-surface-lilac",
  cream: "bg-surface-cream",
  blush: "bg-surface-blush",
};

export function SectionShell({ id, children, tone = "white", className = "", decorate = false }: SectionShellProps) {
  return (
    <section id={id} className={`relative isolate py-16 sm:py-20 lg:py-28 ${tones[tone]} ${className}`}>
      {decorate ? <DecorativeLayer /> : null}
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
