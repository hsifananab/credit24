import React from 'react';
import ReviewsSlider from './ReviewsSlider';

const Reviews = () => {
  return (
    <div className="bg-white">
      <div className="container py-[100px]">
        <h3 className="font-medium text-[25px] leading-[30px] mb-[30px]">
          Отзывы
        </h3>
        <ReviewsSlider />
      </div>
    </div>
  );
};

export default Reviews;
