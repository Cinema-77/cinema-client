import { Spinner } from '@/components/Elements';
import { AuthUser, getUser, UserResponse } from '@/features/auth';
import storage from '@/utils/storage';
import { initReactQueryAuth } from 'react-query-auth';

async function handleUserResponse(data: UserResponse) {
  const { token, user } = data;
  storage.setToken(token);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const { user } = await getUser();
    return user;
  }
  return null;
}

async function loginFn(values: UserResponse) {
  const user = await handleUserResponse(values);
  return user;
}

async function registerFn(values: UserResponse) {
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
  AuthUser | null,
  unknown,
  UserResponse,
  UserResponse
>(authConfig);
