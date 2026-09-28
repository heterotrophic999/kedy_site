import { AddonCard } from "@/components/AddonCard";
import { CategoryCard } from "@/components/CategoryCard";
import { DecorativeLayer } from "@/components/DecorativeLayer";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionShell } from "@/components/SectionShell";
import { ServiceCard } from "@/components/ServiceCard";
import { siteContent } from "@/content/siteContent";

export default function Home() {
  const visibleCategories = siteContent.categories.filter(
    (item) => item.href !== "#addons" || siteContent.features.showAddons,
  );

  return (
    <>
      <Header />
      <main>
        <Hero />

        <SectionShell id="categories" tone="cream">
          <SectionHeading {...siteContent.categoriesIntro} align="center" />
          <div className={`mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${siteContent.features.showAddons ? "xl:grid-cols-5" : "xl:grid-cols-4"}`}>
            {visibleCategories.map((item, index) => (
              <CategoryCard key={item.id} {...item} featured={index === visibleCategories.length - 1} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="why-us" tone="lilac" decorate>
          <SectionHeading {...siteContent.whyUs} align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {siteContent.benefits.map((item) => <FeatureCard key={item.id} {...item} />)}
          </div>
        </SectionShell>

        <SectionShell id="animators" tone="white">
          <SectionHeading {...siteContent.sections.animators} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {siteContent.animators.map((item) => <ServiceCard key={item.id} item={item} />)}
          </div>
          <aside className="mt-8 flex flex-col gap-5 rounded-[28px] bg-surface-lilac px-6 py-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-start gap-4">
              <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-yellow text-xl text-brand-purple">✦</span>
              <div>
                <h3 className="text-xl font-black text-brand-purple sm:text-2xl">{siteContent.sections.animators.noteTitle}</h3>
                <p className="mt-1 max-w-3xl text-base leading-6 text-ink/70">{siteContent.sections.animators.noteText}</p>
              </div>
            </div>
            <a href="#contacts" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-brand-pink px-5 py-2.5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#C9006D]">
              {siteContent.sections.animators.noteCta}
            </a>
          </aside>
        </SectionShell>

        <SectionShell id="parties" tone="blush" decorate>
          <SectionHeading {...siteContent.sections.parties} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {siteContent.parties.map((item) => <ServiceCard key={item.id} item={item} />)}
          </div>
        </SectionShell>

        <SectionShell id="shows" tone="cream">
          <SectionHeading {...siteContent.sections.shows} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {siteContent.shows.map((item) => <ServiceCard key={item.id} item={item} />)}
          </div>
        </SectionShell>

        {siteContent.features.showAddons ? (
          <SectionShell id="addons" tone="lilac" decorate>
            <SectionHeading {...siteContent.sections.addons} align="center" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteContent.addons.map((item) => <AddonCard key={item.id} {...item} />)}
            </div>
          </SectionShell>
        ) : null}

        <section id="contacts" className="relative isolate overflow-hidden bg-brand-purple py-16 sm:py-20 lg:py-28">
          <DecorativeLayer variant="contact" />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl text-white">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-yellow sm:text-base">{siteContent.contact.eyebrow}</p>
              <h2 className="mt-3 text-balance text-4xl font-black leading-[1.06] sm:text-5xl lg:text-6xl">{siteContent.contact.title}</h2>
              <p className="mt-5 max-w-[60ch] text-lg leading-8 text-white/75">{siteContent.contact.description}</p>
              <address className="mt-8 grid gap-4 not-italic sm:grid-cols-2 lg:grid-cols-3">
                <ContactLine icon="phone"><a href={siteContent.contacts.phoneHref} className="font-black hover:text-brand-yellow">{siteContent.contacts.phone}</a></ContactLine>
                <ContactLine icon="pin">{siteContent.contacts.city}</ContactLine>
              </address>
              <div className="mt-8 flex flex-wrap gap-3">
                {siteContent.socials.map((social) => (
                  <a key={social.id} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-purple">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactLine({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-base text-white/80 sm:text-lg">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-brand-yellow"><Icon name={icon} className="size-5" /></span>
      {children}
    </div>
  );
}
