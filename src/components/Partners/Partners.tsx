import React from 'react';
import PartnersSlider from './PartnersSlider';

const Partners = () => {
  return (
    <div className="bg-white">
      <div className="container py-[100px]">
        <h3 className="font-medium text-[25px] leading-[30px]">
          Наши партнеры
        </h3>
        <PartnersSlider />
      </div>
    </div>
  );
};

export default Partners;
