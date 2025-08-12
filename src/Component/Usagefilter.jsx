import { MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Usagefilter = () => {
  let projectnames =useSelector((store)=>store.project.project);
   const [project, setProject] = useState('all');
   const today = new Date().toISOString().split("T")[0];

   const oneDayBefore = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

     const sevenDayBefore = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

  const thirtyDayBefore = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

  const firstDayCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 2)
  .toISOString()
  .split("T")[0];

  const tillnow = new Date(1970, new Date().getMonth(), 1)
  .toISOString()
  .split("T")[0];

  const [selectedDate, setSelectedDate] = useState(oneDayBefore);
  const [endDate, setendDate]=useState(today);

  let [current,setcurrent]= useState(oneDayBefore);

  return (
    <div>
      <div className='w-full h-[100px] flex px-4  items-center gap-2.5' style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>
                <Select value={project} onChange={(e)=>{setProject(e.target.value)}}>
                  <MenuItem value="all">All Project</MenuItem>
                   {
                    projectnames.map((project)=>{
                      return <MenuItem value={project.projectname}>{project.projectname}</MenuItem>
                    })
                   }
                </Select>
                   <div>
              <TextField
            label="Start Date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            InputLabelProps={{
              shrink: true, // ensures label doesn't overlap with the value
            }}
          />
              <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setendDate(e.target.value)}
            InputLabelProps={{
              shrink: true, // ensures label doesn't overlap with the value
            }}
          />
          </div>
      
           <div>
            <ul className='flex gap-[10px] ml-[10px]'>
              <li className={`${selectedDate==oneDayBefore?"text-blue-400": ""} cursor-pointer`} onClick={()=>{
                setSelectedDate(oneDayBefore);
                setcurrent(oneDayBefore);
              }}> Last 24 hours</li>
      
               <li className={`${selectedDate==sevenDayBefore?"text-blue-400": ""} cursor-pointer`} onClick={()=>{
                setSelectedDate(sevenDayBefore);
                setcurrent(sevenDayBefore);
              }}>Last 7 Days</li>
      
                       <li className={`${selectedDate==thirtyDayBefore?"text-blue-400": ""} cursor-pointer`} onClick={()=>{
                setSelectedDate(thirtyDayBefore);
              }}>Last 30 Days</li>
              <li className={`${selectedDate==firstDayCurrentMonth?"text-blue-400": ""} cursor-pointer`} onClick={()=>{
                setSelectedDate(firstDayCurrentMonth);
              }}>Current Month</li>
              <li className={`${selectedDate==tillnow?"text-blue-400": ""}`} onClick={()=>{
                setSelectedDate(tillnow);
              }}>Till Now</li>
            </ul>
           </div>
            </div>
            
    </div>
  )
}

export default Usagefilter