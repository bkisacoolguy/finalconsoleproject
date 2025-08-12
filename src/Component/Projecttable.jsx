import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { changeedit, changeform } from '../utility/projectSlice';
import { Link } from 'react-router-dom';

const Projecttable = () => {
let projectnames =useSelector((store)=>store.project.project);
let [type,settype]=useState("password");

let dispatch = useDispatch();
function setEdit(id){
  dispatch(changeedit(id));
  dispatch(changeform());
}

function showpw(){
  let val= type=="password"? "text" : "password";
  settype(val);
}

  return (
    <div>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th  className="border-b-1 border-gray-300  py-2 text-left">Project Name</th>
            <th className="border-b-1 border-gray-300  py-2 text-left">Status</th>
            <th className="border-b-1 border-gray-300  py-2 text-left">API key</th>
            <th className="border-b-1 border-gray-300  py-2 text-left">Usage</th>
            <th className="border-b-1 border-gray-300 py-2 text-left">Edit</th>
          </tr>
        </thead>
        <tbody>
           {
            projectnames.map((project)=>{
              return (
                   <tr key={project.id}>
                     <td className='py-2 border-b-1 border-gray-300'>{project.projectname}</td>
                      <td className='py-2 border-b-1 border-gray-300'>Active</td>
                       <td className='py-2 border-b-1 border-gray-300'><div className='flex space-x-1'> <input readOnly type={type} value={project.API} className='p-0 w-[100px] '/>{type=="password"? <VisibilityOffIcon onClick={showpw} sx={{cursor:'pointer'}}/>: <RemoveRedEyeIcon onClick={()=>{showpw();console.log("close clicked")}} sx={{cursor:'pointer'}}/> }</div></td>
                    <td className='py-2 border-b-1 border-gray-300'> <Link to={"/usage"} className="">Usage </Link></td>
                      <td className='py-2 border-b-1 border-gray-300'><EditIcon onClick={()=>setEdit(project.id)}/></td>
                   </tr>
             )
            })
           }
        </tbody>
      </table>
    </div>
  )
}

export default Projecttable