import { toast } from 'react-toastify';

export const Toast = (message: string, success?: boolean) => {
  if (success) {
    toast.success(message, {
      position: 'top-center',
      autoClose: 3000,
    });
  } else {
    toast.error(message, {
      position: 'top-center',
      autoClose: 3000,
    });
  }
  return null;
};
