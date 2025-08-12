import { Button } from '@mui/material'
import React from 'react'
import Userform from './Userform'
import { useDispatch, useSelector } from 'react-redux'
import { changeform } from '../utility/projectSlice'
import { changeuserflag } from '../utility/UsermanagementSlice'
import Usertable from './Usertable'
import Delete from './Delete'
import Footer from './Footer'

const Usermanagement = () => {
  let dispatch= useDispatch();
  let userstatus = useSelector((store)=>store.usermanagement.userflag);
 let usernames= useSelector((store)=>store.usermanagement.userdata);
  let deletestatus = useSelector((store)=>store.usermanagement.opendelete);
  function adduser(){
      dispatch(changeuserflag());
  }

  return (
    <div className='text-[#0000009E] p-4'>
      <div className='p-4 min-h-[80%]'  style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>
        <div className='flex justify-between mt-[1rem]  pr-[1rem]'>
        <p className='text-lg'>User & Role</p>
        <div className='flex gap-[0.5rem]'>
        <Button variant='outlined'>Manage User</Button>
        <Button variant='outlined'>Manage Role</Button>
        </div>
          </div>
        <div className='flex justify-between mt-[1rem] pr-[1rem]'>
        <p>User management</p>
        <Button onClick={adduser} variant='outlined' className='mr-[10rem]'>Add Member</Button>
        </div>
        <div className='mt-[1rem]'>
          <p className='text-md'>Team members and their access in your account are mentioned over here. While adding a new team members, feel free to set their roles specifying feature access alloted to them. This will lead to an email invitation to the new member to set one's password. You are allowed to add a maximum of 10 members per account.</p>
        </div>
        {
          usernames.length!=0 && <Usertable/>
        }
        { userstatus && <Userform/>}
        {deletestatus && <Delete/>}
    </div>
    <Footer/>
    </div>
  )
}

export default Usermanagement
