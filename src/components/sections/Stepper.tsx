'use client';
import { useEffect, useRef, useState } from "react";
import StepperImage from "@/assets/Stepper_background.png";

type StepItem = {
  title: string;
  items: string[];
};

const steps: StepItem[] = [
  {
    title: "Подготовка документов",
    items: [
      "список необходимых документов",
      "объяснение требований университетов",
      "помощь в оформлении",
    ],
  },
  {
    title: "Работа с документами",
    items: [
      "проверка всех файлов",
      "рекомендации по переводам и заверению",
      "поддержка на всех этапах",
    ],
  },
  {
    title: "Подача заявок",
    items: [
      "подача в выбранные университеты (обычно 2)",
      "помощь с оплатой регистрационного взноса",
    ],
  },
  {
    title: "После подачи",
    items: [
      "отслеживание статуса заявки",
      "помощь в коммуникации с университетами",
      "оперативное решение возникающих вопросов",
    ],
  },
  {
    title: "После зачисления",
    items: [
      "финальная консультация",
      "рекомендации по переезду",
      "обсуждение всех организационных моментов",
    ],
  },
];

const Stepper: React.FC = () => {
  return (
    <section
      className="relative w-full mb-20 bg-cover bg-center px-4 md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url(${StepperImage.src})` }}
    >
      <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-6xl leading-[60px] md:leading-[84px] font-normal mb-24 text-[#5E0F08] text-center">
        Этапы сопровождения
      </h2>

      <div className="relative max-w-4xl mx-auto px-4 md:px-8">
        <div className="absolute left-9.5 md:left-15 top-0 bottom-25 md:top-10 md:bottom-20 w-[2px] bg-[#5E0F08]" />

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <Step key={index} step={step} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

type StepProps = {
  step: StepItem;
  number: number;
};

const Step: React.FC<StepProps> = ({ step, number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-start md:items-center relative">
      
      <div
        className={`font-[family-name:var(--font-montserrat)] md:-mt-10 w-12 h-12 md:w-15 md:h-15 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-[#5E0F08] text-white text-lg font-normal z-10 transition-all duration-700 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        {number}
      </div>

      <div
        className={`ml-6 md:ml-40 transition-all duration-1000 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <h3 className="text-xl md:text-2xl text-[#5E0F08] mb-2">
          {step.title}
        </h3>

        <ul className="text-base md:text-lg text-[#000000] space-y-1">
          {step.items.map((item, idx) => (
            <li key={idx}>— {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stepper;