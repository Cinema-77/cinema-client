import React from 'react';
import { giftType } from '../../type';
import * as S from './Coupon.style';
import mavach from '@/assets/img/mavach.png';
import moment from 'moment';

interface CouponItemProps {
  item: giftType;
}

export const CouponItem: React.FC<CouponItemProps> = ({ item }) => {
  return (
    <>
      {Number(item.dateExpiry) > new Date().getTime() && (
        <S.CouponItem>
          <S.CouponItemLeft>
            <S.CouponItemTitle>
              <span>COUPON</span>
              <span>{item.gift.name}</span>
              <span>{item.code}</span>
            </S.CouponItemTitle>
            <S.CouponItemTitle>
              Ngày hết hạn:
              {' ' + moment(Number(item.dateExpiry)).format('MM-DD-YYYY')}
            </S.CouponItemTitle>
          </S.CouponItemLeft>
          <S.CouponItemRight>
            <h2>{item.gift.type === 1 ? 'COMBO' : 'TICKET'}</h2>
            <S.CouponItemRightIMG>
              100345
              <img src={mavach} alt="" />
            </S.CouponItemRightIMG>
          </S.CouponItemRight>
        </S.CouponItem>
      )}
    </>
  );
};
