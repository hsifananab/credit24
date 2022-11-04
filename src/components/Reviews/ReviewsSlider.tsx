import React from 'react';
import { reviewCards } from '../../data/data';

const ReviewsSlider = () => {
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {reviewCards.map(item => (
        <ReviewsSliderItem key={item.text} item={item} />
      ))}
    </div>
  );
};

export default ReviewsSlider;

interface ReviewsSliderItemProps {
  item: {
    image: string;
    name: string;
    city: string;
    position: string;
    text: string;
  };
}

const ReviewsSliderItem = ({ item }: ReviewsSliderItemProps) => {
  return (
    <div className="w-[380px] h-[323px] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] rounded-[25px] pt-[28px] px-[12px] pb-[15px] flex flex-col gap-[15px]">
      <div className="flex gap-[26px]">
        <img src={item.image} alt="" className="w-[85px] h-[75px]" />
        <div className="">
          <p className="font-semibold leading-[19px] mb-[2px]">{item.name}</p>
          <p className="font-semibold text-[12px] leading-[14px] mb-[8px]">
            {item.city}
          </p>
          <p className="font-light text-[13px] leading-[15px]">
            {item.position}
          </p>
        </div>
      </div>
      <div className="bg-[#D6E2D4] pl-[22px] py-[29px] pr-[25px] h-full rounded-[15px]">
        <div className="text-[15px] leading-[130%]">{item.text}</div>
      </div>
    </div>
  );
};
