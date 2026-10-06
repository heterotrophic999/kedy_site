type DecorativeLayerProps = {
  variant?: "default" | "wow" | "party" | "contact";
};

const stickerContent = {
  default: { word: "ВАУ!", emoji: "🤩" },
  wow: { word: "КРУТО!", emoji: "😎" },
  party: { word: "ОГОНЬ!", emoji: "🥳" },
  contact: { word: "ГОУ!", emoji: "🔥" },
} as const;

export function DecorativeLayer({ variant = "default" }: DecorativeLayerProps) {
  const content = stickerContent[variant];
  const flipped = variant === "wow" || variant === "contact";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      <span className="absolute -right-12 top-14 size-32 rounded-full border border-white/80 bg-white/30 backdrop-blur-sm animate-drift" />
      <span className="absolute -left-10 top-1/3 size-24 rotate-12 rounded-[38%] bg-brand-yellow/25 blur-[1px] animate-float" />

      <span
        className={`absolute top-8 hidden -rotate-6 rounded-2xl border-[3px] border-white bg-brand-purple px-4 py-2 text-xl font-black italic tracking-tight text-brand-yellow shadow-[0_0_0_3px_#e6007e,0_8px_24px_rgba(230,0,126,0.35)] lg:block xl:text-2xl ${
          flipped ? "right-[2.5%]" : "left-[2.5%]"
        } animate-float`}
      >
        {content.word}
      </span>

      <span
        className={`absolute bottom-[12%] hidden size-14 rotate-6 place-items-center rounded-full border-[3px] border-white bg-brand-yellow text-3xl shadow-[0_0_0_3px_#7b2cff,0_8px_22px_rgba(45,23,106,0.25)] md:grid ${
          flipped ? "left-[3%]" : "right-[3%]"
        } animate-drift`}
      >
        {content.emoji}
      </span>

      <svg
        className={`absolute top-[36%] hidden h-20 w-14 drop-shadow-[0_0_8px_rgba(230,0,126,0.7)] sm:block ${
          flipped ? "left-[1.5%] -rotate-12" : "right-[1.5%] rotate-12"
        } animate-float`}
        viewBox="0 0 64 92"
        fill="none"
      >
        <path d="M37 3 8 50h21l-6 39 33-51H35L37 3Z" fill="#C9FF35" stroke="white" strokeWidth="6" strokeLinejoin="round" />
        <path d="M37 3 8 50h21l-6 39 33-51H35L37 3Z" stroke="#E6007E" strokeWidth="2" strokeLinejoin="round" />
      </svg>

      <svg
        className={`absolute bottom-8 hidden h-16 w-16 drop-shadow-[0_0_9px_rgba(230,0,126,0.65)] md:block ${
          flipped ? "right-[8%] rotate-12" : "left-[8%] -rotate-12"
        } animate-drift`}
        viewBox="0 0 72 66"
        fill="none"
      >
        <path d="M36 61 8 35C-8 18 14-3 30 12l6 6 6-6C58-3 80 18 64 35L36 61Z" fill="#E6007E" stroke="white" strokeWidth="6" strokeLinejoin="round" />
        <path d="M36 58 10 33C-2 20 15 4 28 16l8 8 8-8C57 4 74 20 62 33L36 58Z" stroke="#FFD84D" strokeWidth="2" />
      </svg>

      <svg className="absolute right-[7%] top-[14%] h-9 w-9 text-brand-pink/35" viewBox="0 0 48 48" fill="none">
        <path d="m24 2 5.5 15.5L46 24l-16.5 6.5L24 46l-5.5-15.5L2 24l16.5-6.5L24 2Z" fill="currentColor" />
      </svg>
    </div>
  );
}
