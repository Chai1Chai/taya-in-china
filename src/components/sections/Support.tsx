'use client'
import React from "react";
import { motion, Variants } from "framer-motion"; 
import SupportImage from "@/assets/support_img.webp";


const containerVariants: Variants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.1,  
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4 
    }
  },
};

const Support: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row mt-20 items-center justify-center gap-20 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 overflow-hidden">
      <motion.div 
        className="w-full flex flex-col items-center lg:items-start max-w-xl z-10"
        initial="hidden"          
        whileInView="visible"    
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants} 
      >
        <motion.h1
          variants={itemVariants}
          className={`font-[family-name:var(--font-mm9)] uppercase w-full font-medium md:text-center lg:text-start text-xl md:text-6xl font-normal mb-4 text-[#636024] leading-tight sm:leading-snug xl:leading-[84px]`}
        >
          Сопровождение по&nbsp;поступлению
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-base md:text-center lg:text-start mb-8 text-[#636024]"
        >
          Полное сопровождение на всех этапах поступления — от подготовки документов до зачисления и адаптации после приезда.
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base mb-8 text-[#5E0F08] font-semibold"
        >
          Постоянная связь и поддержка на протяжении всего процесса
        </motion.p>

        <a
          href="#contact-block"
          className="w-full mt-10 py-3 rounded-full text-white bg-[#636024] hover:bg-[#5B581F] transition-all duration-200 active:scale-95 inline-block text-center"
        >
          Оставить заявку
        </a>
      </motion.div>

      <motion.div 
        className="hidden lg:block w-full max-w-xs xl:max-w-md rounded-[40px] box-border overflow-hidden flex-shrink-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img
          src={SupportImage.src} 
          alt="Сопровождение в поступление"
          className="w-full h-auto aspect-[4/5] xl:aspect-auto rounded-[40px] object-cover transition-all duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Support;