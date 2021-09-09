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
` as any;
