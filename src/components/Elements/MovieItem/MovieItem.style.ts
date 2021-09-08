import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3rem;
  text-align: left;
`;
export const MovieItem = styled.div`
  width: calc((100% / 3) - 3rem);
  font-size: 1.6rem;
  font-weight: 600;
`;
export const MovieItemIMG = styled(Link)``;
export const MovieItemNameEng = styled.h2`
  margin-top: 0.8rem;
`;
export const MovieItemNameVNI = styled.h2`
  color: #a0a3a7;
`;
