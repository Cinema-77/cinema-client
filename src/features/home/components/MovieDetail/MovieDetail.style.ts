import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetail = styled.section`
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    padding: 0 3.2rem;
  }
  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
`;
export const MovieTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 3.36rem;
  border-bottom: 2px solid #222;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;
export const MovieList = styled.div`
  display: flex;
  gap: 0 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 2rem 0;
  }
`;
export const MovieIMG = styled.div`
  width: 20%;
  @media (max-width: 640px) {
    margin: 0 auto;
    width: 50%;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
`;
export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;
export const MovieContentTitle = styled.h2`
  color: #1a1919;
  font-size: 2.4rem;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 1.5rem;
  font-weight: 500;
  border-bottom: 1px solid #d9d6c8;
  text-transform: uppercase;
`;
export const MovieContentList = styled.div`
  display: inline-block;
`;
export const MovieContentItem = styled.span`
  &:first-child {
    font-size: 1.4rem;
    font-weight: 600;
    user-select: none;
    margin-right: 1rem;
  }

  &:last-child {
    font-size: 1.5rem;
  }
`;
export const MovieContentBtn = styled(Link)`
  width: max-content;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 1rem;
  margin-top: 1rem;
  transition: all 1s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    transition: all 1s ease;
  }

  @media (max-width: 640px) {
    margin: 1rem auto;
  }
`;
export const MovieTrailer = styled.div``;
export const MovieTrailerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  gap: 0 1rem;
  padding: 1.2rem;
  margin: 0 auto 2rem;
  background-color: #000;
  border-radius: 1rem;
`;
export const MovieTrailerSpan = styled.h2`
  cursor: pointer;
  color: #fff;
  font-weight: ${({ fW }: any) => fW && '600'};
` as any;
export const MovieTrailerContent = styled.span`
  color: #222;
  font-size: 1.5rem;
  line-height: 18px;
`;
export const MovieTrailerVideo = styled.div`
  width: 100%;
  height: 675px;
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 640px) {
    height: 200px;
  }
`;
export const MovieTrailerVideoVideo = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
