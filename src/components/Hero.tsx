import { siteContent } from "@/content/siteContent";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { HeroBackgroundVideo } from "./HeroBackgroundVideo";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section id="top" className="relative isolate flex min-h-[calc(100svh-var(--header-height))] overflow-hidden bg-brand-purple">
      <HeroBackgroundVideo
        src="/videos/hero-background.mp4?v=3459"
        mobileSrc="/videos/hero-background-mobile.mp4?v=3459"
        poster={hero.image.src}
        fallbackSrc="/images/hero/hero-background-loop.webp?v=3459"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,10,58,0.86)_0%,rgba(38,16,75,0.64)_48%,rgba(38,16,75,0.16)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/55 via-transparent to-brand-purple/20" aria-hidden="true" />

      <Container className="relative z-10 flex w-full items-center py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-balance text-[clamp(2.65rem,6vw,5.8rem)] font-black leading-[0.98] tracking-[-0.045em] text-white [text-shadow:0_3px_24px_rgba(24,10,58,0.35)]" aria-label={hero.title}>
            {hero.titleLead} <span className="relative inline-block text-brand-yellow">{hero.titleAccent}<span className="absolute -bottom-2 left-1 h-2 w-[95%] -rotate-1 rounded-full bg-brand-pink/90" aria-hidden="true" /></span>
          </h1>
          <p className="mt-7 max-w-[58ch] whitespace-pre-line text-lg font-semibold leading-8 text-white/90 [text-shadow:0_2px_14px_rgba(24,10,58,0.5)] sm:text-xl">{hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href={hero.primaryCta.href}>{hero.primaryCta.label}<Icon name="arrow" className="size-5" /></PrimaryButton>
            <SecondaryButton href={hero.secondaryCta.href} className="border-white/60 bg-white/90 hover:border-white hover:bg-white">{hero.secondaryCta.label}</SecondaryButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
