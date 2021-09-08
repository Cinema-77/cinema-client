import React, { useEffect, useState } from 'react';
import * as S from './Slider.style';
import Banner1 from '@/assets/banner1.jpg';
import Banner2 from '@/assets/banner2.jpg';
import Banner3 from '@/assets/banner3.jpg';

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
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="46.02px"
          height="46.02px"
          viewBox="0 0 46.02 46.02"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645
			C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872
			L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
              />
            </g>
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </S.SliderBtnPrev>
      <S.SliderBtnNext onClick={chooseNext}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="46.02px"
          height="46.02px"
          viewBox="0 0 46.02 46.02"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M14.757,46.02c-1.412,0-2.825-0.521-3.929-1.569c-2.282-2.17-2.373-5.78-0.204-8.063l12.758-13.418L10.637,9.645
			C8.46,7.37,8.54,3.76,10.816,1.582c2.277-2.178,5.886-2.097,8.063,0.179l16.505,17.253c2.104,2.2,2.108,5.665,0.013,7.872
			L18.893,44.247C17.77,45.424,16.267,46.02,14.757,46.02z"
              />
            </g>
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </S.SliderBtnNext>
    </S.Slider>
  );
};
