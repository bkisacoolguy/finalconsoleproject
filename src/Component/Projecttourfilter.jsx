import React from 'react'
import { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';

const steps = [
  'Select Project',
  'Initialize SDK',
  'Create Connection',
  'Set Local View',
  'Create Conference',
  'Leave Conference',
];

const Projecttourfilter = () => {
   const stepno = useSelector((state) => state.project.steps);
  return (
    <div>
      <Box sx={{ width: '100%', p: 2, color:"red" }}>
      <Stepper alternativeLabel activeStep={stepno - 1} // Stepper is 0-indexed, so subtract 1
          sx={{
            '& .MuiStepLabel-label.Mui-completed': { color: 'purple' }, // completed steps
            '& .MuiStepLabel-label.Mui-active': { color: 'red', fontWeight: 'bold' }, // active step
          }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Box>
    </div>
  )
}

export default Projecttourfilter