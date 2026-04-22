"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import BackgroundCard from "@/assets/Blocks/blockTestimonial.svg";
import MobilebackgroundCard from "@/assets/Blocks/MobileblockTestimonial.svg";
import Ornament from "@/assets/ornament.svg";
import { motion, AnimatePresence } from "framer-motion";
import GreenFlowerIcon from "@/assets/greenflower.svg";
import RedFlowerIcon from "@/assets/redflower.svg";

type ReviewFromPayload = {
  id: string;
  category: string;
  text: string;
};

const Testimonial = ({ data }: { data: ReviewFromPayload[] }) => {
  const [filter, setFilter] = useState<string>("Все");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedReview, setSelectedReview] = useState<ReviewFromPayload | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const reviewsData = data || [];
  const categories = [
    "Все",
    "О консультации по поступлению",
    "О сопровождении",
    "Отзывы о подборе университетов",
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
      <div className="absolute -bottom-50 md:-bottom-80 -left-55 w-100 h-100 md:w-160 md:h-160 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      <div className="py-16 px-4 max-w-8xl w-full md:px-16 lg:px-24 xl:px-32 mx-auto relative overflow-hidden">
        <h2 className="font-[family-name:var(--font-mm9)] text-6xl md:text-8xl text-[#5E0F08] mb-10">
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
                className="absolute -left-2 md:-left-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/90 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-md"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-1 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-[#636024] text-[#636024] bg-white/90 flex items-center justify-center hover:bg-[#636024] hover:text-white transition-all shadow-md"
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
                <div
                  key={review.id}
                  onClick={() => setSelectedReview(review)}
                  className="min-w-full md:min-w-[calc(50%-12px)] h-auto min-h-[280px] md:h-[320px] relative cursor-pointer flex items-center justify-center p-8 md:p-14"
                >
                  <Image
                    src={BackgroundCard}
                    alt=""
                    fill
                    className="hidden md:block -z-10 object-stretch"
                  />
                  <Image
                    src={MobilebackgroundCard}
                    alt=""
                    fill
                    className="block md:hidden -z-10 object-stretch"
                  />

                  <div className="w-full text-start px-4 z-10">
                    <h3 className="text-[#5C1616] font-semibold text-base md:text-lg uppercase tracking-wider break-words">
                      {review.category}
                    </h3>
                    <div className="h-[1px] bg-[#8B1D1D] w-full my-4 opacity-60" />
                    <p className="text-[#5C1616]/90 text-base md:text-lg line-clamp-4 leading-relaxed">
                      {review.text}
                    </p>
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

        {selectedReview && (
          <div
            className="fixed inset-0 bg-black/65 z-[100] flex items-center justify-center p-4 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="max-w-2xl w-full h-auto min-h-[30vh] max-h-[85vh] md:max-h-[80vh] relative bg-[#FDFCF6] rounded-2xl border border-[#8B1D1D]/25 shadow-2xl flex flex-col overflow-hidden overflow-x-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-5 right-6 text-2xl text-[#8B1D1D] opacity-60 hover:opacity-100 hover:rotate-90 transition-all z-[110] w-8 h-8 flex items-center justify-center"
                onClick={() => setSelectedReview(null)}
              >
                ✕
              </button>
        
              <div className="p-7 md:p-10 pb-2 md:pb-4 bg-[#FDFCF6] z-10">
                <h3 className="text-[#5C1616] font-bold text-xl md:text-2xl pr-12 leading-snug">
                  {selectedReview.category}
                </h3>
                <div className="h-[2px] bg-[#8B1D1D] w-14 mt-4 opacity-75" />
              </div>
        
              <div 
                className="flex-1 overflow-y-auto px-7 md:px-10 pb-10 custom-modal-scroll relative z-20 overflow-x-hidden"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#8B1D1D rgba(139, 29, 29, 0.1)'
                }}
              >
                <p className="text-[#5C1616] leading-relaxed text-base md:text-lg italic whitespace-pre-line relative z-30 w-full">
                  «{selectedReview.text}»
                </p>

                <div className="absolute bottom-2 right-2 w-48 h-48 pointer-events-none opacity-[0.05] z-0 rotate-[-15deg]">
                   <Image src={Ornament} alt="" fill className="object-contain" />
                </div>
              </div>
            </motion.div>
              
            <style jsx global>{`
              /* Оставляем только красивый вертикальный скролл */
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
              /* Прячем горизонтальный скролл на всякий случай на уровне движка */
              .custom-modal-scroll::-webkit-scrollbar:horizontal {
                display: none;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;