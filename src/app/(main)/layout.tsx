import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import localFont from 'next/font/local';
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
});

const mm9Prose = localFont({
  src: '../../assets/fonts/mm9proseantiquecyr_normal.ttf',
  variable: '--font-mm9',
});

export const metadata: Metadata = {
  title: "TayaInChina | Поступление в университеты Китая и гранты",
  description: "Экспертное сопровождение при поступлении в вузы Китая. Помощь в подборе программ, оформлении документов и получении грантов. Твой путь к образованию в Китае с Таей.",
  keywords: ["образование в Китае", "учеба в Китае", "гранты в Китай", "университеты Китая", "поступление в Китай", "TayaInChina"],
  authors: [{ name: "TayaInChina" }],
  metadataBase: new URL('https://taya-in-china.ru'), // Замени на реальный домен после покупки
  
  openGraph: {
    title: "TayaInChina — Твой гид по образованию в Китае",
    description: "Профессиональная помощь в поступлении: от подбора вуза до получения визы.",
    url: 'https://taya-in-china.ru',
    siteName: 'TayaInChina',
    locale: 'ru_RU',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
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
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108696324', 'ym');

            ym(108696324, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108696324"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}