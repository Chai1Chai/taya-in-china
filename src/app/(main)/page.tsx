export const revalidate = 60;
import { getPayload } from 'payload'
import dynamic from 'next/dynamic'
import configPromise from '@payload-config'
// Элементы первого экрана и структуры оставляем обычными импортами
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

// ВСЕ нижние секции, которые не видны при открытии, загружаем динамически (lazy load)!
const Support = dynamic(() => import("@/components/sections/Support"));
const Stepper = dynamic(() => import("@/components/sections/Stepper"));
const ConstTabble = dynamic(() => import("@/components/sections/ConstTabble"));
const AboutMe = dynamic(() => import("@/components/sections/AboutMe"));
const MyExperience = dynamic(() => import("@/components/sections/MyExperience"));
const Info = dynamic(() => import("@/components/sections/Info"));
const Cities = dynamic(() => import("@/components/sections/Cities"));
const Universities = dynamic(() => import("@/components/sections/Universities"));
const WhyNotAgency = dynamic(() => import("@/components/sections/WhyNotAgency"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Testimonial = dynamic(() => import('@/components/sections/Testimonial'));
const ContactBlock = dynamic(() => import("@/components/sections/ContactBlock"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default async function Home() {
  const payload = (await getPayload({ config: configPromise })) as any

  const [universitiesData, servicesData, costTableData, reviewsData] = await Promise.all([
    payload.find({ collection: 'universities', depth: 1, limit: 36 }),
    payload.find({ collection: 'services', depth: 1, limit: 10 }),
    payload.find({ collection: 'costtable', depth: 1, limit: 10 }),
    payload.find({ collection: 'reviews', depth: 1, limit: 50 })
  ]);

  return (
    <main>
      <div id="hero"><Hero /></div>
      <Navbar />
      <div id="services"><Services data={servicesData.docs} /></div>
      
      {/* Эти блоки загрузятся в фоновом режиме, не мешая первому экрану */}
      <div id="support"><Support /></div>
      <div id="stepper"><Stepper /></div>
      <div id="const-table"><ConstTabble data={costTableData.docs}/></div>
      <div id="about-me"><AboutMe /></div>
      <div id="my-experience"><MyExperience /></div>
      <div id="info"><Info /></div>
      <div id="cities"><Cities /></div>
      <div id="universities">
        <Universities data={universitiesData.docs} />
      </div>
      <div id="why-not-agency"><WhyNotAgency /></div>
      <div id="faq"><FAQ /></div>
      <div id="testimonial"><Testimonial data={reviewsData.docs}/></div>
      <div id="contact-block"><ContactBlock /></div>
      <div id="footer"><Footer /></div>
    </main>
  );
}