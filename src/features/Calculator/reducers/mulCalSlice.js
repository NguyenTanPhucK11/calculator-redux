import { createSlice } from '@reduxjs/toolkit';

const initMulCal = [];
export const mulCalSlice = createSlice({
  name: 'mulCal',
  initialState: initMulCal,
  reducers: {
    addMulCal: (state, action) => {
      const newState = [...state];

      newState.push(action.payload);
      console.log(action.payload);
      return newState;
    },
    removeMulCal: (state, action) => {
      const newState = [...state];

      newState.splice(action.payload, 1);
      return newState;
    },
  },
});

export const { addMulCal, removeMulCal } = mulCalSlice.actions;
export default mulCalSlice.reducer;
