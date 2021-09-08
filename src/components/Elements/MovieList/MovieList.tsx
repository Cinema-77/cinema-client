import React, { useState } from 'react';
import { MovieItem } from '@/components/Elements';
import * as S from './MovieList.style';
import film1 from '@/assets/img/film 1.jpg';
import film2 from '@/assets/img/film 2.jpg';
import film3 from '@/assets/img/film 3.jpg';
import film4 from '@/assets/img/film 4.jpg';
import film5 from '@/assets/img/film 5.png';
import film6 from '@/assets/img/film 6.jpg';
import film7 from '@/assets/img/film 7.jpg';
import film8 from '@/assets/img/film 8.jpg';
import film9 from '@/assets/img/film 9.jpg';
import film10 from '@/assets/img/film 10.jpg';
import film11 from '@/assets/img/film 11.jpg';
import film12 from '@/assets/img/film 12.jpg';

interface MovieProps {}

interface ImageProps {
  titleEN?: string;
  titleVN?: string;
  film: string;
}

export const MovieList: React.FC<MovieProps> = () => {
  const [nowShowing] = useState<ImageProps[]>([
    {
      titleEN: 'Ghost stories near home',
      titleVN: 'Chuyện Ma Gần Nhà',
      film: film1,
    },
    {
      titleEN: 'Black Widow',
      titleVN: 'Góa Phụ Đen',
      film: film2,
    },
    {
      titleEN: "The King's Man",
      titleVN: 'Khởi Nguồn',
      film: film3,
    },
    {
      titleEN: 'Cruella',
      film: film4,
    },
    {
      titleEN: 'No Time To Die',
      titleVN: 'Không Có Thời Gian Để Chết',
      film: film5,
    },
    {
      titleEN: 'CandyMan',
      titleVN: 'Sát Nhân Trong Gương',
      film: film6,
    },
  ]);

  const [commingSoon] = useState<ImageProps[]>([
    {
      titleVN: 'Lật Mặt 48h',
      film: film7,
    },
    {
      titleEN: 'Minions 2',
      titleVN: 'Sự Trỗi Dậy Của Gru 2',
      film: film8,
    },
    {
      titleEN: 'Fast & Furius 9',
      titleVN: 'Quá Nhanh Quá Nguy Hiểm 9',
      film: film9,
    },
    {
      titleEN: 'A Quiet Place 2',
      titleVN: 'Vùng Đất Câm Lặng 2',
      film: film10,
    },
    {
      titleVN: 'Trạng Huỳnh',
      film: film11,
    },
    {
      titleEN: 'Shang-Chi And The Legend Of The Ten Rings',
      titleVN: 'Shang-Chi Và Huyền Thoại Thập Luân',
      film: film12,
    },
  ]);

  const [comingsoon, setComingSoon] = useState(false);

  return (
    <S.MovieList>
      <S.MovieTitle>Movie Selection</S.MovieTitle>
      <S.MovieListSpan>
        <S.MovieLink onClick={() => setComingSoon(true)}>Phim đang chiếu</S.MovieLink>
        <S.MovieLink onClick={() => setComingSoon(false)}>Phim sắp chiếu</S.MovieLink>
      </S.MovieListSpan>
      <div className="container">
        {comingsoon ? <MovieItem image={nowShowing} /> : <MovieItem image={commingSoon} />}
      </div>
    </S.MovieList>
  );
};
