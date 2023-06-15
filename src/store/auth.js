import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem("userAuth")) || false,
  },
  reducers: {
    setUser: (state,action) => {
        if (action.payload) {
            localStorage.setItem("userAuth" , JSON.stringify(action.payload))
        } else {
            localStorage.removeItem("userAuth")
        }
        state.user = action.payload;
        

    } 
  },
})

export const { setUser } = auth.actions

export default auth.reducer