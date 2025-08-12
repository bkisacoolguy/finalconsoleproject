import { createSlice } from "@reduxjs/toolkit";

let usermanagementSlice =createSlice({
  name:"usermanagement",
  initialState:{
     userflag:false,
     userdata:[],
     tobedelete:null,
     tobeupdated:null,
     opendelete:false,
  },
  reducers:{
    changeuserflag: (state,action)=>{
      state.userflag= !state.userflag;
    },adduserdata: (state,action)=>{
      state.userdata.push(action.payload);
    }, resetState: () => initialState,
    deleteuser:(state,action)=>{
   state.userdata=  state.userdata.filter((user)=>user.id!==action.payload);
    },settobedelete: (state,action)=>{
      state.tobedelete=action.payload;
    },settobeupdated: (state,action)=>{
      state.tobeupdated=action.payload;
    },changeopendelete:(state,action)=>{
       state.opendelete= !state.opendelete;
    },updateuserrole:(state,action)=>{
   let update=  state.userdata.findIndex((user)=>user.id==action.payload.id);
   if(update!= -1){
    state.userdata[update]={...state.userdata[update],email: action.payload.email, role: action.payload.role};
   }
    }
  }
});

export default usermanagementSlice.reducer;
export const{updateuserrole,changeuserflag,adduserdata,resetState,settobedelete,settobeupdated,deleteuser,changeopendelete} = usermanagementSlice.actions;