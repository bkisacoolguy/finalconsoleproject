import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { addlogindata } from '../utility/loginSlice';
import { useNavigate } from 'react-router-dom';
const Dropdown = () => {
   let dispatch =useDispatch();
   let navigate= useNavigate();

  function logoutme(){
    dispatch(addlogindata(null));
    navigate("/login");
  }

  return (
    <div className="absolute z-[9999] bg-white opacity-100 top-[45px] right-[5px] w-[225px] transition-all 500ms linear">
      <ul className='rounded-[5px] bg-white opacity-100 text-gray-400 text-18px w-full  border-black border-1 cursor-pointer transition-all 300ms'>
        <li className='flex px-4 py-1 gap-[20px] mb-[10px] hover:bg-gray-300 w-full '> <PermIdentityIcon/> My Account </li>
        <li className='flex px-4 py-1 gap-[20px] mb-[10px] hover:bg-gray-300 w-full'> <MonetizationOnIcon/> Unpaid Bills- 0$ </li>
        <li onClick={logoutme} className='flex px-4 py-1 gap-[20px] mb-[10px] hover:bg-gray-300 w-full'> <LogoutIcon/> LogOut </li>
      </ul>
    </div>
  )
}

export default Dropdown