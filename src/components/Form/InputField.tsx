import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type={type}
        placeholder={label}
        className={clsx(
          'appearance-none block w-full p-5 text-xl border border-[#e5e5e5] leading-normal placeholder-gray-500 focus:outline-none focus:border-[#1f1f1f] sm:text-2xl bg-white',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
