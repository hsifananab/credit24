import Slider from 'react-slick';
import LeftArrow from '../../assets/images/leftArrow.svg';
import RightArrow from '../../assets/images/rightArrow.svg';
import { reviewCards } from '../../data/data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReviewsSlider = () => {
  const ReviewsSliderArrowLeft = ({
    currentSlide,
    slideCount,
    ...props
  }: any) => (
    <div className="" {...props}>
      <div className="w-[80px] aspect-square bg-white border border-[##DEDEDE] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] transition-all rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 -left-[60px]">
        <img src={LeftArrow} alt="" />
      </div>
    </div>
  );

  const ReviewsSliderArrowRight = ({
    currentSlide,
    slideCount,
    ...props
  }: any) => (
    <div className="" {...props}>
      <div className="w-[80px] aspect-square bg-white border border-[##DEDEDE] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] transition-all rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 -right-[60px]">
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <ReviewsSliderArrowLeft />,
    nextArrow: <ReviewsSliderArrowRight />,
  };

  return (
    <Slider {...settings} className="">
      {reviewCards.map(item => (
        <ReviewsSliderItem key={item.text} item={item} />
      ))}
    </Slider>
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
    <div className="w-[380px] h-[323px] shadow-[0px_2px_7px_rgba(0,0,0,0.12)] rounded-[25px] my-1 mx-auto pt-[28px] px-[12px] pb-[15px] flex flex-col gap-[15px]">
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
