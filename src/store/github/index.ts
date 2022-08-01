import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CounterState, ICache } from './type';

const initialState: CounterState = {
  isLoading: false,
  cacheData: {},
  totalPage: 0,
  items: [],
  isApiLimited: false,
};

export const counterSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsApiLimited: (state, action) => {
      state.isApiLimited = action.payload;
    },
    resetCache: (state) => {
      state.cacheData = {};
    },
    addCache: (state, action: PayloadAction<ICache>) => {
      state.cacheData = { ...state.cacheData, [action.payload.keyCache]: action.payload.cacheValue };
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPage = action.payload;
    },
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
  },
});

export const {
  setIsLoading, addCache, setTotalPage, setItems,
  resetCache,
  setIsApiLimited,
} = counterSlice.actions;

export default counterSlice.reducer;
