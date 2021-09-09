import React from 'react';
import { Event, Slider, MovieList } from '@/features/home';
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <Slider />
      <MovieList />
      <Event />
    </main>
  );
};
