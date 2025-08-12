import React from 'react'

const Radio = ({name,value,text}) => {
  return (
    <div className='flex justify-between text-[18px]'>
      <div>
      <label className=''>
        {text}
      </label>
      </div>
      <div className='flex gap-[1rem]'>
       <label>
        <input type="radio" name={name} value={value}/> true
        </label>
        <label>
        <input type="radio" name={name} value={!value} defaultChecked/> false
        </label>
       </div> 
        </div>
  )
}

export default Radio