"use client";

import React from 'react';

interface PricingRowFromPayload {
  id: string;
  program: string;
  price: string;
  note: string;
}

const ConstTable = ({ data }: { data: PricingRowFromPayload[] }) => {

  const pricingData = data || [];

  const cellClasses = "px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-6 text-center border-b border-[#636024]/10";
  const headerClasses = "px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-8 font-medium text-center";

  return (
    <section className="w-full px-4 md:px-16 lg:px-24 xl:px-32 mb-10 font-[family-name:var(--font-montserrat)]">
      <h2 className="w-full text-4xl md:text-6xl leading-tight font-normal mb-10 text-[#636024] text-center">
        Стоимость сопровождения
      </h2>

      <div className="relative overflow-x-auto border border-[#636024] rounded-2xl shadow-sm">
        <table className="w-full text-base text-left border-collapse">
          <thead className="bg-[#636024] text-white">
            <tr>
              <th className={headerClasses}>Программа</th>
              <th className={headerClasses}>Стоимость</th>
              <th className={headerClasses}>Примечание</th>
            </tr>
          </thead>

          <tbody className="bg-[#EEE9CB] text-black">
            {pricingData.map((row) => (
              <tr 
                key={row.id} 
                className="hover:bg-[#e5e0bc] transition-colors last:border-none"
              >
                <td className={cellClasses}>{row.program}</td>
                <td className={cellClasses}>{row.price}</td>
                <td className={cellClasses}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ConstTable;