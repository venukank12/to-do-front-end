import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user:{}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (_,action) => action.payload,
    loggedOut:()=>initialState
  },
})

export const { loggedIn,loggedOut } = authSlice.actions

export default authSlice.reducer