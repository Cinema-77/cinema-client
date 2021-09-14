import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BG from '@/assets/icon/pattern-2.svg';

export const Footer = styled.footer`
  background-image: url(${BG});
  background-color: #1f1f1f;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: cover !important;
  padding-top: 9.6rem;
`;
export const FooterForm = styled.section`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 640px) {
    padding: 0 0.8rem;
  }
`;
export const FooterFormTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.4rem;
  line-height: 28.8px;
  font-weight: 500;
  color: #fff;

  @media (max-width: 640px) {
    width: 80%;
    margin: 0 auto 2rem auto;
    font-size: 2rem;
  }
`;
export const FooterFormList = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterFormDiv = styled.div`
  min-width: 500px;
  padding: 0 1rem;

  @media (max-width: 640px) {
    min-width: 0;
    width: 100%;
  }
`;
export const FooterFormInput = styled.input`
  width: 100%;
  padding: 1.7rem 3rem;
  outline: none;
  line-height: 2.4rem;
  border: 1px solid #303030;
  background-color: #303030;
  color: #fff;

  @media (max-width: 640px) {
  }
`;
export const FooterFormButton = styled.button`
  padding: 1.7rem 3rem;
  color: #fff;
  line-height: 2.4rem;
  background-color: #525252;
  border: 1px solid #525252;

  &:hover {
    background-color: #4c4c4c;
    border: 1px solid #4c4c4c;
  }

  @media (max-width: 640px) {
    width: 50%;
  }
`;
export const FooterContact = styled.section`
  margin-top: 5rem;
  padding-bottom: 9.6rem;
`;
export const FooterContactList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0 3rem;

  @media (max-width: 1024px) {
    padding: 0 4.8rem;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
  }
  @media (max-width: 640px) {
    flex-wrap: wrap;
    padding: 0 1.6rem;
  }
`;
export const FooterContactItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem 0;

  @media (max-width: 640px) {
    &:not(:first-child) {
      margin-top: 3.2rem;
      width: calc(50% - 1.5rem);
    }
  }
`;
export const FooterContactHeading = styled.h2`
  font-size: 2.8rem;
  line-height: 33.6px;
  font-weight: 500;
  color: #fff;
`;
export const FooterContactTitle = styled.h2`
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.26px;
  line-height: 15.6px;
  text-transform: uppercase;
  color: #fff;
`;
export const FooterContactListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;
export const FooterContactLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: #bababa;

  img {
    width: 1.6rem;
    height: 1.6rem;

    &:hover {
      opacity: 0.5;
    }
  }

  &:hover {
    color: #fff;
  }
`;

export const FooterContactSpan = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 400;
  color: #bababa;
`;
export const FooterBot = styled.section`
  border-top: 1px solid #303030;
  color: #fff;
  padding: 1.4rem 0;
`;
export const FooterBotList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 4.8rem;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
`;
export const FooterBotName = styled.span`
  color: #737373;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.95rem;
`;
export const FooterBotPay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0.5rem;

  img {
    width: 4.5rem;
    height: 4.5rem;

    @media (max-width: 640px) {
      width: 3rem;
      height: 3rem;
    }
  }
`;
export const FooterSocial = styled.div`
  display: flex;
  gap: 0 1rem;
`;
