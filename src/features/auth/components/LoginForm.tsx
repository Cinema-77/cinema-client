import * as z from 'zod';

// import { Button } from '@/components/Elements';
import { Form, InputField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/Elements';

const schema = z.object({
  username: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type LoginValues = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { login, isLoggingIn } = useAuth();

  return (
    <div>
      <Form<LoginValues, typeof schema>
        onSubmit={async (values) => {
          await login(values);
          onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
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
          </>
        )}
      </Form>
    </div>
  );
};
