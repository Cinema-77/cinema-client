import { axios } from '@/lib/axios';
import {
  CinemaRespon,
  DateRespon,
  LocationRespon,
  MovieRespon,
  MoviesRespon,
  MoviesRespons,
  showTimesRespon,
  ShowTimesRespon,
} from '..';

export const getMovieDetail = (idMovie: string | string[] | null): Promise<MovieRespon> => {
  return axios.get(`/movie/${idMovie}`);
};

export const getLocations = (): Promise<LocationRespon> => {
  return axios.get('/cinema/get/locations');
};

export const movieList = (): Promise<MoviesRespon> => {
  return axios.get('/movie/get/movie-play');
};

export const getCinemaByMovie = (id: string): Promise<CinemaRespon> => {
  return axios.get(`/quick/cinema-by-movie/${id}`);
};

export const getCinemaList = (): Promise<CinemaRespon> => {
  return axios.get('/cinema/all');
};

export const getDateByCinema = (idMovie: string, cinemaId: string): Promise<DateRespon> => {
  return axios.get(`/quick/get-date-by-cinema-movie?movieId=${idMovie}&cinemaId=${cinemaId}`);
};

export const getTimeByDate = (
  idMovie: string,
  cinemaId: string,
  date: string
): Promise<showTimesRespon> => {
  return axios.get(
    `/quick/get-show-time-detail-by-cinema-movie-date?movieId=${idMovie}&cinemaId=${cinemaId}&date=${date}`
  );
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

export const getMovieByCinema = (idMovie: string): Promise<MoviesRespons> => {
  return axios.get(`/quick/get-movie-by-cinema?cinemaId=${idMovie}`);
};

export const getDateByMovie = (idMovie: string, cinemaId: string): Promise<DateRespon> => {
  return axios.get(`/quick/get-date-by-cinema-movie?movieId=${idMovie}&cinemaId=${cinemaId}`);
};
export const getTimeByDateTab2 = (
  idMovie: string,
  cinemaId: string,
  date: string
): Promise<showTimesRespon> => {
  return axios.get(
    `/quick/get-show-time-detail-by-cinema-movie-date?movieId=${idMovie}&cinemaId=${cinemaId}&date=${date}`
  );
};
export const getCinemabyDate = (date: string): Promise<CinemaRespon> => {
  return axios.get(`/quick/get-cinema-by-date?date=${date}`);
};
export const getMovieByCinemaTab1 = (cinemaId: string, date: string): Promise<MoviesRespons> => {
  return axios.get(`/quick/get-movie-by-cinema-date?cinemaId=${cinemaId}&date=${date}`);
};
export const getTimeByMovie = (
  idMovie: string,
  cinemaId: string,
  date: string
): Promise<showTimesRespon> => {
  return axios.get(
    `/quick/get-show-time-detail-by-cinema-movie-date?movieId=${idMovie}&cinemaId=${cinemaId}&date=${date}`
  );
};
