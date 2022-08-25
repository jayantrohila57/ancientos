import React from 'react'
import { Box } from '@mui/material'
import Heading from '../../components/heading/Heading'
import GoBack from '../../components/goBack/GoBack'
import AccordionBox from '../../components/accordionBox/AccordionBox'
import data from '@/data/changeLogs.json'

const Updates = () => {
  return (
    <>
      <Box sx={{ pt: 5, minHeight: '100vh' }}>
        <Heading pri="Change Logs" sub="These are all Builds versions" />
        <AccordionBox logs={data} />
        <GoBack props="/" />
      </Box>
    </>
  )
}

export default Updates
