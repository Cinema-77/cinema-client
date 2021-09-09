import { axios } from '@/lib/axios';

import { AuthResponse } from '../types';

export interface UserAddress {
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
  password: string;
  confirmPassword: string;
};

export const registerWithEmailAndPassword = (
  data: RegisterCredentialsDTO
): Promise<AuthResponse> => {
  return axios.post('/auth/register', data);
};
