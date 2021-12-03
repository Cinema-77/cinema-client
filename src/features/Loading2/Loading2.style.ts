import styled from 'styled-components';

export const Loading = styled.span`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  span {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 4px solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  span:nth-child(1) {
    animation-delay: -0.45s;
  }
  span:nth-child(2) {
    animation-delay: -0.3s;
  }
  span:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
