import React from 'react';
import { Slider } from '@/components/Elements';
import { MovieList } from '@/components/Elements';
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <Slider />
      <MovieList />
    </main>
  );
};
