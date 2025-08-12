import { createSlice } from "@reduxjs/toolkit";

let loginSlice =createSlice({
  name:"logininfo",
  initialState:{
    user:null
  },
  reducers:{
    addlogindata: (state,action)=>{
      state.user =action.payload;
    }
  }
});

export default loginSlice.reducer;
export const{addlogindata} = loginSlice.actions