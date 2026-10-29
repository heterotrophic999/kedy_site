import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kedynsk.ru"),
  title: "КЕДЫ — детские праздники Новосибирск",
  description:
    "КЕДЫ — детские праздники в Новосибирске. Аниматоры, вечеринки, шоу-программы и праздники под ключ для детей.",
  keywords: [
    "Кеды детские праздники Новосибирск",
    "детские праздники Новосибирск",
    "аниматоры Новосибирск",
    "детский день рождения Новосибирск",
    "организация детских праздников",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/images/brand/kedy-logo-transparent.png?v=2", type: "image/png" }],
    shortcut: "/images/brand/kedy-logo-transparent.png?v=2",
    apple: "/images/brand/kedy-logo-transparent.png?v=2",
  },
  openGraph: {
    title: "КЕДЫ — детские праздники Новосибирск",
    description: "Аниматоры, вечеринки, шоу-программы и детские праздники под ключ в Новосибирске.",
    url: "/",
    siteName: "КЕДЫ — детские праздники Новосибирск",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/images/hero/hero-pink-animator.webp",
        alt: "КЕДЫ — организация детских праздников в Новосибирске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "КЕДЫ — детские праздники Новосибирск",
    description: "Аниматоры, шоу и готовые программы детских праздников в Новосибирске.",
    images: ["/images/hero/hero-pink-animator.webp"],
  },
};

const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "КЕДЫ — детские праздники Новосибирск",
  alternateName: "КЕДЫ",
  url: "https://kedynsk.ru",
  logo: "https://kedynsk.ru/images/brand/kedy-logo-header.webp",
  image: "https://kedynsk.ru/images/hero/hero-pink-animator.webp",
  description: "Организация детских праздников, аниматоры, вечеринки и шоу-программы в Новосибирске.",
  telephone: "+79609602652",
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Новосибирск",
    addressRegion: "Новосибирская область",
    addressCountry: "RU",
  },
  areaServed: {
    "@type": "City",
    name: "Новосибирск",
  },
  sameAs: [
    "https://vk.ru/lkobrucheva",
    "https://t.me/kobrucheva",
    "https://wa.me/qr/Y2LCONT5J7CMH1",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F2FF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
