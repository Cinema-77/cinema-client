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
        title: 'Movieer: Hệ Thống Rạp Chiếu Phim Hiện Đại',
        exact: true,
      },
      {
        path: path.auth,
        component: Auth,
        title: 'Đăng nhập',
      },
      {
        path: path.notFound,
        component: NotFound,
        title: '404 Not Found',
      },
    ],
  },
];

export default routes;
