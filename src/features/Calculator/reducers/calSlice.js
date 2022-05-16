import { createSlice } from '@reduxjs/toolkit';

export const calSlice = createSlice({
  name: 'calculator',
  initialState: 0,
  reducers: {
    sum: (state, action) => {
      state += action.payload;
      return state;
    },
  },
});

export const { sum } = calSlice.actions;
export default calSlice.reducer;
