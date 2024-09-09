import { createSlice } from '@reduxjs/toolkit'

const initialState = { isloggedIn: false, userInfo: null, userToken: null, error: null, success: null }

const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      login(state, action) {
         initialState.isloggedIn = true,
            initialState.userInfo = action.payload.data,
            initialState.userToken = action.payload.userToken,
            initialState.error = action.payload.error,
            initialState.success = true

      },
      logout(state) {
         state.isloggedIn = false,
            state.userInfo = null,
            state.userToken = null,
            state.error = null,
            state.success = null
         localStorage.clear();
      }
   },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer