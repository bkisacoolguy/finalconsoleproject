import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Publicroute = ({children}) => {
  let userinfo =useSelector((store)=>store.loginSlice.user);
  let condition = ( userinfo?.jwtToken==null )
  return ( condition? children: <Navigate to="/dashboard" replace/>)
}

export default Publicroute