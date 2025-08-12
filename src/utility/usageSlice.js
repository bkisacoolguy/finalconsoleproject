import { createSlice } from "@reduxjs/toolkit";

let usage =createSlice({
  name:"usage",
  initialState:{
     media:"Media",
  },
  reducers:{
    changemedia: (state,action)=>{
      state.media=action.payload;
    },
  }
});

export default usage.reducer;
export const{changemedia} = usage.actions;