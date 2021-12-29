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
  font-size: 3.6rem;
  line-height: 3.36rem;
  font-weight: 600;
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

  @media (max-width: 768px) {
    width: 25%;
  }

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
  @media (max-width: 768px) {
    width: 75%;
  }

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
  margin-bottom: 10px;
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
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  margin: 10px 0;
  border-bottom: 1px solid #e3ebf6;
`;
export const MovieTrailerSpan = styled.h2`
  position: relative;
  cursor: pointer;
  color: ${({ fW }: any) => (fW ? '#000' : '#ccc')};
  font-weight: ${({ fW }: any) => (fW ? '500' : '600')};
  margin: 0 12px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ fW }: any) => (fW ? '#000' : '#e3ebf6')};
  margin-bottom: -1px;
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
export const MovieShowTimes = styled.div``;
export const MovieShowTimesForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 24px;
  width: calc(100% - 33.33333%);
  padding: 16px;
  background-color: #f9fbfd;
  margin-bottom: 24px;
  border-radius: 6px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MovieShowTimesSelect = styled.select`
  padding: 8px 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: #12263f;
  border: 1px solid #d2ddec;
  border-radius: 6px;
  width: 340px;
  height: 40px;

  &:focus {
    border-color: #2c7be5;
    outline: none;
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;
export const MovieShowTimesOptions = styled.option`
  font-size: 15px;
`;
export const MovieShowTimesDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 33.33333%);
  background-color: #edf2f9;
  border-radius: 6px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MovieShowTimesDateItem = styled.div`
  border-color: ${({ active }: any) => (active ? '#bdcfe9' : '#edf2f9')};
  background-color: ${({ active }: any) => active && '#c7d6ec'};
  color: ${({ active }: any) => (active ? '#283e59' : '#95aac9')};
  width: 100%;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 1.5;
  user-select: none;

  &:hover {
    background-color: #c7d6ec;
    border-color: #bdcfe9;
    color: #283e59;
  }

  &:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
` as any;
export const MovieShowTimesTheater = styled.div`
  width: calc(100% - 33.33333%);
  border-radius: 6px;
  background-color: #edf2f9;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const MovieShowTimesTheaterSpan = styled.span`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 24px;
`;
export const MovieShowTimesList = styled.div``;
export const MovieShowTimesItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 24px;
  padding: 20px;
  border-bottom: 1px solid rgb(227, 235, 246);
  /* background-color: ${({ active }: any) => (active ? '#c7d6ec' : '#edf2f9')}; */
  background-color: #c7d6ec;
  margin-bottom: -1px;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background-color: #c7d6ec;
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;
export const MovieShowTimesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px 0;
  font-size: 15px;
  font-weight: 500;
  color: #12263f;
`;
export const MovieShowTimesTitle = styled.h2``;

export const MovieShowTimeTime = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px 20px;
  gap: 12px 0;
  border: 1px solid #ccc;
  border-top-color: transparent;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export const MovieShowTimeAddress = styled.span`
  color: #95aac9;
  font-size: 13px;
`;
export const MovieShowTimeScreen = styled.span`
  color: #12263f;
  font-size: 13px;
  font-weight: 600;
`;
export const MovieShowTimeTimeScreen = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  margin-bottom: 4px;
  width: 56px;
  height: 38px;
  color: #12263f;
  border-radius: 4px;
  font-size: 13px;
  border: 1px solid ${({ disabled }: any) => disabled && '#edf2f9'};
  background-color: ${({ disabled }: any) => disabled && '#edf2f9'};
  cursor: ${({ disabled }: any) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }: any) => !disabled && '#12263f'};
    color: ${({ disabled }: any) => !disabled && '#fff'};
  }
` as any;
export const MovieShowTimeDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;

  @media (max-width: 414px) {
    flex-wrap: wrap;
    gap: 4px 8px;
  }
`;
