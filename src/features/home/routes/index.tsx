import React, { useEffect } from 'react';
import { Event, Slider, MovieList } from '@/features/home';
import { useDispatch } from 'react-redux';
import { getMovieList } from '../MovieSlice';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch]);
  return (
    <main>
      <Slider />
      <MovieList />
      <Event />
    </main>
  );
};
