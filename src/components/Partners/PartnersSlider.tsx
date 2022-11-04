import React from 'react';
import { partners } from '../../data/data';

const PartnersSlider = () => {
  return (
    <div className="flex justify-between items-center">
      {partners.map(item => (
        <PartnersSliderItem key={item} item={item} />
      ))}
    </div>
  );
};

export default PartnersSlider;

interface PartnersSliderItemProps {
  item: string;
}

const PartnersSliderItem = ({ item }: PartnersSliderItemProps) => {
  return (
    <div className="flex items-center justify-center w-[175px] h-[70px] bg-[#ECE4C0] rounded-[35px]">
      <img src={item} alt="" />
    </div>
  );
};
