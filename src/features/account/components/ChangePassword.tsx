import * as z from 'zod';
import { InputField } from '@/components/Form';
import React, { useState } from 'react';
import { Button } from '@/components/Elements';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordUser } from '..';
import { Toast } from '@/lib/Toast';

const schema = z.object({
  oldPassword: z.string().nonempty('Vui lòng nhập mật khẩu cũ'),
  newPassword: z.string().nonempty('Vui lòng nhập mật khẩu mới'),
  confirmPassword: z.string().nonempty('Vui lòng nhập lại mật khẩu mới'),
});

export type InfoValues = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export const ChangePassword = () => {
  const [isSaving, setIsSaving] = useState(false);
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const onSave: SubmitHandler<InfoValues> = async (data: InfoValues) => {
    const res = await UpdatePasswordUser(data);
    if (res.success) {
      Toast(res.message, true);
    } else {
      if (res.values.errors.oldPassword) Toast(res.values.errors.oldPassword);
      if (res.values.errors.newPassword) Toast(res.values.errors.newPassword);
      if (res.values.errors.confirmPassword) Toast(res.values.errors.confirmPassword);
    }
    setIsSaving(!isSaving);
  };
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="flex flex-col -ml-4">
        <div className="block flex-50 max-w-[50%] px-4">
          <InputField
            type="password"
            label="Old Password"
            error={formState.errors['oldPassword']}
            registration={register('oldPassword')}
          />
        </div>
        <div className="block flex-50 max-w-[50%] px-4">
          <InputField
            type="password"
            label="New Password"
            error={formState.errors['newPassword']}
            registration={register('newPassword')}
          />
        </div>
        <div className="block flex-50 max-w-[50%] px-4">
          <InputField
            type="password"
            label="Confirm Address"
            error={formState.errors['confirmPassword']}
            registration={register('confirmPassword')}
          />
        </div>
        <div className="flex-100 px-4 max-w-full">
          <Button isLoading={isSaving} type="submit">
            Changes Password
          </Button>
        </div>
      </div>
    </form>
  );
};
