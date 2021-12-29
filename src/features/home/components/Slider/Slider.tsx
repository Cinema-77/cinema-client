import React, { useEffect, useState } from 'react';
import * as S from './Slider.style';
import Banner1 from '@/assets/img/banner 1.jpg';
import Banner2 from '@/assets/img/banner 2.jpg';
import Banner3 from '@/assets/img/banner 3.jpg';
import IconPrev from '@/assets/icon/iconprev.svg';
import IconNext from '@/assets/icon/iconnext.svg';
import {
  CinemaType,
  dateType,
  getCinemabyDate,
  getCinemaByMovie,
  getCinemaList,
  getDateByCinema,
  getDateByMovie,
  getMovieByCinema,
  getMovieByCinemaTab1,
  getTimeByDate,
  getTimeByDateTab2,
  getTimeByMovie,
  MovieItemType,
  showTimesType,
} from '../..';
import { useSelector } from 'react-redux';
import { SelectItem } from './SelectItem';
import { Loading2 } from '@/features/Loading2/Loading2';
import { useAuth } from '@/lib/auth';
import { useHistory } from 'react-router-dom';

export const Slider = () => {
  const [image] = useState([Banner1, Banner2, Banner3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieList, setMovieList] = useState<MovieItemType[]>([]);
  const [movieValue, setMovieValue] = useState<string>('');
  const [cinemaList, setCinemaList] = useState<CinemaType[]>([]);
  const [cinemaValue, setCinemaValue] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>('');
  const [timeList, setTimeList] = useState<showTimesType[]>([]);
  const [timeValue, setTimeValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);
  const [dateList, setDateList] = useState<dateType[] | any[]>([]);
  const { user } = useAuth();
  const history = useHistory();
  const update = useSelector(
    (state: {
      movie: {
        list: {
          moviePlay: MovieItemType[];
          movieComing: MovieItemType[];
          movieEx: MovieItemType[];
        };
      };
    }) => state.movie.list
  );
  const SLImage = image.length - 1;
  const choosePrev = () => {
    if (currentIndex < 1) {
      return setCurrentIndex(SLImage);
    }
    setCurrentIndex(currentIndex - 1);
  };
  const chooseNext = () => {
    if (currentIndex >= SLImage) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex + 1);
  };
  useEffect(() => {
    if (tab === 0) {
      setCinemaValue('');
      setDateValue('');
      if (update.moviePlay && update.moviePlay?.length > 0) {
        setMovieList(update.moviePlay);
      }
    } else if (tab === 1) {
      setCinemaValue('');
      setMovieValue('');
      setDateList(() => {
        const date = new Date();
        const arrayTotal = [];
        for (let i = 0; i < 6; i++) {
          const _24HoursInMilliseconds = 86400000;
          arrayTotal.push({
            date:
              (Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getMonth() + 1) < 10
                ? '0' + Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getMonth() + 1)
                : Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getMonth() + 1)) +
              '/' +
              (Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getDate()) < 10
                ? '0' + Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getDate())
                : Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getDate())) +
              '/' +
              Number(new Date(date.getTime() + i * _24HoursInMilliseconds).getFullYear()),
            day:
              Number(new Date(date.getTime() + i * 86400000).getDay() + 1) === 1
                ? 'Chủ nhật'
                : `Thứ ${new Date(date.getTime() + i * 86400000).getDay() + 1}`,
          });
        }
        return arrayTotal;
      });
    } else if (tab === 2) {
      setMovieValue('');
      setDateValue('');
      getCinemaList()
        .then((res) => setCinemaList(res.values.cinemas))
        .catch(console.log);
    }
    setTimeList([]);
    setTimeValue('');
  }, [update, tab]);
  useEffect(() => {
    const autoSlider = setInterval(() => {
      if (currentIndex >= SLImage) {
        return setCurrentIndex(0);
      }
      setCurrentIndex(currentIndex + 1);
    }, 3000);

    return () => clearInterval(autoSlider);
  }, [SLImage, currentIndex]);
  useEffect(() => {
    setIsLoading(true);
    if (tab === 0) {
      setCinemaList([]);
      setDateList([]);
      setTimeList([]);
      getCinemaByMovie(movieValue)
        .then((res) => {
          setCinemaList(res.values.cinemas);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (tab === 2) {
      setDateList([]);
      setTimeList([]);
      getDateByMovie(movieValue, cinemaValue)
        .then((res) => {
          setDateList(res.values.dates);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (tab === 1) {
      setTimeList([]);
      getTimeByMovie(movieValue, cinemaValue, dateValue)
        .then((res) => {
          setTimeList(res.values.showTimeDetails);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieValue, tab]);

  useEffect(() => {
    setIsLoading(true);
    if (tab === 2) {
      // setMovieList([]);
      setDateList([]);
      setTimeList([]);
      getMovieByCinema(cinemaValue)
        .then((res) => {
          setMovieList(res.values.movies);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (tab === 0) {
      setDateList([]);
      setTimeList([]);
      getDateByCinema(movieValue, cinemaValue)
        .then((res) => {
          setDateList(res.values.dates);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (tab === 1) {
      setMovieList([]);
      setTimeList([]);
      getMovieByCinemaTab1(cinemaValue, dateValue)
        .then((res) => {
          setMovieList(res.values.movies);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cinemaValue, tab]);

  useEffect(() => {
    setIsLoading(true);
    if (tab === 2) {
      setTimeList([]);
      getTimeByDateTab2(movieValue, cinemaValue, dateValue)
        .then((res) => {
          setTimeList(res.values.showTimeDetails);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (tab === 0) {
      setTimeList([]);
      getTimeByDate(movieValue, cinemaValue, dateValue)
        .then((res) => {
          setTimeList(res.values.showTimeDetails);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (tab === 1) {
      setCinemaList([]);
      setMovieList([]);
      setTimeList([]);
      getCinemabyDate(dateValue)
        .then((res) => {
          setCinemaList(res.values.cinemas);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateValue, tab]);

  const handleBuyTicket = () => {
    if (timeValue) {
      if (user) {
        history.push(`/book-ticket/?id=${timeValue}`);
      } else {
        history.push('/auth');
      }
    }
  };

  return (
    <S.Slider>
      <img src={image[currentIndex]} alt="" />
      <S.SliderBtnPrev onClick={choosePrev}>
        <img src={IconPrev} alt="" />
      </S.SliderBtnPrev>
      <S.SliderBtnNext onClick={chooseNext}>
        <img src={IconNext} alt="" />
      </S.SliderBtnNext>
      <S.FormSlider>
        <S.FormSliderTitle>Mua Vé Nhanh</S.FormSliderTitle>
        <S.FormSliderContent>
          <S.FormSliderListTab>
            <S.FormSliderTab active={tab === 0} onClick={() => setTab(0)}>
              Theo phim
            </S.FormSliderTab>
            <S.FormSliderTab active={tab === 1} onClick={() => setTab(1)}>
              Theo ngày
            </S.FormSliderTab>
            <S.FormSliderTab active={tab === 2} onClick={() => setTab(2)}>
              Theo rạp
            </S.FormSliderTab>
          </S.FormSliderListTab>
          <S.FormSliderListSelect>
            <SelectItem
              tab={tab}
              movieList={movieList}
              timeList={timeList}
              cinemaList={cinemaList}
              dateList={dateList}
              setMovie={setMovieValue}
              setCinema={setCinemaValue}
              setDate={setDateValue}
              setTime={setTimeValue}
            />
            {isLoading && <Loading2 />}
          </S.FormSliderListSelect>
          <S.FormSliderBtn onClick={() => handleBuyTicket()}>Mua Vé</S.FormSliderBtn>
        </S.FormSliderContent>
      </S.FormSlider>
    </S.Slider>
  );
};
