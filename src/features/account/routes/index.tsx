import { Container } from '@/components/Layout/Container';
import { RouteWithSubRoutes } from '@/routes/config';
import React from 'react';
import { Switch } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

interface AccountProps {
  routes: any;
}

export const Account: React.FC<AccountProps> = ({ routes }) => {
  return (
    <section className="pb-24 pt-8">
      <Container>
        <div className="flex flex-wrap -ml-4 -mr-4">
          <div className="flex-100 max-w-full text-center w-full relative px-4">
            <h3 className="mb-16 text-[2rem] font-medium  md:text-5xl">Tài khoản của tôi</h3>
          </div>
        </div>
        <div className="flex flex-wrap -ml-4 -mr-4">
          <div className="flex-100 max-w-full w-full relative px-4 md:flex-25 md:max-w-[25%]">
            <Sidebar />
          </div>
          <div className="flex-100 max-w-full w-full relative px-4 md:flex-75 md:max-w-[75%] lg:flex-67 lg:max-w-[66.66667%] lg:ml-[8.33333%]">
            <Switch>
              {routes.map((route: any, i: number) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>
        </div>
      </Container>
    </section>
  );
};
