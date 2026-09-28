import { Icon } from "./Icon";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  accent: "pink" | "purple" | "yellow" | "lime";
};

const accents = {
  pink: "bg-[#FFE1F0] text-brand-pink",
  purple: "bg-[#EDE5FF] text-brand-purple",
  yellow: "bg-[#FFF1AD] text-[#8A5900]",
  lime: "bg-[#E9FFC0] text-[#416600]",
};

export function FeatureCard({ icon, title, description, accent }: FeatureCardProps) {
  return (
    <article className="rounded-[28px] bg-white/80 p-6 shadow-card backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7">
      <span className={`mb-6 grid size-14 place-items-center rounded-2xl ${accents[accent]}`}>
        <Icon name={icon} className="size-7" />
      </span>
      <h3 className="text-xl font-black leading-tight text-brand-purple">{title}</h3>
      <p className="mt-3 text-base leading-6 text-ink/70">{description}</p>
    </article>
  );
}
