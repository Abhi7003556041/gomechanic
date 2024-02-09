import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    login_status: false,
    carData: null,
    car_status: false
  },
  reducers: {
    setuser(state, action) {
      state.userData = action.payload
      if(action.payload!=null){

        state.login_status = true
      }
    },
    setcar(state, action) {
      state.carData = action.payload;
      if(action.payload!=null){
      state.car_status = true
      }
    },
    logout(state, action) {
      state.userData = null
      state.carData = null
      state.login_status = false;
      state.car_status = false;

    }
  }
})
export const { setuser, logout, setcar } = UserSlice.actions;

export default UserSlice.reducer;