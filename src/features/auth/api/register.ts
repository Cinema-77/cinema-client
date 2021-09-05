import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

interface UserAddress {
  city: string;
  district: string;
  ward: string;
  street: string;
}

export type RegisterCredentialsDTO = {
  email: string;
  phoneNumber: string;
  fullName: string;
  address: UserAddress;
  dateOfBirth: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<UserResponse> => {
  return axios.post('/auth/register', data);
};
