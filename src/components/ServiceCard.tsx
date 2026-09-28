import type { ServiceItem } from "@/content/siteContent";
import { SiteImage } from "./SiteImage";
import { Icon } from "./Icon";

type ServiceCardProps = {
  item: ServiceItem | Readonly<ServiceItem>;
  sizes?: string;
};

export function ServiceCard({ item, sizes = "(max-width: 767px) 92vw, (max-width: 1199px) 45vw, 24vw" }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
      <div className="relative">
        <SiteImage image={item.image} sizes={sizes} />
        {item.tag ? <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1.5 text-xs font-black text-brand-purple shadow-sm">{item.tag}</span> : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-black leading-tight text-brand-purple sm:text-2xl">{item.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-6 text-ink/70 sm:text-base">{item.description}</p>
        <a href={item.href} className="mt-5 inline-flex items-center gap-2 self-start font-extrabold text-brand-pink transition hover:gap-3 hover:text-[#C9006D]">
          {item.cta}
          <span className="grid size-8 place-items-center rounded-full bg-surface-blush"><Icon name="arrow" className="size-4" /></span>
        </a>
      </div>
    </article>
  );
}
