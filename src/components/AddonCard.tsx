import type { ImageContent } from "@/content/siteContent";
import { SiteImage } from "./SiteImage";

type AddonCardProps = {
  title: string;
  description: string;
  image: ImageContent | Readonly<ImageContent>;
};

export function AddonCard({ title, description, image }: AddonCardProps) {
  return (
    <article className="group flex items-center gap-4 rounded-[24px] bg-white/90 p-3 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-4">
      <SiteImage image={image} sizes="(max-width: 767px) 33vw, 150px" className="w-24 shrink-0 rounded-[18px] sm:w-28" />
      <div className="min-w-0 py-2 pr-2">
        <h3 className="text-lg font-black leading-tight text-brand-purple sm:text-xl">{title}</h3>
        <p className="mt-1.5 text-sm leading-5 text-ink/65 sm:text-[15px]">{description}</p>
      </div>
    </article>
  );
}
