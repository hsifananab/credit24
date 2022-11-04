import React from 'react';
import Button from '../UI/Button';
import Woman from '../../assets/images/main.png';
import HeaderTimer from './HeaderTimer';

const Header = () => {
  return (
    <div className="bg-gradient-bg relative">
      <div className="container pt-[184px] pb-[174px]">
        <div className="flex justify-between items-center">
          <div className="max-w-[380px]">
            <p className="mb-[9px]">Онлайн. Без проверок! </p>
            <h1 className="font-semibold text-5xl leading-[130%] mb-[30px]">
              Кредит от 1000 до 250 000 грн
            </h1>
            <ul className="flex flex-col gap-[10px] mb-[42px]">
              <li className="flex gap-[11px]">
                <div className="w-[50px] h-[25px] rounded-[15px] bg-white flex items-center justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.13)]">
                  18
                </div>
                <span>Минимальный возраст заемщика</span>
              </li>
              <li className="flex gap-[11px]">
                <div className="w-[50px] h-[25px] rounded-[15px] bg-white flex items-center justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.13)]">
                  99%
                </div>
                <span>Вероятность получения кредита</span>
              </li>
              <li className="flex gap-[11px]">
                <div className="w-[50px] h-[25px] rounded-[15px] bg-white flex items-center justify-center shadow-[0px_1px_4px_rgba(0,0,0,0.13)]">
                  2:00
                </div>
                <span>Минуты на получение денег</span>
              </li>
            </ul>
            <Button label="Оформить кредит" />
          </div>
          <div className="max-w-[314px]">
            <div className="relative">
              <p className="font-medium text-[35px] leading-[130%] mb-4">
                Акционная ставка
              </p>
              <span className="bg-[#FFEC90] flex items-center justify-center w-[77px] h-[39px] rounded-[25px] text-[20px] leading-[130%] absolute bottom-1 left-1/2 -translate-x-1/4">
                0%
              </span>
            </div>
            <p className="text-[15px] leading-[18px] mb-6">
              Успей оставить заявку и получи кредит под 0% годовых
            </p>
            <HeaderTimer />
            <img
              src={Woman}
              alt="woman"
              className="absolute bottom-0 right-1/2 translate-x-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
