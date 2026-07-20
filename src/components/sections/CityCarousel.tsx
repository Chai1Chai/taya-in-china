'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CITIES_DATA, City } from '@/assets/Data/citiesData'; 
import Ornament from "@/assets/ornament.webp";

const chunkArray = (arr: City[], chunksCount: number): City[][] => {
  const result: City[][] = Array.from({ length: chunksCount }, () => []);
  arr.forEach((item, index) => {
    result[index % chunksCount].push(item);
  });
  return result;
};

interface MarqueeRowProps {
  cities: City[];
  direction: 'left' | 'right';
  speed?: number;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ cities, direction, speed = 45 }) => {
  const tripleCities = [...cities, ...cities, ...cities];
  const isLeft = direction === 'left';

  return (
    <div className="flex w-full overflow-hidden select-none py-1.5">
      <motion.div
        className="flex gap-4 pr-4 whitespace-nowrap min-w-max"
        initial={{ x: isLeft ? '0%' : '-33.333%' }}
        animate={{ x: isLeft ? '-33.333%' : '0%' }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {tripleCities.map((city, idx) => (
          <div
            key={`${city.name}-${idx}`}
            className="flex items-center gap-3 px-6 py-2 border border-[#636024] bg-[#FAF8F5]/10 rounded-full shadow-sm backdrop-blur-sm"
          >
            <div className="relative w-7 h-5 overflow-hidden rounded-[4px] border border-gray-100 flex-shrink-0">
              <Image
                src={city.flagSrc}
                alt={`Флаг ${city.name}`}
                width={28}
                height={20}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-[family-name:var(--font-montserrat)] text-[#636024] font-medium text-base md:text-lg font-serif">
              {city.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function CityCarousel() {
  const [row1, row2, row3] = chunkArray(CITIES_DATA, 3);

  return (
    <section className="relative w-full py-12 overflow-hidden flex flex-col gap-4">
      <div className="absolute -bottom-30 -right-30 md:-bottom-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none opacity-50 z-0">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>

      <div className="absolute -bottom-30 -left-30 md:-bottom-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none opacity-50 z-0">
        <Image src={Ornament} alt="" fill className="object-contain" />
      </div>
        
      <div className="text-center mb-6">
        <h2 className="font-[family-name:var(--font-mm9)] text-4xl md:text-6xl font-base text-center mb-5 text-[#636024] relative z-20 uppercase">
          Откуда поступают
        </h2>
      </div>
    <MarqueeRow cities={row1} direction="left" speed={40} />
    <MarqueeRow cities={row2} direction="right" speed={45} />
    <MarqueeRow cities={row3} direction="left" speed={38} />
    </section>
  );
}