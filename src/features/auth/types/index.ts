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
}

export interface UserResponse {
  token: string;
  user: AuthUser;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  values: UserResponse;
}
