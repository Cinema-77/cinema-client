import styled from 'styled-components';

export const Movie = styled.section`
  margin: 15px 0;
`;
export const MovieListTitle = styled.div`
  display: flex;
  gap: 0 30px;
  border-bottom: 1px solid #ddd;
`;
export const MovieTitle = styled.h2`
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  padding: 10px 0;
  color: ${({ active }: any) => (active ? '#000' : '#a0a3a7')};

  &:hover {
    &::after {
      width: 100%;
      transition: width 0.5s ease;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 0;
    width: ${({ active }: any) => (active ? '100%' : '0')};
    height: 2px;
    background-color: #f26b38;
  }
` as any;
export const MovieList = styled.div`
  margin: 30px 0;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    padding: 0 3.2rem;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
`;
export const MovieContent = styled.div`
  margin-top: 60px;

  @media (max-width: 1024px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
`;
export const MovieContentTitle = styled.h2`
  position: relative;
  width: max-content;
  color: #43464b;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    height: 2px;
    width: 45%;
    background-color: #f26b38;
  }
`;
export const MovieListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  margin: 30px 0;
`;
export const MovieContentItem = styled.div`
  font-size: 14px;
  h2 {
    font-weight: bold;
  }
  p {
    margin: 8px 0;
  }
`;
