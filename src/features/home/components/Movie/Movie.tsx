import { Loading } from '@/features/Loading/Loading';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { MovieItem, MovieItemType } from '../..';
import { getMovieList } from '../../MovieSlice';
import * as S from './Movie.style';
import qs from 'query-string';

export const Movie = () => {
  const [nowShowing, setNowShowing] = useState<MovieItemType[]>([]);
  const [comingSoon, setComingSoon] = useState<MovieItemType[]>([]);
  const [isMovie, setIsMovie] = useState<boolean>(false);
  const location = useLocation();
  const query = useMemo(() => qs.parse(location.search), [location.search]);
  const dispatch = useDispatch();
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
    if (query.tab === '1') setIsMovie(true);
  }, [query]);

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);

  useEffect(() => {
    setNowShowing(update.moviePlay);
    setComingSoon(update.movieComing);
  }, [update]);

  return (
    <S.Movie>
      <div className="container">
        <S.MovieListTitle>
          <S.MovieTitle onClick={() => setIsMovie(false)} active={!isMovie}>
            Phim đang chiếu
          </S.MovieTitle>
          <S.MovieTitle onClick={() => setIsMovie(true)} active={isMovie}>
            Phim sắp chiếu
          </S.MovieTitle>
        </S.MovieListTitle>
        {(nowShowing?.length === 0 || !nowShowing) && (comingSoon?.length === 0 || !comingSoon) ? (
          <Loading />
        ) : (
          <>
            <S.MovieList>
              {isMovie ? (
                <>
                  {comingSoon.map((item) => (
                    <MovieItem key={item._id} item={item} />
                  ))}
                </>
              ) : (
                <>
                  {nowShowing.map((item) => (
                    <MovieItem key={item._id} item={item} />
                  ))}
                </>
              )}
            </S.MovieList>
            <S.MovieContent>
              <S.MovieContentTitle>Movieer</S.MovieContentTitle>
              <S.MovieListContent>
                {isMovie ? (
                  <>
                    {comingSoon.map((item) => (
                      <S.MovieContentItem key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <span>
                          {' '}
                          <span style={{ color: '#43464b', fontWeight: 'bold' }}>
                            {item.name}
                          </span>{' '}
                          dự kiến khởi chiếu {item.dateStart}
                        </span>
                      </S.MovieContentItem>
                    ))}
                  </>
                ) : (
                  <>
                    {nowShowing.map((item) => (
                      <S.MovieContentItem key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <span>
                          <span style={{ color: '#43464b', fontWeight: 'bold' }}>{item.name}</span>{' '}
                          dự kiến khởi chiếu {item.dateStart}
                        </span>
                      </S.MovieContentItem>
                    ))}
                  </>
                )}
              </S.MovieListContent>
            </S.MovieContent>
          </>
        )}
      </div>
    </S.Movie>
  );
};
