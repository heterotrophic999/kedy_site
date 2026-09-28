import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-base font-extrabold transition duration-200 active:scale-[0.98]";

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <a
      className={`${base} bg-brand-pink text-white shadow-[0_10px_24px_rgba(230,0,126,0.25)] hover:-translate-y-0.5 hover:bg-[#C9006D] ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <a
      className={`${base} border-2 border-brand-purple/15 bg-white/70 text-brand-purple hover:-translate-y-0.5 hover:border-brand-purple/30 hover:bg-white ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
