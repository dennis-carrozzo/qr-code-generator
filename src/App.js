import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import QrCodeGenerator from './components/QrCodeGenerator'
function App () {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ height: '100vh' }}
    >
      <Typography variant='h2' component='h1' sx={{ marginBottom: '3rem' }}>
        Qr Code Generator
      </Typography>
      <QrCodeGenerator />
    </Grid>
  )
}

export default App
