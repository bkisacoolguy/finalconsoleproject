import React from 'react'

const Usagedata = ({title,data}) => {
  return (
    <div className='w-[220px] h-[159px] shrink-0 flex items-center justify-center bg-[#0A00A6]'>
       <div className='flex flex-col items-center'>
      <p className='text-white text-[35px]'> {data} </p>
      <p className='text-white text-[16px]'> {title} </p>  
       </div>  
    </div>
  )
}

export default Usagedata