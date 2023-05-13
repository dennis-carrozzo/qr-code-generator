import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

/**
 * The QrCodeGenerator function is a React component that generates a QR code based on user input.
 */
const QrCodeGenerator = () => {
  const [image, setImage] = useState()
  const [inputValue, setInputValue] = useState('')
  const clickHandler = () => {
    if (inputValue) {
      setImage(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
      )
    }
  }
  const handleChange = e => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  return (
    <Grid
      container
      direction='column'
      spacing={2}
      maxWidth='sm'
      justifyContent='center'
      alignItems='center'
    >
      {image && (
        <Grid item>
          <img src={image} alt='qr-code' />
        </Grid>
      )}
      <Grid item>
        <TextField
          value={inputValue}
          onChange={handleChange}
          id='outlined-basic'
          label='Data'
          variant='outlined'
        />
      </Grid>
      <Grid item>
        <Button variant='contained' onClick={clickHandler}>
          Create Qr
        </Button>
      </Grid>
    </Grid>
  )
}

export default QrCodeGenerator
