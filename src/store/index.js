import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { loginSlice } from './loginSlice';

export const store = configureStore({
    reducer: combineReducers({
      loggedUser:loginSlice.reducer,
    }),
  });