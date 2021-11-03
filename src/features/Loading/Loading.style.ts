import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  color: red;

  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 10px solid #dddddd;
    border-top-color: #000;
    border-bottom-color: #000;
    border-radius: 50%;
    animation: loading 1s ease infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
