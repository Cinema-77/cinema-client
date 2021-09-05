import React from 'react';
import { Footer, Header } from '../Elements';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
