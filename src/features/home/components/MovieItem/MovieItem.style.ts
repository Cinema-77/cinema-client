import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 3rem;
  text-align: left;
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
export const MovieItem = styled.div`
  width: calc((100% / 3) - 2rem);
  font-size: 1.6rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    width: calc((100% / 2) - 1.5rem);
  }
`;
export const MovieItemOverLay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: background-color 0.3s ease;
`;
export const MovieItemLink = styled.div`
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
export const MovieItemIMG = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover ${MovieItemOverLay} {
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:hover ${MovieItemLink} {
    display: block;
  }
`;
export const MovieItemNameEng = styled.h2`
  margin-top: 0.8rem;

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;
export const MovieItemNameVNI = styled.h2`
  color: #a0a3a7;

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
`;
