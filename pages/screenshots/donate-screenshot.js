import React from 'react'
import { Box } from '@mui/material'
import { GoBack, Heading } from '@/components'

const DonateScreenshot = () => {
  return (
    <Box sx={{ pt: 5, minHeight: '100vh' }}>
      <Heading pri="Donate Screenshot" sub="Let's Share What we discover" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Screenshot donation form will be opened soon...
      </Box>
      <GoBack props="/Screenshot" />
    </Box>
  )
}

export default DonateScreenshot
