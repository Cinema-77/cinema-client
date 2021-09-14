import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type DateFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const DateField = (props: DateFieldProps) => {
  const { label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <input
        type="date"
        className={clsx(
          'appearance-none block w-full p-5 text-xl font-medium border border-[#e5e5e5] leading-normal placeholder-gray-500 focus:outline-none focus:border-[#1f1f1f] sm:text-2xl bg-white',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
