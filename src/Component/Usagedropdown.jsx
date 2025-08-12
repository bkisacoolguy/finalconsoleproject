import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useDispatch, useSelector } from 'react-redux';
import { changemedia } from '../utility/usageSlice';
const Usagedropdown = () => {
 let currentvalue=  useSelector((store)=>store.usage.media);
  let dispatch= useDispatch()
 function changecurrnet(curr){
   dispatch(changemedia(curr));
 }
  return (
    <div className='w-[280px] self-start bg-white mt-[24px]'style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>
      <ul className="w-full cursor-pointer"> 
        <li onClick={()=>{changecurrnet("Media")}} className={` cursor-pointer flex gap-[10px] ${currentvalue=="Media"?"bg-blue-400": ""} p-2 border-b-1 border-gray-300 hover:bg-blue-300 transition-colors duration-200`}><CameraAltIcon/> Media</li>
        <li  onClick={()=>{changecurrnet("Live")}} className={`flex gap-[10px] ${currentvalue=="Live"?"bg-blue-400": ""} p-2 border-b-1 border-gray-300 hover:bg-blue-300 transition-colors duration-200`}> <CameraAltIcon/>Livestreaming</li>
        <li  onClick={()=>{changecurrnet("Recording")}} className={`flex gap-[10px] ${currentvalue=="Recording"?"bg-blue-400": ""} p-2 border-b-1 border-gray-300 hover:bg-blue-300 transition-colors duration-200`}> <CameraAltIcon/>Cloud Recording</li>
        <li onClick={()=>{changecurrnet("Cobrowse")}}  className={`flex gap-[10px] ${currentvalue=="Cobrowse"?"bg-blue-400": ""} p-2 border-b-1 border-gray-300 hover:bg-blue-300 transition-colors duration-200`}> <CameraAltIcon/>Co-browsing</li>
        <li  onClick={()=>{changecurrnet("Message")}} className={`flex gap-[10px] ${currentvalue=="Message"?"bg-blue-400": ""} p-2 border-b-1 border-gray-300 hover:bg-blue-300 transition-colors duration-200`}> <CameraAltIcon/>Messaging</li>
      </ul>
    </div>
  )
}

export default Usagedropdown
