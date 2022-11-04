import React from 'react';

import { whyItems } from '../../data/data';

const WhyAreWe = () => {
  return (
    <div className="bg-white">
      <div className="container py-[100px] grid grid-cols-3">
        <h3 className="font-medium text-[25px] leading-[30px]">Почему мы</h3>
        <div className="col-span-2 grid grid-cols-2 gap-x-[34px] gap-y-[25px]">
          {whyItems.map(item => (
            <WhyAreWeItem
              key={item.label}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAreWe;

interface WhyAreWeItemProps {
  icon: string;
  label: string;
}

const WhyAreWeItem = ({ icon, label }: WhyAreWeItemProps) => {
  return (
    <div className="bg-[#E0E1C3] flex flex-col items-center justify-start gap-2 rounded-[25px] h-[125px]">
      <span className="text-[62px] leading-[75px]">{icon}</span>
      <p className="text-[15px] leading-[18px]">{label}</p>
    </div>
  );
};
