import type { PackageItem } from "@/content/siteContent";
import { Icon } from "./Icon";

type PackageCardProps = {
  item: PackageItem | Readonly<PackageItem>;
};

export function PackageCard({ item }: PackageCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-[28px] border border-brand-purple/10 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:p-8">
      {item.badge ? (
        <span className="absolute -top-3 right-5 max-w-[calc(100%-2.5rem)] rounded-full bg-brand-yellow px-4 py-1.5 text-center text-[11px] font-black uppercase tracking-[0.08em] text-brand-purple shadow-sm">
          {item.badge}
        </span>
      ) : null}

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-black tracking-[0.18em] text-brand-purple/45">{item.number}</p>
        <span className="text-2xl" aria-hidden="true">{item.icon}</span>
      </div>

      <div className="mt-7">
        <h3 className="text-2xl font-black leading-tight text-brand-purple sm:text-3xl">{item.title}</h3>
        <p className="mt-2 text-lg font-extrabold leading-snug text-ink/85">{item.subtitle}</p>
        <p className="mt-5 inline-flex rounded-full bg-surface-lilac px-4 py-2 text-sm font-black text-brand-purple">
          {item.duration} · {item.price}
        </p>
        <p className="mt-5 text-[15px] leading-6 text-ink/70">{item.description}</p>
      </div>

      <p className="mt-6 text-sm font-black uppercase tracking-[0.08em] text-brand-purple">В программу входит:</p>
      <ul className="mt-4 space-y-3">
        {item.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[15px] leading-6 text-ink/75">
            <span aria-hidden="true" className="shrink-0 font-black text-[#39A852]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {item.options?.length ? (
        <div className="mt-6 rounded-2xl bg-surface-cream p-4">
          <p className="text-sm font-black text-brand-purple">{item.optionsTitle}</p>
          <ul className="mt-3 space-y-2 text-sm leading-5 text-ink/75">
            {item.options.map((option) => <li key={option}>{option}</li>)}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 rounded-2xl border border-brand-pink/15 bg-surface-blush p-4">
        <p className="text-sm font-black text-brand-pink">🎁 В подарок</p>
        <p className="mt-1 whitespace-pre-line text-sm leading-5 text-ink/75">{item.gift}</p>
      </div>

      <div className="mt-auto pt-7">
        <p className="text-3xl font-black leading-none text-brand-pink sm:text-4xl">{item.price}</p>
        <a href={item.href} className="mt-6 inline-flex min-h-[52px] w-full items-center justify-between rounded-full border-2 border-brand-purple px-5 py-3 text-sm font-black text-brand-purple transition hover:-translate-y-0.5 hover:bg-brand-purple hover:text-white">
          {item.buttonLabel}
          <Icon name="arrow" className="size-5 -rotate-45" />
        </a>
      </div>
    </article>
  );
}
