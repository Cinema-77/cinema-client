import styled from 'styled-components';

export const Slider = styled.section`
  position: relative;
`;
export const SliderBtnPrev = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  opacity: 0.5;

  &:hover {
    opacity: 1;
    background-image: -webkit-linear-gradient(
      right,
      rgba(0, 0, 0, 0.0001) 0,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  img {
    width: 3rem;
    height: 3.6rem;
    transform: rotate(180deg);
  }
`;
export const SliderBtnNext = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 5%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  opacity: 0.5;

  &:hover {
    opacity: 1;
    background-image: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0.0001) 0,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  img {
    width: 3rem;
    height: 3.6rem;
  }
`;
