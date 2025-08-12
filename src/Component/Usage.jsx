import { MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Usagefilter from './Usagefilter';
import Usagedropdown from './Usagedropdown';
import Usagedatagrid from './Usagedatagrid';
import MyChart from '../graph';

const Usage = () => {

  return (
    <div className='p-[20px] bg-[#fafafa]'>
      <Usagefilter/>
      <div className='flex gap-[1rem]'>
      <Usagedropdown/>
      <div className='flex flex-col'>
      <Usagedatagrid/>
      <div className='flex gap-[1rem]'>
      <MyChart/>
      <MyChart/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Usage
