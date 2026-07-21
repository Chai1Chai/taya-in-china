import type { Metadata } from "next";
import localFont from 'next/font/local';
import Script from "next/script";
import "./globals.css";
const montserrat = localFont({
  src: [
    {
      path: '../../assets/fonts/Montserrat-Regular.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Montserrat-Medium.woff2', 
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Montserrat-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Montserrat-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
});

const raleway = localFont({
  src: [
    {
      path: '../../assets/fonts/Raleway-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Raleway-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/Raleway-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-raleway',
});

const mm9Prose = localFont({
  src: '../../assets/fonts/mm9proseantiquecyr_normal.woff2',
  variable: '--font-mm9',
});

export const metadata: Metadata = {
  title: "Тая из китая | Поступление в университеты Китая и гранты",
  description: "Экспертное сопровождение при поступлении в вузы Китая. Помощь в подборе программ, оформлении документов и получении грантов. Твой путь к образованию в Китае с Таей.",
  keywords: ["образование в Китае", "учеба в Китае", "гранты в Китай", "университеты Китая", "поступление в Китай", "Тая из китая"],
  authors: [{ name: "TayaFromChina" }],
  metadataBase: new URL('https://tayafromchina.com'), // Замени на реальный домен после покупки
  
  openGraph: {
    title: "Тая из китая — Твой гид по образованию в Китае",
    description: "Профессиональная помощь в поступлении: от подбора вуза до получения визы.",
    url: 'https://tayafromchina.com',
    siteName: 'TayaFromChina',
    locale: 'ru_RU',
    type: 'website',
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${raleway.className} ${mm9Prose.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}