interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="px-4 mx-auto w-full sm:max-w-[540px] md:max-w-[720px] 2lg:max-w-[1140px]">
      {children}
    </div>
  );
};
