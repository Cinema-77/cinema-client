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
export const FormSlider = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  background-color: rgba(0, 0, 0, 0.8);
  padding-bottom: 14px;

  @media (max-width: 1700px) {
    top: 10%;
  }

  @media (max-width: 1400px) {
    top: 5%;
  }

  @media (max-width: 1350px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 20px;
    background-color: #fff;
  }

  @media (max-width: 414px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 10px;
    background-color: #fff;
  }
`;
export const FormSliderTitle = styled.h2`
  position: relative;
  color: #fff;
  background-color: #f26b38;
  font-size: 16px;
  padding: 12px 16px;
  font-weight: 500;
  text-transform: uppercase;
  width: max-content;
  margin-bottom: 16px;

  @media (max-width: 1350px) {
    color: #000;
    background-color: #fff;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 50px;
      height: 2px;
      margin-top: 8px;
      background-color: #f26b38;
    }
  }
`;
export const FormSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
  gap: 20px 0;
`;
export const FormSliderListTab = styled.div`
  display: flex;
`;
export const FormSliderTab = styled.h2`
  width: calc(100% / 3);
  cursor: default;
  font-size: 14px;
  line-height: 40px;
  padding: 0 20px;
  text-align: center;
  color: ${({ active }: any) => (active ? '#f26b38' : '#fff')};
  border-bottom: 2px solid ${({ active }: any) => (active ? '#f26b38' : '#fff')};

  &:hover {
    color: #f26b38;
    border-bottom-color: #f26b38;
  }

  @media (max-width: 1350px) {
    color: #000;
    border: none;
    background-color: #e9edf1;
    border: 1px solid #ced0da;
  }

  @media (max-width: 414px) {
    padding: 0 14px;
  }
` as any;
export const FormSliderBtn = styled.div`
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 11px 15px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #f26b38;
  width: max-content;
  margin-left: auto;

  @media (max-width: 1350px) {
    width: 100%;
    text-align: center;
  }
`;
export const FormSliderListSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;
export const FormSliderSelect = styled.select`
  width: 330px;
  height: 40px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0 10px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;

  @media (max-width: 1350px) {
    color: #000;
    width: 100%;
    border: 1px solid #ccc;
  }

  option {
    color: #000;
    width: 250px;
  }
`;
