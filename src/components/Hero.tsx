import { siteContent } from "@/content/siteContent";
import { Container } from "./Container";
import { DecorativeLayer } from "./DecorativeLayer";
import { Icon } from "./Icon";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { SiteImage } from "./SiteImage";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-surface-lilac pb-16 pt-10 sm:pb-20 sm:pt-14 lg:min-h-[calc(100svh-var(--header-height))] lg:py-16">
      <DecorativeLayer variant="hero" />
      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] xl:gap-20">
        <div className="max-w-2xl">
          <h1 className="text-balance text-[clamp(2.65rem,6vw,5.8rem)] font-black leading-[0.98] tracking-[-0.045em] text-brand-purple" aria-label={hero.title}>
            {hero.titleLead} <span className="relative inline-block text-brand-pink">{hero.titleAccent}<span className="absolute -bottom-2 left-1 h-2 w-[95%] rounded-full bg-brand-yellow/80 -rotate-1" aria-hidden="true" /></span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-lg leading-8 text-ink/75 sm:text-xl">{hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={hero.primaryCta.href}>{hero.primaryCta.label}<Icon name="arrow" className="size-5" /></PrimaryButton>
            <SecondaryButton href={hero.secondaryCta.href}>{hero.secondaryCta.label}</SecondaryButton>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {hero.advantages.map((advantage) => (
              <li key={advantage} className="flex items-center gap-2 text-sm font-extrabold leading-5 text-brand-purple">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-yellow"><Icon name="check" className="size-4" /></span>
                {advantage}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[680px] lg:mx-0">
          <div className="absolute -inset-3 rotate-2 rounded-[42px] bg-brand-yellow sm:-inset-4" aria-hidden="true" />
          <div className="group relative overflow-hidden rounded-[34px] border-4 border-white bg-white shadow-soft sm:rounded-[42px] sm:border-[6px]">
            <SiteImage image={hero.image} priority sizes="(max-width: 1023px) 92vw, 52vw" />
          </div>
          <div className="absolute -bottom-6 left-4 max-w-[230px] -rotate-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-brand-purple shadow-soft sm:left-8 sm:text-base">
            <span className="mr-2 text-brand-pink" aria-hidden="true">♥</span>{hero.imageNote}
          </div>
          <span className="absolute -right-4 -top-6 grid size-16 rotate-6 place-items-center rounded-[22px] bg-brand-pink text-3xl text-white shadow-soft sm:-right-6 sm:size-20" aria-hidden="true">✦</span>
        </div>
      </Container>
    </section>
  );
}
