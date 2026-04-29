"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { faqDataLeft, faqDataRight } from '@/assets/Data/faqData';

import plusIcon from '@/assets/Plus.svg';
import Background from '@/assets/backgroundFAQ.svg';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const commonPadding = "p-5 md:p-6";

  return (
    <div className="flex flex-col mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white ${commonPadding} flex justify-between items-center text-left transition-all duration-300 shadow-sm hover:shadow-md ${
          isOpen ? 'rounded-t-[10px]' : 'rounded-[10px]'
        }`}
      >
        <span className="text-[#4A2418] font-medium text-sm md:text-base pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-5 h-5 relative"
        >
          <Image 
            src={plusIcon} 
            alt="toggle" 
            fill 
            className="object-contain"
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white rounded-b-[10px]"
          >
            <div className={`${commonPadding} pt-0 text-[#4A2418]/70 text-sm md:text-base leading-relaxed border-t border-gray-100 mx-5`}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section 
      className="py-20 px-4 md:px-16 lg:px-24 xl:px-32 relative min-h-screen"
      style={{
        backgroundColor: '#636024', 
        backgroundImage: `url(${Background.src})`, 
        backgroundRepeat: 'repeat',
        backgroundSize: '600px', 
      }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-[family-name:var(--font-mm9)] text-white text-4xl md:text-8xl font-medium text-center mb-16">
          Часто задаваемые вопросы
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 items-start">
          {/* Левая колонка */}
          <div className="flex flex-col">
            {faqDataLeft.map((item: any) => (
              <FAQItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col">
            {faqDataRight.map((item: any) => (
              <FAQItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;