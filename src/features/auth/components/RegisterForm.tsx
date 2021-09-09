import * as React from 'react';
import * as z from 'zod';

import { Button } from '@/components/Elements';
import { Form, InputField, SelectField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import { UserAddress } from '../api/register';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
  confirmPassword: z.string().min(1, 'Required'),
});

type RegisterValues = {
  email: string;
  phoneNumber: string;
  fullName: string;
  address: UserAddress;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register, isRegistering } = useAuth();

  return (
    <div>
      <Form<RegisterValues, typeof schema>
        onSubmit={async (values) => {
          await register(values);
          onSuccess();
        }}
        schema={schema}
        options={{
          shouldUnregister: true,
        }}
      >
        {({ register, formState }) => (
          <>
            <div className="flex flex-wrap">
              <div className="flex-100 px-4 max-w-full">
                <InputField
                  type="text"
                  label="Full Name"
                  error={formState.errors['fullName']}
                  registration={register('fullName')}
                />
              </div>
              <div className="flex-100 px-4 max-w-full">
                <InputField
                  type="email"
                  label="Email Address"
                  error={formState.errors['email']}
                  registration={register('email')}
                />
              </div>
              <div className="flex-100 px-4 max-w-full">
                <InputField
                  type="text"
                  label="Phone"
                  error={formState.errors['phoneNumber']}
                  registration={register('phoneNumber')}
                />
              </div>
              <div className="flex-50 px-4 max-w-[50%]">
                <InputField
                  type="password"
                  label="Password"
                  error={formState.errors['password']}
                  registration={register('password')}
                />
              </div>
              <div className="flex-50 px-4 max-w-[50%]">
                <InputField
                  type="password"
                  label="Confirm password"
                  error={formState.errors['confirmPassword']}
                  registration={register('confirmPassword')}
                />
              </div>
            </div>

            {/* <SelectField
              label="Team"
              error={formState.errors.address?.city}
              registration={register('address.city')}
              options={[...Array(31)].map((team, index) => ({
                label: index,
                value: index,
              }))}
            /> */}
            <div>
              <Button isLoading={isRegistering} type="submit" className="w-full">
                Register
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
