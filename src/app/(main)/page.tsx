export const dynamic = 'force-dynamic';
export const revalide = 60;
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Support from "@/components/sections/Support";
import Stepper from "@/components/sections/Stepper";
import ConstTabble from "@/components/sections/ConstTabble";
import AboutMe from "@/components/sections/AboutMe";
import MyExperience from "@/components/sections/MyExperience";
import WhyNotAgency from "@/components/sections/WhyNotAgency";
import FAQ from "@/components/sections/FAQ";
import ContactBlock from "@/components/sections/ContactBlock";
import Info from "@/components/sections/Info";
import Cities from "@/components/sections/Cities";
import Universities from "@/components/sections/Universities";
import Testimonial from '@/components/sections/Testimonial';

export default async function Home() {
  // Work around stale Payload generated types in this project setup.
  const payload = (await getPayload({ config: configPromise })) as any
  const universitiesData = await payload.find({
    collection: 'universities',
    depth: 1,
    limit: 36,
  })
  const servicesData = await payload.find({
    collection: 'services',
    depth: 1,
    limit: 10,
  })
  const CostTable = await payload.find({
    collection: 'costtable',
    depth: 1,
    limit: 10,
  })
  const Reviews = await payload.find({
    collection: 'reviews',
    depth: 1,
    limit: 50,
  })
  return (
    <main>
      <div id="hero"><Hero /></div>
      <Navbar />
      <div id="services"><Services data={servicesData.docs} /></div>
      <div id="support"><Support /></div>
      <div id="stepper"><Stepper /></div>
      <div id="const-table"><ConstTabble data={CostTable.docs}/></div>
      <div id="about-me"><AboutMe /></div>
      <div id="my-experience"><MyExperience /></div>
      <div id="info"><Info /></div>
      <div id="cities"><Cities /></div>
      <div id="universities">
        <Universities data={universitiesData.docs} />
      </div>
      <div id="why-not-agency"><WhyNotAgency /></div>
      <div id="faq"><FAQ /></div>
      <div id="testimonial"><Testimonial data={Reviews.docs}/></div>
      <div id="contact-block"><ContactBlock /></div>
      <div id="footer"><Footer /></div>
    </main>
  );
}