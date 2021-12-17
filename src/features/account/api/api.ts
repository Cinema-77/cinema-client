import { axios } from '@/lib/axios';
import { InfoValues } from '..';
import {
  billRespon,
  CouponRespon,
  GetCouponUserRespon,
  GiftRespon,
  PasswordRespon,
  UserRespon,
} from '../type';

export const getBillUser = (params: string): Promise<billRespon> => {
  return axios.get(`bill/get-all-bill?${params}`);
};

export const getInfoUser = (): Promise<UserRespon> => {
  return axios.get('/auth/me');
};

type DataUpdateInfoUser = {
  email: string;
  phoneNumber: string;
  fullName: string;
  address: {
    city: string;
    district: string;
    ward: string;
    street: string;
  };
  dateOfBirth: string;
};

export const UpdateInfouser = (
  id: string | undefined,
  data: DataUpdateInfoUser
): Promise<UserRespon> => {
  return axios.put(`/auth/update/${id}`, data);
};

export const UpdatePasswordUser = (data: InfoValues): Promise<PasswordRespon> => {
  return axios.put('/auth/change-password', data);
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
