import { siteContent } from "@/content/siteContent";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-brand-purple py-10 text-white">
      <Container>
        <div className="grid gap-8 border-b border-white/15 pb-8 md:grid-cols-[0.8fr_1.4fr_0.8fr]">
          <div>
            <a href="#top" className="text-3xl font-black tracking-[-0.06em]">{siteContent.brand.name.slice(0, -1)}<span className="text-brand-pink">{siteContent.brand.name.slice(-1)}</span></a>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">{siteContent.footer.note}</p>
          </div>
          <nav aria-label="Навигация в подвале">
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3">
              {siteContent.navigation.map((item) => (
                <li key={item.href}><a href={item.href} className="text-sm font-bold text-white/75 transition hover:text-brand-yellow">{item.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="md:text-right">
            <a href={siteContent.contacts.phoneHref} className="text-lg font-black hover:text-brand-yellow">{siteContent.contacts.phone}</a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteContent.footer.copyright}</p>
          <p>{siteContent.contacts.city}</p>
        </div>
      </Container>
    </footer>
  );
}
