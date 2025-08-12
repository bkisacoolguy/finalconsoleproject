import { Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-gray-100 justify-between w-full px-4 mt-4 pt-5 pb-10 border-1 border-black'>
      <div className=''>
            <Typography variant="body1" sx={{fontWeight: "800"}}> SARISKA</Typography>
            <Typography variant="body1" style={{ color: "rgb(128, 142, 159)", fontSize: "0.9rem"}}> Made in India</Typography>
            <Typography  variant="body1" style={{ color: "rgb(187, 187, 187)", fontSize: "0.9rem" }}> © Baselayer Technologies Pvt Ltd. 2025</Typography>
      </div>
        <div className='grid gap-1.5'>
  <Link href="https://www.sariska.io/contact-us" target="_blank" rel="noreferrer" underline="hover"   sx={{ color: 'rgb(128,142,159)' }} >
  Contact us
</Link>
  <Link href="https://www.sariska.io/contact-us" target="_blank" rel="noreferrer" underline="hover"   sx={{ color: 'rgb(128,142,159)' }} >
  Pricing
</Link>
  <Link href="https://www.sariska.io/contact-us" target="_blank" rel="noreferrer" underline="hover"   sx={{ color: 'rgb(128,142,159)' }} >
  Refund and Cancellation Policy
</Link>
      </div>

<div className='flex flex-col gap-1.5'>
  <Link href="https://www.sariska.io/contact-us" target="_blank" rel="noreferrer" underline="hover"   sx={{ color: 'rgb(128,142,159)' }} >
  Privacy Policy
</Link>
  <Link href="https://www.sariska.io/contact-us" target="_blank" rel="noreferrer" underline="hover"   sx={{ color: 'rgb(128,142,159)' }} >
 Terms of Service
</Link>
</div>
</div>

  )
}

export default Footer