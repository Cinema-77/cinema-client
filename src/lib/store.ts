import accountReducer from '@/features/account/accountSlice';
import movieReducer from '@/features/home/MovieSlice';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  account: accountReducer,
  movie: movieReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
