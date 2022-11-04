import React from 'react';
import Button from '../../UI/Button';

import { conditionsItems } from '../../data/data';
import ConditionsImage from '../../assets/images/connditions.png';

const Conditions = () => {
  return (
    <div className="bg-white">
      <div className="container pt-[100px]">
        <div className="max-w-screen-[1200px] h-[600px] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] rounded-[25px]">
          <div className="grid grid-cols-3 h-full p-[20px] pt-[47px] gap-[36px]">
            <div className="col-span-2">
              <div className="bg-gradient-bg h-full rounded-[25px] relative">
                <div className="absolute w-[500px] bottom-0 right-1/2 translate-x-1/2">
                  <img src={ConditionsImage} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-medium text-[25px] leading-[30px] mb-[30px]">
                Условия кредитования
              </h3>
              <ul className="flex flex-col flex-1 justify-between mb-[40px]">
                {conditionsItems.map(item => (
                  <ConditionsItem key={item} item={item} />
                ))}
              </ul>
              <Button label="Кредитный калькулятор" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;

interface ConditionsItemProps {
  item: string;
}

const ConditionsItem = ({ item }: ConditionsItemProps) => {
  return (
    <div className="flex gap-[10px]">
      <div className="text-[#2D791A] text-[20px] font-medium leading-[24px]">
        ✓
      </div>
      <div className="text-[15px] leading-[18px]">{item}</div>
    </div>
  );
};
