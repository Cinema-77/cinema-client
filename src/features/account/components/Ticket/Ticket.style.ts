import styled from 'styled-components';
export const Ticket = styled.section``;
export const TicketDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
export const TicketListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
`;
export const TicketTitle = styled.h2`
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  position: relative;
  color: ${({ active }: any) => active && '#ff6f61'};
  font-weight: ${({ active }: any) => active && '600'};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 1px;
    background-color: ${({ active }: any) => active && '#ff6f61'};
  }
` as any;

export const BillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;
export const BillItem = styled.div`
  height: 175px;
  display: flex;
  position: relative;
  display: flex;
  background-color: #fbfbfb;
  border: 1px solid #ff6f61;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-left-color: transparent;
    border-top-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%) rotate(45deg);
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-right-color: transparent;
    border-top-color: transparent;
  }
`;

export const BillSpan = styled.h2`
  font-size: 15px;
  margin-bottom: 8px;
  display: flex;
  gap: 0 8px;
`;
export const BillDiv = styled.div`
  &:first-of-type {
    ${BillSpan} {
      display: flex;
      align-items: end;
      flex-direction: column;
      span {
        &:last-child {
          font-size: 11px;
          color: rgba(0, 0, 0, 0.7);
          font-weight: 500;
          margin-top: 4px;
        }
        &:first-of-type {
          color: #ff6f61;
          font-weight: 600;
          font-size: 18px;
        }
      }
    }
  }
  &:nth-child(2) {
    ${BillSpan} {
      span {
        &:first-of-type {
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
  }
  &:last-child {
    ${BillSpan} {
      display: flex;
      justify-content: end;
      font-size: 16px;
      span {
        &:last-child {
          font-weight: 600;
        }
      }
    }
  }
`;
export const BillSpanCorn = styled.h2`
  display: flex;
  font-size: 15px;
  gap: 0 8px;
  margin-bottom: 8px;
  span {
    &:first-of-type {
      font-weight: 600;
    }
  }
`;
export const BillItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 80%;
  border-right: 1px dashed #ff6f61;
  padding: 16px 24px;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translate(50%, -50%) rotate(45deg);
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-top-color: transparent;
    border-left-color: transparent;
    background-color: #fff;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translate(50%, 50%) rotate(-135deg);
    border-radius: 50%;
    border: 1px solid #ff6f61;
    border-top-color: transparent;
    border-left-color: transparent;
    background-color: #fff;
  }
`;
export const BillItemRight = styled.div`
  width: 20%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  text-align: center;
  transform: rotate(-90deg);
  padding: 16px 0px 30px 0;

  h2 {
    color: #ff6f61;
    padding-left: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    transform: rotate(180deg);
  }
`;
export const BillItemRightIMG = styled.div`
  font-size: 12px;
  letter-spacing: 1.5px;
  img {
    width: 100%;
    height: 30px;
    object-fit: cover;
  }
`;
export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 26px;
`;
export const ListPage = styled.div``;
export const Page = styled.span`
  font-weight: 600;
  &:first-of-type {
    color: red;
  }
`;
export const ListBtn = styled.div`
  cursor: pointer;
  display: flex;
`;

export const PaginationButton = styled.div`
  cursor: ${({ disabled }: any) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 16px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  background-color: ${({ disabled }: any) => (disabled ? '#f9f9f9' : '#fff')};
  svg {
    width: 10px;
    height: 10px;
    fill: ${({ disabled }: any) => disabled && '#ccc'};
  }
`;
export const PaginationPrev = styled(PaginationButton)`
  border-right: 1px solid #f2f2f2;
` as any;
export const PaginationNext = styled(PaginationButton)`` as any;
