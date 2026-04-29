'use client';

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Ornament from '@/assets/ornament.svg';

import myPhoto from '@/assets/photo.png'; 
import lanternIcon from '@/assets/lantern.svg';
import lanternRedIcon from '@/assets/lanternRed.svg'; 

type TopCard = {
  title: string;
  text: string;
};

type BottomCard = {
  id: number;
  title: string;
  text: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, 
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    },
  },
};

const topCards: TopCard[] = [
  {
    title: "Высокая стоимость и недостоверная информация",
    text: "Агентства берут от 100 000 ₽ при непрозрачных условиях договора. Зачастую за эти деньги клиент получает неполную или устаревшую информацию, которая не гарантирует результат.",
  },
  {
    title: "Ограниченный список вузов",
    text: "Список университетов ограничен только теми заведениями, с которыми у агентства заключены партнёрские соглашения. Это лишает вас возможности выбрать лучший вуз под ваш индивидуальный запрос.",
  },
  {
    title: "Запугивание и навязывание посредника",
    text: "Преувеличение сложности процесса и запугивание абитуриента — частая стратегия, чтобы убедить вас, что без посредника поступить невозможно. На самом деле процесс открыт и понятен.",
  },
];

const bottomCards: BottomCard[] = [
  {
    id: 1,
    title: "Честность и прозрачность",
    text: "Информация даётся без искажений, работа ведётся с реальными условиями поступления.",
  },
  {
    id: 2,
    title: "Независимость от вузов",
    text: "Нет привязки к конкретным университетам, подбор строго под запрос клиента.",
  },
  {
    id: 3,
    title: "Поддержка в поступлении",
    text: "Самостоятельное поступление возможно, но сопровождение делает процесс проще, спокойнее и быстрее.",
  },
];

const WhyNotAgency: React.FC = () => {
  return (
    <section className="relative py-16 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      <div className="absolute -top-30 -right-30 md:-top-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none z-0">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>

      <div className="absolute -top-30 -left-30 md:-top-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none z-0">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-montserrat)] text-3xl md:text-6xl text-[#4A2418] font-base mb-12"
        >
          Почему не агентство?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28"
        >
          {topCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#EFE9D3] p-8 rounded-2xl border border-[#D9D1B8] relative min-h-[260px] shadow-sm"
            >
              <div className="absolute top-5 right-5">
                <Image src={lanternRedIcon} alt="lantern" width={32} height={32} className="-mt-5 z-10" />
              </div>

              <h3 className="text-[#4A2418] font-bold text-lg mb-4 pr-10 uppercase tracking-tight text-center translate-x-4">
                {card.title}
              </h3>

              <p className="text-[#4A2418]/80 text-sm leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-montserrat)] text-3xl md:text-6xl text-[#4A2418] font-base mb-12"
        >
          Я предлагаю:
        </motion.h2>

        <div className="flex flex-col xl:flex-row gap-12 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden xl:block xl:order-1 w-full xl:w-1/2"
          >
            <div className="relative h-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src={myPhoto}
                alt="Personal Photo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full xl:w-1/2 flex flex-col gap-5 xl:order-1 justify-between"
          >
            {bottomCards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                className="bg-[#5C0F07] p-7 rounded-3xl flex justify-between items-center relative group"
              >
                <div className="flex-1">
                  <h3 className="text-[#F8F5E9] font-bold text-xl mb-3">
                    {card.title}
                  </h3>

                  <p className="text-[#F8F5E9]/80 text-sm leading-snug">
                    {card.text}
                  </p>
                </div>
                
                <div className="-mt-5 -mr-5 md:-mt-3 md:-mr-3 w-24 h-28 rounded-2xl shrink-0 border-2 border-[#F8F5E9]/20 flex items-center justify-center">
                  <span className="text-[#F8F5E9]/10 text-6xl font-black">
                    {card.id}
                  </span>

                  <Image 
                    src={lanternIcon}
                    alt="lantern" 
                    width={35} 
                    height={35} 
                    className="absolute top-0 right-5 z-10"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyNotAgency;