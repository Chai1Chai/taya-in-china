'use client';

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import SupportImage from "@/assets/IMG.webp";

// Импортируем готовые анимации из твоего общего файла
import { 
  containerVariants, 
  fadeInUpVariants,   // Это твои бывшие itemVariants (y: 30 / y: 20)
  fadeInRightVariants // Это твои бывшие imageVariants (x: 50)
} from "@/components/animations";

const Support: React.FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex flex-col lg:flex-row mt-20 items-center justify-center gap-20 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 overflow-hidden">

        <m.div
          className="w-full flex flex-col items-center lg:items-start max-w-xl z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <m.h1
            variants={fadeInUpVariants}
            className="font-[family-name:var(--font-mm9)] uppercase w-full font-medium md:text-center lg:text-start text-3xl md:text-6xl mb-4 text-[#636024] leading-tight sm:leading-snug xl:leading-[84px]"
          >
            Сопровождение по&nbsp;поступлению
          </m.h1>

          <m.p
            variants={fadeInUpVariants}
            className="text-base md:text-center lg:text-start mb-8 text-[#636024]"
          >
            Полное сопровождение на всех этапах поступления — от подготовки
            до зачисления и адаптации после приезда.
          </m.p>

          <m.p
            variants={fadeInUpVariants}
            className="text-sm md:text-base mb-8 text-[#5E0F08] font-semibold"
          >
            Постоянная связь и поддержка на протяжении всего процесса
          </m.p>

          <a
            href="#contact-block"
            className="w-full mt-10 py-3 rounded-full text-white bg-[#636024] hover:bg-[#5B581F] transition-colors duration-200 active:scale-95 text-center"
          >
            Оставить заявку
          </a>
        </m.div>

        <m.div
          className="hidden lg:block w-full max-w-xs xl:max-w-md rounded-[40px] overflow-hidden flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRightVariants}
        >
          <Image
            src={SupportImage}
            alt="Сопровождение при поступлении"
            className="w-full h-auto aspect-[4/5] xl:aspect-auto rounded-[40px] object-cover"
            loading="lazy"
            quality={75}
          />
        </m.div>

      </section>
    </LazyMotion>
  );
};

export default Support;