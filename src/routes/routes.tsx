import { MainLayout } from '@/components/Layout';
import { path } from '@/constants';
import { lazyImport } from '@/utils/lazyImport';

const { Auth } = lazyImport(() => import('@/features/auth'), 'Auth');
const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { NotFound } = lazyImport(() => import('@/components/Elements'), 'NotFound');

const routes: any[] = [
  {
    component: MainLayout,
    routes: [
      {
        path: path.home,
        component: Home,
        exact: true,
      },
      {
        path: path.auth,
        component: Auth,
      },
      {
        path: path.notFound,
        component: NotFound,
      },
    ],
  },
];

export default routes;
