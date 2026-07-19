'use client';

import { useState } from "react";
// 1. Меняем motion на облегченные m и LazyMotion
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"; 
import Image from "next/image";

// 2. Импортируем ВСЕ нужные анимации из твоего нового файла
import { 
  containerVariants, 
  fadeInUpVariants, // Используем вместо старого cardVariants
  cardHoverScale // Если в файле animations.ts он называется по-другому, подставь то имя
} from "@/components/animations";

import Flower from "@/assets/Flower.webp";
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
    // 3. Добавляем провайдер анимаций для оптимизации бандла
    <LazyMotion features={domAnimation}>
      <section className="relative bg-[#FCFDED] px-4 md:px-16 lg:px-24 xl:px-32 py-20 overflow-hidden">
        
        {/* Декоративные цветы */}
        <div className="absolute left-0 bottom-0 w-70 h-auto z-0 pointer-events-none">
          <Image 
            src={Flower} 
            alt="" 
            sizes="200px" 
            className="w-full h-auto object-contain bg-transparent -scale-x-100" 
          />
        </div>

        <div className="absolute right-0 bottom-0 w-70 h-auto z-0 pointer-events-none">
          <Image 
            src={Flower} 
            alt="" 
            sizes="200px" 
            className="w-full h-auto object-contain bg-transparent" 
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Перевели h2 на легкий m.h2 */}
          <m.h2 
            className="font-[family-name:var(--font-mm9)] uppercase text-center text-4xl md:text-6xl mb-12 text-[#6B5E2E]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Услуги
          </m.h2>

          {/* Перевели контейнер на m.div и подключили импортированный containerVariants */}
          <m.div 
            className="flex flex-wrap justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants} 
          >

            {servicesList.map((item: ServiceItem) => {
              const Icon = icons[item.icon] || Scroll; 

              return (
                // Перевели карточку на m.div и подставили импортированный fadeInUpVariants
                <m.div
                  key={item.id}
                  variants={fadeInUpVariants} 
                  whileHover={cardHoverScale}
                  onClick={() => setActive(item)} 
                  className="bg-[#EEE9CB] rounded-3xl p-8 border border-[#6B5E2E]/30 flex flex-col items-center text-center w-full md:w-[calc(50%-1rem)] z-10 cursor-pointer shadow-sm"
                >
                  <Image 
                    src={Icon} 
                    alt={item.title} 
                    width={64} 
                    height={64} 
                    className="w-16 h-16 mb-6 object-contain"
                    unoptimized 
                  />

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
                </m.div>
              );
            })}

          </m.div>
        </div>

        {/* Модальное окно (оставляем обычный motion.div, так как AnimatePresence пока требует полные компоненты) */}
        <AnimatePresence>
          {active && (
            <m.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <m.div
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
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
};

export default Services;