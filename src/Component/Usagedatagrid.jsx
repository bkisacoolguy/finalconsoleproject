import React from 'react'
import Usagedata from './Usagedata'

const Usagedatagrid = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-[1rem] p-[24px] mt-[24px]" style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>
  <Usagedata title="Video Session" data="0" />
  <Usagedata title="Video Session" data="0" />
  <Usagedata title="Video Session" data="0" />
    <Usagedata title="Video Session" data="0"/>
    <Usagedata title="Video Session" data="0" />
  </div>
  )
}

export default Usagedatagrid