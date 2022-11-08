import Slider from 'react-slick';
import LeftArrow from '../../assets/images/leftArrow.svg';
import RightArrow from '../../assets/images/rightArrow.svg';
import { partners } from '../../data/data';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PartnersSlider = () => {
  const PartnersSliderArrowLeft = ({
    currentSlide,
    slideCount,
    ...props
  }: any) => (
    <div className="" {...props}>
      <div className="w-[50px] aspect-square bg-[#EDEDED] hover:bg-gradient-bg transition-all rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 -left-[50px]">
        <img src={LeftArrow} alt="" />
      </div>
    </div>
  );

  const PartnersSliderArrowRight = ({
    currentSlide,
    slideCount,
    ...props
  }: any) => (
    <div className="" {...props}>
      <div className="w-[50px] aspect-square bg-[#EDEDED] hover:bg-gradient-bg transition-all rounded-full flex items-center justify-center absolute top-1/2 -translate-y-1/2 -right-[50px]">
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: 'linear',
    prevArrow: <PartnersSliderArrowLeft />,
    nextArrow: <PartnersSliderArrowRight />,
  };

  return (
    <div>
      <Slider {...settings}>
        {partners.map(item => (
          <PartnersSliderItem key={item} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSlider;

interface PartnersSliderItemProps {
  item: string;
}

const PartnersSliderItem = ({ item }: PartnersSliderItemProps) => {
  return (
    <div className="flex items-center justify-center w-[175px] h-[70px] bg-[#ECE4C0] rounded-[35px]">
      <img src={item} alt="" className="" />
    </div>
  );
};
