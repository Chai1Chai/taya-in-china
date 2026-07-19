import React, { CSSProperties } from "react";
import Image from "next/image";
import HeroBackground from "@/assets/Hero_Background.webp";
import MobileHeroBackground from "@/assets/MobileHero_Background.webp";
import HeroImage from "@/assets/hero_img.webp";


const Hero: React.FC = () => {
return (
    <section className="relative flex flex-col md:flex-row md:items-center justify-center gap-10 md:gap-30 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden min-h-[80vh]">
      
      {/* --- АДАПТИВНЫЙ ФОН ЧЕРЕЗ NEXT/IMAGE --- */}
      {/* Мобильный фон */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image
          src={MobileHeroBackground}
          alt=""
          fill
          priority
          fetchPriority="high" 
          loading="eager"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Десктопный фон */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src={HeroBackground}
          alt=""
          fill
          priority
          fetchPriority="high" 
          loading="eager"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="z-10 flex flex-col items-center mt-30 md:items-start max-w-xl">
        <h1
          className="font-[family-name:var(--font-mm9)] text-5xl text-center md:text-start md:text-6xl leading-[68px] md:leading-[84px] font-medium mb-4 text-[#636024]"
        >
          ВАШ ПУТЬ К&nbsp;ОБУЧЕНИЮ В&nbsp;КИТАЕ
        </h1>
        
        <p
          className="text-base text-center md:text-start md:text-base mb-8 text-[#000000]"
        >
          Сопровождение в университеты КНР без мифов и лишнего стресса. От подбора
          программы до зачисления.
        </p>
        
        <div className="block md:hidden w-full max-w-xs sm:max-w-sm border-[1.5px] border-[#636024] rounded-[40px] p-3 sm:p-5 mb-5 box-border">
          <Image
            src={HeroImage} 
            alt="Консультация по поступлению в университеты Китая"
            priority
            fetchPriority="high" 
            loading="eager"
            className="w-full h-auto rounded-[24px]"
          />
        </div>

        <a
          href="#contact-block"
          className="w-full py-3 rounded-full text-white bg-[#5C0F07] hover:bg-[#4A0D05] transition-all duration-200 active:scale-95 inline-block text-center"
        >
          Оставить заявку
        </a>
      </div>

      <div className="hidden md:block w-full max-w-xs lg:max-w-sm xl:max-w-md border-[1.5px] border-[#636024] rounded-[40px] p-3 md:mt-30 box-border flex-shrink-0 z-10">
        <Image
          src={HeroImage} 
          alt="Консультация по поступлению в университеты Китая" 
          priority
          fetchPriority="high" 
          loading="eager"
          className="w-full h-auto aspect-[4/5] xl:aspect-auto rounded-[30px] object-cover transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;


