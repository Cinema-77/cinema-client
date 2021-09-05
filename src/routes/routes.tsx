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

//example routes

// let routes = [
//   {
//       component: () => withCountDown(CommingSoon, 1000000),
//       path: '/comming-soon'
//   },
//   {
//       component: MainLayout,
//       routes: [
//           {
//               path: '/account',
//               component: Account,
//               auth: true,
//               routes: [
//                   {
//                       exact: true,
//                       path: '/account/order',
//                       component: OrderList
//                   },
//                   {
//                       path: '/account/order/:_id',
//                       component: Order
//                   },
//                   {
//                       path: '/account/wishlist',
//                       component: Wishlist
//                   },
//                   {
//                       path: '/account/address',
//                       component: AddressList
//                   },
//                   {
//                       path: '/account/address/:action/:_id?',
//                       component: Address
//                   },
//                   {
//                       path: '/account/payment',
//                       component: PaymentList
//                   },
//                   {
//                       path: '/account/payment/:action/:_id?',
//                       component: Payment
//                   },
//                   {
//                       path: '/account/coming-soon',
//                       component: ComingSoon
//                   },
//                   {
//                       path: '/account',
//                       component: PersonalInfo
//                   },
//               ]
//           },
//           {
//               path: '/auth',
//               component: Auth
//           },
//           {
//               path: '/shipping-and-returns',
//               component: ShippingAndReturns
//           },
//           {
//               path: '/about',
//               component: About
//           },
//           {
//               path: '/store-locator',
//               component: StoreLocator
//           },
//           {
//               path: '/shopping-cart',
//               component: ShoppingCart
//           },
//           {
//               path: '/faq',
//               component: FAQ
//           },
//           {
//               path: '/catalog/:slug?',
//               component: Catalog
//           },
//           {
//               path: '/product/:slug',
//               component: ProductDetail
//           },
//           {
//               path: '/contact-us',
//               component: ContactUs
//           },
//           {
//               path: '/checkout',
//               component: Checkout
//           },
//           {
//               path: '/order-completed/:_id',
//               component: OrderCompleted
//           },
//           {
//               path: '/',
//               component: Home,
//               exact: true
//           },
//           {
//               path: '/',
//               component: Page404
//           },
//       ]
//   },
// ]
