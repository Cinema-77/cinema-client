import { initReactQueryAuth } from 'react-query-auth';

import {
  loginWithEmailAndPassword,
  getUser,
  registerWithEmailAndPassword,
  UserResponse,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
  AuthUser,
  AuthErrors,
} from '@/features/auth';
import storage from '@/utils/storage';
import { Spinner } from '@/components/Elements';

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const { user } = await getUser();
    return user as AuthUser;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const { values, errors, success } = await loginWithEmailAndPassword(data);

  if (errors) {
    return { ...errors, success };
  }

  const user = await handleUserResponse(values);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const { values, errors, success } = await registerWithEmailAndPassword(data);
  if (errors) {
    return { ...errors, success };
  }
  const user = await handleUserResponse(values);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null | AuthErrors,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig);
