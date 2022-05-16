import { configureStore } from '@reduxjs/toolkit';
import calSlice from '../features/Calculator/reducers/calSlice';

export default configureStore({
  reducer: {
    cal: calSlice,
  },
});
