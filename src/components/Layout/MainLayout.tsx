import { RouteWithSubRoutes } from '@/routes/config/routerConfig';
import React from 'react';
import { Switch } from 'react-router';
import { Footer, Header } from '../Elements';

export const MainLayout: React.ReactNode = ({ routes }: any) => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route: any, i: any) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <Footer />
    </>
  );
};
