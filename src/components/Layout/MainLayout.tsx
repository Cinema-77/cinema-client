import React from 'react';
import { RouteWithSubRoutes } from '@/routes/config/routerConfig';
import { Switch } from 'react-router';
import { Footer, Header } from '../Elements';

type ContentLayoutProps = {
  routes: any;
};

export const MainLayout = ({ routes }: ContentLayoutProps) => {
  return (
    <>
      <Header />
      <Switch>
        {routes.map((route: any, i: number) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <Footer />
    </>
  );
};
