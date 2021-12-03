import { useAuth } from '@/lib/auth';
import clsx from 'clsx';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

interface SidebarProps {}

interface UserNavigationItem {
  title: string;
  url: string;
  onClick?: () => void;
}
export const Sidebar: React.FC<SidebarProps> = () => {
  const { path } = useRouteMatch();
  const { logout } = useAuth();

  const userNavigate: UserNavigationItem[] = [
    { title: 'Lịch sử giao dịch', url: '/ticket' },
    { title: 'Coupon', url: '/coupon' },
    { title: ' Thông tin cá nhân', url: '' },
    { title: 'Phương thức thanh toán', url: '/payment' },
    { title: 'Đăng xuất', url: '/logout', onClick: () => logout() },
  ].filter(Boolean);

  return (
    <div className="mb-24 md:mb-0">
      <div className="flex flex-col pl-0">
        {userNavigate.map(({ title, url, onClick }, i) => (
          <NavLink
            exact
            key={title}
            to={`${path}${url}`}
            className={clsx(
              `relative text-2xl md:text-3xl px-0 border-b border-b-[#e5e5e5]  p-9 flex-shrink-0 overflow-hidden block bg-transparent w-full text-[#767676] font-medium dropright-toogle`,
              { 'border-t border-t-[#e5e5e5]': i === 0 }
            )}
            activeClassName="navigate-active"
            onClick={onClick}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
