import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as S from './Coupon.style';
import closeIMG from '@/assets/img/close.png';
import { couponType, detailProps, userType } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeCoupon } from '../..';
import { getUserInfo } from '../../accountSlice';
import { Toast } from '@/lib/Toast';

interface CouponListProps {
  setIsCoupon: Dispatch<SetStateAction<boolean>>;
}

export const CouponList: React.FC<CouponListProps> = ({ setIsCoupon }) => {
  const [listCoupon, setListCoupon] = useState<couponType[]>([]);
  const [infoUser, setInfoUser] = useState<userType>();
  const update = useSelector((state: detailProps) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    if (update) {
      setListCoupon(update.couponList);
      setInfoUser(update.user);
    }
  }, [update]);
  const handleChangeCoupon = async (idCoupon: string) => {
    const body = {
      giftId: idCoupon,
      userId: '',
    };
    const res = await ChangeCoupon(body);
    if (res) {
      if (res.success) {
        Toast(res.message, true);
        dispatch(getUserInfo());
        setIsCoupon(false);
      } else {
        Toast(res.message);
      }
    }
  };
  return (
    <>
      {listCoupon.toString() && update && infoUser && (
        <S.CouponOverlay>
          <S.CouponList>
            <S.CouponListTitle>
              <h2>List Coupon (điểm hiện có: {infoUser.point})</h2>
              <img src={closeIMG} alt="" onClick={() => setIsCoupon(false)} />
            </S.CouponListTitle>
            <S.CouponListItem>
              {listCoupon.map((coupon) => (
                <S.CouponItemItem key={coupon._id}>
                  <S.CouponItemItemDiv>
                    <S.CouponItemItemTitle>{coupon.name}</S.CouponItemItemTitle>
                    <S.CouponItemItemTitle onClick={() => handleChangeCoupon(coupon._id)}>
                      BUYR
                    </S.CouponItemItemTitle>
                  </S.CouponItemItemDiv>
                  <span>{coupon.point} Point</span>
                </S.CouponItemItem>
              ))}
            </S.CouponListItem>
          </S.CouponList>
        </S.CouponOverlay>
      )}
    </>
  );
};
