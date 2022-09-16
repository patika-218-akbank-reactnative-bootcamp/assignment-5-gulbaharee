import {createSlice} from '@reduxjs/toolkit';

 export const loginSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    loggedUserInfo:false,
  },
  reducers: {
    setLoginUser: state => {
      return {
        loggedUserInfo: true,
      };
    },
  },
});

export const {setLoginUser} = loginSlice.actions;