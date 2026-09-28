"use client";

import Image from "next/image";
import { useState } from "react";
import { siteContent, type ImageContent } from "@/content/siteContent";

type SiteImageProps = {
  image: ImageContent | Readonly<ImageContent>;
  priority?: boolean;
  sizes: string;
  className?: string;
};

export function SiteImage({ image, priority = false, sizes, className = "" }: SiteImageProps) {
  const [src, setSrc] = useState(image.src);

  return (
    <div
      className={`relative isolate overflow-hidden bg-gradient-to-br from-[#EFE4FF] via-[#FFE7F2] to-[#FFF1B8] ${className}`}
      style={{ aspectRatio: image.aspectRatio }}
    >
      <Image
        src={src}
        alt={src === siteContent.images.fallback ? "Изображение скоро появится" : image.alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        style={{ objectPosition: image.objectPosition }}
        onError={() => setSrc(siteContent.images.fallback)}
      />
    </div>
  );
}
