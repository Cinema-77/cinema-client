import React, { useEffect, useMemo, useState } from 'react';
import { getCouponUser, Pagination } from '../..';
import { detailProps, filterProps, giftType } from '../../type';
import * as S from './Coupon.style';
import qs from 'query-string';
import { useLocation } from 'react-router';
import { CouponItem } from './CouponItem';
import { CouponList } from './CouponList';
import { Loading } from '@/features/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getCouponList, getUserInfo } from '../../accountSlice';

export const Coupon = () => {
  const [filters, setFilters] = useState<filterProps>({
    page: 1,
    limit: 5,
  });
  const location = useLocation();
  const [totalPage, setTotalPage] = useState<number>(0 || 1);
  const [isCoupon, setIsCoupon] = useState(false);
  const [listCoupon, setlistCoupon] = useState<giftType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const query = useMemo(() => qs.parse(location.search), [location.search]);
  const dispatch = useDispatch();
  const update = useSelector((state: detailProps) => state.account.user);

  useEffect(() => {
    setIsLoading(true);
    const _filter = {
      ...query,
      page: Number(query.page) || 1,
      limit: Number(query.limit) || 5,
    };
    setFilters(_filter);
    const params = {
      page: _filter.page,
      limit: _filter.limit,
    };
    const getData = async () => {
      const res = await getCouponUser(qs.stringify(params));
      if (res) {
        setlistCoupon(res.values.coupons);
        setTotalPage(res.values.pageSize);
      }
    };
    getData();
    setIsLoading(false);
  }, [query, update]);

  useEffect(() => {
    dispatch(getCouponList());
    dispatch(getUserInfo());
  }, [dispatch]);
  console.log('listCoupon', listCoupon);
  return (
    <S.Coupon>
      <S.CouponDiv>
        <S.CouponTitle>Coupon Của Bạn</S.CouponTitle>
        <S.ChangeCoupon onClick={() => setIsCoupon(true)}>Đổi Coupon</S.ChangeCoupon>
        <Pagination url={'/account/coupon?'} filters={filters} totalPage={totalPage || 1} />
      </S.CouponDiv>
      {!isLoading && listCoupon.toString() && (
        <S.CouponListItem>
          {listCoupon.map((coupon) => (
            <React.Fragment key={coupon._id}>
              {coupon.status === 0 && <CouponItem item={coupon} />}
            </React.Fragment>
          ))}
        </S.CouponListItem>
      )}
      {isLoading && <Loading />}
      {isCoupon && <CouponList setIsCoupon={setIsCoupon} />}
    </S.Coupon>
  );
};
