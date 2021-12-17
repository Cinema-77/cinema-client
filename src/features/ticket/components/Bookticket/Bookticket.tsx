import React, { useEffect, useMemo, useState } from 'react';
import * as S from './Bookticket.style';
import iconPlus from '@/assets/img/plus.png';
import iconMinus from '@/assets/img/minus.png';
import { useHistory, useLocation } from 'react-router';
import qs from 'query-string';
import {
  comboType,
  countComboProps,
  seatProps,
  seatType,
  showTimesProps,
  ticketProps,
} from '../../type';
import { addTicket, getListTicket } from '../..';
import { CheckAge } from '@/utils/CheckAge';
import { Toast } from '@/lib/Toast';
export const Bookticket = () => {
  const [ticket, setTicket] = useState<ticketProps[]>([]);
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [countCombo, setCountCombo] = useState<countComboProps[]>([]);
  const [countDown, setCountDown] = useState<number>(0);
  const [combos, setCombos] = useState<comboType[]>([]);
  const [showTimes, setShowTimes] = useState<showTimesProps>();
  const [ticketList, setTicketList] = useState<seatProps[]>([]);
  const location = useLocation();
  const [day, setDay] = useState<string>('');
  const query = useMemo(() => qs.parse(location.search), [location.search]);
  const [pay, setPay] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  useEffect(() => {
    if (showTimes?.date) {
      const date = new Date(showTimes.date).getDay();
      if (date === 0) {
        setDay('CN');
      } else {
        setDay(`Thứ ${date + 1}`);
      }
    }
  }, [showTimes?.date]);
  useEffect(() => {
    if (query.id) {
      getListTicket(query.id)
        .then((res) => {
          setCombos(res.values.combos);
          setShowTimes(res.values.showTimeDetail);
          setTicketList(res.values.tickets);
        })
        .catch(() => history.push('/'));
    } else {
      history.push('/');
    }
  }, [query.id, history]);
  useEffect(() => {
    setTotalMoney(
      Number(
        countCombo.reduce((result, item) => result + item.totalPrice, 0) +
          ticket.length * (ticket[0]?.price || 0)
      )
    );
  }, [countCombo, ticket]);
  useEffect(() => {
    if (page !== 2) {
      return;
    }
    const timer = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
    }, 1000);

    if (countDown === 0) {
      clearInterval(timer);
      window.location.reload();
    }
    return () => clearInterval(timer);
  }, [countDown, page]);
  const handleCheck = (seat: seatType) => {
    if ((ticket.filter((x) => x.idSeat === seat.idSeat)[0]?.idSeat || '') === seat.idSeat) {
      setTicket(ticket.filter((ticketValue) => ticketValue.idSeat !== seat.idSeat));
    } else {
      if (ticket.length === 8) {
        Toast('Chọn tối đa 8 vé');
      } else {
        setTicket([...ticket, seat]);
      }
    }
  };
  const handleNextPage = () => {
    const minutes15 = 900;
    if (ticket.length === 0) {
      Toast('Vui lòng chọn vé');
    } else if (page === 1) {
      setCountDown(minutes15);
      setPage(page + 1);
    } else {
      setPage(page + 1);
    }
  };
  const handlePrevCount = (id: string, price: number) => {
    if (Number(countCombo.find((x) => x._id === id)?.quantity || 0) !== 0) {
      setCountCombo([
        ...countCombo.filter((x) => x._id !== id),
        {
          _id: id,
          totalPrice: price * (Number(countCombo.find((x) => x._id === id)?.quantity || 0) - 1),
          quantity: Number(countCombo.find((x) => x._id === id)?.quantity || 0) - 1,
        },
      ]);
    }
  };
  const handleNextCount = (id: string, price: number) => {
    setCountCombo([
      ...countCombo.filter((x) => x._id !== id),
      {
        _id: id,
        totalPrice: price * (Number(countCombo.find((x) => x._id === id)?.quantity || 0) + 1),
        quantity: Number(countCombo.find((x) => x._id === id)?.quantity || 0) + 1,
      },
    ]);
  };
  const handleCount = (id: string, value: number, price: number) => {
    setCountCombo([
      ...countCombo.filter((x) => x._id !== id),
      {
        _id: id,
        totalPrice: price * value,
        quantity: Number(value),
      },
    ]);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    if (pay === 0) {
      Toast('Vui lòng chọn phương thức thanh toán');
      setIsLoading(false);
      return;
    }
    const body = {
      data: [...ticket],
      showTimeDetailId: query.id,
      payment: {
        type: pay,
      },
      combos: [...countCombo],
      gifts: [],
      coupons: [],
    };
    const res = await addTicket(body);
    if (res) {
      window.location.href = res.uri;
    }
    setIsLoading(false);
  };
  return (
    <div className="container">
      <S.Bookticket>
        <S.BookticketLeft>
          <S.BookticketLeftTitle>
            {page === 0 && 'Chọn Ghế:'}
            {page === 1 && 'Chọn Thức Ăn:'}
            {page === 2 && (
              <>
                Vui lòng Thanh Toán
                {countDown > 0 && (
                  <span>
                    {Math.floor(countDown / 60) + ':'}
                    {countDown % 60 < 10 ? `0${countDown % 60}` : countDown % 60}
                  </span>
                )}
              </>
            )}
          </S.BookticketLeftTitle>
          {page === 0 && (
            <S.BookticketLeftContent>
              <S.BookticketLeftContentListScreen>
                {ticketList.map((tickets) => (
                  <S.BookticketLeftContentScreenItem key={tickets.nameRow}>
                    <span>{tickets.nameRow}</span>
                    {tickets.nameSeats.map((seat) => (
                      <S.BookticketLeftContentScreenItemSpan
                        key={seat.idSeat}
                        onClick={() => seat.status !== 1 && handleCheck(seat)}
                        active={ticket.filter((x) => x.idSeat === seat.idSeat).toString()}
                        sold={seat.status === 1}
                      >
                        {seat.seatName}
                      </S.BookticketLeftContentScreenItemSpan>
                    ))}
                    <span>{tickets.nameRow}</span>
                  </S.BookticketLeftContentScreenItem>
                ))}
              </S.BookticketLeftContentListScreen>
              <S.BookticketLeftContentSpan>Màn hình</S.BookticketLeftContentSpan>
              <S.BookticketLeftContentListChair>
                <S.BookticketLeftContentChairItem>
                  <span></span>
                  <span>Ghế đang chọn</span>
                </S.BookticketLeftContentChairItem>
                <S.BookticketLeftContentChairItem>
                  <span></span>
                  <span>Ghế đã bán</span>
                </S.BookticketLeftContentChairItem>
                <S.BookticketLeftContentChairItem>
                  <span></span>
                  <span>Có thể chọn</span>
                </S.BookticketLeftContentChairItem>
                <S.BookticketLeftContentChairItem>
                  <span></span>
                  <span>Không thể chọn</span>
                </S.BookticketLeftContentChairItem>
              </S.BookticketLeftContentListChair>
            </S.BookticketLeftContent>
          )}
          {page === 1 && (
            <S.BookticketLeftContent2>
              <S.BookticketLeftContent2List>
                <S.BookticketLeftContent2Item>Combo</S.BookticketLeftContent2Item>
                <S.BookticketLeftContent2Item>Số lượng</S.BookticketLeftContent2Item>
                <S.BookticketLeftContent2Item>Giá (VNĐ)</S.BookticketLeftContent2Item>
                <S.BookticketLeftContent2Item>Tổng (VNĐ)</S.BookticketLeftContent2Item>
              </S.BookticketLeftContent2List>
              {combos.map((combo) => (
                <S.BookticketLeftContent2List key={combo._id}>
                  <S.BookticketLeftContent2Item>
                    <img src={combo.image} alt={combo.name} />
                    <div>
                      <h2>{combo.name}</h2>
                      <span>{combo.unit}</span>
                    </div>
                  </S.BookticketLeftContent2Item>
                  <S.BookticketLeftContent2Item>
                    <img
                      src={iconMinus}
                      alt=""
                      onClick={() => handlePrevCount(combo._id, combo.price)}
                      style={
                        Number(countCombo.find((x) => x._id === combo._id)?.quantity || 0) === 0
                          ? { opacity: '0.5' }
                          : { opacity: '1' }
                      }
                    />
                    <input
                      type="text"
                      value={countCombo.find((x) => x._id === combo._id)?.quantity || 0}
                      onChange={(e) => handleCount(combo._id, Number(e.target.value), combo.price)}
                    />
                    <img
                      src={iconPlus}
                      alt=""
                      onClick={() => handleNextCount(combo._id, combo.price)}
                    />
                  </S.BookticketLeftContent2Item>
                  <S.BookticketLeftContent2Item>
                    {combo.price.toLocaleString()}
                  </S.BookticketLeftContent2Item>
                  <S.BookticketLeftContent2Item>
                    {Number(
                      countCombo.find((x) => x._id === combo._id)?.totalPrice || 0
                    ).toLocaleString()}
                  </S.BookticketLeftContent2Item>
                </S.BookticketLeftContent2List>
              ))}
            </S.BookticketLeftContent2>
          )}
          {page === 2 && (
            <S.BookticketLeftContent3>
              <S.BookticketLeftContent3List>
                <S.BookticketLeftContent3Item>
                  <span>Hình thức thanh toán</span>
                  <select value={pay} onChange={(e) => setPay(Number(e.target.value))}>
                    <option value={0}>Chọn loại thẻ</option>
                    <option value={1}>Ví điện tử MoMo</option>
                  </select>
                </S.BookticketLeftContent3Item>
                <S.BookticketLeftContent3Item>
                  <span></span>
                  <span>
                    (*) Bằng việc click/chạm vào THANH TOÁN, bạn đã xác nhận hiểu rõ các Quy Định
                    Giao Dịch Trực Tuyến của Movieer.
                  </span>
                </S.BookticketLeftContent3Item>
                <S.BookticketLeftContent3Item>
                  <span></span>
                  <S.BookticketListBtn>
                    <S.BookticketBtn onClick={() => setPage(page - 1)}>Quay Lại</S.BookticketBtn>
                    <S.BookticketBtn onClick={() => handleSubmit()}>Thanh Toán</S.BookticketBtn>
                  </S.BookticketListBtn>
                </S.BookticketLeftContent3Item>
              </S.BookticketLeftContent3List>
            </S.BookticketLeftContent3>
          )}
        </S.BookticketLeft>
        {showTimes?.toString() && (
          <S.BookticketRight>
            <img src={showTimes.showTime.movie.image} alt={showTimes.showTime.movie.name} />
            <S.BookticketRightTitle>{showTimes.showTime.movie.name}</S.BookticketRightTitle>
            <CheckAge age={showTimes.showTime.movie.age} />
            <S.BookticketRightItem>
              <span>Rạp:</span>
              <span>
                {showTimes.room.cinema.name} | {showTimes.room.name}
              </span>
            </S.BookticketRightItem>
            <S.BookticketRightItem>
              <span>Suất chiếu:</span>
              <span>
                {showTimes.timeSlot.time} | {day}, {showTimes.date}
              </span>
            </S.BookticketRightItem>
            <S.BookticketRightItem>
              <span>Combo:</span>
              {combos.map((combo) => (
                <React.Fragment key={combo._id}>
                  {Number(countCombo.find((x) => x._id === combo._id)?.quantity || 0) > 0 &&
                    `${combo.name} (${countCombo.find((x) => x._id === combo._id)?.quantity}), `}
                </React.Fragment>
              ))}
            </S.BookticketRightItem>
            <S.BookticketRightItem>
              <span>Ghế:</span>
              <span>
                {ticket.length > 1 &&
                  ticket.map((seat) => (
                    <React.Fragment key={seat.idSeat}>{seat.seatName + ', '}</React.Fragment>
                  ))}
                {ticket.length === 1 &&
                  ticket.map((seat) => (
                    <React.Fragment key={seat.idSeat}>{seat.seatName}</React.Fragment>
                  ))}
              </span>
            </S.BookticketRightItem>
            <S.BookticketRightItemTotal>
              <span>Tổng:</span>
              <span>{totalMoney.toLocaleString()} VNĐ</span>
            </S.BookticketRightItemTotal>
            <S.BookticketListBtn>
              {page === 1 && (
                <S.BookticketBtn onClick={() => setPage(page - 1)}>Quay Lại</S.BookticketBtn>
              )}
              {page !== 2 && (
                <S.BookticketBtn onClick={() => handleNextPage()}>Tiếp tục</S.BookticketBtn>
              )}
            </S.BookticketListBtn>
          </S.BookticketRight>
        )}
      </S.Bookticket>
      {isLoading && (
        <S.Loading>
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <span key={index} />
            ))}
        </S.Loading>
      )}
    </div>
  );
};
