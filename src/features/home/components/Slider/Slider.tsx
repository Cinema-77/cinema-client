import React, { useEffect, useState } from 'react';
import * as S from './Slider.style';
import Banner1 from '@/assets/img/banner 1.jpg';
import Banner2 from '@/assets/img/banner 2.jpg';
import Banner3 from '@/assets/img/banner 3.jpg';
import IconPrev from '@/assets/icon/iconprev.svg';
import IconNext from '@/assets/icon/iconnext.svg';

interface SliderProps {}

export const Slider: React.FC<SliderProps> = () => {
  const [image] = useState([Banner1, Banner2, Banner3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const SLImage = image.length - 1;

  const choosePrev = () => {
    if (currentIndex < 1) {
      return setCurrentIndex(SLImage);
    }
    setCurrentIndex(currentIndex - 1);
  };

  const chooseNext = () => {
    if (currentIndex >= SLImage) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const autoSlider = setInterval(() => {
      if (currentIndex >= SLImage) {
        return setCurrentIndex(0);
      }
      setCurrentIndex(currentIndex + 1);
    }, 3000);

    return () => clearInterval(autoSlider);
  }, [SLImage, currentIndex]);

  return (
    <S.Slider>
      <img src={image[currentIndex]} alt="" />
      <S.SliderBtnPrev onClick={choosePrev}>
        <img src={IconPrev} alt="" />
      </S.SliderBtnPrev>
      <S.SliderBtnNext onClick={chooseNext}>
        <img src={IconNext} alt="" />
      </S.SliderBtnNext>
    </S.Slider>
  );
};
