import React from 'react';
import FaqAccordion from './FaqAccordion';

const Faq = () => {
  return (
    <div className="bg-white">
      <div className="container mt-[100px] pb-[100px]">
        <h3 className="font-medium text-[25px] leading-[30px] mb-[30px]">
          Вопросы - ответы
        </h3>
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Faq;
