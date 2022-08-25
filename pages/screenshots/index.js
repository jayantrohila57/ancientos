import React from 'react'
import { Box } from '@mui/material'
import { Heading, ImageMasonry, GoBack, LinkHeading } from '@/components'
import data from '@/data/screenshots.json'

const Screenshots = () => {
  const donateScreenshot = {
    primary: 'Donate Screenshot',
    secondary: "Let's Share what we discover",
    link: '/screenshots/donate-screenshot'
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 5
      }}
    >
      <Heading pri="Screenshot" sub="A look at the AncientOS" />

      <ImageMasonry props={data} />
      <LinkHeading props={donateScreenshot} />

      <GoBack props="/" />
    </Box>
  )
}

export default Screenshots
