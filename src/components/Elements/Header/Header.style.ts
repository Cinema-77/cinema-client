import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BG from '@/assets/icon/pattern-1.svg';

export const Header = styled.header``;
export const HeaderBG = styled.section`
  background-color: #f5f5f5;
`;
export const HeaderTop = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 4rem;
  padding: 0.4rem 0;

  @media (max-width: 1024px) {
    padding: 0.8rem 3.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 3.2rem;
  }

  @media (max-width: 640px) {
    padding: 0.4rem 1.6rem;
  }
`;
export const HeaderInfo = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 2rem;

  img {
    width: 14px;
    height: 14px;
  }
`;
export const HeaderInfoSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  color: #000;
  font-weight: 500;
  font-size: 1.4rem;
  padding: 8px 16px;

  img {
    width: 0.8rem;
    height: 0.8rem;
    transform: rotate(-90deg);
  }
`;
export const HeaderInfoSelectTitle = styled.h2``;
export const HeaderInfoSelectList = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 100%;
  background-color: #fff;
  z-index: 1;
`;
export const HeaderInfoSelectWrapper = styled.div`
  cursor: pointer;
  position: relative;

  &:hover ${HeaderInfoSelectList} {
    display: flex;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const HeaderInfoSelectItem = styled.span`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: #111;

  &:first-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const HeaderInfoSpan = styled.span`
  text-transform: uppercase;
  color: rgb(17, 17, 17);
  font-weight: 500;
  font-size: 1.4rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;
export const HeaderInfoSpann = styled.span`
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const HeaderHelper = styled.section`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const HeaderHelperLink = styled(Link)`
  padding: 8px 16px;
  font-size: 1.4rem;
  color: #000;
  font-weight: 500;

  &:hover {
    color: red;
  }
`;
export const HeaderAccount = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const HeaderAccountLink = styled(Link)`
  font-size: 1.6rem;
  line-height: 1.8rem;
  font-weight: 700;

  &:hover {
    color: red;
  }
`;
export const HeaderSocial = styled.section`
  display: flex;
  gap: 0 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const HeaderSocialLink = styled(Link)`
  img {
    width: 15px;
    height: 15px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const HeaderCenter = styled.section``;
export const HeaderCenterr = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 4rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 768px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
`;
export const HeaderLogo = styled(Link)`
  font-size: 4rem;
  color: #000;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
`;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const HeaderSubList = styled.ul`
  position: absolute;
  display: none;
  left: 50%;
  width: 100%;
  top: 100%;
  margin-top: 0px;
  transform: translateX(-50%);
  color: #505050;
  min-width: 190px;
  padding: 3px;
  border: 2px solid #ccc;
  background-color: #fff;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    margin-top: -15px;
    width: 100%;
    height: 20px;
  }
`;
export const HeaderItem = styled.li`
  position: relative;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 3rem;
  padding: 8px 16px;

  &:hover {
    color: red;
  }

  &:hover ${HeaderSubList} {
    display: block;
  }
`;

export const HeaderSubItem = styled.li`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.5rem 2rem;

  &:hover {
    color: red;
  }
`;
export const HeaderBottom = styled.section`
  background-image: url(${BG});
  background-color: #1f1f1f;
  color: #fff;
  font-weight: 500;
  font-size: 1.3rem;
  letter-spacing: 0.65px;
  line-height: 1.95rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1.4rem 0;
  margin: 1.6rem 0;
`;

export const HeaderNavbar = styled.a`
  display: none;

  img {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;
export const NavbarList = styled.ul`
  display: none;
  left: 0;
  top: 100%;
  width: 100%;
  padding: 0 3.2rem;
  z-index: 1;
  background-color: #f5f5f5;
  @media (max-width: 1024px) {
    display: ${({ Menu }: any) => (!Menu ? 'none' : 'block')};
  }
` as any;
export const NavbarItem = styled.li`
  padding: 1rem 0;
  font-weight: 600;
  color: rgb(17, 17, 17);
  font-size: 1.4rem;
  display: flex;
  gap: 0 1rem;
`;
export const NavbarItemLink = styled(Link)`
  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
export const NavbarItemDropdown = styled.div`
  display: none;
  left: 0;
  top: 100%;
`;
export const NavbarSelect = styled.div`
  font-weight: 600;
  color: rgb(17, 17, 17);
  font-size: 1.4rem;

  &:hover {
    color: red;
  }

  &:hover svg {
    fill: red;
  }
  svg {
    width: 1rem;
    height: 1rem;
    transform: rotate(-90deg);
  }

  &:hover ${NavbarItemDropdown} {
    display: block;
  }
`;
export const NavbarSelectTitle = styled.h2`
  padding: 1rem 0;
`;
export const NavbarSelectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavbarItemDropdownItem = styled.h2`
  padding: 0.8rem 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: rgb(17, 17, 17);
`;
export const HeaderNavbarList = styled.ul`
  display: none;
  width: 100%;
  padding: 0 3.2rem;
  background-color: #fff;

  @media (max-width: 768px) {
    display: ${({ menu }: any) => (!menu ? 'none' : 'block')};
  }
` as any;
export const HeaderNavbarSubList = styled.ul`
  display: none;
  flex-direction: column;
  padding: 1rem 1.6rem;
`;
export const HeaderNavbarLink = styled(Link)`
  color: rgb(17, 17, 17);
  font-size: 1.6rem;
  font-weight: 500;

  img {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
export const HeaderNavbarItem = styled.li`
  gap: 0 1rem;
  padding-top: 0.8rem;

  &:hover ${HeaderNavbarSubList} {
    display: flex;
  }

  &:hover ${HeaderNavbarLink} {
    color: rgb(255, 111, 97);
  }
`;

export const HeaderNavbarSubLink = styled(Link)`
  padding-top: 0.8rem;
`;
