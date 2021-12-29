import React, { useEffect, useMemo, useState } from 'react';
import * as S from './MovieDetail.style';
import { dateType, getListShowTime, getLocations, MovieItemType, showTimesProps } from '../..';
import { useHistory, useLocation } from 'react-router';
import qs from 'query-string';
import { Loading } from '@/features/Loading/Loading';
import { useAuth } from '@/lib/auth';
import { getMovieDetail } from '../..';
import { CheckAge } from '@/utils/CheckAge';

export const MovieDetail = () => {
  const [isDetail, setIsDetail] = useState<boolean>(true);
  const [isTrailer, setIsTrailer] = useState<boolean>(false);
  const [isMovie, setIsMovie] = useState<boolean>(false);
  const [isShowTime, setIsShowTime] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingShowTime, setIsLoadingShowTime] = useState<boolean>(false);
  const [screenValue, setScreenValue] = useState<string>('');
  const [cityValue, setCityValue] = useState<string>('Thành phố Hồ Chí Minh');
  const [cityList, setCityList] = useState<string[]>([]);
  const [movieDetail, setMovieDetail] = useState<MovieItemType>();
  const [date, setDate] = useState<string>(() => {
    const date2 = new Date();
    return Number(date2.getMonth() + 1) + '/' + date2.getDate() + '/' + date2.getFullYear();
  });
  const { user } = useAuth();
  const [timeNow] = useState<string>(() => {
    const date1 = new Date();
    const hour = date1.getHours();
    const minutes = date1.getMinutes() < 10 ? `0${date1.getMinutes()}` : date1.getMinutes();
    return (
      hour +
      ':' +
      minutes +
      '-' +
      Number(date1.getMonth() + 1) +
      '/' +
      date1.getDate() +
      '/' +
      date1.getFullYear()
    );
  });
  const [isActive, setIsActive] = useState<string>(() => {
    const date = new Date();
    return Number(date.getDate()) + '/' + Number(date.getMonth() + 1);
  });
  const [dateList] = useState<dateType[]>(() => {
    const date = new Date();
    const arrayTotal = [];
    for (let i = 0; i < 6; i++) {
      const _24HoursInMilliseconds = 86400000;
      arrayTotal.push({
        date:
          Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getDate()) +
          '/' +
          Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getMonth() + 1),
        day:
          Number(new Date(date.getTime() + i * 86400000).getDay() + 1) === 1
            ? 'CN'
            : `Th ${new Date(date.getTime() + i * 86400000).getDay() + 1}`,
      });
    }
    return arrayTotal;
  });
  const [showTimes, setShowTimes] = useState<showTimesProps[]>([]);
  const location = useLocation();
  const history = useHistory();
  const query = useMemo(() => qs.parse(location.search), [location.search]);
  useEffect(() => {
    setIsLoading(true);
    getMovieDetail(query.id).then((res) => {
      setMovieDetail(res.values.movie);
      setIsLoading(false);
    });
  }, [query]);
  useEffect(() => {
    getLocations()
      .then((res) => setCityList(res.values.locations))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setIsShowTime(false);
    setIsLoadingShowTime(true);
    getListShowTime(date, query.id, screenValue, cityValue)
      .then((res) => {
        setShowTimes(res.showTimes);
        setIsLoadingShowTime(false);
      })
      .catch((err) => console.log(err));
  }, [query.id, screenValue, cityValue, date]);
  const handleDate = (value: string) => {
    const _value = value.split('/')[1] + '/' + value.split('/')[0] + '/' + new Date().getFullYear();
    setIsActive(value);
    setDate(_value);
  };
  const handleBookTicket = (id: string, time: string) => {
    const timeHourNow = timeNow.split('-');
    const timeDateNow = timeHourNow[1].split('/');
    const timesHour = time.split('-');
    const timesDate = timesHour[1].split('/');
    if (timeDateNow[1] < timesDate[1]) {
      if (user) {
        history.push(`/book-ticket/?id=${id}`);
      } else {
        history.push('/auth');
      }
    } else if (timeDateNow[1] === timesDate[1]) {
      if (timeHourNow[0] < timesHour[0]) {
        if (user) {
          history.push(`/book-ticket/?id=${id}`);
        } else {
          history.push('/auth');
        }
      } else {
        return;
      }
    }
  };
  const handleDisabledShowTime = (time: string) => {
    const timeHourNow = timeNow.split('-');
    const timeDateNow = timeHourNow[1].split('/');
    const timesHour = time.split('-');
    const timesDate = timesHour[1].split('/');
    let checkTime: boolean = false;
    if (timeDateNow[1] < timesDate[1]) {
      checkTime = false;
    } else if (timeDateNow[1] === timesDate[1]) {
      if (timeHourNow[0] < timesHour[0]) {
        checkTime = false;
      } else {
        checkTime = true;
      }
    }
    return checkTime;
  };
  const handleIsDetailMovieTrailer = (isDetail: boolean, isMovie: boolean, isTrailer: boolean) => {
    setIsDetail(isDetail);
    setIsMovie(isMovie);
    setIsTrailer(isTrailer);
  };
  return (
    <S.MovieDetail>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <S.MovieTitle>Nội Dung Phim</S.MovieTitle>
          {movieDetail && (
            <S.MovieList>
              <S.MovieIMG>
                <img src={movieDetail.image} alt="" />
              </S.MovieIMG>
              <S.MovieContent>
                <S.MovieContentTitle>{movieDetail.name}</S.MovieContentTitle>
                <S.MovieContentList>
                  <S.MovieContentItem>Đạo diễn:</S.MovieContentItem>
                  <S.MovieContentItem>{movieDetail.director.name}</S.MovieContentItem>
                </S.MovieContentList>
                <S.MovieContentList>
                  <S.MovieContentItem>Diễn viên:</S.MovieContentItem>
                  <S.MovieContentItem>{movieDetail.cast}</S.MovieContentItem>
                </S.MovieContentList>
                <S.MovieContentList>
                  <S.MovieContentItem>Thể loại:</S.MovieContentItem>
                  <S.MovieContentItem>
                    {movieDetail.categories.length > 1 &&
                      movieDetail.categories.map((category) => (
                        <span key={category._id}>{category.name}, </span>
                      ))}
                    {movieDetail.categories.length === 1 &&
                      movieDetail.categories.map((category) => (
                        <span key={category._id}>{category.name}</span>
                      ))}
                  </S.MovieContentItem>
                </S.MovieContentList>
                <S.MovieContentList>
                  <S.MovieContentItem>Khởi chiếu:</S.MovieContentItem>
                  <S.MovieContentItem>26/03/2021</S.MovieContentItem>
                </S.MovieContentList>
                <S.MovieContentList>
                  <S.MovieContentItem>Thời lượng:</S.MovieContentItem>
                  <S.MovieContentItem>{movieDetail.moveDuration}</S.MovieContentItem>
                </S.MovieContentList>
                <S.MovieContentList>
                  <S.MovieContentItem>Ngôn ngữ:</S.MovieContentItem>
                  <S.MovieContentItem>
                    Tiếng Anh - Phụ đề Tiếng Việt, Phụ đề Tiếng Hàn - Tiếng Việt
                  </S.MovieContentItem>
                </S.MovieContentList>
                <S.MovieContentList>
                  <S.MovieContentItem>Rated:</S.MovieContentItem>
                  <S.MovieContentItem style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                    <CheckAge age={movieDetail.age} />
                  </S.MovieContentItem>
                </S.MovieContentList>
              </S.MovieContent>
            </S.MovieList>
          )}
          <S.MovieTrailer>
            <S.MovieTrailerTitle>
              <S.MovieTrailerSpan
                fW={isDetail}
                onClick={() => handleIsDetailMovieTrailer(true, false, false)}
              >
                Chi tiết
              </S.MovieTrailerSpan>
              <S.MovieTrailerSpan
                fW={isTrailer}
                onClick={() => handleIsDetailMovieTrailer(false, false, true)}
              >
                Trailer
              </S.MovieTrailerSpan>
              <S.MovieTrailerSpan
                fW={isMovie}
                onClick={() => handleIsDetailMovieTrailer(false, true, false)}
              >
                Lịch chiếu
              </S.MovieTrailerSpan>
            </S.MovieTrailerTitle>
            {isDetail && <S.MovieTrailerContent>{movieDetail?.description}</S.MovieTrailerContent>}
            {isTrailer && (
              <S.MovieTrailerVideo>
                <S.MovieTrailerVideoVideo
                  frameBorder="0"
                  allowFullScreen
                  src={movieDetail?.trailer}
                ></S.MovieTrailerVideoVideo>
              </S.MovieTrailerVideo>
            )}
            {isMovie && (
              <S.MovieShowTimes>
                <S.MovieShowTimesForm>
                  <S.MovieShowTimesSelect
                    value={cityValue}
                    onChange={(e) => setCityValue(e.target.value)}
                  >
                    {cityList.map((city, index) => (
                      <S.MovieShowTimesOptions key={index} value={city}>
                        {city}
                      </S.MovieShowTimesOptions>
                    ))}
                  </S.MovieShowTimesSelect>
                  <S.MovieShowTimesSelect
                    value={screenValue}
                    onChange={(e) => {
                      setScreenValue(e.target.value);
                      setIsShowTime(false);
                    }}
                  >
                    <S.MovieShowTimesOptions value="">Định dạng</S.MovieShowTimesOptions>
                    {movieDetail?.screens.map((item) => (
                      <S.MovieShowTimesOptions key={item._id} value={item._id}>
                        {item.name}
                      </S.MovieShowTimesOptions>
                    ))}
                  </S.MovieShowTimesSelect>
                </S.MovieShowTimesForm>
                <S.MovieShowTimesDate>
                  {dateList.map((date, index) => (
                    <S.MovieShowTimesDateItem
                      key={index}
                      onClick={() => handleDate(date.date)}
                      active={isActive === date.date}
                    >
                      {date.date}
                      <br />
                      <span>{date.day}</span>
                    </S.MovieShowTimesDateItem>
                  ))}
                </S.MovieShowTimesDate>
                <S.MovieShowTimesTheater>
                  {isLoadingShowTime && <Loading />}
                  {!isLoadingShowTime && !showTimes?.toString() && (
                    <S.MovieShowTimesTheaterSpan>
                      <strong>Hiện tại khu vực : </strong>
                      {' ' + cityValue + ' không có xuất chiếu nào.'}
                    </S.MovieShowTimesTheaterSpan>
                  )}
                  {!isLoadingShowTime &&
                    showTimes?.toString() &&
                    showTimes.map((showTime) => (
                      <S.MovieShowTimes key={showTime.cinema._id}>
                        <S.MovieShowTimesList key={showTime.cinema._id}>
                          <S.MovieShowTimesItem onClick={() => setIsShowTime(!isShowTime)}>
                            <S.MovieShowTimesContent>
                              <S.MovieShowTimesTitle>{showTime.cinema.name}</S.MovieShowTimesTitle>
                            </S.MovieShowTimesContent>
                          </S.MovieShowTimesItem>
                        </S.MovieShowTimesList>
                        {isShowTime && (
                          <S.MovieShowTimeTime>
                            <S.MovieShowTimeAddress>
                              {showTime.cinema.address.street}, {showTime.cinema.address.ward},{' '}
                              {showTime.cinema.address.district}, {showTime.cinema.address.city}.
                            </S.MovieShowTimeAddress>
                            {!isLoading && (
                              <>
                                {showTime.screen2D.showTimesDetails.toString() && (
                                  <>
                                    <S.MovieShowTimeScreen>
                                      {showTime.screen2D.title} Phụ Đề Anh
                                    </S.MovieShowTimeScreen>
                                    <S.MovieShowTimeDiv>
                                      {showTime.screen2D.showTimesDetails.map((item) => (
                                        <S.MovieShowTimeTimeScreen
                                          key={item._id}
                                          disabled={handleDisabledShowTime(
                                            item.timeSlot.time + '-' + date
                                          )}
                                          onClick={() =>
                                            handleBookTicket(
                                              item._id,
                                              item.timeSlot.time + '-' + date
                                            )
                                          }
                                        >
                                          {item.timeSlot.time}
                                        </S.MovieShowTimeTimeScreen>
                                      ))}
                                    </S.MovieShowTimeDiv>
                                  </>
                                )}
                                {showTime.screen3D.showTimesDetails.toString() && (
                                  <>
                                    <S.MovieShowTimeScreen>
                                      {showTime.screen3D.title} Phụ Đề Anh
                                    </S.MovieShowTimeScreen>
                                    <S.MovieShowTimeDiv>
                                      {showTime.screen3D.showTimesDetails.map((item) => (
                                        <S.MovieShowTimeTimeScreen
                                          key={item._id}
                                          disabled={handleDisabledShowTime(
                                            item.timeSlot.time + '-' + date
                                          )}
                                          onClick={() =>
                                            handleBookTicket(
                                              item._id,
                                              item.timeSlot.time + '-' + date
                                            )
                                          }
                                        >
                                          {item.timeSlot.time}
                                        </S.MovieShowTimeTimeScreen>
                                      ))}
                                    </S.MovieShowTimeDiv>
                                  </>
                                )}
                                {showTime.screenIMAX.showTimesDetails.toString() && (
                                  <>
                                    <S.MovieShowTimeScreen>
                                      {showTime.screenIMAX.title} Phụ Đề Anh
                                    </S.MovieShowTimeScreen>
                                    <S.MovieShowTimeDiv>
                                      {showTime.screenIMAX.showTimesDetails.map((item) => (
                                        <S.MovieShowTimeTimeScreen
                                          key={item._id}
                                          disabled={handleDisabledShowTime(
                                            item.timeSlot.time + '-' + date
                                          )}
                                          onClick={() =>
                                            handleBookTicket(
                                              item._id,
                                              item.timeSlot.time + '-' + date
                                            )
                                          }
                                        >
                                          {item.timeSlot.time}
                                        </S.MovieShowTimeTimeScreen>
                                      ))}
                                    </S.MovieShowTimeDiv>
                                  </>
                                )}
                              </>
                            )}
                          </S.MovieShowTimeTime>
                        )}
                      </S.MovieShowTimes>
                    ))}
                </S.MovieShowTimesTheater>
              </S.MovieShowTimes>
            )}
          </S.MovieTrailer>
        </div>
      )}
    </S.MovieDetail>
  );
};
