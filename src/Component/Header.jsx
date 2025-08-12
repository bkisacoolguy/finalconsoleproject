import React, { useState } from 'react'
import { IconButton, Badge } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // three dots
import NotificationsIcon from '@mui/icons-material/Notifications'; // notification bell
import Avatar from '@mui/material/Avatar'; // circular profile image
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Dropdown from './Dropdown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Header = () => {
   let [drop,setdrop] =useState(false);

  function opendropdown(){
   setdrop(!drop);
  }

  return (
    <div className='bg-[#17191D]  z-[10000] text-white fixed top-0 w-full'>
      <div className='flex items-center justify-between h-[60px] px-[2rem] font-sans'>
        <div>
         <Typography
  variant="h6"
  component="p"
  className="!text-[19px] !font-bold"
>
  SARISKA
</Typography>
        </div>
        <div className='flex gap-[10px] items-center'>
         <span>
                <IconButton color="inherit">
        <Badge badgeContent={3} classes={{badge: 'bg-red-400 text-black'}}>
          <NotificationsIcon sx={{width:20}}/>
        </Badge>
      </IconButton>
         </span>
         <span> <IconButton color="inherit">
        <MoreVertIcon />
      </IconButton></span>
         <span>      <AccountCircleIcon
        alt="User Name"
        src="https://via.placeholder.com/40"
        sx={{cursor: "pointer", width:24, height:24}}
      /></span>
      <div className='flex ml-[10px] relative'>
      <Typography variant="h6" className='!text-[16px]'>Hi, Balkrishna</Typography>
      {!drop && <KeyboardArrowDownIcon onClick={opendropdown}/>}
      {drop && <KeyboardArrowUpIcon onClick={opendropdown}/>}
      {
        drop && <Dropdown/>
      }
      </div>
        </div>
      </div>
    </div>
  )
}

export default Header