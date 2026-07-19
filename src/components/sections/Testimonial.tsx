"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Ornament from "@/assets/ornament.webp";
import { motion, AnimatePresence } from "framer-motion";
import GreenFlowerIcon from "@/assets/greenflower.svg";
import RedFlowerIcon from "@/assets/redflower.svg";

// --- Иконки с цветом #5C1616 ---
const LocationIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M7 0C3.134 0 0 3.134 0 7C0 12.25 7 18 7 18C7 18 14 12.25 14 7C14 3.134 10.866 0 7 0ZM7 9.5C5.619 9.5 4.5 8.381 4.5 7C4.5 5.619 5.619 4.5 7 4.5C8.381 4.5 9.5 5.619 9.5 7C9.5 8.381 8.381 9.5 7 9.5Z" fill="#5C1616"/>
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M16 2V16H11V10H7V16H2V2H16ZM18 0H0V18H18V0ZM13 4H15V6H13V4ZM13 7H15V9H13V7ZM13 10H15V12H13V10ZM13 13H15V15H13V13ZM3 4H5V6H3V4ZM3 7H5V9H3V7ZM3 10H5V12H3V10ZM3 13H5V15H3V13ZM8 4H10V6H8V4ZM8 7H10V9H8V7Z" fill="#5C1616"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="18" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M11 0L0 6L11 12L20 7.09V13H22V6L11 0Z" fill="#5C1616"/>
    <path d="M4.18005 8.28003L11 12L17.82 8.28003V12.72L11 16.44L4.18005 12.72V8.28003Z" fill="#5C1616"/>
  </svg>
);
// -----------------------------------------------------------------

type ReviewFromPayload = {
  id: string;
  category: string;
  text: string;
};

interface ExtendedReview extends ReviewFromPayload {
  authorName: string;
  authorCity: string;
  targetCity: string;
  university: string;
}

const Testimonial = ({ data }: { data: ReviewFromPayload[] }) => {
  const [filter, setFilter] = useState<string>("Все");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedReview, setSelectedReview] = useState<ExtendedReview | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (selectedReview) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedReview]);

  const reviewsData: ExtendedReview[] = (data || []).map(review => ({
    ...review,
    authorName: "Анастасия",
    authorCity: "Владивосток",
    targetCity: "Ханджоу",
    university: "Zhejiang University of Technology"
  }));

  const categories = [
    "Все",
    "О консультации по поступлению",
    "О сопровождении",
    "Отзывы о подборе университетов",
    "О стратегии поступления"
  ];

  const filteredReviews = filter === "Все"
    ? reviewsData
    : reviewsData.filter((r) => r.category === filter);

  const step = isDesktop ? 2 : 1;
  const totalSlides = filteredReviews.length;
  const paginationDots = Math.ceil(totalSlides / step);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + step;
      return next >= totalSlides ? 0 : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - step;
      return next < 0 ? Math.max(0, (paginationDots - 1) * step) : next;
    });
  };

  const scrollToIndex = (dotIdx: number) => {
    setCurrentIndex(dotIdx * step);
  };

  if (!reviewsData.length) return null;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Ornament */}
      <div className="absolute -bottom-50 md:-bottom-80 -left-55 w-100 h-100 md:w-160 md:h-160 pointer-events-none opacity-50 z-0">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      <div className="py-16 px-4 max-w-8xl w-full md:px-16 lg:px-24 xl:px-32 mx-auto relative overflow-hidden z-10">
        <h2 className="font-[family-name:var(--font-mm9)] uppercase text-6xl md:text-8xl text-[#5E0F08] mb-10">
          Отзывы
        </h2>

        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 border border-[#5E0F08] rounded-full transition-all text-base md:text-lg ${
                filter === cat ? "bg-[#5E0F08] text-white" : "text-[#5E0F08] hover:bg-[#8B1D1D]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          {totalSlides > step && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-2 md:-left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/90 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-md"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/90 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-md"
              >
                ❯
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-0 md:gap-6"
              style={{
                transform: `translateX(-${isDesktop ? (currentIndex / 2) * 102 : currentIndex * 100}%)`,
              }}
            >
              {filteredReviews.map((review) => (
                <div key={review.id} className="min-w-full md:min-w-[calc(50%-12px)] h-auto p-2">
                  
                  <div 
                    onClick={() => setSelectedReview(review)}
                    className="relative cursor-pointer min-h-[280px] md:min-h-[320px] flex flex-col justify-between p-6 sm:p-8 md:p-10 bg-[#FCFDED] border-2 border-[#636024]/30 rounded-2xl shadow-sm hover:shadow-md hover:border-[#636024]/60 transition-all duration-300"
                  >
                    <div className="absolute inset-1.5 border border-[#636024]/10 rounded-xl pointer-events-none" />
                    
                    {/* --- ВЕРХНЯЯ ЧАСТЬ: ТЕКСТ ОТЗЫВА --- */}
                    <div className="w-full text-start z-10 flex-1 flex items-center mb-4">
                      <p className="text-[#5C1616]/90 text-base md:text-lg line-clamp-[6] leading-relaxed font-normal">
                        {review.text}
                      </p>
                    </div>

                    {/* --- РАЗДЕЛИТЕЛЬ --- */}
                    <div className="h-[1px] bg-[#8B1D1D] w-full my-4 opacity-60 z-10" />

                    {/* --- НИЖНЯЯ ЧАСТЬ: АВТОР (Все в одну строчку) --- */}
                    <div className="w-full z-10 flex items-center gap-4 text-[#5C1616]">
                      
                      {/* Круглый div вместо картинки */}
                      <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex-shrink-0" />

                      {/* Информационная строка с разделителями */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base leading-tight">
                        
                        {/* 1. Имя и Город отправления */}
                        <div className="flex flex-col">
                          <span className="font-semibold text-base md:text-lg">{review.authorName}</span>
                          <div className="flex items-center gap-1 opacity-80 text-xs md:text-sm">
                            <LocationIcon />
                            {review.authorCity}
                          </div>
                        </div>
                        
                        {/* Разделитель 1 */}
                        <div className="h-8 w-[1px] bg-[#5C1616]/30 self-center" />

                        {/* 2. Город назначения */}
                        <div className="flex items-center gap-2">
                          <BuildingIcon />
                          <span className="font-medium">{review.targetCity}</span>
                        </div>

                        {/* Разделитель 2 */}
                        <div className="h-8 w-[1px] bg-[#5C1616]/30 self-center" />

                        {/* 3. Университет */}
                        <div className="flex items-center gap-2">
                          <GradCapIcon />
                          <span className="font-medium text-xs md:text-sm max-w-[150px] sm:max-w-none truncate sm:whitespace-normal">
                            {review.university}
                          </span>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {paginationDots > 1 && (
          <div className="hidden md:flex justify-center mt-10 gap-3">
            {Array.from({ length: paginationDots }).map((_, idx) => {
              const isActive = Math.floor(currentIndex / step) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className="relative outline-none focus:outline-none bg-transparent border-none p-0 cursor-pointer"
                >
                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.div
                        key="red"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img src={RedFlowerIcon.src} className="w-6 h-6" alt="active" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="green"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="opacity-60 hover:opacity-100 transition-opacity"
                      >
                        <img src={GreenFlowerIcon.src} className="w-6 h-6" alt="inactive" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        )}
      </div>


      {mounted && createPortal(
        <AnimatePresence>
          {selectedReview && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="max-w-2xl w-full h-auto min-h-[30vh] max-h-[85vh] md:max-h-[80vh] relative bg-[#FDFCF6] rounded-2xl border border-[#8B1D1D]/25 shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-5 right-6 text-2xl text-[#8B1D1D] opacity-60 hover:opacity-100 hover:rotate-90 transition-all z-[110] w-8 h-8 flex items-center justify-center"
                  onClick={() => setSelectedReview(null)}
                >
                  ✕
                </button>
          
                {/* Шапка модалки */}
                <div className="p-7 md:p-10 pb-2 md:pb-4 bg-[#FDFCF6] z-10">
                  <h3 className="text-[#5C1616] font-bold text-xl md:text-2xl pr-12 leading-snug">
                    {selectedReview.category}
                  </h3>
                  <div className="h-[2px] bg-[#8B1D1D] w-14 mt-4 opacity-75" />
                </div>
          
                <div 
                  className="flex-1 overflow-y-auto px-7 md:px-10 pb-10 custom-modal-scroll relative z-20"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8B1D1D rgba(139, 29, 29, 0.1)'
                  }}
                >
                  <p className="text-[#5C1616] leading-relaxed text-base md:text-lg italic whitespace-pre-line relative z-30 w-full">
                    «{selectedReview.text}»
                  </p>

                  {/* Автор в модальном окне с единой стилистикой и цветом */}
                  <div className="mt-8 pt-6 border-t border-[#8B1D1D]/20 flex items-center gap-4 text-[#5C1616] relative z-30">
                    <div className="w-12 h-12 rounded-full bg-[#D9D9D9] flex-shrink-0" />
                    <div className="flex flex-col text-sm md:text-base">
                        <span className="font-semibold">{selectedReview.authorName} ({selectedReview.authorCity})</span>
                        <span className="opacity-95">{selectedReview.university}, {selectedReview.targetCity}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 w-48 h-48 pointer-events-none opacity-[0.05] z-0 rotate-[-15deg]">
                     <Image src={Ornament} alt="" fill className="object-contain" />
                  </div>
                </div>
              </motion.div>
                
              <style jsx global>{`
                .custom-modal-scroll::-webkit-scrollbar {
                  width: 5px;
                }
                .custom-modal-scroll::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-modal-scroll::-webkit-scrollbar-thumb {
                  background-color: rgba(139, 29, 29, 0.3);
                  border-radius: 20px;
                }
                .custom-modal-scroll::-webkit-scrollbar:horizontal {
                  display: none;
                }
              `}</style>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default Testimonial;