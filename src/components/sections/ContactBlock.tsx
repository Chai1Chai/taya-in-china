"use client";

import React from "react";
import Image from "next/image";
// Импортируем облегченный LazyMotion и компонент m
import { LazyMotion, domAnimation, m } from "framer-motion";

// Импортируем глобальные анимации выезда сбоку
import { fadeInLeftVariants, fadeInRightVariants } from "@/components/animations";

import photo from "@/assets/photoContact.webp";
import fish01 from "@/assets/fish01.webp";
import fish02 from "@/assets/fish02.webp";
import tgicon from "@/assets/TelegramLogo.svg";
import vkicon from "@/assets/VKLogo.svg";
import Ornament from "@/assets/ornament.webp";

const ContactBlock: React.FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="font-[family-name:var(--font-montserrat)] w-full flex justify-center py-10 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
        {/* Фоновые орнаменты */}
        <div className="absolute top-0 md:top-0 -left-50 w-100 h-100 md:w-130 md:h-130 pointer-events-none opacity-50">
          <Image src={Ornament} alt="" fill className="object-contain" />
        </div>

        <div className="absolute -bottom-20 md:-bottom-50 -right-55 w-100 h-100 md:w-130 md:h-130 pointer-events-none opacity-50">
          <Image src={Ornament} alt="" fill className="object-contain" />
        </div>

        {/* Главный контейнер */}
        <div className="z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-20 px-4">
          
          {/* Блок с фотографией (плавно выезжает слева) */}
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeftVariants}
            className="block md:hidden lg:block w-full max-w-[460px] rounded-[50px] box-border overflow-hidden flex-shrink-0 order-2 lg:order-1 border-[10px] border-[#EEE9CB]"
          >
            <Image
              src={photo} 
              alt="Сопровождение в поступление"
              quality={80}
              className="w-full h-auto xl:aspect-auto rounded-[20px] object-cover transition-all duration-300"
            />
          </m.div>

          {/* Монолитная карточка (плавно выезжает справа) */}
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRightVariants}
            className="relative order-1 lg:order-2 bg-[#EEE9CB] rounded-[30px] px-8 py-10 w-full max-w-md text-center flex-shrink-0"
          >
            {/* Декоративные рыбки */}
            <Image
              src={fish01}
              alt="fish"
              quality={80}
              className="absolute hidden md:block md:-top-5 md:-left-15 md:w-60"
            />

            <Image
              src={fish02}
              alt="fish"
              quality={80}
              className="absolute hidden md:block md:-top-12 md:-right-20 w-20 md:w-45"
            />

            <h2 className="text-2xl md:text-3xl font-normal text-[#5C0F07] mt-10 mb-5 md:p-10">
              Связаться со мной для записи
            </h2>

            <p className="text-sm text-[#5C0F07]">
              Если откликается мой формат работы или остались вопросы — напишите мне, я с радостью отвечу
            </p>

            {/* Интерактивные кнопки */}
            <div className="flex flex-col gap-4">
              <m.a
                href="https://t.me/tayafromchina"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "#4f140c" }}
                whileTap={{ scale: 0.98 }}
                className="relative flex mt-15 md:mt-30 items-center justify-center bg-[#6B1E12] text-white py-3 rounded-full transition-colors duration-300 px-6"
              >
                <img
                  src={tgicon.src}
                  alt="tg"
                  className="absolute left-6 w-5 invert brightness-0"
                />
                <span className="pl-5 text-sm md:text-base">Написать в Telegram</span>
              </m.a>

              <m.a
                href="https://vk.com/tayafromchina"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ backgroundColor: "#4f140c" }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center justify-center bg-[#6B1E12] text-white py-3 rounded-full transition-colors duration-300 px-6"
              >
                <img
                  src={vkicon.src}
                  alt="vk"
                  className="absolute left-6 w-5 invert brightness-0"
                />
                <span className="text-sm md:text-base pl-1">Написать в VK</span>
              </m.a>
            </div>

            <p className="text-xs text-[#6B4B3E] mt-6">
              Обычно отвечаю в течение дня
            </p>
          </m.div>

        </div>
      </section>
    </LazyMotion>
  );
};

export default ContactBlock;