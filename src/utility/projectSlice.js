import { createSlice } from "@reduxjs/toolkit";

let project =createSlice({
  name:"project",
  initialState:{
    project:[],
    form:false,
    edit:null,
    steps:1,
    tourflag:true
  },
  reducers:{
    addProject: (state,action)=>{
      state.project.push(action.payload);
    },
    updateProject: (state,action)=>{
    const index = state.project.findIndex((project)=>{if(project.id==action.payload.id){return true}});
    if(index!== -1){
         state.project[index]= action.payload;
    }
    },
    changeform: (state,action)=>{
      state.form = !state.form;
    },
    changeedit: (state,action)=>{
      state.edit= action.payload;
    },
    changestep:(state,action)=>{
      state.steps= action.payload
    },
    changetourflag: (state,action)=>{
      state.tourflag= !state.tourflag;
    }
  }
});

export default project.reducer;
export const{addProject,changeform,changeedit,updateProject,changestep,changetourflag} = project.actions ;