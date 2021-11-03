import React, { useEffect, useState } from 'react';
import { MovieItem } from '@/features/home';
import * as S from './MovieList.style';
import { axios } from '@/lib/axios';
import { MovieItemType } from '../../type';
import { Loading } from '@/features/Loading/Loading';

export const MovieList = () => {
  const [nowShowing, setNowShowing] = useState<MovieItemType[]>([]);
  const [comingSoon, setComingSoon] = useState<MovieItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/movie/all')
      .then((res: any) => {
        setNowShowing(res.values.movies);
        setComingSoon(res.values.movies);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const [isComingSoon, setIsComingSoon] = useState<boolean>(false);
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
        {isLoading && <Loading />}
        {!isLoading && !isComingSoon ? (
          <MovieItem list={nowShowing} />
        ) : (
          <MovieItem list={comingSoon} />
        )}
      </div>
    </S.MovieList>
  );
};
