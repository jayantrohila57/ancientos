import React from 'react'
import { Box } from '@mui/material'
import data from '@/data/changeLogs.json'
import { AccordionBox, GoBack, Heading } from '@/components'

const Updates = () => {
  return (
    <>
      <Box sx={{ pt: 5, minHeight: '100vh' }}>
        <Heading pri="Changelogs" />
        <AccordionBox logs={data} />
        <GoBack props="/" />
      </Box>
    </>
  )
}

export default Updates
