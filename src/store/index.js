import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { loginSlice } from './loginSlice';
import { themeSlice } from './themeSlice';

export const store = configureStore({
    reducer: combineReducers({
      loggedUser:loginSlice.reducer,
      theme: themeSlice.reducer,
    }),
  });