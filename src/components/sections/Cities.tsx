"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PROVINCES_DATA } from "@/assets/Data/mapData";
import Map from "@/assets/map.svg";
import MapPoint from "@/assets/MapPin.svg";
import Ornament from "@/assets/ornament.svg";

type Province = {
  id: number | string;
  name: string;
  path: string;
  provincedID: number | string;
  markerCoords: {
    x: number;
    y: number;
  };
};

const Cities = () => {
  const [hoveredCity, setHoveredCity] = useState<Province | null>(null);
  const [activeCityId, setActiveCityId] = useState<number | string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentCity: Province | undefined =
    hoveredCity || PROVINCES_DATA.find((p: Province) => p.id === activeCityId);

  const handleCitySelect = (id: number | string | null) => {
    setActiveCityId(id);
    setIsOpen(false);
  };

  return (
    <section className="relative py-16 px-4 py-20 px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      <div className="absolute -bottom-30 -right-30 md:-bottom-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>

      <div className="absolute -bottom-30 -left-30 md:-bottom-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>

      <div className="absolute -top-30 -right-30 md:-top-55 md:-right-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>

      <div className="absolute -top-30 -left-30 md:-top-55 md:-left-55 w-60 h-60 md:w-110 md:h-110 pointer-events-none">
        <Image src={Ornament} alt="" fill className="object-containt" />
      </div>

      <div className="z-20 max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-6xl font-base text-center mb-5 text-[#636024]">
          Города поступления
        </h2>

        <div className="md:hidden mb-8 relative z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border border-[#636024]/30 px-4 py-4 rounded-lg flex justify-between items-center shadow-sm"
          >
            <span className="text-[#636024] font-medium">
              {activeCityId
                ? PROVINCES_DATA.find((p: Province) => p.id === activeCityId)?.name
                : "Выберите город"}
            </span>

            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#636024]/20 rounded-lg shadow-xl max-h-60 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
              <div
                onClick={() => handleCitySelect(null)}
                className="px-4 py-3 hover:bg-[#8B1D1D]/10 cursor-pointer border-b border-gray-100 text-[#636024]"
              >
                Все города
              </div>

              {PROVINCES_DATA.map((city: Province) => (
                <div
                  key={city.id}
                  onClick={() => handleCitySelect(city.id)}
                  className={`px-4 py-3 hover:bg-[#8B1D1D] hover:text-white cursor-pointer transition-colors ${
                    activeCityId === city.id
                      ? "bg-[#8B1D1D] text-white"
                      : "text-[#636024]"
                  }`}
                >
                  {city.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- КАРТА --- */}
        <div className="relative w-full overflow-hidden">
          <img src={Map.src} alt="Карта Китая" className="w-full h-auto block" />

          <svg viewBox="0 0 867 610" className="absolute top-0 left-0 w-full h-full">
            {PROVINCES_DATA.map((prov: Province) => (
              <path
                key={prov.id}
                d={prov.path}
                className={`transition-all duration-300 cursor-pointer ${
                  currentCity?.provincedID === prov.provincedID
                    ? "fill-[#8B1D1D]/40"
                    : "fill-transparent"
                }`}
              />
            ))}

            {PROVINCES_DATA.map((prov: Province) => (
              <image
                key={`point-${prov.id}`}
                href={MapPoint.src}
                x={prov.markerCoords.x - 12}
                y={prov.markerCoords.y - 24}
                width="24"
                height="24"
                className={`transition-all duration-300 cursor-pointerr ${
                  currentCity?.id === prov.id
                    ? "scale-150 opacity-100"
                    : "scale-100 opacity-90 hover:opacity-100"
                }`}
                style={{ transformBox: "fill-box", transformOrigin: "center" }}
                onMouseEnter={() => setHoveredCity(prov)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => handleCitySelect(prov.id)}
              />
            ))}
          </svg>

          {currentCity && (
            <div
              className="absolute hidden md:block pointer-events-none bg-white/95 px-4 py-2 border border-[#8B1D1D] shadow-xl text-[#8B1D1D] font-medium rounded-md"
              style={{
                left: `${(currentCity.markerCoords.x / 867) * 100}%`,
                top: `${(currentCity.markerCoords.y / 610) * 100 - 5}%`,
                transform: "translate(-50%, -100%)",
              }}
            >
              {currentCity.name}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cities;