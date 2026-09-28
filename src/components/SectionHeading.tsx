type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className = "" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-brand-pink sm:text-base">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-[1.08] text-brand-purple sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className={`mt-4 max-w-[65ch] text-base leading-7 text-ink/75 sm:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
