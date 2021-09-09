import React from 'react';
import * as S from './Footer.style';
import IconFB from '@/assets/icon/iconfb.svg';
import IconYTB from '@/assets/icon/iconytb.svg';
import IconTWI from '@/assets/icon/icontwiiter.svg';
import IconINSTA from '@/assets/icon/iconinsta.svg';
import IconMED from '@/assets/icon/iconmedium.svg';
import pay1 from '@/assets/icon/pay1.svg';
import pay2 from '@/assets/icon/pay2.svg';
import pay3 from '@/assets/icon/pay3.svg';
import pay4 from '@/assets/icon/pay4.svg';
import pay5 from '@/assets/icon/pay5.svg';
import pay6 from '@/assets/icon/pay6.svg';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <S.Footer>
      <S.FooterForm>
        <S.FooterFormTitle>Nhận thông báo những sự kiện mới nhất ?</S.FooterFormTitle>
        <S.FooterFormList>
          <S.FooterFormDiv>
            <S.FooterFormInput placeholder="Nhập Email *" />
          </S.FooterFormDiv>
          <S.FooterFormButton>Đăng ký</S.FooterFormButton>
        </S.FooterFormList>
      </S.FooterForm>
      <S.FooterContact>
        <div className="container">
          <S.FooterContactList>
            <S.FooterContactItem>
              <S.FooterContactHeading>Movieer</S.FooterContactHeading>
              <S.FooterSocial>
                <S.FooterContactLink to="">
                  <img src={IconFB} alt="" />
                </S.FooterContactLink>
                <S.FooterContactLink to="">
                  <img src={IconYTB} alt="" />
                </S.FooterContactLink>
                <S.FooterContactLink to="">
                  <img src={IconTWI} alt="" />
                </S.FooterContactLink>
                <S.FooterContactLink to="">
                  <img src={IconINSTA} alt="" />
                </S.FooterContactLink>
                <S.FooterContactLink to="">
                  <img src={IconMED} alt="" />
                </S.FooterContactLink>
              </S.FooterSocial>
            </S.FooterContactItem>
            <S.FooterContactItem>
              <S.FooterContactTitle>Giới thiệu</S.FooterContactTitle>
              <S.FooterContactListItem>
                <S.FooterContactLink to="">Về chúng tôi</S.FooterContactLink>
                <S.FooterContactLink to="">Quy chế hoạt động</S.FooterContactLink>
                <S.FooterContactLink to="">Thỏa thuận sử dụng</S.FooterContactLink>
                <S.FooterContactLink to="">Chính sách bảo mật</S.FooterContactLink>
              </S.FooterContactListItem>
            </S.FooterContactItem>
            <S.FooterContactItem>
              <S.FooterContactTitle>Hỗ trợ</S.FooterContactTitle>
              <S.FooterContactListItem>
                <S.FooterContactLink to="">Góp ý</S.FooterContactLink>
                <S.FooterContactLink to="">Sales / Service</S.FooterContactLink>
                <S.FooterContactLink to="">Rạp / Giá vé</S.FooterContactLink>
                <S.FooterContactLink to="">Liên hệ quảng cáo</S.FooterContactLink>
              </S.FooterContactListItem>
            </S.FooterContactItem>
            <S.FooterContactItem>
              <S.FooterContactTitle>Company</S.FooterContactTitle>
              <S.FooterContactListItem>
                <S.FooterContactLink to="">Câu truyện của chúng tôi</S.FooterContactLink>
                <S.FooterContactLink to="">Tuyển dụng</S.FooterContactLink>
                <S.FooterContactLink to="">Thẻ quà tặng</S.FooterContactLink>
                <S.FooterContactLink to="">Tiện ích online</S.FooterContactLink>
              </S.FooterContactListItem>
            </S.FooterContactItem>
            <S.FooterContactItem>
              <S.FooterContactTitle>Chăm sóc khách hàng</S.FooterContactTitle>
              <S.FooterContactListItem>
                <S.FooterContactSpan>1-202-555-0105</S.FooterContactSpan>
                <S.FooterContactSpan>1-202-555-0106</S.FooterContactSpan>
                <S.FooterContactSpan>help@shopper.com</S.FooterContactSpan>
              </S.FooterContactListItem>
            </S.FooterContactItem>
          </S.FooterContactList>
        </div>
      </S.FooterContact>
      <S.FooterBot>
        <div className="container">
          <S.FooterBotList>
            <S.FooterBotName>© 2021 All rights reserved</S.FooterBotName>
            <S.FooterBotPay>
              <img src={pay1} alt="" />
              <img src={pay2} alt="" />
              <img src={pay3} alt="" />
              <img src={pay4} alt="" />
              <img src={pay5} alt="" />
              <img src={pay6} alt="" />
            </S.FooterBotPay>
          </S.FooterBotList>
        </div>
      </S.FooterBot>
    </S.Footer>
  );
};
