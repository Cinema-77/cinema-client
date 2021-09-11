import clsx from 'clsx';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

const variants = {
  primary: 'mb-2 inline-block',
  secondary: 'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0',
};

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
  description?: string;
  variant?: keyof typeof variants;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'className' | 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children, variant = 'primary', className } = props;
  return (
    <div className="mb-6">
      <label className={clsx('text-2xl font-medium', variants[variant], className)}>{label}</label>
      {children}
      {error?.message && (
        <div role="alert" aria-label={error.message} className="text-sm font-semibold text-red-500">
          {error.message}
        </div>
      )}
    </div>
  );
};
