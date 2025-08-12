import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeopendelete, deleteuser, settobedelete } from '../utility/UsermanagementSlice';

const Delete = () => {

 let dispatch = useDispatch();
  let id= useSelector((store)=>store.usermanagement.tobedelete);

  function cancelit(){
  dispatch(changeopendelete());
  }
  
  function deleteit(){
    dispatch(deleteuser(id));
    dispatch(settobedelete(null)); // clear the to-be-deleted id
    dispatch(changeopendelete()); 
  }

  return (
    <div className='fixed z-15000 w-screen h-screen top-0 left-0 bg-black/30 flex justify-center items-center' onClick={cancelit}>
    <div className='w-1/2 border-1 p-4 bg-white border-black' onClick={(e)=>e.stopPropagation()}>
     <p className='text-2xl font-bold'>Delete Member</p>
     <p> Here, You can delete this member.</p>   
     <p> Click Delete to confirm the deletion of this member ?</p>
     <div className='flex gap-[1rem] mt-[1rem] justify-center'>
     <Button variant='outlined' onClick={cancelit}>Cancel</Button>
     <Button variant='outlined' onClick={deleteit}>Delete</Button>
     </div>
     </div>
    </div>
  )
}

export default Delete