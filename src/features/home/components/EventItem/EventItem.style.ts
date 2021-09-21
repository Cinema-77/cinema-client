import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const EventItemlist = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-areas:
    'h1 h2 h2'
    'h3 h3 h4';

  @media (max-width: 1024px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;
    grid-gap: 1.5rem;
  }
`;
export const EventItemOverLay = styled(Link)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease;
`;
export const EventItemLink = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem 3rem;
  line-height: 1.4rem;
  font-weight: 500;
  border: 1px solid #fff;
  font-size: 1.4rem;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    background-color: #f26b38;
    border: 1px solid #f26b38;
  }
`;
export const EventIem = styled.div`
  position: relative;

  &:hover ${EventItemOverLay} {
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:hover ${EventItemLink} {
    display: block;
  }

  &:first-child {
    grid-area: h1;
  }

  &:nth-child(2) {
    grid-area: h2;
  }

  &:nth-child(3) {
    grid-area: h3;
  }

  &:nth-child(4) {
    grid-area: h4;
  }

  img {
    width: 100%;
    height: 400px;

    @media (max-width: 1024px) {
      height: 300px;
    }

    @media (max-width: 768px) {
      height: 250px;
    }

    @media (max-width: 640px) {
      height: 100%;
    }
  }
`;
