import { configureStore } from '@reduxjs/toolkit';
import calSlice from '../features/Calculator/reducers/calSlice';
import mulCalSlice from '../features/Calculator/reducers/mulCalSlice';

export default configureStore({
  reducer: {
    cal: calSlice,
    mulCal: mulCalSlice,
  },
});
