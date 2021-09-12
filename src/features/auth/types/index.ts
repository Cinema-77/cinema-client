import { LoginCredentialsDTO, RegisterCredentialsDTO } from '..';

interface UserProfile {
  fullName: string;
  dateOfBirth: string;
  address: string;
}

export interface AuthUser {
  _id: string;
  email: string;
  createdAt: string;
  phoneNumber: string;
  profile: UserProfile;
  success: boolean;
}

export interface UserResponse {
  token: string;
  user: AuthUser;
}

export interface AuthErrors {
  loginErrors: Partial<LoginCredentialsDTO>;
  regisErrors: Partial<RegisterCredentialsDTO>;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  values: UserResponse;
  errors?: AuthErrors;
  user?: AuthUser;
}

export interface Cities {
  name: string;
  code: number;
  division_type: string;
  codename: string;
  phone_code: number;
  districts: District[];
}

export interface District extends Cities {
  province_code: number;
  wards: Ward[];
}

export interface Ward extends Cities {
  district_code: number;
}
