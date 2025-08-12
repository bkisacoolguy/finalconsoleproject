import React from 'react'
import Form from '../Form';
import { useDispatch, useSelector } from 'react-redux';
import { changeform } from '../../utility/projectSlice';
import Projecttable from '../Projecttable';
import Button from '@mui/material/Button';
import Footer from '../Footer';
const Projectmanagement = () => {
 let formstatus= useSelector((store)=>store.project.form);
  let projectnames =useSelector((store)=>store.project.project);
  
  let dispatch = useDispatch();

  function openform(){
    dispatch(changeform());
  }

  return (
    <div>
    <div  className='relative w-full px-6 py-6 mb-[24px] min-h-[calc(100vh-60px)] pb-[3rem]'>
  <div className='w-full  p-[24px]' style={{ boxShadow: '0 0 10px 2px rgba(0,0,0,0.3)'}}>
      <p className='text-gray-500 mb-[1rem]'>Project Mangement</p>
      <Button onClick={openform} variant="outlined"   sx={{ textTransform: 'none', color: "#718EFF", position:"absolute", top:"30px", right:"30px"}}>
  Create New Project
</Button>
     { projectnames.length!=0 && <Projecttable/>
}
</div>
  {
    formstatus && <Form/>
  }
    </div>
    <div className='w-full px-[24px]'>
      <Footer/>
    </div>
    </div>
  )
}

export default Projectmanagement




