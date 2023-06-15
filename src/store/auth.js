import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: false
  },
  reducers: {
    setUser: (state,action) => {
        state.user = action.payload;
        

    } 
  },
})

export const { setUser } = auth.actions

export default auth.reducer