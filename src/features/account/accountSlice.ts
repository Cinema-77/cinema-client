import { getListCoupon, getInfoUser } from './api/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  couponList: [],
  user: {},
};

export const getCouponList = createAsyncThunk('addCouponList', async (data, thunkAPI) => {
  try {
    const res = await getListCoupon();
    return res.values.gifts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getUserInfo = createAsyncThunk('addUserInfo', async (data, thunkAPI) => {
  try {
    const res = await getInfoUser();
    return res.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const account = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: {
    [getCouponList.fulfilled as any]: (state, action) => {
      state.couponList = action.payload;
    },
    [getUserInfo.fulfilled as any]: (state, action) => {
      state.user = action.payload;
    },
  },
});

const accountReducer = account.reducer;

// export const {} = account.actions;

export default accountReducer;
