"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Block01 from "@/assets/Blocks/Block01.svg";
import Block02 from "@/assets/Blocks/Block02.svg";
import Block03 from "@/assets/Blocks/Block03.svg";
import Block05 from "@/assets/Blocks/Block05.svg";
import Block06 from "@/assets/Blocks/Block06.svg";
import Block07 from "@/assets/Blocks/Block07.webp";
import lanterngreen from "@/assets/lantern02.svg";
import Ornament from "@/assets/ornament.webp";

const ExperienceSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const blockStyle = (bgSvg: { src: string }) => ({
    backgroundImage: `url(${bgSvg.src})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  });

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, duration: 0.5 },
    }),
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, duration: 0.5 },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ========================================================================= */}
      {/* ГЛОБАЛЬНЫЕ ФОНОВЫЕ ОРНАМЕНТЫ (Вынесены за пределы версий сайта) */}
      {/* ========================================================================= */}
      
      {/* Левый узор: на мобилках меньше и top-100, на md+ становится больше */}
      <div className="absolute -left-50 top-100 w-100 h-100 md:w-150 md:h-150 pointer-events-none z-0 opacity-50">
        <Image src={Ornament} alt="" fill className="object-contain object-left" />
      </div>

      {/* Правый узор: на мобилках -right-55, начиная с md сдвигается на -right-80 и растет */}
      <div className="absolute -right-50 md:-right-80 top-0 w-100 h-100 md:w-150 md:h-150 pointer-events-none z-0 opacity-50">
        <Image src={Ornament} alt="" fill className="object-contain object-left" />
      </div>

      {/* ========================================================================= */}
      {/* 1. ВЕРСИЯ ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ (До 768px включительно) */}
      {/* ========================================================================= */}
      <div className="md:hidden block relative z-10 max-w-6xl mx-auto py-10 px-4">
        <div className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="mb-8 flex items-center gap-5"
          >
            <h2 className="font-[family-name:var(--font-mm9)] text-5xl text-[#636024] text-center md:text-left">
              МОЙ ОПЫТ!
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 items-start">
            <div className="bg-[#FCFDED] p-6 text-center text-sm font-semibold leading-relaxed text-[#4a4a2a] border-2 border-[#636024]/20 rounded-2xl">
              В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги.
              В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
            </div>

            <div className="space-y-4">
              <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-xl p-4">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full flex justify-between items-center font-bold text-[#7a3015]"
                >
                  <span>Проблема недостоверной информации</span>
                  <span className="text-2xl">{openIndex === 0 ? "−" : "+"}</span>
                </button>

                {openIndex === 0 && (
                  <p className="mt-2 text-sm text-[#4a4a2a]">
                    When I was going through this path, I lacked the most important thing — clear and honest information. Very often they either omit things or give incomplete information, or simply don't say it the way it really is. Now many things seem obvious, but when you're just starting out, you don't understand who to believe.
                  </p>
                )}
              </div>

              <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-xl p-4">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex justify-between items-center font-bold text-[#7a3015]"
                >
                  <span>Мои принцип работы</span>
                  <span className="text-2xl">{openIndex === 1 ? "−" : "+"}</span>
                </button>

                {openIndex === 1 && (
                  <p className="mt-2 text-sm text-[#4a4a2a]">
                    И именно поэтому сейчас в работе для меня важно не усложнять процесс, а наоборот — объяснять каждый этап так, чтобы человеку было спокойно и понятно, что происходит и что делать дальше.
                  </p>
                )}
              </div>

              <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-xl p-4">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex justify-between items-center font-bold text-[#7a3015]"
                >
                  <span>Мифы</span>
                  <span className="text-2xl">{openIndex === 2 ? "−" : "+"}</span>
                </button>

                {openIndex === 2 && (
                  <p className="mt-2 text-sm">
                    «На англоязычные программы нет грантов» — <span className="text-[#7a3015]">есть</span>
                    <br />
                    «С вашим уровнем языка возьмут куда угодно» — <span className="text-[#7a3015]">это миф</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. ВЕРСИЯ ДЛЯ ПЛАНШЕТОВ (От 769px до 1224px включительно) */}
      {/* ========================================================================= */}
      <div className="min-[769px]:max-[1224px]:block hidden relative w-full">
        <div className="relative z-10 max-w-4xl mx-auto py-16 px-8 flex flex-col gap-6 text-[#4a4a2a]">
          
          <div className="flex items-center justify-start gap-4 mb-4">
            <h2 className="font-[family-name:var(--font-mm9)] text-6xl text-[#636024]">
              МОЙ ОПЫТ!
            </h2>
            <div
              className="w-14 h-14 bg-[#636024]"
              style={{
                maskImage: `url(${lanterngreen.src})`,
                WebkitMaskImage: `url(${lanterngreen.src})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
          </div>

          <div className="bg-[#FCFDED] border-2 border-[#636024]/30 rounded-2xl p-8 text-center text-base leading-relaxed font-medium shadow-sm">
            В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги. В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
          </div>

          <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-[#7a3015] text-lg mb-2">Проблема недостоверной информации</h3>
            <p className="text-base leading-relaxed">
              Когда я проходила этот путь, мне не хватало самого главного — понятной и честной информации. Очень часто либо не договаривают, либо дают неполную информацию. Сейчас многие вещи кажутся очевидными, но когда ты только начинаешь, ты не понимаешь, кому верить. Только со временем становится ясно, как всё устроено.
            </p>
          </div>

          <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-[#7a3015] text-lg mb-2">Мой принцип работы</h3>
            <p className="text-base leading-relaxed">
              Для меня важно не усложнять процесс, а наоборот — объяснять каждый этап так, чтобы человеку было спокойно и понятно.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-2xl p-5 text-center flex items-center justify-center shadow-sm">
              <p className="text-base font-bold">
                «На англоязычные программы нет грантов» — <span className="text-[#7a3015]">есть</span>
              </p>
            </div>
            <div className="bg-[#FCFDED] border-2 border-[#636024]/20 rounded-2xl p-5 text-center flex items-center justify-center shadow-sm">
              <p className="text-base font-bold">
                «С вашим уровнем языка возьмут куда угодно» — <span className="text-[#7a3015]">это миф</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. ВЕРСИЯ ДЛЯ ДЕСКТOПА (От 1225px и выше) */}
      {/* ========================================================================= */}
      <div className="min-[1225px]:block hidden relative w-full">
        <div className="relative z-10 max-w-6xl mx-auto py-20 px-16 lg:px-24 xl:px-32">
          
          <div className="absolute top-50 left-30 w-100 h-300 pointer-events-none">
            <Image src={Block02} alt="" fill className="object-contain object-left" />
          </div>

          <div className="absolute top-50 right-30 w-118 h-300 pointer-events-none">
            <Image src={Block07} alt="" fill className="object-contain object-right" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="relative z-10 mb-5 flex items-center gap-5"
          >
            <h2 className="font-[family-name:var(--font-mm9)] text-8xl text-[#636024] text-left">
              МОЙ ОПЫТ!
            </h2>

            <div
              className="w-20 h-20 bg-[#636024]"
              style={{
                maskImage: `url(${lanterngreen.src})`,
                WebkitMaskImage: `url(${lanterngreen.src})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
              }}
            />
          </motion.div>

          <div className="relative z-10 grid grid-cols-12 gap-12 items-start">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="col-span-12 p-12 text-center text-lg leading-relaxed text-[#4a4a2a]"
              style={blockStyle(Block01)}
            >
              В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги. В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
            </motion.div>

            <div className="col-span-6 -space-y-8 text-center translate-x-20">
              <motion.div
                custom={0.4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="p-12 text-start text-xl leading-relaxed"
                style={blockStyle(Block05)}
              >
                <h3 className="font-bold text-[#7a3015] mb-1">
                  Проблема недостоверной информации
                </h3>
                <p className="text-lg">
                  Когда я проходила этот путь, мне не хватало самого главного — понятной и честной информации. Очень часто либо не договаривают, либо дают неполную информацию.
                </p>
              </motion.div>

              <motion.div
                custom={0.6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="p-12 text-start text-base leading-relaxed"
                style={blockStyle(Block03)}
              >
                <p className="text-lg italic">
                  Сейчас многие вещи кажутся очевидными, но когда ты только начинаешь, ты не понимаешь, кому верить. Только со временем становится ясно, как всё устроено.
                </p>
              </motion.div>

              <motion.div
                custom={0.8}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="p-12 text-start text-lg leading-relaxed"
                style={blockStyle(Block03)}
              >
                <h3 className="font-bold text-[#7a3015] mb-2">Мой принцип работы</h3>
                <p className="text-lg">
                  Для меня важно не усложнять процесс, а наоборот — объяснять каждый этап так, чтобы человеку было спокойно и понятно.
                </p>
              </motion.div>
            </div>

            <div className="col-span-5 flex flex-col gap-6 text-center text-lg leading-relaxed translate-x-30 translate-y-2">
              <motion.div
                custom={1.0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="p-5 self-end text-center"
                style={blockStyle(Block06)}
              >
                <p className="p-5 text-lg font-bold">
                  «На англоязычные программы нет грантов» —{" "}
                  <span className="text-[#7a3015]">есть</span>
                </p>
              </motion.div>

              <motion.div
                custom={1.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="p-4 self-start text-center"
                style={blockStyle(Block06)}
              >
                <p className="p-5 text-lg font-bold">
                  «С вашим уровнем языка возьмут куда угодно» —{" "}
                  <span className="text-[#7a3015]">это миф</span>
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default ExperienceSection;