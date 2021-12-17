import * as z from 'zod';
import { InputField, SelectField } from '@/components/Form';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/Elements';
import { useAuth } from '@/lib/auth';
import { Address } from '@/features/auth/components/RegisterForm';
import { getDistrict, getWards, useCities } from '@/features/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateInfouser } from '..';
import { Toast } from '@/lib/Toast';

const schema = z.object({
  fullName: z.string().nonempty('Vui lòng không để trống tên'),
  phoneNumber: z.string().min(10, 'Vui lòng điền số điện thoại'),
  date: z.string(),
  month: z.string(),
  year: z.string(),
  city: z.string().nonempty('Vui lòng chọn thành phố'),
  district: z.string().nonempty('Vui lòng chọn quận/huyện'),
  ward: z.string().nonempty('Vui lòng chọn xã'),
  street: z.string().nonempty('Vui lòng nhập tên đường'),
  email: z.string(),
});

interface PersonalInfoProps {}

type InfoValues = {
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
};

export const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  const [isSaving, setIsSaving] = useState(false);
  const { user } = useAuth();
  const dateOfBirth = user?.profile.dateOfBirth.split('/');
  const { watch, handleSubmit, register, formState } = useForm({
    resolver: zodResolver(schema),
  });
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
  const onSave: SubmitHandler<InfoValues> = async (data: InfoValues) => {
    const body = {
      email: data.email,
      phoneNumber: data.phoneNumber,
      fullName: data.fullName,
      address: {
        city: data.city,
        district: data.district,
        ward: data.ward,
        street: data.street,
      },
      dateOfBirth: data.date + '/' + data.month + '/' + data.year,
    };
    const res = await UpdateInfouser(user?._id, body);
    if (res.success) {
      Toast(res.message, true);
    } else {
      Toast(res.message);
    }
    setIsSaving(!isSaving);
  };
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="flex flex-wrap -ml-4">
        <div className="flex-100 px-4 max-w-full md:flex-50 md:max-w-[50%]">
          <InputField
            type="text"
            label="Full Name *"
            error={formState.errors['fullName']}
            registration={register('fullName', { value: user?.profile.fullName })}
          />
        </div>
        <div className="flex-100 max-w-full px-4 md:flex-50 md:max-w-[50%]">
          <InputField
            type="text"
            label="Phone *"
            error={formState.errors['phoneNumber']}
            registration={register('phoneNumber', { value: user?.phoneNumber })}
          />
        </div>
        <div className="flex-100 max-w-full px-4">
          <InputField
            type="email"
            label="Email Address"
            error={formState.errors['email']}
            registration={register('email', {
              value: user?.email,
            })}
            disabled
            className="bg-gray-100"
          />
        </div>
        <div className="flex-100 px-4 max-w-full ">
          <label className="text-2xl font-medium mb-2 inline-block">Date of Birth</label>
          <div className="flex flex-wrap ml-[-10px]">
            <div className="flex-0 w-auto max-w-full px-[10px]">
              <SelectField
                label="Date"
                variant="secondary"
                registration={register('date')}
                defaultValue={dateOfBirth && dateOfBirth[0]}
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
                registration={register('month')}
                defaultValue={dateOfBirth && dateOfBirth[1]}
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
                registration={register('year')}
                defaultValue={dateOfBirth && dateOfBirth[2]}
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
        <div className="flex-100 px-4 max-w-full md:flex-50 md:max-w-[50%]">
          {citiesQuery.data && (
            <SelectField
              label="City"
              registration={register('city')}
              title={user?.profile.address.city}
              defaultValue={user?.profile.address.city}
              options={citiesQuery?.data.map((city) => ({
                label: city.name,
                value: `${city.code}-${city.name}`,
              }))}
            />
          )}
        </div>
        <div className="flex-100 px-4 max-w-full md:flex-50 md:max-w-[50%]">
          <SelectField
            label="District"
            registration={register('district')}
            title={user?.profile.address.district}
            defaultValue={user?.profile.address.district}
            options={address?.districts.map((d: any) => ({
              label: d.name,
              value: `${d.code}-${d.name}`,
            }))}
          />
        </div>
        <div className="flex-100 px-4 max-w-full md:flex-50 md:max-w-[50%]">
          <SelectField
            label="Ward"
            registration={register('ward')}
            title={user?.profile.address.ward}
            defaultValue={user?.profile.address.ward}
            options={address?.wards.map((ward) => ({
              label: ward.name,
              value: `${ward.code}-${ward.name}`,
            }))}
          />
        </div>
        <div className="flex-100 px-4 max-w-full md:flex-50 md:max-w-[50%]">
          <InputField
            label="Street *"
            error={formState.errors['street']}
            registration={register('street', {
              value: user?.profile.address.street,
            })}
          />
        </div>

        <div className="flex-100 px-4 max-w-full">
          <Button isLoading={isSaving} type="submit">
            Save changes
          </Button>
        </div>
      </div>
    </form>
  );
};
