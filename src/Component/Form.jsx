import React, { useEffect, useRef, useState } from 'react'
import Radio from './Dashboard/Radio'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, changeedit, changeform, updateProject } from '../utility/projectSlice';

const Form = () => {
  let index=1;
  let [input, setinput] =useState("");
  let editstatus= useSelector((store)=>store.project.edit);
  let projects= useSelector((store)=>store.project.project);

  let dispatch = useDispatch();
   useEffect(() => {
  if (editstatus != null) {
    const project_to_be_edited = projects.find(project => project.id === editstatus);
    if (project_to_be_edited) {
      setinput(project_to_be_edited.projectname);
    }
  }
}, [editstatus, projects]);

  function handleOverlayClick(){
    dispatch(changeform());
    dispatch(changeedit(null));
  }
  function handleform(e){
  e.stopPropagation();
  }

  function sendproject(){
 const projectToUpdate = projects.find(project => project.id == editstatus);
    if (projectToUpdate) {
      const updatedProject = { ...projectToUpdate, projectname: input };
      dispatch(updateProject(updatedProject));
      dispatch(changeedit(null));
      // dispatch(changeform());
      return; // stop here, don't add new project
    }
    let id= Date.now();
    let projectname=input;
    let API="239205aabed";
    let status="active";
    let project= {
      id,projectname,API,status
    }
    dispatch(addProject(project));
  }

  return (
   <div onClick={handleOverlayClick} className="fixed z-5 w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50 /">
    <div onClick={(e)=>handleform(e)} className='w-[700px] h-[400px] bg-white p-4 px-6 rounded-[10px]'>
        <p className='mb-[15px] text-xl text-gray-500'> Create New Project</p>
        <p className='mb-[15px] text-lg text-gray-500'>Please enter project name to create a project and start using services</p>
       <form >
        <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder='Project Name' className=' text-lg placeholder:text-black w-full border-b-1 border-black'></input>
        <p className='mb-[15px] mt-[15px] text-lg text-gray-500'>Configure the Project:</p>
        <Radio name="audio" value="true" text="Audio"/>
        <Radio name="video" value="true" text="Video"/>
        <Radio name="Screen sharing" value="true" text="Screen sharing"/>
        <Radio name="hand Raise" value="true" text="Hand Raise"/>
        <Radio name="chat" value="true" text="Chat"/>
               <div className='flex gap-[10px] relative left-[71%] mt-[1rem] '>
       <Button variant="outlined" onClick={handleOverlayClick}>
      Cancel
    </Button>
        <Button variant="outlined" disabled={input.trim()==""} onClick={()=>{sendproject();handleOverlayClick();}}>
      {editstatus!=null?"update":"Create"}
    </Button>
    </div>
       </form>
    </div>
   </div> 

  )
}

export default Form