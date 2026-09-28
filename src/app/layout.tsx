import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Онлайн логопед для детей | Развитие речи и подготовка к школе",
  description:
    "Онлайн-занятия с логопедом для детей: постановка звуков, развитие речи, грамотность и уверенность в общении.",
  applicationName: "Онлайн логопед",
  keywords: [
    "логопед для детей",
    "онлайн логопед",
    "развитие речи",
    "постановка звуков",
    "подготовка к школе",
  ],
  openGraph: {
    title: "Онлайн логопед для детей",
    description:
      "Помогаю детям говорить правильно, уверенно и свободно через комфортные онлайн-занятия.",
    url: "https://example.com",
    siteName: "Онлайн логопед",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Онлайн логопед для детей",
    description:
      "Индивидуальные занятия для детей по развитию речи и постановке звуков онлайн.",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
