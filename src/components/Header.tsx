"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/siteContent";
import { Container } from "./Container";
import { PrimaryButton } from "./Buttons";
import { Icon } from "./Icon";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-brand-purple/10 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-full items-center justify-between gap-4">
        <a href="#top" aria-label={siteContent.header.homeLabel} className="group flex shrink-0 items-center gap-2">
          <Image src={siteContent.brand.logo.src} alt={siteContent.brand.logo.alt} width={84} height={56} priority className="h-12 w-[72px] object-contain transition duration-200 group-hover:scale-105 sm:h-14 sm:w-[84px]" />
        </a>

        <nav aria-label="Основная навигация" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a className="text-sm font-bold text-ink/75 transition hover:text-brand-pink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-4 md:flex">
          <a href={siteContent.contacts.phoneHref} className="flex items-center gap-2 whitespace-nowrap font-extrabold text-brand-purple hover:text-brand-pink">
            <Icon name="phone" className="size-4" />
            {siteContent.contacts.phone}
          </a>
          <PrimaryButton href="#contacts" className="hidden lg:inline-flex !min-h-10 !px-5 !py-2 text-sm">
            {siteContent.header.cta}
          </PrimaryButton>
        </div>

        <button
          type="button"
          aria-label={open ? siteContent.header.closeMenuLabel : siteContent.header.openMenuLabel}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full bg-surface-lilac text-brand-purple transition hover:bg-[#EEE0FF] xl:hidden"
        >
          <span className="sr-only">{siteContent.header.menuLabel}</span>
          <span className="relative block h-5 w-6">
            <span className={`absolute left-0 top-0.5 h-0.5 w-6 rounded bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2.5 h-0.5 w-6 rounded bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[18px] h-0.5 w-6 rounded bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`absolute left-0 top-full w-full border-t border-brand-purple/10 bg-white px-5 pb-6 pt-3 shadow-soft transition xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Мобильная навигация">
          <ul className="grid sm:grid-cols-2">
            {siteContent.navigation.map((item) => (
              <li key={item.href}>
                <a className="block border-b border-brand-purple/5 py-3 font-bold text-ink hover:text-brand-pink" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={siteContent.contacts.phoneHref} className="font-extrabold text-brand-purple">
              {siteContent.contacts.phone}
            </a>
            <PrimaryButton href="#contacts" onClick={() => setOpen(false)} className="sm:ml-auto">
              {siteContent.header.cta}
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
