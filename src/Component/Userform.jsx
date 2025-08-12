import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adduserdata, changeuserflag, resetState, settobeupdated, updateuserrole } from '../utility/UsermanagementSlice';
import Delete from './Delete';

const Userform = () => {
  let dispatch= useDispatch();
  let updatestatus = useSelector((store)=>store.usermanagement.tobeupdated);
  let userdata = useSelector((store)=>store.usermanagement.userdata);

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  
  let userdate = useRef();  
  let userrole = useRef(); 

  const roles = [
  { value: "", label: "Select Role" },
  { value: "Admin", label: "Admin" },
  { value: "Editor", label: "Engineer" },
  { value: "Viewer", label: "Product" },
  { value: "Finance", label: "Finance" },
  { value: "Support", label: "Support" }
];

 function closeuserform(){
dispatch(changeuserflag());
dispatch(settobeupdated(null));
 }

 function adduserdataredux(){
   if(updatestatus!=null){
      let updatedone=userdata.find((user)=>user.id==updatestatus);
      let final = {...updatedone,email,role,date: userdate.current.value};
      dispatch(updateuserrole(final));
      dispatch(changeuserflag());
      dispatch(settobeupdated(null));
      return;
   }
  let userdatanew = {id: Date.now(), email,role,date: userdate.current.value};
  dispatch(adduserdata(userdatanew));
  dispatch(changeuserflag());
 }

   useEffect(() => {
  if (updatestatus != null) {
    let tobeupdate = userdata.find(user => user.id === updatestatus);
    if (tobeupdate) {
      setEmail(tobeupdate.email);
      setRole(tobeupdate.role);
    }
  } else {
    // Optionally clear fields when no update
    setEmail("");
    setRole("");
  }
}, [updatestatus, userdata]);

  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-black/30 flex justify-center items-center'>
       <form className='w-[100%] pb-[2rem] bg-white p-4' style={{ maxWidth: 400, margin: "auto", boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)' }}>
      <div className='flex justify-between'>
      <h2 className='text-lg mb-[1.5rem]'>Add New Member</h2>
      <p onClick={closeuserform} className='text-2xl'>X</p>
      </div>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter New Member's Email"
        required
        className='text-lg border-1 w-full border-gray-300'
      />
      <br/>
      <label className='text-lg'>Created On</label>
      <input ref={userdate} className="w-full" type="text" value={new Date().toLocaleDateString()} disabled />
      
       <br/>
      <label className='text-lg'>Role</label>
      <select ref={userrole} className='text-md w-full border-1 border-gray-300' value={role} onChange={(e) => setRole(e.target.value)} required>
        {
          roles.map((role,index)=>{
            return <option key={index} value={role.value}>{role.label}</option>
          })
        }
      </select>

      <div style={{ marginTop: "10px" }} className='flex gap-[1rem] w-full justify-center'>
          <Button variant='outlined' onClick={closeuserform}>Cancel</Button>
          <Button variant='outlined' onClick={adduserdataredux}>Add</Button>
      </div>
    </form>

    </div>
  )
}

export default Userform