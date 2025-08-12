import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
const Privateroute = ({children}) => {

    let userinfo =useSelector((store)=>store.loginSlice.user);
  let condition = ( userinfo?.jwtToken==null || userinfo?.jwtToken==undefined )
  return ( condition? <Navigate to="/login" replace/>:  children);
}

export default Privateroute