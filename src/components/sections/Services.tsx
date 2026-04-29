'use client';

import { useState } from "react";
import { motion, AnimatePresence, Variants, TargetAndTransition } from "framer-motion"; 
import Image from "next/image";

import LeftFlower from "@/assets/LeftFlower.svg";
import RightFlower from "@/assets/RightFlower.svg";
import Gates from "@/assets/Gates.svg";
import TeaPot from "@/assets/TeaPot.svg";
import Scroll from "@/assets/Scroll.svg";
import Gong from "@/assets/Gong.svg";
import BaGua from "@/assets/BaGua.svg";
import Noodles from "@/assets/Noodles.svg";
import Drum from "@/assets/Drum.svg";
import Sage from "@/assets/Sage.svg";

const icons = {
  Gates,
  TeaPot,
  Scroll,
  Gong,   
  BaGua,  
  Noodles,
  Drum,   
  Sage,   
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const cardHover: TargetAndTransition = {
  scale: 1.02,
  y: -8,
  boxShadow: "0px 10px 25px rgba(107, 94, 46, 0.15)",
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
};

type ServiceItem = {
  id: string; 
  title: string;
  duration: string;
  price: string;
  short: string;
  full: string;
  icon: keyof typeof icons;
};


const Services = ({ data }: { data: ServiceItem[] }) => {
  const [active, setActive] = useState<ServiceItem | null>(null);

  const servicesList = data || [];

  return (
    <section className="relative bg-[#FCFDED] px-4 md:px-16 lg:px-24 xl:px-32 py-20 overflow-hidden">

      <div className="absolute left-0 bottom-0 w-60 h-auto z-0 pointer-events-none">
        <Image 
          src={LeftFlower} 
          alt="" 
          className="w-full h-auto object-contain bg-transparent" 
        />
      </div>

      <div className="absolute right-0 bottom-0 w-60 h-auto z-0 pointer-events-none">
        <Image 
          src={RightFlower} 
          alt="" 
          className="w-full h-auto object-contain bg-transparent" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.h2 
          className="font-[family-name:var(--font-montserrat)] text-center text-4xl md:text-6xl mb-12 text-[#6B5E2E]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Услуги
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >

          {servicesList.map((item: ServiceItem) => {
            const Icon = icons[item.icon] || Scroll; 

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={cardHover}
                onClick={() => setActive(item)} 
                className="bg-[#EEE9CB] rounded-3xl p-8 border border-[#6B5E2E]/30 flex flex-col items-center text-center w-full md:w-[calc(50%-1rem)] z-10 cursor-pointer shadow-sm"
              >
                <img src={Icon.src} className="w-16 mb-6" alt={item.title} />

                <h3 className="font-semibold text-2xl mb-2 text-[#6B0F0F]">
                  {item.title}
                </h3>

                <p className="text-base mb-3 text-black font-semibold">
                  <span>Длительность: {item.duration}</span>
                  <span className="block md:inline md:ml-4">
                    Стоимость: {item.price}
                  </span>
                </p>

                <p className="text-base text-gray-700 mb-4 flex-grow">
                  {item.short}
                </p>
                
                <div className="w-full flex justify-end">
                  <button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation(); 
                      setActive(item);
                    }}
                    className="text-[#6B0F0F] text-sm font-bold hover:underline"
                  >
                    Подробнее
                  </button>
                </div>
              </motion.div>
              );
              })}

        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-[#FCFDED] max-w-2xl w-full p-8 rounded-3xl overflow-y-auto max-h-[85vh] shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl text-center mb-6 text-[#6B0F0F]">
                {active.title}
              </h3>

              <p className="whitespace-pre-line text-base text-gray-800 leading-relaxed">
                {active.full}
              </p>

              <div className="flex justify-end mt-8">
                <button
                  onClick={() => setActive(null)}
                  className="px-8 py-2 bg-[#6B0F0F] text-white rounded-full font-medium transition-transform active:scale-95 hover:bg-[#5E0F08]"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;