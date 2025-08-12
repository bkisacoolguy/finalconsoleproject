import React, { useState } from 'react'
import Sideelement from './Sideelement'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from '@mui/icons-material/Group';
import TimelineIcon from '@mui/icons-material/Timeline';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BackupIcon from '@mui/icons-material/Backup';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useDispatch } from 'react-redux';
import { addcolor } from '../../utility/colorSlice';
import { Link } from 'react-router-dom';
import { changeform, changestep, changetourflag } from '../../utility/projectSlice';
const Sidebar = () => {
   let dispatch= useDispatch()
   
  function opentour(){
        dispatch(changestep(1)); 
        dispatch(changetourflag());
  }

  return (
    <div className=" sticky top-[60px] bg-white px-4 py-4 w-[250px] h-[calc(100vh-60px)]  overflow-y-scroll">
   <Link to={"/dashboard"}> <Sideelement icon={DashboardIcon} title="Dashboard" index="1"/> </Link> 
    <Link to={"/project"}> <Sideelement icon={AccountTreeIcon} title="Project Management" index="2" /> </Link> 
 <Link to={"/user"}>      <Sideelement icon={GroupIcon} title="User Management" index="3" /></Link> 
       <Link to={"/analytic"}> <Sideelement icon={TimelineIcon} title="Analytics" index="15"/> </Link>
     <Link to={"/analytic"}>  <Sideelement icon={QueryStatsIcon} title="Viewer stats" index="4"/> </Link> 
      <Link to={"/usage"}> <Sideelement icon={EqualizerIcon} title="Usage" index="5"/></Link>
    <Link to={"/bill"}> <Sideelement icon={MonetizationOnIcon} title="Billing" index="7"/></Link>
  <Link to={"/cloud"}> <Sideelement icon={BackupIcon} title="Cloud Storage" index="8"/></Link>  
   <Sideelement onclick={opentour} icon={AccountTreeIcon} title="Project tour" index="9"/>
      <Sideelement icon={EmailIcon} title="Support Team" index="10"/>
     <a href="https://docs.sariska.io/" rel="noopener noreferrer">
<Sideelement icon={DescriptionIcon} title="Documentation" index="11"/></a>
  <a href="https://docs.sariska.io/sdk/mobile" rel="noopener noreferrer">  <Sideelement icon={CodeIcon} title="Code samples" index="12"/> </a> 
      <Sideelement icon={VideocamIcon} title="Sariska meet demo" index="13"/>
    </div>
  )
}

export default Sidebar