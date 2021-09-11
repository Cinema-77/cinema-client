import { Button } from '@/components/Elements';
import { Form, InputField, SelectField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import * as React from 'react';
import { useState } from 'react';
import * as z from 'zod';
import { useCities } from '../api/getCities';
import { District, Ward } from '../types';

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
  date: string;
  month: string;
  year: string;
  city: string;
  district: string;
  ward: string;
  street: string;
  password: string;
  confirmPassword: string;
};
type Address = {
  districts: District[];
  wards: Ward[];
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const { register, isRegistering } = useAuth();
  const [address, setAdress] = useState<Address>({ districts: [], wards: [] });
  const citiesQuery = useCities();

  // React.useEffect(() => {
  //   getDistrict().then((res: any) =>
  //         setAdress({ districts: res.districts, wards: [] })
  //       );
  // },[])

  return (
    <Form<RegisterValues, typeof schema>
      onSubmit={async (values) => {
        // await register(values);
        onSuccess();
      }}
      schema={schema}
    >
      {({ register, formState }) => (
        <>
          <div className="flex flex-wrap -ml-4">
            <div className="flex-100 px-4 max-w-full">
              <InputField
                type="text"
                label="Full Name *"
                error={formState.errors['fullName']}
                registration={register('fullName')}
              />
            </div>
            <div className="flex-100 px-4 max-w-full">
              <InputField
                type="email"
                label="Email Address *"
                error={formState.errors['email']}
                registration={register('email')}
              />
            </div>
            <div className="flex-100 px-4 max-w-full">
              <InputField
                type="text"
                label="Phone *"
                error={formState.errors['phoneNumber']}
                registration={register('phoneNumber')}
              />
            </div>
            <div className="flex-50 px-4 max-w-[50%]">
              <InputField
                type="password"
                label="Password *"
                error={formState.errors['password']}
                registration={register('password')}
              />
            </div>
            <div className="flex-50 px-4 max-w-[50%]">
              <InputField
                type="password"
                label="Confirm password *"
                error={formState.errors['confirmPassword']}
                registration={register('confirmPassword')}
              />
            </div>
            <div className="flex-100 px-4 max-w-full">
              <label className="text-2xl font-medium mb-2 inline-block">Date of Birth</label>
              <div className="flex flex-wrap ml-[-10px]">
                <div className="flex-0 w-auto max-w-full px-[10px]">
                  <SelectField
                    label="Date"
                    variant="secondary"
                    registration={register('date')}
                    options={[...Array(32).keys()].map((number) => ({
                      label: number,
                      value: number,
                    }))}
                  />
                </div>
                <div className="flex-0 w-auto max-w-full px-[10px]">
                  <SelectField
                    label="Month"
                    variant="secondary"
                    registration={register('month')}
                    options={[...Array(12).keys()].map((number) => ({
                      label: number,
                      value: number,
                    }))}
                  />
                </div>
                <div className="flex-0 w-auto max-w-full px-[10px]">
                  <SelectField
                    label="Year"
                    variant="secondary"
                    registration={register('year')}
                    options={[...Array(50).keys()].map((number) => ({
                      label: 2021 - number,
                      value: 2021 - number,
                    }))}
                  />
                </div>
              </div>
            </div>
            <div className="flex-50 px-4 max-w-[50%]">
              {citiesQuery.data && (
                <SelectField
                  label="City"
                  registration={register('city')}
                  options={citiesQuery?.data.map((city) => ({
                    label: city.name,
                    value: city.code,
                  }))}
                />
              )}
            </div>
            <div className="flex-50 px-4 max-w-[50%]">
              <SelectField
                label="District"
                registration={register('district')}
                options={address.districts.map((d) => ({
                  label: d.name,
                  value: d.code,
                }))}
              />
            </div>
            <div className="flex-50 px-4 max-w-[50%]">
              <SelectField
                label="Ward"
                registration={register('ward')}
                options={[...Array(50).keys()].map((number) => ({
                  label: 2021 - number,
                  value: 2021 - number,
                }))}
              />
            </div>
            <div className="flex-50 px-4 max-w-[50%]">
              <InputField
                label="Street *"
                error={formState.errors['street']}
                registration={register('street')}
              />
            </div>

            <div className="flex-100 px-4 max-w-full">
              <Button isLoading={isRegistering} type="submit">
                Register
              </Button>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};
