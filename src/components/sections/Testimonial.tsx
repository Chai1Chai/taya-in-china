"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Ornament from "@/assets/ornament.webp";
import { motion, AnimatePresence } from "framer-motion";
import GreenFlowerIcon from "@/assets/greenflower.svg";
import RedFlowerIcon from "@/assets/redflower.svg";
import { mockReviews, Review as MockReview } from "@/assets/Data/mockReviews";

// --- Иконки ---
const LocationIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M7 0C3.134 0 0 3.134 0 7C0 12.25 7 18 7 18C7 18 14 12.25 14 7C14 3.134 10.866 0 7 0ZM7 9.5C5.619 9.5 4.5 8.381 4.5 7C4.5 5.619 5.619 4.5 7 4.5C8.381 4.5 9.5 5.619 9.5 7C9.5 8.381 8.381 9.5 7 9.5Z" fill="#5C1616"/>
  </svg>
);

// Новый SVG для города
const BuildingIcon = () => (
  <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M21.75 16.5H21V5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5H14.25C14.0511 4.5 13.8603 4.57902 13.7197 4.71967C13.579 4.86032 13.5 5.05109 13.5 5.25V9H9V0.75C9 0.551088 8.92098 0.360322 8.78033 0.21967C8.63968 0.0790178 8.44891 0 8.25 0H2.25C2.05109 0 1.86032 0.0790178 1.71967 0.21967C1.57902 0.360322 1.5 0.551088 1.5 0.75V16.5H0.75C0.551088 16.5 0.360322 16.579 0.21967 16.7197C0.0790176 16.8603 0 17.0511 0 17.25C0 17.4489 0.0790176 17.6397 0.21967 17.7803C0.360322 17.921 0.551088 18 0.75 18H21.75C21.9489 18 22.1397 17.921 22.2803 17.7803C22.421 17.6397 22.5 17.4489 22.5 17.25C22.5 17.0511 22.421 16.8603 22.2803 16.7197C22.1397 16.579 21.9489 16.5 21.75 16.5ZM15 6H19.5V16.5H15V6ZM13.5 10.5V16.5H9V10.5H13.5ZM3 1.5H7.5V16.5H3V1.5ZM6 3.75V5.25C6 5.44891 5.92098 5.63968 5.78033 5.78033C5.63968 5.92098 5.44891 6 5.25 6C5.05109 6 4.86032 5.92098 4.71967 5.78033C4.57902 5.63968 4.5 5.44891 4.5 5.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3C5.44891 3 5.63968 3.07902 5.78033 3.21967C5.92098 3.36032 6 3.55109 6 3.75ZM6 8.25V9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75V8.25C4.5 8.05109 4.57902 7.86032 4.71967 7.71967C4.86032 7.57902 5.05109 7.5 5.25 7.5C5.44891 7.5 5.63968 7.57902 5.78033 7.71967C5.92098 7.86032 6 8.05109 6 8.25ZM6 12.75V14.25C6 14.4489 5.92098 14.6397 5.78033 14.7803C5.63968 14.921 5.44891 15 5.25 15C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25V12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12C5.44891 12 5.63968 12.079 5.78033 12.2197C5.92098 12.3603 6 12.5511 6 12.75ZM10.5 14.25V12.75C10.5 12.5511 10.579 12.3603 10.7197 12.2197C10.8603 12.079 11.0511 12 11.25 12C11.4489 12 11.6397 12.079 11.7803 12.2197C11.921 12.3603 12 12.5511 12 12.75V14.25C12 14.4489 11.921 14.6397 11.7803 14.7803C11.6397 14.921 11.4489 15 11.25 15C11.0511 15 10.8603 14.921 10.7197 14.7803C10.579 14.6397 10.5 14.4489 10.5 14.25ZM16.5 14.25V12.75C16.5 12.5511 16.579 12.3603 16.7197 12.2197C16.8603 12.079 17.0511 12 17.25 12C17.4489 12 17.6397 12.079 17.7803 12.2197C17.921 12.3603 18 12.5511 18 12.75V14.25C18 14.4489 17.921 14.6397 17.7803 14.7803C17.6397 14.921 17.4489 15 17.25 15C17.0511 15 16.8603 14.921 16.7197 14.7803C16.579 14.6397 16.5 14.4489 16.5 14.25ZM16.5 9.75V8.25C16.5 8.05109 16.579 7.86032 16.7197 7.71967C16.8603 7.57902 17.0511 7.5 17.25 7.5C17.4489 7.5 17.6397 7.57902 17.7803 7.71967C17.921 7.86032 18 8.05109 18 8.25V9.75C18 9.94891 17.921 10.1397 17.7803 10.2803C17.6397 10.421 17.4489 10.5 17.25 10.5C17.0511 10.5 16.8603 10.421 16.7197 10.2803C16.579 10.1397 16.5 9.94891 16.5 9.75Z" fill="#5C0F07"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="18" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path d="M11 0L0 6L11 12L20 7.09V13H22V6L11 0Z" fill="#5C1616"/>
    <path d="M4.18005 8.28003L11 12L17.82 8.28003V12.72L11 16.44L4.18005 12.72V8.28003Z" fill="#5C1616"/>
  </svg>
);
// -----------------------------------------------------------------

interface ExtendedReview {
  id: string;
  text: string;
  authorName: string;
  authorCity: string;
  targetCity: string;
  university: string;
  photo?: string;
}

const Testimonial = () => {
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

  // Маппинг данных из mockReviews
  const reviewsData: ExtendedReview[] = mockReviews.map((review: MockReview) => ({
    id: review.id,
    text: review.text,
    authorName: review.name,
    authorCity: review.cityFrom,
    targetCity: review.cityTo,
    university: review.university,
    photo: review.photo
  }));

  const step = isDesktop ? 2 : 1;
  const totalSlides = reviewsData.length;
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
      <div className="absolute -top-30 -right-30 md:-top-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none opacity-50 z-0">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      <div className="absolute -top-30 -left-30 md:-top-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none opacity-50 ">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      <div className="py-16 px-4 max-w-8xl w-full md:px-16 lg:px-24 xl:px-32 mx-auto relative overflow-hidden z-10">
        <h2 className="font-[family-name:var(--font-mm9)] uppercase text-6xl md:text-8xl text-[#5E0F08] mb-10">
          Отзывы
        </h2>

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
              {reviewsData.map((review) => (
                <div key={review.id} className="min-w-full md:min-w-[calc(50%-12px)] h-auto p-2">
                  
                  {/* Одинаковая фиксированная высота для всех карточек */}
                  <div 
                    onClick={() => setSelectedReview(review)}
                    className="relative cursor-pointer h-[280px] md:h-[340px] flex flex-col justify-between p-6 sm:p-8 bg-[#FCFDED] border-2 border-[#636024]/30 rounded-2xl shadow-sm hover:shadow-md hover:border-[#636024]/60 transition-all duration-300"
                  >
                    <div className="absolute inset-1.5 border border-[#636024]/10 rounded-xl pointer-events-none" />
                    
                    {/* --- ВЕРХНЯЯ ЧАСТЬ: ТЕКСТ ОТЗЫВА --- */}
                    <div className="w-full text-start z-10 flex-1 flex items-center overflow-hidden">
                      <p className="text-[#5C1616]/90 text-base md:text-lg line-clamp-[5] md:line-clamp-[4] leading-relaxed font-normal">
                        {review.text}
                      </p>
                    </div>

                    {/* --- РАЗДЕЛИТЕЛЬ И НИЖНЯЯ ЧАСТЬ --- */}
                    <div className="mt-auto z-10 w-full">
                      <div className="h-[1px] bg-[#8B1D1D] w-full mb-4 opacity-60" />

                      <div className="flex items-center gap-4 text-[#5C1616]">
                        {/* Аватарка */}
                        <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#636024] flex-shrink-0 overflow-hidden flex items-center justify-center font-bold text-white text-xl border border-[#8B1D1D]/20">
                          {review.photo ? (
                            <Image 
                              src={review.photo} 
                              alt={review.authorName} 
                              fill 
                              className="object-cover" 
                            />
                          ) : (
                            review.authorName.charAt(0)
                          )}
                        </div>

                        {/* Информационная строка */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm md:text-base leading-tight">
                          
                          {/* 1. Имя и Город отправления */}
                          <div className="flex flex-col">
                            <span className="font-semibold text-sm md:text-base">{review.authorName}</span>
                            <div className="flex items-center gap-1 opacity-80 text-xs">
                              <LocationIcon />
                              {review.authorCity}
                            </div>
                          </div>
                          
                          {/* Разделитель 1 */}
                          <div className="h-6 md:h-8 w-[1px] bg-[#5C1616]/30 self-center" />

                          {/* 2. Город назначения */}
                          <div className="flex items-center gap-1.5">
                            <BuildingIcon />
                            <span className="font-medium text-xs md:text-sm">{review.targetCity}</span>
                          </div>

                          {/* Разделитель 2 */}
                          <div className="h-6 md:h-8 w-[1px] bg-[#5C1616]/30 self-center" />

                          {/* 3. Университет */}
                          <div className="flex items-center gap-1.5">
                            <GradCapIcon />
                            <span className="font-medium text-xs md:text-sm max-w-[120px] sm:max-w-none  sm:whitespace-normal">
                              {review.university}
                            </span>
                          </div>

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
                        <img src={GreenFlowerIcon.src} className="w-6 h-6" alt="active" />
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
                        <img src={RedFlowerIcon.src} className="w-6 h-6" alt="inactive" />
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
          
                <div 
                  className="flex-1 overflow-y-auto p-7 md:p-10 custom-modal-scroll relative z-20"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8B1D1D rgba(139, 29, 29, 0.1)'
                  }}
                >
                  <p className="text-[#5C1616] leading-relaxed text-base md:text-lg italic whitespace-pre-line relative z-30 w-full pt-4">
                    «{selectedReview.text}»
                  </p>

                  {/* Автор в модальном окне */}
                  <div className="mt-8 pt-6 border-t border-[#8B1D1D]/20 flex items-center gap-4 text-[#5C1616] relative z-30">
                    <div className="relative w-12 h-12 rounded-full bg-[#636024] flex-shrink-0 overflow-hidden flex items-center justify-center font-bold text-white text-lg border border-[#8B1D1D]/20">
                      {selectedReview.photo ? (
                        <Image 
                          src={selectedReview.photo} 
                          alt={selectedReview.authorName} 
                          fill 
                          className="object-cover" 
                        />
                      ) : (
                        selectedReview.authorName.charAt(0)
                      )}
                    </div>
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