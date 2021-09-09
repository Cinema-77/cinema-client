import React from 'react';
import * as S from './EventList.style';
import { EventItem } from '@/features/home';

interface EventProps {}

export const Event: React.FC<EventProps> = () => {
  return (
    <S.Event>
      <S.EventTitle>Event</S.EventTitle>
      <S.EventSpan>Here is a list of events information</S.EventSpan>
      <div className="container">
        <EventItem />
      </div>
    </S.Event>
  );
};
