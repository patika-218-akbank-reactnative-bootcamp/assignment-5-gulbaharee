import {createSlice} from '@reduxjs/toolkit';

 export const loginSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    loggedUserInfo:{},
  },
  reducers: {
    setLoginUser: (state,action) => {
      const {loggedUser} =action.payload;
      return {
        loggedUserInfo: loggedUser,
      };
    },
  },
});

export const {setLoginUser} = loginSlice.actions;