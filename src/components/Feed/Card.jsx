import React from 'react'
import { Typography } from '@mui/material'


const Card = ({name , onClick}) => 
   (
    <div className='card' onClick={onClick}>
    <Typography variant='h4'>{name}</Typography>
    <Typography>Click to see more</Typography>
  </div>

  )


export default Card
