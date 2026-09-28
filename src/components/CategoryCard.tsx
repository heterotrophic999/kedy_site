import type { ImageContent } from "@/content/siteContent";
import { Icon } from "./Icon";
import { SiteImage } from "./SiteImage";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  image: ImageContent | Readonly<ImageContent>;
  featured?: boolean;
};

export function CategoryCard({ title, description, href, image, featured = false }: CategoryCardProps) {
  return (
    <a
      href={href}
      className={`group relative overflow-hidden rounded-[28px] bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft ${
        featured ? "lg:col-span-2 xl:col-span-1" : ""
      }`}
    >
      <SiteImage image={image} sizes="(max-width: 767px) 92vw, (max-width: 1199px) 44vw, 20vw" />
      <div className="flex items-center gap-3 p-5">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black leading-tight text-brand-purple sm:text-xl">{title}</h3>
          <p className="mt-1 text-sm leading-5 text-ink/65">{description}</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-pink text-white transition group-hover:translate-x-1">
          <Icon name="arrow" className="size-5" />
        </span>
      </div>
    </a>
  );
}
