import React from 'react'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Form from '../Form';
import { useDispatch, useSelector } from 'react-redux';
import { changeform } from '../../utility/projectSlice';
import Projecttable from '../Projecttable';

const CreateProject = () => {
  let formstatus= useSelector((store)=>store.project.form);
  let projectnames =useSelector((store)=>store.project.project);
  
  let dispatch = useDispatch();

  function openform(){
    dispatch(changeform());
  }

  return (
    <div style={{ boxShadow: '0 0 10px 2px rgba(0,0,0,0.3)', zIndex: 1, position: 'relative'}} className=' z-1 w-full p-[24px] mb-[24px] min-h-[135px] shadow-lg  pb-[3rem]'>
      <p className='text-gray-500'>{projectnames.length==0?"Create your First Project": "Recent Projects"}</p>
     { projectnames.length!=0 && <Projecttable/>
}
      <Button onClick={openform} variant="outlined"   sx={{ textTransform: 'none', color: "#718EFF", position:"absolute", bottom:"5px", right:"15px"}}>
  Create New Project
</Button>
  {
    formstatus && <Form/>
  }
    </div>
  )
}

export default CreateProject