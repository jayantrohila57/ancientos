import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { Button } from '@mui/material'

const GoBack = ({ props }) => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  return (
    <Link href={`${props}`}>
      <Button
        data-aos="zoom-in"
        data-aos-duration="600"
        sx={{
          m: 2,
          width: '100%',
          p: 1,
          mr: 1,
          color: 'text.primary',
          borderRadius: 10
        }}
      >
        Go back
      </Button>
    </Link>
  )
}

export { GoBack }
