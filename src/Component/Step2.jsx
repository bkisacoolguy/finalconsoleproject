import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changestep } from '../utility/projectSlice';

const Step2 = () => {
    let [code,setcode] = useState (1);
      let stepno=  useSelector((store)=>store.project.steps);       
    let dispatch= useDispatch();

    function stepupdateminus(step){
      dispatch(changestep(step));
    }

    function stepupdateplus(step){
      dispatch(changestep(step));
    }
  return (
    <div className=' border-1 border-black min-h-[300px]'>
      <div>
         <div className='mx-8 mt-4'>
        <p className='text-xl mb-[0.5rem]'>Initialise Sariska SDK</p>
        <p className='text-md mb-[0.5rem]'>This is the first step to use Sariska SDK. For more information, visit docs.sariska.io</p>
        <p  className='text-xl mb-[0.5rem]'>Code Sample</p>
        </div>
        <div className="m-8">
        <div className='flex gap-[1rem]  justify-evenly text-lg mb-[1rem]'>
          <button onClick={()=>setcode(1)} className={`hover:text-[rgb(113,142,255)]  ${code==1? "text-[rgb(150,142,255)]" : ""} cursor-pointer`}> Web</button>
          <button onClick={()=>setcode(2)}  className={`hover:text-[rgb(113,142,255)]  ${code==2? "text-[rgb(150,142,255)]" : ""} cursor-pointer`}> Android</button>
          <button onClick={()=>setcode(3)}   className={`hover:text-[rgb(113,142,255)]  ${code==3? "text-[rgb(150,142,255)]" : ""} cursor-pointer`}> iOS</button>
          <button onClick={()=>setcode(4)}   className={`hover:text-[rgb(113,142,255)]  ${code==4? "text-[rgb(150,142,255)]" : ""} cursor-pointer`}> React Native</button>
          <button onClick={()=>setcode(5)}   className={`hover:text-[rgb(113,142,255)]  ${code==5? "text-[rgb(150,142,255)]" : ""} cursor-pointer`}> Flutter</button>
        </div>
        <div className='bg-[rgb(113,142,255)] p-4'>
        { code==1 && <pre>
  <code>
    {`import SariskaMediaTransport from "sariska-media-transport";

SariskaMediaTransport.initialize();`}
  </code>
</pre>}
        { code==1 && <pre>
  <code>
    {`import SariskaMediaTransport from "sariska-media-transport";

SariskaMediaTransport.initialize();`}
  </code>
</pre>}
        { code==2 && <pre><code>{
`import io.sariska.sdk.SariskaMediaTransport;

SariskaMediaTransport.initialize()`}

</code></pre>}
        { code==3 && <pre>
          <code>
{`import sariska

SariskaMediaTransport.initialize()`}
</code></pre>}
        { code==4 && <pre>
          <code>
{`import sariska

SariskaMediaTransport.initialize()`}
</code></pre>}
        { code==5 && <pre>
          <code>
{`import sariska

SariskaMediaTransport.initialize()`}
</code></pre>}
        </div>
           <div className='flex gap-[1rem] mt-[1rem] justify-center'>
      <button disabled={stepno==1} onClick={()=>stepupdateminus(1)} className={`border-1 py-1 px-4 ${
    stepno === 1
      ? 'border-gray-400 text-gray-400 cursor-not-allowed'
      : 'border-black text-black'
  }`}
 >Back</button>
      <button disabled={stepno==5} onClick={()=>stepupdateplus(3)} className={`border-1 py-1 px-4 text-blue-500 border-blue-300 ${
    stepno === 5
      ? 'border-gray-400 text-gray-400 cursor-not-allowed'
      : 'border-black text-black'
  }`}>Next</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Step2