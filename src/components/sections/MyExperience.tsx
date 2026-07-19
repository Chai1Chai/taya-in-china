"use client";

import React, { useState } from "react";
import Image from "next/image";
// Импортируем облегченный LazyMotion и компонент m
import { LazyMotion, domAnimation, m } from "framer-motion";

// Импортируем общие анимации из твоего файла
import { 
  fadeInUpVariants, 
  fadeInLeftVariants, 
  fadeInRightVariants 
} from "@/components/animations";

import lanterngreen from "@/assets/lantern02.svg";
import Ornament from "@/assets/ornament.webp";
import MyExperienceImg from "@/assets/MyExperienceImg.webp";

const ExperienceSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full overflow-hidden">
        {/* ГЛОБАЛЬНЫЕ ФОНОВЫЕ ОРНАМЕНТЫ */}
        <div className="absolute -left-50 top-100 w-100 h-100 md:w-150 md:h-150 pointer-events-none z-0 opacity-50">
          <Image src={Ornament} alt="" fill className="object-contain object-left" />
        </div>
        <div className="absolute -right-50 md:-right-80 top-0 w-100 h-100 md:w-150 md:h-150 pointer-events-none z-0 opacity-50">
          <Image src={Ornament} alt="" fill className="object-contain object-left" />
        </div>

        {/* 1. ВЕРСИЯ ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ */}
        <div className="min-[899px]:hidden block relative z-10 max-w-5xl mx-auto py-10 px-4">
          <m.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            variants={fadeInUpVariants} 
            className="mb-8 flex items-center gap-5"
          >
            <h2 className="font-[family-name:var(--font-mm9)] text-5xl text-[#636024] text-center md:text-left">МОЙ ОПЫТ!</h2>
          </m.div>

          <div className="grid grid-cols-1 gap-6 items-start">
            <div className="bg-[#FCFDED] p-6 text-center text-base leading-relaxed text-[#4a4a2a] border-2 border-[#636024] rounded-2xl">
              В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги. В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
            </div>

            <div className="space-y-4">
              {[
                { title: "Проблема недостоверной информации", text: "Когда я проходила этот путь, мне не хватало самого главного — понятной и честной информации. Очень часто либо не договаривают, либо дают неполную информацию. Сейчас многие вещи кажутся очевидными, но когда ты только начинаешь, ты не понимаешь, кому верить. Только со временем становится ясно, как всё устроено." },
                { title: "Мои принцип работы", text: "И именно поэтому сейчас в работе для меня важно не усложнять процесс, а наоборот — объяснять каждый этап так, чтобы человеку было спокойно и понятно, что происходит и что делать дальше." },
                { title: "Мифы", text: <>«На англоязычные программы нет грантов» — <span className="text-[#7a3015]">есть</span><br />«С вашим уровнем языка возьмут куда угодно» — <span className="text-[#7a3015]">это миф</span></> }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FCFDED] border-2 border-[#636024] rounded-xl p-4">
                  <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex justify-between items-center font-bold text-[#7a3015]">
                    <span>{item.title}</span>
                    <span className="text-2xl">{openIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openIndex === idx && <p className="mt-2 text-base text-[#4a4a2a]">{item.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. ВЕРСИЯ ДЛЯ ДЕСКТOПА */}
        <div className="min-[900px]:block hidden relative w-full">
          <div className="max-w-7xl mx-auto py-16 px-4 md:px-16 lg:px-24 xl:px-32">
            
            <m.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUpVariants} 
              className="relative z-10 mb-8 flex items-center gap-5"
            >
              <h2 className="font-[family-name:var(--font-mm9)] text-8xl text-[#636024] text-left uppercase">Мой опыт!</h2>
              <div className="w-20 h-20 bg-[#636024]" style={{ maskImage: `url(${lanterngreen.src})`, WebkitMaskImage: `url(${lanterngreen.src})`, maskRepeat: "no-repeat", maskSize: "contain" }} />
            </m.div>
              
            <m.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.2 }} 
              variants={fadeInUpVariants} 
              transition={{ delay: 0.2 }}
              className="relative z-10 mb-12 p-8 text-center text-lg leading-relaxed text-[#4a4a2a] border-2 border-[#636024] rounded-2xl bg-[#FCFDED]"
            >
              В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги. В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
            </m.div>
              
            <div className="relative z-10 grid grid-cols-12 gap-8 items-stretch">
              {/* ЛЕВАЯ КОЛОНКА (Выезжает слева) */}
              <div className="col-span-6 border-2 border-[#636024] rounded-[32px] p-2 bg-[#FCFDED]">
                <div className="border-2 border-[#636024] rounded-[24px] p-6 h-full flex flex-col gap-6 justify-between">
                  
                  <m.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeInLeftVariants} 
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="p-6 border-2 border-[#636024] rounded-2xl bg-[#FCFDED]"
                  >
                    <h3 className="font-bold text-[#7a3015] pb-2 mb-3 text-xl border-b border-[#7a3015] font-[family-name:var(--font-montserrat)]">Проблема недостоверной информации</h3>
                    <p className="text-base text-[#4a4a2a] leading-relaxed">Когда я проходила этот путь, мне не хватало самого главного — понятной и честной информации. Очень часто либо не договаривают, либо дают неполную информацию, либо просто говорят не так, как есть на самом деле.</p>
                  </m.div>
              
                  <m.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeInLeftVariants} 
                    transition={{ delay: 0.45, duration: 0.6 }}
                    className="p-6 border-2 border-[#636024] rounded-2xl bg-[#FCFDED]"
                  >
                    <p className="text-base text-[#4a4a2a] leading-relaxed font-[family-name:var(--font-raleway)]">Сейчас многие вещи кажутся очевидными, но когда ты только начинаешь, ты не понимаешь, кому верить, что правда, а что нет. Только со временем становится ясно, как всё устроено.</p>
                  </m.div>
              
                  <m.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeInLeftVariants} 
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="p-6 border-2 border-[#636024] rounded-2xl bg-[#FCFDED]"
                  >
                    <h3 className="font-bold text-[#7a3015] pb-2 mb-3 text-xl border-b border-[#7a3015] font-[family-name:var(--font-montserrat)]">Мои принцип работы</h3>
                    <p className="text-base text-[#4a4a2a] leading-relaxed">И именно поэтому сейчас в работе для меня важно не усложнять процесс, а наоборот — объяснять каждый этап так, чтобы человеку было спокойно и понятно, что происходит и что делать дальше.</p>
                  </m.div>
              
                </div>
              </div>
              
              {/* ПРАВАЯ КОЛОНКА (Выезжает справа) */}
              <div className="col-span-6 border-2 border-[#636024] rounded-[32px] p-2 bg-[#FCFDED] relative flex flex-col min-h-[600px]">
                <div className="relative w-full h-full rounded-[24px] overflow-hidden flex-1 p-8 flex flex-col gap-5 justify-start">
                  <Image src={MyExperienceImg} alt="Фото Шанхая" fill priority className="object-cover border-2 border-[#636024] object-center z-0 rounded-[24px]" />

                  <m.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeInRightVariants} 
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative z-10 p-5 bg-[#FCFDED] border-2 border-[#636024] rounded-xl max-w-[85%] mx-auto text-center shadow-md mt-4"
                  >
                    <p className="text-base font-bold text-[#4a4a2a] leading-snug">«На англоязычные программы нет грантов» <br /><span className="text-[#7a3015] font-semibold">— есть</span></p>
                  </m.div>
              
                  <m.div 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true }} 
                    variants={fadeInRightVariants} 
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative z-10 p-5 bg-[#FCFDED] border-2 border-[#636024] rounded-xl max-w-[85%] mx-auto text-center shadow-md"
                  >
                    <p className="text-base font-bold text-[#4a4a2a] leading-snug">«С вашим уровнем языка возьмут куда угодно» <br /><span className="text-[#7a3015] font-semibold">— это миф</span></p>
                  </m.div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default ExperienceSection;