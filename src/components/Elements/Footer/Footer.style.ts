import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = styled.footer``;
export const FooterLogo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding-top: 1rem;
  background-color: #fff;

  img {
    height: 4rem;
  }
`;
export const FooterContact = styled.section`
  border-bottom: 2px solid #000;
  padding: 2rem 0;
`;
export const FooterContactList = styled.div`
  display: flex;
  justify-content: center;
`;
export const FooterContactItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem 0;
`;
export const FooterContactTitle = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #636363;
`;
export const FooterContactListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem 0;
`;
export const FooterContactLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 400;
  color: #636363;

  svg {
    width: 3.9rem;
    height: 3.9rem;
  }

  &:hover {
    color: red;
  }
`;
export const FooterListLogo = styled.div`
  display: flex;
  gap: 0 1rem;
`;
export const FooterContactSpan = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 400;
  color: #636363;
`;
export const FooterBot = styled.section`
  background-color: #000;
  color: #fff;
  padding: 1.5rem 0;
`;
export const FooterBotList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FooterBotName = styled.span`
  color: #767676;
  font-size: 1.3rem;
  line-height: 1.95rem;
`;
export const FooterBotPay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1rem;
`;
