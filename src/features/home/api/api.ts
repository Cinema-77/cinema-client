import { axios } from '@/lib/axios';
import { LocationRespon, MovieRespon, ShowTimesRespon } from '..';

export const getMovieDetail = (idMovie: string | string[] | null): Promise<MovieRespon> => {
  return axios.get(`/movie/${idMovie}`);
};

export const getLocations = (): Promise<LocationRespon> => {
  return axios.get('/cinema/get/locations');
};

export const getListShowTime = (
  date: string,
  id: string | null | string[],
  screen: string,
  city: string
): Promise<ShowTimesRespon> => {
  return axios.get(
    `/showTime/get-list-showtime-full?date=${date}&movieId=${id}&screenId=${screen}&location=${city}`
  );
};
