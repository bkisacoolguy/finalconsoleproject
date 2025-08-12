import React from 'react'
import Footer from './Footer'
import Delete from './Delete'
import { useSelector } from 'react-redux';

const Blank = () => {
  return (
    <div className='m-[24px]'>
    <div className='w-[100%] h-screen p-[24px]' style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>

    </div>
    <Footer/>
    </div>
  )
}

export default Blank