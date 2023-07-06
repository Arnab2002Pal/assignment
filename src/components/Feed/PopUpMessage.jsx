import React from 'react'
import { Typography , Button } from '@mui/material'


const PopUpMessage = ({ selectedName, message, loading, onNextJoke, onClosePopup }) => 
  (
    <div className='popup'>
    <Typography variant='h4'>{selectedName}</Typography>
    <div className='popUp-Message'>
      <Typography>"{message}"</Typography>
    </div>
    <div className='btn'>
      <Button variant='contained' onClick={onNextJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Next Joke'}
      </Button>
      <Button variant='contained' onClick={onClosePopup}>
        Close
      </Button>
    </div>
  </div>
  )


export default PopUpMessage
