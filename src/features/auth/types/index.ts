interface UserAddress {
  city: string;
  district: string;
  ward: string;
  street: string;
}

export interface AuthUser {
  email: string;
  phoneNumber: string;
  fullName: string;
  address: UserAddress;
  dateOfBirth: string;
}

export interface UserResponse {
  jwt: string;
  user: AuthUser;
}
