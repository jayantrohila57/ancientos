import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import { Button, Card } from '@mui/material'

const GoBack = ({ props }) => {
  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  return (
    <Card
      data-aos="zoom-in"
      data-aos-duration="600"
      sx={{
        width: 250,
        p: 1,
        mb: 1.5,
        borderRadius: 10,
        textTransform: 'capitalize'
      }}
    >
      <Link href={`${props}`}>
        <Button
          sx={{
            p: 1,
            mr: 1,
            color: 'text.primary',
            borderRadius: 10
          }}
        >
          Go back
        </Button>
      </Link>
    </Card>
  )
}

export { GoBack }
