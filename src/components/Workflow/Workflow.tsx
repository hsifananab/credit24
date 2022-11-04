import React from 'react';
import Button from '../UI/Button';
import { workflow } from '../../data/data';

const Workflow = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="container py-[100px]">
        <h3 className="font-medium text-[25px] leading-[30px] mb-[30px]">
          Схема работы
        </h3>
        <div className="flex">
          <div className="flex gap-[30px] items-center">
            {workflow.map((item, index) => (
              <WorkflowItem key={item} item={item} index={index} />
            ))}
          </div>
          <div className="w-[310px]">
            <Button label="Оформить кредит" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;

interface WorkflowItemProps {
  item: string;
  index: number;
}

const WorkflowItem = ({ item, index }: WorkflowItemProps) => {
  const orderNumber = '0' + (index + 1).toString();

  return (
    <div className="flex gap-[27px] items-center">
      <div className="px-[20px] py-[15px] rounded-[11px] bg-[#ECE4C0] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] text-[15px] font-medium">
        {orderNumber}
      </div>
      <p className="text-[15px]">{item}</p>
    </div>
  );
};
