import { axios } from '@/lib/axios';
import { billRespon, CouponRespon, GetCouponUserRespon, GiftRespon, UserRespon } from '../type';

export const getBillUser = (params: string): Promise<billRespon> => {
  return axios.get(`bill/get-all-bill?${params}`);
};

export const getInfoUser = (): Promise<UserRespon> => {
  return axios.get('/auth/me');
};

export const getListCoupon = (): Promise<CouponRespon> => {
  return axios.get('/coupon/gift/get-all');
};

interface ChangeCouponType {
  giftId: string;
  userId: string;
}

export const ChangeCoupon = (body: ChangeCouponType): Promise<GiftRespon> => {
  return axios.post('/coupon/create-coupon', body);
};

export const getCouponUser = (params: string): Promise<GetCouponUserRespon> => {
  return axios.get(`/coupon/me?${params}`);
};
