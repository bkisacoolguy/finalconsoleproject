import React from 'react'
import CreateProject from './CreateProject'
import Productusage from './Productusage'
import Footer from '../Footer'

const Dashboard = () => {
  return (
    <div className='px-6 py-6 text-black  '>
      <CreateProject/>
      <Productusage/> 
     <Footer/>
    </div>
  )
}

export default Dashboard