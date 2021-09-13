import React from 'react';
import * as S from './Header.style';
import IconTRUCK from '@/assets/icon/icontruck.svg';
import IconDOWN from '@/assets/icon/icondown.svg';
import IconFB from '@/assets/icon/iconfb.svg';
import IconTWI from '@/assets/icon/icontwiiter.svg';
import IconINSTA from '@/assets/icon/iconinsta.svg';
import IconMED from '@/assets/icon/iconmedium.svg';
import IconSEARCH from '@/assets/icon/iconsearch.svg';
import IconPERSON from '@/assets/icon/iconperson.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { user }: any = useAuth();
  const existUser = user && Object.keys(user).includes('profile');
  return (
    <S.Header>
      <S.HeaderBG>
        <div className="container">
          <S.HeaderTop>
            <S.HeaderInfo>
              <img src={IconTRUCK} alt="" />
              <S.HeaderInfoSpan>Movier mang đến những trải nghiệm tuyệt vời</S.HeaderInfoSpan>
              <S.HeaderInfoSpan>|</S.HeaderInfoSpan>
              <S.HeaderInfoSelectWrapper>
                <S.HeaderInfoSelect>
                  <S.HeaderInfoSelectTitle>English</S.HeaderInfoSelectTitle>
                  <img src={IconDOWN} alt="" />
                </S.HeaderInfoSelect>
                <S.HeaderInfoSelectList>
                  <S.HeaderInfoSelectItem>English</S.HeaderInfoSelectItem>
                  <S.HeaderInfoSelectItem>Viet Nam</S.HeaderInfoSelectItem>
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
          </S.HeaderTop>
        </div>
      </S.HeaderBG>
      <div className="container">
        <S.HeaderCenter>
          <S.HeaderLogo to="">Movieer.</S.HeaderLogo>
          <S.HeaderList>
            <S.HeaderItem>
              Phim
              <S.HeaderSubList>
                <S.HeaderSubItem>Phim Đang Chiếu</S.HeaderSubItem>
                <S.HeaderSubItem>Phim Sắp Chiếu</S.HeaderSubItem>
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
                <S.HeaderSubItem>Tài Khoản</S.HeaderSubItem>
                <S.HeaderSubItem>Quyền Lợi</S.HeaderSubItem>
              </S.HeaderSubList>
            </S.HeaderItem>
            <S.HeaderItem>
              Cultureplex
              <S.HeaderSubList>
                <S.HeaderSubItem>Quầy Online</S.HeaderSubItem>
                <S.HeaderSubItem>Sự kiện & Vé Nhóm</S.HeaderSubItem>
                <S.HeaderSubItem>Sự kiện & Vé Nhóm</S.HeaderSubItem>
                <S.HeaderSubItem>Thẻ Quà Tặng</S.HeaderSubItem>
              </S.HeaderSubList>
            </S.HeaderItem>
          </S.HeaderList>
          <S.HeaderAccount>
            <S.HeaderAccountLink to="">
              <img src={IconSEARCH} alt="" />
            </S.HeaderAccountLink>
            <Link className="flex p-5 items-center" to={existUser ? '/profile' : '/auth'}>
              <img src={IconPERSON} alt="" className="inline-block mr-5" />
              <span>{existUser ? user?.profile?.fullName : 'Đăng Nhập'}</span>
            </Link>
          </S.HeaderAccount>
        </S.HeaderCenter>
      </div>
      <S.HeaderBottom>⚡️ Happy Holiday Deals on Everything ⚡️</S.HeaderBottom>
    </S.Header>
  );
};
