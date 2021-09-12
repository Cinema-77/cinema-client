import * as z from 'zod';

import { Form, InputField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/Elements';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';

type LoginValues = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const { login, isLoggingIn } = useAuth();
  const { register, setError, formState, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<LoginValues> = async (values: LoginValues) => {
    const { success, ...newValues }: any = await login(values);
    if (!success) {
      Object.keys(newValues).map((key) => {
        setError(key, {
          message: newValues[key],
        });
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Email or Phone number *"
        error={formState.errors['username']}
        registration={register('username')}
      />
      <InputField
        type="password"
        label="Password *"
        error={formState.errors['password']}
        registration={register('password')}
      />
      <div className="flex items-center justify-end">
        <a href="#forgot" className="mb-6 bg-transparent text-2xl font-medium">
          Forgot password?
        </a>
      </div>
      <div>
        <Button isLoading={isLoggingIn} type="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
};
