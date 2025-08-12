import React from 'react'
import { TextField, Button, Typography } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PaymentForm from './Sidebar/Paymentform';
const Billing = () => {
  return (
    <div className=' m-[24px] ' style={{ boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)'}}>
      <div className='w-full p-[24px] text-[#0000009E]'>
        <div className='flex justify-between mb-[2rem]'>
      <p className='text-2xl'> Billing </p>
      <div className='flex gap-[8px]'>
      <button className='hover:text-blue-300'>Pay</button>
       <button className='hover:text-blue-300'>Get Bills</button>
       <button className='hover:text-blue-300'>Transactions</button>
       </div>
      </div>
      <div className='flex gap-[15rem]'>
      <div className=''>
      <div className='mb-[1.5rem]'>
      <span className='text-xl'>Unpaid balance: <span>₹ 0</span></span>
      </div>
      <div className='flex gap-[15px] mb-[15px]'>

       <label className='bg-gray-300 p-2'>Currency <br/>
      <select className='w-[60px]'>
        <option>₹</option>
        <option>$</option>
      </select>
      </label> 

      <label className='bg-gray-100 p-2'>
      Enter the amount:<br></br><input type="text" className='border-b-1 border-black'/>
      </label>

      </div>

      <button className='w-full hover:bg-blue-300 p-2 text-blue-400 border-1 border-gray-300 rounded-[10px]' >Continue</button>  
      </div>
      <PaymentForm className=""/>

      </div>
      <p className='mt-[1.5rem]'>
        Payment Instructions
      </p>
      <ul className='list-disc p-[24px] '>
        <li>Please input a value equal to or greater than 1.00.</li>
        <li>Currency: USD & INR only.</li>
        <li>After Clicking Continue button, you can enter the required details to make a payment.</li>
        <li>Payments By Card: Visa, MasterCard, RuPay, and Maestro.</li>
      </ul>

      </div>
      </div>
  )
}

export default Billing