import { Button } from '@/components/Elements';
import { InputField, SelectField } from '@/components/Form';
import { useAuth } from '@/lib/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getDistrict, getWards, registerWithEmailAndPassword, useCities } from '..';

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
export type Address = {
  districts: District[];
  wards: Ward[];
};

export const RegisterForm = () => {
  const { register } = useAuth();
  const { register: registerForm, formState, watch, handleSubmit, setError } = useForm();
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [address, setAdress] = useState<Address>({ districts: [], wards: [] });
  const citiesQuery = useCities();
  const cityCode = watch('city');
  const districtCode = watch('district');

  useEffect(() => {
    if (cityCode) {
      let code = cityCode.split('-');
      if (code.length > 1) {
        setAdress({ districts: [], wards: [] });
        getDistrict(code[0]).then((res) => setAdress({ districts: res.districts, wards: [] }));
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
    // eslint-disable-next-line
  }, [districtCode]);

  const onSubmit: SubmitHandler<RegisterValues> = async (data: RegisterValues) => {
    setIsRegistering(!isRegistering);
    const { date, month, year, street, city, ward, district, ...newData } = data;
    const dateOfBirth = `${date}/${month}/${year}`;
    let newCity = city.split('-');
    let newWard = ward.split('-');
    let newDistrict = district.split('-');
    const address = {
      city: newCity[1] || '',
      district: newDistrict[1] || '',
      ward: newWard[1] || '',
      street,
    };

    const { values, errors } = await registerWithEmailAndPassword({
      ...newData,
      dateOfBirth,
      address,
    });

    if (errors) {
      Object.keys(errors).map((s) => setError(s, { message: errors[s] }));
      setIsRegistering(false);
    } else {
      register(values);
      setIsRegistering(false);
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
        <div className="flex-100 px-4 max-w-full flex-grow">
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
                options={[...Array(50)].map((_, index) => {
                  const yearNow = new Date().getFullYear();
                  return {
                    label: yearNow - index,
                    value: yearNow - index,
                  };
                })}
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
              defaultValue="Thành phố"
              error={formState.errors['city']}
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
            error={formState.errors['district']}
            title="Quận/Huyện"
            defaultValue="Quận/Huyện"
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
            error={formState.errors['ward']}
            title="Phường/Xã"
            defaultValue="Phường/Xã"
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
