import { lazyImport } from '@/utils/lazyImport';

const { Auth } = lazyImport(() => import('@/features/auth'), 'Auth');
const { Home } = lazyImport(() => import('@/features/home'), 'Home');

let routes: any[] = [
  {
    path: '/auth',
    component: Auth,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

export default routes;
