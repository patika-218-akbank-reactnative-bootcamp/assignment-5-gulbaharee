import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { loginSlice } from './loginSlice';

export const store = configureStore({
    reducer: combineReducers({
      users: userSlice.reducer,
      movies: movieSlice.reducer,
      theme: themeSlice.reducer,
      filter: filterSlice.reducer,
      moviesSearch: searchSlice.reducer,
      loggedUser:loginUserSlice.reducer,
      genres:genresSlice.reducer,
    }),
  });