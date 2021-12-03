import React, { Dispatch, SetStateAction } from 'react';
import { dateType, MovieItemType, showTimesType } from '../..';
import * as S from './Slider.style';

interface SelectItemProps {
  tab: number;
  movieList: MovieItemType[];
  setMovie: Dispatch<SetStateAction<string>>;
  setCinema: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
  setTime: Dispatch<SetStateAction<string>>;
  cinemaList: any[];
  dateList: dateType[] | any[];
  timeList: showTimesType[];
}

export const SelectItem: React.FC<SelectItemProps> = ({
  tab,
  movieList,
  setMovie,
  setCinema,
  setDate,
  setTime,
  cinemaList,
  dateList,
  timeList,
}) => {
  return (
    <>
      {tab === 0 ? (
        <>
          <S.FormSliderSelect onChange={(e) => setMovie(e.target.value)}>
            <option hidden>Chọn phim</option>
            {movieList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setCinema(e.target.value)}>
            <option hidden>Chọn rạp</option>
            {cinemaList.length > 0 &&
              cinemaList.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setDate(e.target.value)}>
            <option hidden>Chọn ngày</option>
            {dateList.length > 0 &&
              dateList.slice(0, 5).map((item, index) => (
                <option key={index} value={item.date ? item.date : item}>
                  {item.date
                    ? item.date
                    : 'Thứ ' +
                      (Number(new Date(item).getDay() + 1) === 1
                        ? 'CN'
                        : Number(new Date(item).getDay() + 1)) +
                      ', ' +
                      item}
                </option>
              ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setTime(e.target.value)}>
            <option hidden>Chọn suất</option>
            {timeList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.timeSlot.time + ' - ' + item.room.screen.name}
              </option>
            ))}
          </S.FormSliderSelect>
        </>
      ) : tab === 1 ? (
        <>
          <S.FormSliderSelect onChange={(e) => setDate(e.target.value)}>
            <option hidden>Chọn ngày</option>
            {dateList.map((item, index) => (
              <option key={index} value={item.date}>
                {item.day + ', ' + item.date}
              </option>
            ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setCinema(e.target.value)}>
            <option hidden>Chọn rạp</option>
            {cinemaList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setMovie(e.target.value)}>
            <option hidden>Chọn phim</option>
            {movieList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setTime(e.target.value)}>
            <option hidden>Chọn suất</option>
            {timeList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.timeSlot.time + ' - ' + item.room.screen.name}
              </option>
            ))}
          </S.FormSliderSelect>
        </>
      ) : (
        <>
          <S.FormSliderSelect onChange={(e) => setCinema(e.target.value)}>
            <option hidden>Chọn rạp</option>
            {cinemaList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setMovie(e.target.value)}>
            <option hidden>Chọn phim</option>
            {movieList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setDate(e.target.value)}>
            <option hidden>Chọn ngày</option>
            {dateList.length > 0 &&
              dateList.slice(0, 5).map((item, index) => (
                <option key={index} value={item.date ? item.date : item}>
                  {item.date
                    ? item.date
                    : 'Thứ ' +
                      (Number(new Date(item).getDay() + 1) === 1
                        ? 'CN'
                        : Number(new Date(item).getDay() + 1)) +
                      ', ' +
                      item}
                </option>
              ))}
          </S.FormSliderSelect>
          <S.FormSliderSelect onChange={(e) => setTime(e.target.value)}>
            <option hidden>Chọn suất</option>
            {timeList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.timeSlot.time + ' - ' + item.room.screen.name}
              </option>
            ))}
          </S.FormSliderSelect>
        </>
      )}
    </>
  );
};
