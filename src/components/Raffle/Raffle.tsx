import React from 'react';
import Button from '../../UI/Button';
import Laptop from '../../assets/images/laptop.png';
import Mobile from '../../assets/images/mobile.png';

const Raffle = () => {
  return (
    <div className="bg-gradient-bg relative">
      <div className="container py-[100px] relative">
        <h2 className="text-[60px] font-medium mb-[17px]">Розыгрыш</h2>
        <p className="max-w-[274px] font-semibold mb-[21px]">
          Заполни заявку и получи стильный смартфон или ноутбук
        </p>
        <p className="max-w-[260px] mb-[58px]">
          Eжемесячный розыгрыш 3х смартфонов Samsung Galaxy S9 и ноутбука yoga
          720-15
        </p>
        <div className="max-w-[274px]">
          <Button label="Заполнить заявку" />
        </div>
        <div className="absolute right-[34px] top-1/2 -translate-y-1/2">
          <img src={Laptop} alt="" />
        </div>
        <div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2">
          <img src={Mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Raffle;
