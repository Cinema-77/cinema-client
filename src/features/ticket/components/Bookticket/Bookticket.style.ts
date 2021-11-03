import styled from 'styled-components';

export const Bookticket = styled.section`
  display: flex;
  gap: 0 30px;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 20px 0;
  }
`;
export const BookticketLeft = styled.div`
  width: 75%;
  background-color: #f1f1f1;
  padding: 15px;

  @media (max-width: 1024px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }

  @media (max-width: 768px) {
    overflow-x: scroll;

    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #eec0c6;
      background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
      border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #fad0c4;
      background-image: linear-gradient(315deg, #fad0c4 0%, #f1a7f1 74%);
      border-radius: 6px;
    }
  }
`;
export const BookticketLeftTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 24px;
  margin-bottom: 20px;
`;
export const BookticketLeftContent = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 30px 10px;

  @media (max-width: 768px) {
    width: 800px;
  }
`;
export const BookticketLeftContentSpan = styled.div`
  width: 35%;
  border-bottom: 3px solid #969b9f;
  font-size: 14px;
  padding-bottom: 6px;
  margin: 30px auto;
  text-align: center;
`;
export const BookticketLeftContentListChair = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 20px;
`;
export const BookticketLeftContentChairItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0 5px;

  span {
    &:first-of-type {
      width: 10px;
      height: 10px;
      background-color: #3edbf0;
    }

    &:last-child {
      font-size: 14px;
    }
  }

  &:nth-child(2) {
    span {
      &:first-of-type {
        background-color: #fe8f8f;
      }
    }
  }

  &:nth-child(3) {
    span {
      &:first-of-type {
        background-color: #eee;
      }
    }
  }

  &:last-child {
    span {
      &:first-of-type {
        background-color: #7dc71d;
      }
    }
  }
`;
export const BookticketLeftContentListScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px 0;
`;
export const BookticketLeftContentScreenItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;

  span {
    cursor: pointer;
    border-radius: 4px;
    &:first-of-type,
    &:last-child {
      border: 1px solid #000;
      padding: 8px 16px;
      width: 45px;
      text-align: center;
    }
  }
`;
export const BookticketRight = styled.div`
  width: 25%;
  background-color: #f1f1f1;
  padding: 15px;
  height: max-content;

  img {
    padding: 0 30px;
  }

  @media (max-width: 1024px) {
    width: calc(100% - 30px);
    margin: 0 15px;

    img {
      padding: 0;
    }
  }
`;
export const BookticketLeftContentScreenItemSpan = styled.span`
  padding: 10px 0px;
  text-align: center;
  width: 45px;
  background-color: #eee;
  font-size: 13px;
  color: ${({ active, sold }: any) => (active || sold) && '#fff'};
  background-color: ${({ active, sold }: any) => (active && '#3EDBF0') || (sold && '#FE8F8F')};
` as any;
export const BookticketRightTitle = styled.h2`
  font-size: 14px;
  color: #43464b;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
export const BookticketRightAge = styled.span`
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  span {
    &:first-of-type {
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      padding: 2px 3px;
      background-color: #f26b38;
    }

    &:last-child {
      font-size: 11px;
      color: #ff0033;
      padding-left: 5px;

      @media (max-width: 1024px) {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
export const BookticketRightItem = styled.div`
  display: flex;
  gap: 0 10px;
  padding: 10px 0;
  font-size: 14px;
  border-bottom: 1px dotted #ced0da;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-of-type {
      font-weight: 500;
    }
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;
export const BookticketRightItemTotal = styled.div`
  display: flex;
  gap: 0 10px;
  padding: 10px 0;
  font-size: 16px;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:last-child {
      font-size: 20px;
      color: #f26b38;
      font-weight: 500;
    }
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    font-weight: 600;
  }
`;
export const BookticketBtn = styled.div`
  cursor: pointer;
  width: max-content;
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #f26b38;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (max-width: 1024px) {
    width: 48%;
    text-align: center;
  }
`;
export const BookticketListBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 5px;
  margin-top: 10px;
`;
export const BookticketLeftContent2 = styled.div``;
export const BookticketLeftContent2Item = styled.h2`
  &:not(:first-of-type) {
    text-align: center;
  }

  &:nth-child(3),
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &:last-child {
    @media (max-width: 414px) {
      display: none;
    }
  }
`;
export const BookticketLeftContent2List = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr 0.4fr 0.4fr;
  padding: 16px;
  &:first-of-type {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:not(:first-of-type) ${BookticketLeftContent2Item} {
    &:first-of-type {
      display: flex;
      gap: 0 20px;

      img {
        width: 100px;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 5px 0;
      }

      h2 {
        font-size: 14px;
        font-weight: 500;
      }

      span {
        font-size: 12px;
        text-transform: uppercase;
      }
    }

    &:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 12px;

      img {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      input[type='text'] {
        padding: 6px 12px;
        width: 60px;
        border: none;
        outline: none;
        border: 1px solid #ccc;
        transition: all 1s ease;
        text-align: center;

        &:focus {
          border-color: #66afe9;
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);

          transition: all 0.5s ease;
        }
      }
    }
  }

  @media (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    &:not(:first-of-type) {
      flex-direction: column;
    }
  }
`;
export const BookticketLeftContent3 = styled.div`
  padding: 30px;
  background-color: #fff;

  @media (max-width: 414px) {
    padding: 10px;
  }
`;
export const BookticketLeftContent3List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;
export const BookticketLeftContent3Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0 30px;

  span {
    font-size: 14px;
    &:first-of-type {
      width: 25%;
    }

    &:last-child {
      width: 41.6667%;
    }
  }

  input {
    width: 41.6667%;
    border: 1px solid #ced0da;
    outline: none;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: #43464b;

    &:focus {
      border-color: #a0a3a7;
    }
  }

  select {
    width: 41.6667%;
    border: 1px solid #ced0da;
    outline: none;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    color: #43464b;

    &:focus {
      border-color: #a0a3a7;
    }
  }

  &:last-child {
    div {
      width: 41.6667%;
      margin-top: 0;
      gap: 0 30px;
      div {
        width: 100%;
        padding: 15px;
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px 0;
    span,
    span:first-of-type,
    span:last-child,
    input,
    select,
    div,
    div:last-child {
      width: 100%;
    }
  }

  @media (max-width: 414px) {
    span,
    span:first-of-type,
    span:last-child,
    input,
    select,
    div,
    &:last-child div {
      width: 100%;
    }

    &:last-child div {
      div {
        padding: 10px 0;
      }
    }
  }
`;

export const Loading = styled.span`
  position: absolute;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
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
