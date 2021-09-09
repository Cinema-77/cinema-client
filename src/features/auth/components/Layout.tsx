import React from 'react';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="relative flex min-w-0 bg-white bg-clip-border flex-col">
      <div className="p-8 flex-0 min-h-[1px]">
        <h6 className="mb-8 text-2xl font-medium text-title">{title}</h6>
        {children}
      </div>
    </div>
  );
};
