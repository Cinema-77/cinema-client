import { Switch } from 'react-router-dom';
import routes from './routes';
import { RouteWithSubRoutes } from '@/routes/config/routerConfig';

export const AppRoutes = () => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
};
