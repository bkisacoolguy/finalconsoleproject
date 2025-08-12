import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changestep } from '../utility/projectSlice';

const Step1 = () => {
          let projectdetail=  useSelector((store)=>store.project.project);
    let stepno=  useSelector((store)=>store.project.steps);       
    let dispatch= useDispatch();

    function stepupdateminus(step){
      dispatch(changestep(step));
    }

    function stepupdateplus(step){
      
      dispatch(changestep(step));
    }
     
  return (
    <div className=' border-1 border-black min-h-[300px] flex items-center justify-center'>
      <div>
      <p className='text-2xl mb-[1rem] text-center'>Welcome to Sariska</p>
      <p className='mb-[0.5rem]'>In a few steps, enjoy the best quality for video/voice call or interactive broadcasting.</p>
      <div>
        <label> Select your project <br className='mb-[0.25rem]'/>
      <select className="w-[700px] border-2 border-black">
        {
          projectdetail.map((project,index)=>{
          return  <option key={index}>
              {project.projectname}
            </option>
          })
        }
      </select>
      </label>
      </div>
      <div className='flex gap-[1rem] mt-[1rem] justify-center'>
      <button disabled={stepno==1} onClick={()=>stepupdateminus(1)} className={`border-1 py-1 px-4 ${
    stepno === 1
      ? 'border-gray-400 text-gray-400 cursor-not-allowed'
      : 'border-black text-black'
  }`}
 >Back</button>
      <button disabled={stepno==5} onClick={()=>stepupdateplus(2)} className={`border-1 py-1 px-4 text-blue-500 border-blue-300${
    stepno === 5
      ? 'border-gray-400 text-gray-400 cursor-not-allowed'
      : 'border-black text-black'
  }`}>Next</button>
      </div>
      </div>
    </div>
  )
}

export default Step1