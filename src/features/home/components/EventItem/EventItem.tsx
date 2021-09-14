import React, { useState } from 'react';
import * as S from './EventItem.style';
import event1 from '@/assets/img/event 1.jpg';
import event2 from '@/assets/img/event 2.jpg';
import event3 from '@/assets/img/event 3.jpg';
import event4 from '@/assets/img/event 4.jpg';

export const EventItem = () => {
  const [listIMG] = useState([event1, event2, event3, event4]);
  return (
    <S.EventItemlist>
      {listIMG.map((img, index) => (
        <S.EventIem key={index}>
          <img src={img} alt="" />
          <S.EventItemOverLay to="">
            <S.EventItemLink>Chi Tiết</S.EventItemLink>
          </S.EventItemOverLay>
        </S.EventIem>
      ))}
    </S.EventItemlist>
  );
};
