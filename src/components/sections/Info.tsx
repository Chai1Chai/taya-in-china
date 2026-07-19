'use client';

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";

// Импортируем готовые анимации
import { containerVariants, itemVariants } from "@/components/animations";

import Background from '@/assets/backgroundFAQ.webp';
import lanternRedIcon from '@/assets/lanternRed.svg';

type StatCard = {
  value: string;
  label: string;
  description: string;
};

const statsData: StatCard[] = [
  {
    value: "100+",
    label: "студентов",
    description: "Успешно поступили в университеты Китая на программы бакалавриата, магистратуры и языковые курсы."
  },
  {
    value: "100%",
    label: "довольны результатом",
    description: "Благодаря качественному сопровождению на всех этапах поступления и успешному зачислению в университет."
  },
  {
    value: "95%",
    label: "отметили ясность процесса",
    description: "Благодаря понятным объяснениям, четкому плану действий и постоянной поддержке на каждом этапе."
  }
];

const Info: React.FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section 
        className="font-[family-name:var(--font-montserrat)] w-full flex justify-center items-center py-20 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden min-h-[450px]"
        style={{
          backgroundColor: '#636024', 
          backgroundImage: `url(${Background.src})`, 
          backgroundRepeat: 'repeat',
          backgroundSize: '600px', 
        }}
      >
        {/* Контейнер для сетки карточек */}
        <m.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {statsData.map((card, index) => (
            <m.div
              key={index}
              variants={itemVariants}
              className="bg-[#F8FBEA] p-8 lg:p-10 rounded-[30px] shadow-sm flex flex-col justify-between relative min-h-[280px]"
            >
              {/* Фонарик в верхнем правом углу */}
              <div className="absolute top-2 right-6 w-15 h-15 flex items-center justify-center">
                <Image 
                  src={lanternRedIcon} 
                  alt="lantern" 
                  width={50} 
                  height={50} 
                  className="object-contain"
                />
              </div>

              {/* Контентная часть теперь тоже flex-контейнер */}
              <div className="flex flex-col h-full flex-1 justify-between">
                
                {/* Верхняя часть (число + подпись) */}
                <div className="mb-4">
                  {/* Число/Процент */}
                  <span className="block text-5xl lg:text-7xl font-semibold text-[#60110A] tracking-tight mb-2">
                    {card.value}
                  </span>
                  
                  {/* Подпись с фиксированной минимальной высотой на десктопе, чтобы текст под ней встал ровно */}
                  <h3 className="text-lg lg:text-2xl font-medium text-[#60110A] leading-tight md:min-h-[3.5rem] lg:min-h-[4rem]">
                    {card.label}
                  </h3>
                </div>

                {/* Описание — теперь всегда прижато к одному уровню */}
                <p className="text-[#60110A] text-sm lg:text-base leading-relaxed font-light opacity-90 mt-auto">
                  {card.description}
                </p>
              </div>

            </m.div>
          ))}
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default Info;