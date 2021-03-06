import { Button } from '@/components/Elements';
import { InputField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginWithEmailAndPassword } from '..';

type LoginValues = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const { login } = useAuth();
  const { register, setError, formState, handleSubmit } = useForm();
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const onSubmit: SubmitHandler<LoginValues> = async (data: LoginValues) => {
    setIsLoggingIn(!isLoggingIn);
    const { values, errors } = await loginWithEmailAndPassword(data);

    if (errors) {
      setIsLoggingIn(false);
      Object.keys(errors).map((key) => {
        return setError(key, {
          message: errors[key],
        });
      });
    } else {
      setIsLoggingIn(false);
      login(values);
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
