import React from 'react'
import Projecttourfilter from './Projecttourfilter'
import Step1 from './Step1'
import Step2 from './Step2'
import { useDispatch, useSelector } from 'react-redux'
import Step4 from './Step4'
import Step3 from './Step3'
import Step5 from './Step5'
import Step6 from './step6'
import { changetourflag } from '../utility/projectSlice'

const Projecttour = () => {
      let stepno=  useSelector((store)=>store.project.steps);
         
      const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4/>,<Step5/>,<Step6/>];
        let dispatch =useDispatch();
      function closeform(){
          dispatch(changetourflag());
      }

  return (
    <div className='fixed z-10500 top-0 left-0 w-screen h-screen bg-black/25 flex  justify-center items-center'>
      <div className='w-[75%] h-[85%] bg-white border-1 border-gray-300 overflow-y-scroll p-8 mt-[1rem]'>
         <div className='flex justify-between'>
         <p className='text-2xl'>Project Tour</p>
         <button onClick={closeform} className='text-3xl'>×</button>
         </div>
         <div className='mt-[2.5rem]'>
         <Projecttourfilter/>
         </div>
         <div>
         { 
          steps[stepno-1]
         }
         </div>
      </div>
    </div>
  )
}

export default Projecttour
