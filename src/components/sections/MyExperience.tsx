"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Block01 from "@/assets/Blocks/Block01.svg";
import Block02 from "@/assets/Blocks/Block02.svg";
import Block03 from "@/assets/Blocks/Block03.svg";
import Block04 from "@/assets/Blocks/Block04.svg";
import Block05 from "@/assets/Blocks/Block05.svg";
import Block06 from "@/assets/Blocks/Block06.svg";
import Block07 from "@/assets/Blocks/Block07.svg";
import lanterngreen from "@/assets/lantern02.svg";
import Ornament from "@/assets/ornament.svg";

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
      <div className="absolute -left-50 top-100 w-100 h-100 md:w-150 md:h-150 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-contain object-left" />
      </div>

      <div className="absolute -right-50 md:-right-80 top-0 w-100 h-100 md:w-150 md:h-150 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-contain object-left" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-10 md:pb-10 md:py-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="absolute top-50 left-30 w-100 h-300 pointer-events-none">
          <Image src={Block02} alt="" fill className="hidden lg:block object-contain object-left" />
        </div>

        <div className="absolute top-50 right-30 w-118 h-300 pointer-events-none">
          <Image src={Block07} alt="" fill className="hidden lg:block object-contain object-right" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="relative z-10 mb-8 md:mb-5 flex items-center gap-5"
        >
          <h2 className="font-[family-name:var(--font-mm9)] text-5xl md:text-8xl font-serif text-[#636024]">
            Мой опыт!
          </h2>

          <div
            className="w-12 h-12 md:w-20 md:h-20 bg-[#636024]"
            style={{
              maskImage: `url(${lanterngreen.src})`,
              WebkitMaskImage: `url(${lanterngreen.src})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
            }}
          />
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="hidden md:block md:col-span-12 p-8 md:p-12 text-center text-sm md:text-lg leading-relaxed text-[#4a4a2a]"
            style={blockStyle(Block01)}
          >
            В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги. В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
          </motion.div>

          <div className="bg-[#FCFDED] md:hidden md:col-span-12 p-6 md:p-12 text-center text-sm font-semibold md:text-base leading-relaxed text-[#4a4a2a] border-2 border-[#636024]/20 rounded-2xl md:border-0">
            В Китай я поступала почти самостоятельно. Почему почти? Потому что изначально мне помогала одна достаточно известная языковая школа. Но по факту она не дала того качества услуг, за которое были заплачены деньги.
            В итоге большую часть процесса я разбирала сама — от выбора университетов до требований к документам.
          </div>

          <div className="block md:hidden space-y-4">
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
                  Когда я проходила этот путь, мне не хватало самого главного — понятной и честной информации. Очень часто либо не договаривают, либо дают неполную информацию, либо просто говорят не так, как есть на самом деле. Сейчас многие вещи кажутся очевидными, но когда ты только начинаешь, ты не понимаешь, кому верить.
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

          <div className="hidden md:block md:col-span-6 -space-y-8 text-center md:translate-x-20 md:translate-y-0">
            <motion.div
              custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="p-12 text-start text-sm md:text-xl leading-relaxed"
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
              className="p-12 text-start md:text-base leading-relaxed"
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
              className="p-12 text-start text-sm md:text-lg leading-relaxed"
              style={blockStyle(Block03)}
            >
              <h3 className="font-bold text-[#7a3015] mb-2">Мой принцип работы</h3>
              <p className="text-lg">
                Для меня важно не усложнять процесс, а наоборот — объяснять каждый этап так, чтобы человеку было спокойно и понятно.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6 text-center text-sm md:text-lg leading-relaxed md:translate-x-30 md:translate-y-2">
            <motion.div
              custom={1.0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="hidden md:block p-5 self-end text-center"
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
              className="hidden md:block p-4 self-start text-center"
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
    </section>
  );
};

export default ExperienceSection;