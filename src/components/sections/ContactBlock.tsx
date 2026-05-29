"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "@/assets/photoContact.webp";
import fish01 from "@/assets/fish01.svg";
import fish02 from "@/assets/fish02.svg";
import tgicon from "@/assets/TelegramLogo.svg";
import vkicon from "@/assets/VKLogo.svg";
import Ornament from "@/assets/ornament.webp";

const ContactBlock = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="font-[family-name:var(--font-montserrat)] w-full flex justify-center py-10 px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
      {/* Фоновые орнаменты */}
      <div className="absolute -top-50 md:-top-80 -left-55 w-100 h-100 md:w-160 md:h-160 pointer-events-none opacity-50">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      <div className="absolute -bottom-50 md:-bottom-90 -right-55 w-100 h-100 md:w-160 md:h-160 pointer-events-none opacity-50">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      {/* Контейнер: на мобилках flex-col, на планшетах md карточка центрируется, от lg встает в ряд с фото */}
      <div className="z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-20 px-4">
        
        {/* Картинка: block (на мобилках) -> md:hidden (скрыта на планшетах) -> lg:block (на десктопе) */}
        <div className="block md:hidden lg:block w-full max-w-[320px] xl:max-w-md rounded-[40px] box-border overflow-hidden flex-shrink-0 order-2 lg:order-1">
          <Image
            src={photo} 
            alt="Сопровождение в поступление"
            className="w-full h-auto xl:aspect-auto rounded-[40px] object-cover transition-all duration-300"
          />
        </div>

        {/* Твоя монолитная карточка */}
        <div className="relative order-1 lg:order-2 bg-[#EEE9CB] rounded-[30px] px-8 py-10 w-full max-w-md text-center flex-shrink-0">
          <Image
            src={fish01}
            alt="fish"
            className="absolute hidden md:block md:-top-5 md:-left-15 md:w-60"
          />

          <Image
            src={fish02}
            alt="fish"
            className="absolute hidden md:block md:-top-12 md:-right-20 w-20 md:w-45"
          />

          <h2 className="text-2xl md:text-3xl font-normal text-[#5C0F07] mt-10 mb-5 md:p-10">
            Связаться со мной для записи
          </h2>

          <p className="text-sm text-[#5C0F07]">
            Если откликается мой формат работы или остались вопросы — напишите мне, я с радостью отвечу
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://t.me/tayafromchina"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex mt-15 md:mt-30 items-center justify-center bg-[#6B1E12] text-white py-3 rounded-full transition-all duration-300 hover:bg-[#4f140c] active:scale-95 px-6"
            >
              <img
                src={tgicon.src}
                alt="tg"
                className="absolute left-6 w-5 invert brightness-0"
              />
              <span className="pl-5 text-sm md:text-base">Написать в Telegram</span>
            </a>

            <a
              href="https://vk.com/tayafromchina"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center bg-[#6B1E12] text-white py-3 rounded-full transition-all duration-300 hover:bg-[#4f140c] active:scale-95 px-6"
            >
              <img
                src={vkicon.src}
                alt="vk"
                className="absolute left-6 w-5 invert brightness-0"
              />
              <span className="text-sm md:text-base pl-1">Написать в VK</span>
            </a>
          </div>

          <p className="text-xs text-[#6B4B3E] mt-6">
            Обычно отвечаю в течение дня
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactBlock;