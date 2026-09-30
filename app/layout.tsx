import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kristianborisov.com"),
  title: {
    default: "Kristian Borisov — Видеограф",
    template: "%s — Kristian Borisov",
  },
  description:
    "Видео продукция за спорт, брандове, бизнеси и събития в България.",
  openGraph: {
    title: "Kristian Borisov — Видеограф",
    description:
      "Видео продукция за спорт, брандове, бизнеси и събития в България.",
    locale: "bg_BG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
