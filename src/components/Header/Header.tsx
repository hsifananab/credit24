import React from 'react';
import Button from '../../UI/Button';

const Header = () => {
  return (
    <div className="bg-gradient-bg">
      <div className="container pt-[184px] pb-[174px]">
        <div className="flex justify-between">
          <div className="max-w-[380px]">
            <p className="mb-[9px]">Онлайн. Без проверок! </p>
            <h1 className="font-semibold text-5xl leading-[130%] mb-[30px]">
              Кредит от 1000 до 250 000 грн
            </h1>
            <div className=""></div>
            <Button label="Оформить кредит" />
          </div>
          <div className="max-w-[314]">col2</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
