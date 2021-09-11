import clsx from 'clsx';
import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
  variant?: 'primary' | 'secondary';
};

export const SelectField = (props: SelectFieldProps) => {
  const { label, options, error, className, defaultValue, registration, placeholder, variant } =
    props;
  return (
    <FieldWrapper label={label} error={error} variant={variant}>
      <select
        placeholder={placeholder}
        name="location"
        className={clsx(
          'appearance-none inline-block w-full py-[13px] pl-[20px] pr-[56px] bg-icon-down bg-center-2 bg-no-repeat bg-2 bg-white text-base border border-[#e5e5e5] bg focus:outline-none focus:border-[#1f1f1f] sm:text-2xl ',
          className
        )}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
