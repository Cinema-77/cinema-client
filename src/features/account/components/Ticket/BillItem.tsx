import React from 'react';
import { seatProps } from '../../type';
import * as S from './Ticket.style';
import mavach from '@/assets/img/mavach.png';

interface BillItemProps {
  data: seatProps[];
  total: number;
  type: number;
}

export const BillItem: React.FC<BillItemProps> = ({ data, total, type }) => {
  return (
    <S.BillItem>
      <S.BillItemLeft>
        {type === 0 && data && (
          <>
            <S.BillDiv>
              <S.BillSpan>
                <span>
                  {data[0].showTimeDetail.showTime.cinema.name +
                    ' - ' +
                    data[0].showTimeDetail.showTime.cinema.address.street}
                </span>
                <span>
                  {data[0].showTimeDetail.showTime.cinema.address.street +
                    ', ' +
                    data[0].showTimeDetail.showTime.cinema.address.ward +
                    ', ' +
                    data[0].showTimeDetail.showTime.cinema.address.district +
                    ', ' +
                    data[0].showTimeDetail.showTime.cinema.address.city}
                </span>
              </S.BillSpan>
            </S.BillDiv>
            <S.BillDiv>
              <S.BillSpan>
                <span>Film:</span>
                <span>{data[0].showTimeDetail.showTime.movie.name}</span>
              </S.BillSpan>
              <S.BillSpan>
                <span>Thời gian:</span>
                <span>
                  {data[0].showTimeDetail.timeSlot.time + ' - ' + data[0].showTimeDetail.date}
                </span>
              </S.BillSpan>
              <S.BillSpan>
                <span>Rạp:</span>
                <span>{data[0].showTimeDetail.room.name}</span>
              </S.BillSpan>
              <S.BillSpan>
                <span>Ghế:</span>
                <span>
                  {data.map((item) => (
                    <React.Fragment key={item._id}>{' ' + item.seatName + ', '}</React.Fragment>
                  ))}
                </span>
              </S.BillSpan>
            </S.BillDiv>
            <S.BillDiv>
              <S.BillSpan>
                <span>Tổng tiền:</span>
                <span>{total.toLocaleString()} VNĐ</span>
              </S.BillSpan>
            </S.BillDiv>
          </>
        )}
        {type === 1 && (
          <>
            <S.BillDiv>
              <S.BillSpan>
                <span>Popcorn Combo</span>
              </S.BillSpan>
            </S.BillDiv>
            <S.BillDiv>
              {data.map((item) => (
                <S.BillSpanCorn key={item._id}>
                  <span>({item.quantity} Combo):</span>
                  <span>{item.unit}</span>
                </S.BillSpanCorn>
              ))}
            </S.BillDiv>
            <S.BillDiv>
              <S.BillSpan>
                <span>Tổng tiền:</span>
                <span>{total.toLocaleString()} VNĐ</span>
              </S.BillSpan>
            </S.BillDiv>
          </>
        )}
      </S.BillItemLeft>
      <S.BillItemRight>
        <h2>TICKET</h2>
        <S.BillItemRightIMG>
          100345
          <img src={mavach} alt="" />
        </S.BillItemRightIMG>
      </S.BillItemRight>
    </S.BillItem>
  );
};
