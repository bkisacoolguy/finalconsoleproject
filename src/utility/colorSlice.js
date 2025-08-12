import { createSlice } from "@reduxjs/toolkit";

let color =createSlice({
  name:"color",
  initialState:{
    color:1
  },
  reducers:{
    addcolor: (state,action)=>{
      state.color =action.payload;
    }
  }
});

export default color.reducer;
export const{addcolor} = color.actions