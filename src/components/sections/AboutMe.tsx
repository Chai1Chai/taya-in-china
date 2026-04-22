"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import AboutMeBackground from "@/assets/AboutMeBackground.png";
import Photo from "@/assets/AboutMephoto.png";
import Fan from "@/assets/fan.svg";
import Lantern from "@/assets/lantern.svg";

import TG from "@/assets/AboutMeTelegramLogo.svg";
import YT from "@/assets/AboutMeYoutubeLogo.svg";
import TT from "@/assets/AboutMeTiktokLogo.svg";

const AboutMe = () => {
  const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const socialLinks = [
    { src: TG, id: 1, link: "https://t.me/tayainchinaa" },
    { src: TT, id: 2, link: "https://www.tiktok.com/@moretayya?_r=1&_t=ZS-95JZMFQiqG5" },
    { src: YT, id: 3, link: "https://youtube.com/@moretnow?si=qDe8RojnoYjSU4jB" },
  ];

  return (
    <section className="relative py-20 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden font-[family-name:var(--font-raleway)]">
      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${AboutMeBackground.src})`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
          className="font-[family-name:var(--font-mm9)] text-5xl md:text-8xl text-[#6B6B2E] mb-5 text-center md:text-left"
        >
          ОБО МНЕ
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Блок с фото */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-4 border-[#6B6B2E] p-2 bg-white/30"
          >
            <Image
              src={Photo}
              alt="Фото Таисии"
              className="w-[280px] md:w-[350px] xl:w-[400px] object-cover h-auto"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold text-[#6B6B2E] flex items-center gap-2 mb-3">
              Меня зовут Тая
              <img src={Fan.src} className="w-8 xl:w-10" alt="icon fan" />
            </h3>

            <p className="text-[#6B0F0F] text-base md:text-2xl mb-6 max-w-md font-normal">
              Я живу и учусь в Китае уже почти три года и помогаю поступать в китайские университеты.
            </p>

            <div className="relative bg-[#6B6B2E] text-white px-10 py-4 rounded-4xl flex items-center mb-6 max-w-md xl:max-w-xl md:mt-10 xl:mt-15">
              <img src={Lantern.src} className="w-8 absolute top-0 left-4" alt="lantern icon" />
              <p className="text-base ml-6 xl:text-xl text-left">
                Параллельно я веду блог о жизни и учёбе в Китае: YouTube, Telegram, TikTok, где делюсь реальным опытом.
              </p>
            </div>

            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ backgroundColor: "#4A4A1F", scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 xl:w-12 xl:h-12 bg-[#6B6B2E] rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <img src={social.src.src} className="w-5 xl:w-7" alt="social icon" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 border border-[#6B6B2E] rounded-3xl bg-[#EEE9CB]/80 p-6 md:text-lg text-center text-[#6B0F0F] max-w-4xl mx-auto"
        >
          Я помогаю поступать <span className="font-semibold">как в доступные и понятные варианты</span>, 
          так и в <span className="font-semibold">более сильные университеты</span> — в зависимости от целей и с предварительной оценкой шансов.
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;