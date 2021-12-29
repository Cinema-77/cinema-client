import React, { useState } from 'react';
import * as S from './Header.style';
import IconTRUCK from '@/assets/icon/icontruck.svg';
import IconDOWN from '@/assets/icon/icondown.svg';
import IconFB from '@/assets/icon/iconfb.svg';
import IconTWI from '@/assets/icon/icontwiiter.svg';
import IconINSTA from '@/assets/icon/iconinsta.svg';
import IconMED from '@/assets/icon/iconmedium.svg';
import IconSEARCH from '@/assets/icon/iconsearch.svg';
import IconPERSON from '@/assets/icon/iconperson.svg';
import IconMenu from '@/assets/icon/menu.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { useHistory } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [Menu, setMenu] = useState(false);
  const [Menu1, setMenu1] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState('English');
  const { user } = useAuth();
  const history = useHistory();

  return (
    <S.Header>
      <S.HeaderBG>
        <div className="container">
          <S.HeaderTop>
            <S.HeaderInfo>
              <img src={IconTRUCK} alt="" />
              <S.HeaderInfoSpan>Movier mang đến những trải nghiệm tuyệt vời</S.HeaderInfoSpan>
              <S.HeaderInfoSpann>|</S.HeaderInfoSpann>
              <S.HeaderInfoSelectWrapper>
                <S.HeaderInfoSelect>
                  <S.HeaderInfoSelectTitle>{changeLanguage}</S.HeaderInfoSelectTitle>
                  <img src={IconDOWN} alt="" />
                </S.HeaderInfoSelect>
                <S.HeaderInfoSelectList>
                  <S.HeaderInfoSelectItem onClick={() => setChangeLanguage('English')}>
                    English
                  </S.HeaderInfoSelectItem>
                  <S.HeaderInfoSelectItem onClick={() => setChangeLanguage('Viet Nam')}>
                    Viet Nam
                  </S.HeaderInfoSelectItem>
                </S.HeaderInfoSelectList>
              </S.HeaderInfoSelectWrapper>
            </S.HeaderInfo>
            <S.HeaderHelper>
              <S.HeaderHelperLink to="">Hỗ trợ</S.HeaderHelperLink>
              <S.HeaderHelperLink to="">FAQ</S.HeaderHelperLink>
              <S.HeaderHelperLink to="">Liên lạc</S.HeaderHelperLink>
            </S.HeaderHelper>
            <S.HeaderSocial>
              <S.HeaderSocialLink to="">
                <img src={IconFB} alt="" />
              </S.HeaderSocialLink>
              <S.HeaderSocialLink to="">
                <img src={IconTWI} alt="" />
              </S.HeaderSocialLink>
              <S.HeaderSocialLink to="">
                <img src={IconINSTA} alt="" />
              </S.HeaderSocialLink>
              <S.HeaderSocialLink to="">
                <img src={IconMED} alt="" />
              </S.HeaderSocialLink>
            </S.HeaderSocial>
            <S.HeaderNavbar onClick={() => setMenu(!Menu)}>
              <img src={IconMenu} alt="" />
            </S.HeaderNavbar>
          </S.HeaderTop>
        </div>
        <S.NavbarList Menu={Menu}>
          <S.NavbarSelect>
            <S.NavbarSelectItem>
              <S.NavbarSelectTitle>{changeLanguage}</S.NavbarSelectTitle>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 443.52 443.52"
              >
                <g>
                  <g>
                    <path
                      d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
			c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
			L143.492,221.863z"
                    />
                  </g>
                </g>
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </S.NavbarSelectItem>
            <S.NavbarItemDropdown>
              <S.NavbarItemDropdownItem onClick={() => setChangeLanguage('English')}>
                English
              </S.NavbarItemDropdownItem>
              <S.NavbarItemDropdownItem onClick={() => setChangeLanguage('Viet Nam')}>
                Viet Nam
              </S.NavbarItemDropdownItem>
            </S.NavbarItemDropdown>
          </S.NavbarSelect>
          <S.NavbarItem>
            <S.NavbarItemLink to="">Hỗ trợ</S.NavbarItemLink>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarItemLink to="">FAQ</S.NavbarItemLink>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarItemLink to="">Liên lạc</S.NavbarItemLink>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarItemLink to="">
              <img src={IconFB} alt="" />
            </S.NavbarItemLink>
            <S.NavbarItemLink to="">
              <img src={IconTWI} alt="" />
            </S.NavbarItemLink>
            <S.NavbarItemLink to="">
              <img src={IconINSTA} alt="" />
            </S.NavbarItemLink>
            <S.NavbarItemLink to="">
              <img src={IconMED} alt="" />
            </S.NavbarItemLink>
          </S.NavbarItem>
        </S.NavbarList>
      </S.HeaderBG>
      <div className="container">
        <S.HeaderCenter>
          <S.HeaderCenterr>
            <S.HeaderLogo to="">Movieer</S.HeaderLogo>
            <S.HeaderList>
              <S.HeaderItem>
                Phim
                <S.HeaderSubList>
                  <S.HeaderSubItem onClick={() => history.push('/movie')}>
                    Phim Đang Chiếu
                  </S.HeaderSubItem>
                  <S.HeaderSubItem onClick={() => history.push('/movie?tab=1')}>
                    Phim Sắp Chiếu
                  </S.HeaderSubItem>
                </S.HeaderSubList>
              </S.HeaderItem>
              <S.HeaderItem>
                Rạp
                <S.HeaderSubList>
                  <S.HeaderSubItem>Tất Cả Các Rạp</S.HeaderSubItem>
                  <S.HeaderSubItem>Rạp Đặc Biệt</S.HeaderSubItem>
                  <S.HeaderSubItem>Rạp Sắp Mở</S.HeaderSubItem>
                </S.HeaderSubList>
              </S.HeaderItem>
              <S.HeaderItem>
                Sự Kiện
                <S.HeaderSubList>
                  <S.HeaderSubItem>Ưu Đãi</S.HeaderSubItem>
                  <S.HeaderSubItem>Phim Hay Của Tháng</S.HeaderSubItem>
                </S.HeaderSubList>
              </S.HeaderItem>
              <S.HeaderItem>
                Thành Viên
                <S.HeaderSubList>
                  <S.HeaderSubItem onClick={() => history.push('/account')}>
                    Tài Khoản
                  </S.HeaderSubItem>
                  <S.HeaderSubItem>Quyền Lợi</S.HeaderSubItem>
                </S.HeaderSubList>
              </S.HeaderItem>
              <S.HeaderItem>
                Cultureplex
                <S.HeaderSubList>
                  <S.HeaderSubItem>Quầy Online</S.HeaderSubItem>
                  <S.HeaderSubItem>Sự kiện & Vé Nhóm</S.HeaderSubItem>
                  <S.HeaderSubItem onClick={() => history.push('/account/coupon')}>
                    Thẻ Quà Tặng
                  </S.HeaderSubItem>
                </S.HeaderSubList>
              </S.HeaderItem>
            </S.HeaderList>
            <S.HeaderAccount>
              <S.HeaderAccountLink to="">
                <img src={IconSEARCH} alt="" />
              </S.HeaderAccountLink>
              <Link className="flex p-5 items-center" to={user ? '/account' : '/auth'}>
                <img src={IconPERSON} alt="" className="inline-block mr-5" />
                <span>{user ? user?.profile?.fullName : 'Đăng Nhập'}</span>
              </Link>
            </S.HeaderAccount>
            <S.HeaderNavbar onClick={() => setMenu1(!Menu1)}>
              <img src={IconMenu} alt="" />
            </S.HeaderNavbar>
          </S.HeaderCenterr>
          <S.HeaderNavbarList menu={Menu1}>
            <S.HeaderNavbarItem>
              <S.HeaderNavbarLink to="">Phim</S.HeaderNavbarLink>
              <S.HeaderNavbarSubList>
                <S.HeaderNavbarSubLink to="">Phim Đang Chiếu</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Phim Sắp Chiếu</S.HeaderNavbarSubLink>
              </S.HeaderNavbarSubList>
            </S.HeaderNavbarItem>
            <S.HeaderNavbarItem>
              <S.HeaderNavbarLink to="">Rạp</S.HeaderNavbarLink>
              <S.HeaderNavbarSubList>
                <S.HeaderNavbarSubLink to="">Tất Cả Các Rạp</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Rạp Đặc Biệt</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Rạp Sắp Mở</S.HeaderNavbarSubLink>
              </S.HeaderNavbarSubList>
            </S.HeaderNavbarItem>
            <S.HeaderNavbarItem>
              <S.HeaderNavbarLink to="">Sự Kiện</S.HeaderNavbarLink>
              <S.HeaderNavbarSubList>
                <S.HeaderNavbarSubLink to="">Ưu Đãi</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Phim Hay Của Tháng</S.HeaderNavbarSubLink>
              </S.HeaderNavbarSubList>
            </S.HeaderNavbarItem>
            <S.HeaderNavbarItem>
              <S.HeaderNavbarLink to="">Thành Viên</S.HeaderNavbarLink>
              <S.HeaderNavbarSubList>
                <S.HeaderNavbarSubLink to="">Tài Khoản</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Quyền Lợi</S.HeaderNavbarSubLink>
              </S.HeaderNavbarSubList>
            </S.HeaderNavbarItem>
            <S.HeaderNavbarItem>
              <S.HeaderNavbarLink to="">Cultureplex</S.HeaderNavbarLink>
              <S.HeaderNavbarSubList>
                <S.HeaderNavbarSubLink to="">Quầy Online</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Sự kiện & Vé Nhóm</S.HeaderNavbarSubLink>
                <S.HeaderNavbarSubLink to="">Thẻ Quà Tặng</S.HeaderNavbarSubLink>
              </S.HeaderNavbarSubList>
            </S.HeaderNavbarItem>
            <S.HeaderNavbarItem>
              <S.HeaderNavbarLink to="">Đăng nhập</S.HeaderNavbarLink>
            </S.HeaderNavbarItem>
          </S.HeaderNavbarList>
        </S.HeaderCenter>
      </div>
      <S.HeaderBottom>⚡️ Happy Holiday Deals on Everything ⚡️</S.HeaderBottom>
    </S.Header>
  );
};
