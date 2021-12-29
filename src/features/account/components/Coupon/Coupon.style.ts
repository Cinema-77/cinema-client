import styled from 'styled-components';

export const Coupon = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;
export const CouponDiv = styled.div`
  &:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const CouponTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;
export const ChangeCoupon = styled.div`
  cursor: pointer;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 12px 16px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  outline: none;

  &:hover {
    opacity: 0.8;
  }
`;
export const CouponOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CouponList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 900px;
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
`;
export const CouponListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: 600;
  }
  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
export const CouponListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
export const CouponItemItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  position: relative;
  color: #fff;
  border-radius: 10px;
  padding: 16px 40px;
  background-color: #000000;
  background-image: linear-gradient(-139deg, #414141 10%, #000000 150%);
  border: none;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: #fff;
    border: 1px solid #fff;
    border-top-color: transparent;
    border-left-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    background-color: #fff;
    border: 1px solid #fff;
    border-top-color: transparent;
    border-right-color: transparent;
  }
`;
export const CouponItemItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CouponItemItemTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  &:last-child {
    cursor: pointer;
    margin-top: 8px;
    color: #fff;
    font-weight: 700;
    text-align: end;
  }
`;
export const CouponItem = styled.div`
  height: 175px;
  display: flex;
  position: relative;
  display: flex;
  background-color: #fbfbfb;
  border: 1px solid #ff6f61;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-left-color: transparent;
    border-top-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-right-color: transparent;
    border-top-color: transparent;
  }
`;
export const CouponItemTitle = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  font-weight: 600;
  color: #000;

  &:first-of-type {
    span {
      &:first-of-type {
        font-size: 20px;
        color: #ff6f61;
      }
      &:last-child {
        cursor: pointer;
        width: max-content;
        font-weight: 600;
        font-size: 14px;
        padding: 8px;
        background-color: #000000;
        letter-spacing: 2px;
        border-radius: 4px;

        &:hover {
          color: #fff;
          transition: color 1s ease;
        }
      }
    }
  }
  &:last-child {
    text-align: end;
  }
`;
export const CouponItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px 0;
  position: relative;
  width: 80%;
  border-right: 1px dashed #ff6f61;
  padding: 16px 24px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translate(50%, -50%) rotate(45deg);
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-top-color: transparent;
    border-left-color: transparent;
    background-color: #fff;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translate(50%, 50%) rotate(-135deg);
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-top-color: transparent;
    border-left-color: transparent;
    background-color: #fff;
  }
`;
export const CouponItemRight = styled.div`
  width: 20%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  text-align: center;
  transform: rotate(-90deg);
  padding: 16px 0px 30px 0;

  h2 {
    color: #ff6f61;
    padding-left: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    transform: rotate(180deg);
  }
`;
export const CouponItemRightIMG = styled.div`
  font-size: 12px;
  letter-spacing: 1.5px;
  img {
    width: 100%;
    height: 30px;
    object-fit: cover;
  }
`;
