// src/constants/animations.ts
import { Variants, TargetAndTransition } from "framer-motion";

// Базовый контейнер для staggered (очередного) появления дочерних элементов
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Появление снизу (для карточек услуг, пунктов списков, заголовков)
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Появление справа (для картинок, блоков сбоку)
export const fadeInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
export const fadeInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.21, 0.47, 0.32, 0.98] // Теперь TypeScript поймет, что это валидный ease
    },
  },
};
// Эффект при наведении на карточки услуг
export const cardHoverScale: TargetAndTransition = {
  scale: 1.02,
  y: -8,
  boxShadow: "0px 10px 25px rgba(107, 94, 46, 0.15)",
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  }
};