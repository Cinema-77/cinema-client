import React, { useEffect, useState } from 'react';
import { MovieItem } from '@/features/home';
import * as S from './MovieList.style';
import { MovieItemType } from '../../type';
import { Loading } from '@/features/Loading/Loading';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const MovieList = () => {
  const [nowShowing, setNowShowing] = useState<MovieItemType[]>([]);
  const [comingSoon, setComingSoon] = useState<MovieItemType[]>([]);
  const [isComingSoon, setIsComingSoon] = useState<boolean>(false);
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
  useEffect(() => {
    setNowShowing(update.moviePlay);
    setComingSoon(update.movieComing);
  }, [update]);
  return (
    <S.MovieList>
      <S.MovieTitle>Movie Selection</S.MovieTitle>
      <S.MovieListSpan>
        <S.MovieLink comingsoon={isComingSoon} onClick={() => setIsComingSoon(false)}>
          Phim đang chiếu
        </S.MovieLink>
        <S.MovieLink comingsoon={!isComingSoon} onClick={() => setIsComingSoon(true)}>
          Phim sắp chiếu
        </S.MovieLink>
      </S.MovieListSpan>
      <div className="container">
        {(nowShowing?.length === 0 || !nowShowing) && (comingSoon?.length === 0 || !comingSoon) ? (
          <Loading />
        ) : (
          <S.MovieListList>
            {isComingSoon ? (
              <>
                {comingSoon.slice(0, 6).map((item) => (
                  <MovieItem key={item._id} item={item} height />
                ))}
              </>
            ) : (
              <>
                {nowShowing.slice(0, 6).map((item) => (
                  <MovieItem key={item._id} item={item} height />
                ))}
              </>
            )}
          </S.MovieListList>
        )}
        <S.MovieSeeMore onClick={() => history.push('/movie')}>
          Xem Thêm
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </S.MovieSeeMore>
      </div>
    </S.MovieList>
  );
};
