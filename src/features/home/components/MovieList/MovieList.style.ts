import styled from 'styled-components';

export const MovieList = styled.section`
  text-align: center;
  padding: 9.6rem 0;
`;
export const MovieTitle = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  line-height: 4.32rem;
  margin-bottom: 3rem;

  @media (max-width: 640px) {
    font-size: 4rem;
  }
`;
export const MovieListSpan = styled.div`
  margin-bottom: 4rem;
`;

export const MovieLink = styled.button`
  position: relative;
  padding: 0.8rem 1.6rem;
  font-weight: 700;
  color: ${({ comingsoon }: any) => !comingsoon && '#ff6f61'};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    height: 1px;
    width: ${({ comingsoon }: any) => !comingsoon && '100%'};
    background-color: #ff6f61;
  }

  &:hover {
    color: #ff6f61;
  }

  @media (max-width: 640px) {
    font-size: 1.4rem;
  }
` as any;
export const MovieSeeMore = styled.div`
  display: flex;
  gap: 0 10px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #f26b38;
  border: 1px solid #f26b38;
  padding: 15px 20px;
  margin-top: 20px;
  width: max-content;
  margin: 40px 0 0 auto;

  &:hover {
    color: #fff;
    background-color: #f26b38;
    transition: all 0.5s ease;

    svg {
      fill: #fff;
      transition: all 0.5s ease;
    }
  }

  svg {
    width: 15px;
    height: 15px;
    fill: #f26b38;
  }
`;
export const MovieListList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 3rem;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    padding: 0 3.2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    padding: 0 1.6rem;
  }
`;
