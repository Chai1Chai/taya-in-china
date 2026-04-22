"use client";

import Image from "next/image";
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion"; 
import Ornament from '@/assets/ornament.svg';
import GreenFlowerIcon from "@/assets/greenflower.svg";
import RedFlowerIcon from "@/assets/redflower.svg";

interface UniversityFromPayload {
  id: string;
  name: string;
  location: string;
  description?: string | null;
  logo?: {
    url?: string | null;
  } | null;
}

const Universities = ({ data }: { data: UniversityFromPayload[] }) => {
  const [activeCity, setActiveCity] = useState("Все города");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  const universities = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    
    return data.map(uni => ({
      id: uni.id,
      cityId: uni.location,
      name: uni.name,
      description: uni.description || '',
      image: uni.logo?.url || '/fallback-uni.png' 
    }));
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
  }, [itemsPerPage, activeCity]);

  const cityList = useMemo(() => {
    const cities = universities.map(uni => uni.cityId); 
    return ["Все города", ...new Set(cities)];
  }, [universities]);

  const filteredUnis = useMemo(() => {
    if (activeCity === "Все города") return universities;
    return universities.filter(uni => uni.cityId === activeCity);
  }, [activeCity, universities]);

  const totalPages = Math.ceil(filteredUnis.length / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector('.uni-card') as HTMLElement;

      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = window.innerWidth < 768 ? 0 : 34;
        const pageWidth = (cardWidth * itemsPerPage) + (gap * (itemsPerPage - 1));

        container.scrollTo({
          left: page * pageWidth,
          behavior: 'smooth'
        });
        setCurrentIndex(page);
      }
    }
  };

  const nextSlide = () => scrollToPage(currentIndex < totalPages - 1 ? currentIndex + 1 : 0);
  const prevSlide = () => scrollToPage(currentIndex > 0 ? currentIndex - 1 : totalPages - 1);


  if (!universities.length) return null;

  return (
    <section className="relative py-20 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      {[ 
        "bottom-[-7.5rem] right-[-7.5rem] md:bottom-[-13.75rem] md:right-[-13.75rem]",
        "bottom-[-7.5rem] left-[-7.5rem] md:bottom-[-13.75rem] md:left-[-13.75rem]",
        "top-[-7.5rem] right-[-7.5rem] md:top-[-13.75rem] md:right-[-13.75rem]",
        "top-[-7.5rem] left-[-7.5rem] md:top-[-13.75rem] md:left-[-13.75rem]"
      ].map((pos, i) => (
        <div key={i} className={`absolute w-60 h-60 md:w-110 md:h-110 pointer-events-none z-0 ${pos}`}>
          <Image src={Ornament} alt="" fill className="object-contain" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-6xl font-normal text-center mb-12 md:mb-16 text-[#636024]">
          Университеты
        </h2>

        <div className="mb-10 relative z-30 max-w-[400px] mx-auto">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border border-[#636024]/30 px-6 py-3 rounded-xl flex justify-between items-center text-[#636024] shadow-sm transition-all active:scale-[0.98]"
          >
            <span className="font-medium">{activeCity}</span>
            <span className={`text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 w-full mt-2 bg-white border border-amber-100 rounded-2xl shadow-xl max-h-60 overflow-y-auto z-50"
              >
                {cityList.map(city => (
                  <div 
                    key={city}
                    className={`px-6 py-3 hover:bg-[#636024] hover:text-white cursor-pointer transition-colors ${activeCity === city ? 'bg-[#636024]/10' : ''}`}
                    onClick={() => { setActiveCity(city); setIsOpen(false); }}
                  >
                    {city}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative px-2 md:px-10">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/80 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-sm"
          >
            ❮
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/80 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-sm"
          >
            ❯
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden scroll-smooth gap-0 md:gap-6"
          >
            {filteredUnis.map((uni) => (
              <article 
                key={uni.id} 
                className="uni-card flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)] p-2"
              >
                <div className="bg-[#EAE6D6] rounded-[2rem] overflow-hidden h-full flex flex-col border border-white/40 shadow-sm transition-transform hover:translate-y-[-4px]">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <Image 
                      src={uni.image} 
                      alt={uni.name} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
                    <h3 className="text-base md:text-lg font-bold text-[#636024] mb-3 leading-tight min-h-[3rem]">
                      {uni.name}
                    </h3>
                    <p className="text-[#636024]/70 text-base leading-relaxed line-clamp-10">
                      {uni.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="hidden md:flex justify-center mt-10 gap-4 items-center">
            {Array.from({ length: totalPages }).map((_, idx) => (

          <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                className="focus:outline-none transition-transform active:scale-90"
              >
                <AnimatePresence mode="wait">
                  {currentIndex === idx ? (
                    <motion.img
                      key="active"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      src={RedFlowerIcon.src}
                      className="w-6 h-6 cursor-pointer"
                      alt=""
                    />
                  ) : (
                    <motion.img
                      key="inactive"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      src={GreenFlowerIcon.src}
                      className="w-6 h-6 cursor-pointer"
                      alt=""
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Universities;
