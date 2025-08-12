import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Dashboard from './Component/Dashboard/Dashboard'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Projecttour from './Component/Projecttour'

function App() {
  const [count, setCount] = useState(0);
  
  let tourflag= useSelector((store)=>store.project.tourflag);

  return (
     <div>
      <Header/>
      <div className='grid grid-cols-[250px_1fr] w-full mt-[60px]'>
      <Sidebar/>
      <Outlet/>
      </div>
      {
        tourflag && <Projecttour/>
      }
     </div>
  )
}

export default App
