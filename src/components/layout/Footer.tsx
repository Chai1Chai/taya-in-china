"use client";

import TGImage from "@/assets/TelegramLogo.svg";
import VKImage from "@/assets/VKLogo.svg";
import TiktokImage from "@/assets/TiktokLogo.svg";
import YoutubeImage from "@/assets/YoutubeLogo.svg";
import EnvelopeImage from "@/assets/Envelope.svg";

const Footer = () => {
  return (
    <footer className="font-[family-name:var(--font-montserrat)] bg-[#5E0F08] text-white px-4 md:px-16 lg:px-24 xl:px-32 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl mb-6">Контакты для связи</h3>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/tayafromchina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img src={TGImage.src} alt="telegram" className="w-5 h-5" />
              </a>
              <span>@tayafromchina</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://vk.ru/tayafromchina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img src={VKImage.src} alt="telegram" className="w-5 h-5" />
              </a>
              <span>vk.ru/tayafromchina</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="hidden md:flex text-xl mb-6 font-semibold">
            Навигация
          </h3>

          <ul className="hidden md:flex flex-col gap-3 text-sm text-white/80">
            <li>
              <a
                href="#hero"
                className="hover:text-white transition-colors duration-200"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors duration-200"
              >
                Услуги
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="hover:text-white transition-colors duration-200"
              >
                Обо мне
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="hover:text-white transition-colors duration-200"
              >
                О работе
              </a>
            </li>
            <li>
              <a
                href="#universities"
                className="hover:text-white transition-colors duration-200"
              >
                Вузы
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-white transition-colors duration-200"
              >
                Отзывы
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-white transition-colors duration-200"
              >
                Вопросы
              </a>
            </li>
            <li>
              <a
                href="#contact-block"
                className="hover:text-white transition-colors duration-200"
              >
                Контакты
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div>
            <h3 className="text-xl mb-4">Соц сети</h3>

            <div className="flex gap-4 mb-6">
              <a
                href="https://youtube.com/@moretnow?si=qDe8RojnoYjSU4jB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={YoutubeImage.src}
                  alt="telegram"
                  className="w-6 h-6"
                />
              </a>

              <a
                href="https://t.me/tayainchinaa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img src={TGImage.src} alt="telegram" className="w-5 h-5" />
              </a>

              <a
                href="https://www.tiktok.com/@moretayya?_r=1&_t=ZS-95JZMFQiqG5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={TiktokImage.src}
                  alt="telegram"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl mb-4">Для предложений</h3>

            <div className="flex items-center gap-4">
              <a
                href="mailto:taya.projects@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:scale-105 transition"
              >
                <img
                  src={EnvelopeImage.src}
                  alt="telegram"
                  className="w-5 h-5"
                />
              </a>

              <span>taya.projects@icloud.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;