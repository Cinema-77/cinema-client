import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { movieList } from '.';
const initialState = {
  list: {},
};

export const getMovieList = createAsyncThunk('getMovieList', async (data, thunkAPI) => {
  try {
    const res = await movieList();
    return res.values;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
const movie = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieList.fulfilled as any]: (state, action) => {
      state.list = action.payload;
    },
  },
});

const movieReducer = movie.reducer;

// export const {} = account.actions;

export default movieReducer;
