"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import plusIcon from '@/assets/Plus.svg';
import Background from '@/assets/WavesBackground.webp';

interface CaseItem {
  id: number;
  title: string;
  problem: string;
  solution: string;
}

// Данные кейсов
const casesData: CaseItem[] = [
  {
    id: 1,
    title: "Университеты прислали отказ в процессе подачи?",
    problem: "В процессе поступления пришел отказ от выбранных вузов. Нужно было в экстренном и срочном порядке полностью менять стратегию и искать новые варианты, чтобы не потерять год.",
    solution: "Мы не паниковали. Тая мгновенно сориентировалась в ситуации, оперативно подобрала другие сильные университеты под требования и быстро переподала документы. В итоге — успешное зачисление в вуз-замену!"
  },
  {
    id: 2,
    title: "Университет внезапно изменил требования к банку перед самой подачей?",
    problem: "Буквально перед отправкой документов университет резко увеличил необходимую сумму в выписке со счета. Это вызвало сильный стресс, так как правила изменились на ходу.",
    solution: "Тая сразу подключилась к вопросу, успокоила и пошагово разложила, как именно можно решить эту проблему с банком. Благодаря четким инструкциям мы быстро и без нервов закрыли этот вопрос."
  },
  {
    id: 3,
    title: "Вуз долго молчал и не обновлял статус заявки?",
    problem: "Период ожидания ответа затягивался, статус заявки не менялся, а сроки поджимали. Нужно было как можно скорее получить обратную связь от приемной комиссии, чтобы планировать дальнейшие шаги.",
    solution: "Тая взяла коммуникацию на себя: несколько раз лично звонила в офис китайского университета, контролировала статус оплаты и саму заявку, а также уточняла у вуза даты регистрации. Благодаря её звонкам весь период ожидания прошел спокойно и завершился заветным зачислением."
  },
  {
    id: 4,
    title: "Сложности с международной оплатой обучения и деталями переезда?",
    problem: "Возникли трудности с оплатой обучения из-за рубежа. Кроме того, на сайте университета была противоречивая информация о локации корпусов и условиях заезда в общежитие.",
    solution: "Тая полностью проконтролировала процесс оплаты, лично связалась с университетом для подтверждения транзакции и выяснила все точные организационные детали: от дней регистрации до адреса нужного кампуса. А в качестве бонуса — помогла сориентироваться с тарифами на авиабилеты и выбрать лучший рейс для вылета."
  }
];

const CaseCard = ({ title, problem, solution }: Omit<CaseItem, 'id'>) => {
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
        <span className="text-[#4A2418] font-[family-name:var(--font-montserrat)] font-medium text-sm md:text-base pr-4 leading-snug">
          {title}
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
            <div className={`${commonPadding} pt-2 text-[#4A2418]/80 text-sm md:text-base leading-relaxed border-t border-gray-100 mx-5 font-[family-name:var(--font-montserrat)] flex flex-col gap-3 pb-6`}>
              <div>
                <strong className="text-[#636024] block mb-0.5">Проблема:</strong>
                <p>{problem}</p>
              </div>
              <div>
                <strong className="text-[#636024] block mb-0.5">Решение:</strong>
                <p>{solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Cases = () => {
  // Разделяем массив на две колонки по 2 кейса
  const leftColumn = casesData.slice(0, 2);
  const rightColumn = casesData.slice(2, 4);

  return (
    <section 
      className="py-16 md:py-24 px-4 md:px-16 lg:px-24 xl:px-32 relative w-full bg-[#636024]">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${Background.src})`, 
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
      <div className="relative mx-auto max-w-7xl w-full z-5">
        <h2 className="font-[family-name:var(--font-mm9)] uppercase text-white text-4xl md:text-6xl font-medium text-center mb-16">
          Не бросаем в сложных ситуациях
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 items-start">
          {/* Левая колонка (Кейс 1 и Кейс 2) */}
          <div className="flex flex-col">
            {leftColumn.map((item) => (
              <CaseCard 
                key={item.id} 
                title={item.title} 
                problem={item.problem} 
                solution={item.solution} 
              />
            ))}
          </div>

          {/* Правая колонка (Кейс 3 и Кейс 4) */}
          <div className="flex flex-col">
            {rightColumn.map((item) => (
              <CaseCard 
                key={item.id} 
                title={item.title} 
                problem={item.problem} 
                solution={item.solution} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;