import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kedy-prazdnik.ru"),
  title: "КЕДЫ — детские праздники в Новосибирске",
  description:
    "Яркие детские праздники в Новосибирске: аниматоры, вечеринки, шоу-программы и праздничный декор.",
  openGraph: {
    title: "КЕДЫ — детские праздники в Новосибирске",
    description: "Праздники, которые дети вспоминают с восторгом.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F8F2FF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${nunito.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
