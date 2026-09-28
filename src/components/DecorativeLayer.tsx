type DecorativeLayerProps = {
  variant?: "default" | "hero" | "contact";
};

export function DecorativeLayer({ variant = "default" }: DecorativeLayerProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span
        className={`absolute rounded-full border border-white/80 bg-white/30 backdrop-blur-sm ${
          variant === "hero" ? "-right-16 top-20 size-48 sm:size-72" : "-right-12 top-14 size-32"
        } animate-drift`}
      />
      <span
        className={`absolute rounded-[38%] bg-brand-yellow/35 blur-[1px] ${
          variant === "contact" ? "-bottom-20 -left-16 size-64" : "-left-10 top-1/3 size-24"
        } rotate-12 animate-float`}
      />
      <svg className="absolute right-[5%] top-10 h-12 w-12 text-brand-pink/40" viewBox="0 0 48 48" fill="none">
        <path d="m24 2 5.5 15.5L46 24l-16.5 6.5L24 46l-5.5-15.5L2 24l16.5-6.5L24 2Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-10 left-[4%] h-16 w-16 text-brand-purple/10" viewBox="0 0 64 64" fill="none">
        <path d="M4 38C16 4 48 5 59 26 43 17 25 22 4 38Z" fill="currentColor" />
        <path d="M10 49c15-19 30-20 46-12-15 2-29 7-46 12Z" fill="currentColor" />
      </svg>
    </div>
  );
}
