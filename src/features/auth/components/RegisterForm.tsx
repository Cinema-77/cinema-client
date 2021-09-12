import { Button } from '@/components/Elements';
import { InputField, SelectField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getDistrict, getWards, useCities } from '..';

import { District, Ward } from '../types';

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

export const RegisterForm = () => {
  const { register, isRegistering, error } = useAuth();
  const { register: registerForm, formState, watch, handleSubmit, setError } = useForm();
  const [address, setAdress] = useState<Address>({ districts: [], wards: [] });
  const citiesQuery = useCities();
  const cityCode = watch('city');
  const districtCode = watch('district');

  useEffect(() => {
    if (cityCode) {
      let code = cityCode.split('-');
      if (code.length > 1) {
        setAdress({ districts: [], wards: [] });
        getDistrict(code[0]).then((res) => setAdress({ ...address, districts: res.districts }));
      }
    }
  }, [cityCode]);

  useEffect(() => {
    if (districtCode) {
      let code = districtCode.split('-');
      if (code.length > 1) {
        setAdress({ ...address, wards: [] });
        getWards(code[0]).then((res) => setAdress({ ...address, wards: res.wards }));
      }
    }
  }, [districtCode]);

  const onSubmit: SubmitHandler<RegisterValues> = async (data: RegisterValues) => {
    const { date, month, year, street, city, ward, district, ...newData } = data;
    const dateOfBirth = `${date}/${month}/${year}`;
    let newCity = city.split('-');
    let newWard = ward.split('-');
    let newDistrict = district.split('-');
    const address = {
      city: newCity[1],
      district: newDistrict[1],
      ward: newWard[1],
      street,
    };
    const { success, ...newValue }: any = await register({ ...newData, dateOfBirth, address });
    if (!success) {
      Object.keys(newValue).map((s) => setError(s, { message: newValue[s] }));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -ml-4">
        <div className="flex-100 px-4 max-w-full">
          <InputField
            type="text"
            label="Full Name *"
            error={formState.errors['fullName']}
            registration={registerForm('fullName')}
          />
        </div>
        <div className="flex-100 px-4 max-w-full">
          <InputField
            type="email"
            label="Email Address *"
            error={formState.errors['email']}
            registration={registerForm('email')}
          />
        </div>
        <div className="flex-100 px-4 max-w-full">
          <InputField
            type="text"
            label="Phone *"
            error={formState.errors['phoneNumber']}
            registration={registerForm('phoneNumber')}
          />
        </div>
        <div className="flex-50 px-4 max-w-[50%]">
          <InputField
            type="password"
            label="Password *"
            error={formState.errors['password']}
            registration={registerForm('password')}
          />
        </div>
        <div className="flex-50 px-4 max-w-[50%]">
          <InputField
            type="password"
            label="Confirm password *"
            error={formState.errors['confirmPassword']}
            registration={registerForm('confirmPassword')}
          />
        </div>
        <div className="flex-100 px-4 max-w-full">
          <label className="text-2xl font-medium mb-2 inline-block">Date of Birth</label>
          <div className="flex flex-wrap ml-[-10px]">
            <div className="flex-0 w-auto max-w-full px-[10px]">
              <SelectField
                label="Date"
                variant="secondary"
                registration={registerForm('date')}
                options={[...Array(31)].map((_, index) => ({
                  label: index + 1,
                  value: index + 1,
                }))}
              />
            </div>
            <div className="flex-0 w-auto max-w-full px-[10px]">
              <SelectField
                label="Month"
                variant="secondary"
                registration={registerForm('month')}
                options={[...Array(12)].map((_, index) => ({
                  label: index + 1,
                  value: index + 1,
                }))}
              />
            </div>
            <div className="flex-0 w-auto max-w-full px-[10px]">
              <SelectField
                label="Year"
                variant="secondary"
                registration={registerForm('year')}
                options={[...Array(50)].map((_, index) => ({
                  label: 2021 - index,
                  value: 2021 - index,
                }))}
              />
            </div>
          </div>
        </div>
        <div className="flex-50 px-4 max-w-[50%]">
          {citiesQuery.data && (
            <SelectField
              label="City"
              registration={registerForm('city')}
              title="Thành phố"
              options={citiesQuery?.data.map((city) => ({
                label: city.name,
                value: `${city.code}-${city.name}`,
              }))}
            />
          )}
        </div>
        <div className="flex-50 px-4 max-w-[50%]">
          <SelectField
            label="District"
            registration={registerForm('district')}
            title="Quận/Huyện"
            options={address?.districts.map((d: any) => ({
              label: d.name,
              value: `${d.code}-${d.name}`,
            }))}
          />
        </div>
        <div className="flex-50 px-4 max-w-[50%]">
          <SelectField
            label="Ward"
            registration={registerForm('ward')}
            title="Phường/Xã"
            options={address?.wards.map((ward) => ({
              label: ward.name,
              value: `${ward.code}-${ward.name}`,
            }))}
          />
        </div>
        <div className="flex-50 px-4 max-w-[50%]">
          <InputField
            label="Street *"
            error={formState.errors['street']}
            registration={registerForm('street')}
          />
        </div>

        <div className="flex-100 px-4 max-w-full">
          <Button isLoading={isRegistering} type="submit">
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};
