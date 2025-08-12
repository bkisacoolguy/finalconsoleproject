import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { changeedit, changeform } from '../utility/projectSlice';
import { Link } from 'react-router-dom';
import { changeopendelete, changeuserflag, deleteuser, settobedelete, settobeupdated } from '../utility/UsermanagementSlice';

const Usertable = () => {
let usernames= useSelector((store)=>store.usermanagement.userdata);
let dispatch= useDispatch();

function opendelete(){
  dispatch(changeopendelete());
}

  return (
    <div className='p-4'>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th  className="border-b-1 border-gray-300  py-2 text-left">Email</th>
            <th className="border-b-1 border-gray-300  py-2 text-left">Created at</th>
            <th className="border-b-1 border-gray-300  py-2 text-left">Role</th>
            <th className="border-b-1 border-gray-300  py-2 text-left">Edit</th>
            <th className="border-b-1 border-gray-300 py-2 text-left">Reset Password</th>
            <th  className="border-b-1 border-gray-300 py-2 text-left">delete</th>
          </tr>
        </thead>
        <tbody>
           {
            usernames.map((user)=>{
              return (
                   <tr key={user.id}>
                     <td className='py-2 border-b-1 border-gray-300'>{user.email}</td>
                      <td className='py-2 border-b-1 border-gray-300'>{user.role}</td>
                       <td className='py-2 border-b-1 border-gray-300'>{user.date}</td>
                    <td onClick={()=>{dispatch(settobeupdated(user.id)); dispatch(changeuserflag())}} className='cursor-pointer py-2 border-b-1 border-gray-300'> <EditIcon/></td>
                      <td className='py-2 border-b-1 border-gray-300'>🔄 </td>
                       <td  onClick={()=>{opendelete();  dispatch(settobedelete(user.id))}}  className='py-2 border-b-1 border-gray-300 cursor-pointer'>🗑️ Delete</td>
                   </tr>
                 
             )
            })
           }
        </tbody>
      </table>
    </div>
  )
}

export default Usertable