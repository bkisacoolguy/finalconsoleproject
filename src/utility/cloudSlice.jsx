import { createSlice } from "@reduxjs/toolkit";

  let cloudSlice= createSlice({
       name:"cloud",
       initialState:{
        cloud:null
       },
       reducers:{
        addCloud: (state,action)=>{
          state.cloud= action.payload;
        }
       }
     })


export default cloudSlice.reducer;
export const {addCloud} = cloudSlice.actions     