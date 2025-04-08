import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './project/projectSlice';

const store = configureStore({
  reducer: projectReducer,
});

export default store;
