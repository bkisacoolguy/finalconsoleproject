import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcolor } from '../../utility/colorSlice';
const Sideelement = ({icon:Icon,title,index,onclick}) => {
 let currcolor= useSelector((store)=>store.color.color);
  let dispatch=  useDispatch();

  function changecolor(idx){
    dispatch(addcolor(idx));
  }
  return (
    <div onClick={()=>{changecolor(index); 
      if(onclick){
        onclick();
      }
    }} className={`${title=="Billing"? "border-b-[1.5px] border-gray-300" :""} ${index==currcolor?"bg-gray-300":""} flex gap-[16px] p-4 px-1 text-gray-400  hover:bg-gray-100 transition-colors duration-100 cursor-pointer`}>
      <Icon className={`${index==currcolor?"text-blue-500":""}`}/>
      <span>{title}</span>
    </div>
  )
}

export default Sideelement