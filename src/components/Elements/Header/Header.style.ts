import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header``;
export const HeaderTop = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 4rem;
  background-color: #f5f5f5;
  padding: 1rem 0;
`;
export const HeaderInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 3rem;
`;
export const HeaderInfoItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0.4rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
export const HeaderInfoILink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: red;
  }
`;
export const HeaderAccount = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0.4rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    margin-bottom: 2px;
  }
`;
export const HeaderAccountLink = styled(Link)`
  font-size: 1.4rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: red;
  }
`;
export const HeaderLanguage = styled.section`
  color: #fff;
`;
export const HeaderLanguageVN = styled(Link)`
  background-color: #e71a0f;
  padding: 2px 8px;
  border-radius: 0.5rem 0 0 0.5rem;
`;
export const HeaderLanguageEN = styled(Link)`
  background-color: #898987;
  padding: 2px 8px;
  border-radius: 0 0.5rem 0.5rem 0;
`;

export const HeaderCenter = styled.section`
  display: flex;
  align-items: flex-end;
  gap: 0 4rem;
  margin-top: 1rem;
`;
export const HeaderLogo = styled(Link)``;
export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 5rem;
`;
export const HeaderSubList = styled.ul`
  position: absolute;
  display: none;
  left: 0;
  width: 100%;
  top: 100%;
  transform: translateX(-10%);
  color: #fff;
  min-width: 190px;
  padding: 3px;
  background: url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg_menu_hover.png');
`;
export const HeaderItem = styled.li`
  position: relative;
  cursor: pointer;
  color: #222222;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 3rem;

  &:hover ${HeaderSubList} {
    display: block;
  }
`;

export const HeaderSubItem = styled.li`
  border-left: 2px solid #828282;
  border-right: 2px solid #828282;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.5rem 1rem;

  &:first-child {
    border-top: 2px solid #828282;
  }

  &:last-child {
    border-bottom: 2px solid #828282;
  }

  &:hover {
    color: red;
  }
`;
export const HeaderOrderTicket = styled(Link)`
  margin-left: auto;
`;
export const HeaderBottom = styled.section`
  background-color: #000;
  color: #fff;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.95rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  padding: 1.2rem 0;
`;
