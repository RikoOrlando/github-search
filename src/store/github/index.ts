import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  isLoading: boolean
}

const initialState: CounterState = {
  value: 0,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment, decrement, incrementByAmount, setIsLoading,
} = counterSlice.actions;

export default counterSlice.reducer;
