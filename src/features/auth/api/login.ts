import { axios } from '@/lib/axios';

import { AuthResponse } from '../types';

export type LoginCredentialsDTO = {
  username: string;
  password: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO): Promise<AuthResponse> => {
  return axios.post('/auth/login', data);
};
