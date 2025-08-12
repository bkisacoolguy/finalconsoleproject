import React, { useRef, useState } from 'react'
import { cloudarray } from '../utility/constant'
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCloud } from '../utility/cloudSlice'
import Cloudsave from './Cloudsave'

const Cloud = () => {
    let [flag,setflag]= useState(false)
     let dispatch= useDispatch();
     let selectref= useRef();
     let secretkeyref= useRef();
     let  accesskeyref = useRef();
       let regionref = useRef();
  let bucketref = useRef();
  let webhookref = useRef();

  function sendtocloud(){
    console.log("it is clicked")
    let cloudinfo = [selectref?.current?.value, secretkeyref?.current?.value, accesskeyref?.current?.value,      regionref?.current?.value,
      bucketref?.current?.value,
      webhookref?.current?.value ]
        dispatch(addCloud(cloudinfo));
         setflag(true)
        setTimeout(()=>{
          setflag(false)
        },2000)
  }

  return (
    <div className='w-full p-[24px] relative' >
      <div className='w-full  p-[24px] text-[#0000009E]' style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>
         <div className='text-[#0000009E] mb-[1rem]'>
         <p className='text-2xl mb-[0.5rem]'>Cloud Provider Credentials</p>
         <p className='text-md'>Please provide cloud provider credentials to upload your recordings, chat assets and transcriptions. You will be notified by an HTTP POST call when the recording or transcription or is complete. Additional metadata about the recording or transcription will be passed as a JSON payload. Optionally, you can also pass a webhook token, which we will pass back to you as a standard authorization header. Since we only support a single bucket for now, if you want logical separation while uploading assets, you can use a pathname for separation.                            </p>
        </div>
        <form>
          <label>Cloud Provider
            <br/>
          <select ref={selectref} className='w-full mt-[0.5rem]'>
             {
              cloudarray.map((val,index)=>{
                return <option key={index} >{val.name}</option>
              })
             }
          </select>
          </label>
              <TextField inputRef={secretkeyref}
      label="Secret Key"
      name="secretKey"
      variant="standard" // or "outlined" or "filled"
      margin="dense"
      fullWidth
    />
                  <TextField inputRef={accesskeyref}
      label="Access Key ID"
      name="accesskey"
      variant="standard" // or "outlined" or "filled"
      margin="dense"
      fullWidth
    />
                  <TextField inputRef={regionref}
      label="Region"
      name="region"
      variant="standard" // or "outlined" or "filled"
      margin="dense"
      fullWidth
    />
                  <TextField inputRef={bucketref}
      label="Bucket name"
      name="bucketname"
      variant="standard" // or "outlined" or "filled"
      margin="dense"
      fullWidth
    />
                  <TextField inputRef={webhookref}
      label="Webhook URL"
      name="Webhook Token"
      variant="standard" // or "outlined" or "filled"
      margin="dense"
      fullWidth
    />

<div className='mt-[1rem] flex gap-2 justify-end'>
     <Button
  variant="outlined" className="text-blue-500"
  onClick={sendtocloud}
>
  Save
</Button>
     <Button
  variant="outlined" className="text-blue-500"
>
  Verify Credentials
</Button>
</div>
        </form>
      {
        flag && <Cloudsave/>
      }
      </div>
    </div>
  )
}

export default Cloud