import { MainLayout } from '@/components/Layout';
import { path } from '@/constants';
import { lazyImport } from '@/utils/lazyImport';

const { Auth } = lazyImport(() => import('@/features/auth'), 'Auth');
const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { NotFound } = lazyImport(() => import('@/components/Elements'), 'NotFound');

const { MovieDetail } = lazyImport(() => import('@/features/home'), 'MovieDetail');
const { Account } = lazyImport(() => import('@/features/account'), 'Account');
const { PersonalInfo } = lazyImport(() => import('@/features/account'), 'PersonalInfo');
const { Ticket } = lazyImport(() => import('@/features/account'), 'Ticket');
const { Coupon } = lazyImport(() => import('@/features/account'), 'Coupon');
const { Bookticket } = lazyImport(() => import('@/features/ticket'), 'Bookticket');
const { Movie } = lazyImport(() => import('@/features/home'), 'Movie');

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
        path: path.movie,
        component: Movie,
        title: 'Danh sách Phim',
      },
      {
        path: path.detail,
        component: MovieDetail,
        title: 'Name Movie',
      },
      {
        path: path.bookTicket,
        component: Bookticket,
        title: 'Book Ticket',
      },
      {
        path: path.account,
        component: Account,
        auth: true,
        title: 'Thông tin tài khoản',
        routes: [
          {
            path: '/account',
            exact: true,
            component: PersonalInfo,
          },
          {
            path: '/account/ticket',
            component: Ticket,
          },
          {
            path: '/account/coupon',
            component: Coupon,
          },
        ],
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
