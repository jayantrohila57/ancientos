import React from 'react'
import { Paper, Box, Card } from '@mui/material'

const Comp1 = () => {
  return (
    <Box>
      <Card
        elevation={0}
        sx={{
          background: 'transparent',
          position: 'absolute',
          left: 0,
          bottom: -20
        }}
      >
        <svg width="300" height="300" viewBox="0 0 80 80" fill="">
          <path d="M88.0005 88L0.000488285 88L0.000488281 0" fill="#ff6969a9"></path>
          <path d="M48 88H0L0 40" fill="#861b1b8a"></path>
        </svg>
      </Card>
      <Card
        elevation={0}
        sx={{
          background: 'transparent',
          position: 'absolute',
          right: 0,
          bottom: 0
        }}
      >
        <svg width="150" height="300" viewBox="0 0 40 88" fill="">
          <path
            d="M44 3.99999C21.9053 4 4 21.9053 4.00001 44C4.00001 66.0947 21.9053 84 44 84"
            fill="#ff6969"
          ></path>
          <path
            d="M44 84C66.0947 84 84 66.0947 84 44C84 21.9053 66.0947 3.99999 44 4"
            fill="#861b1b"
          ></path>
          <path
            d="M44 66C56.1521 66 66 56.1521 66 44C66 31.8479 56.1521 22 44 22"
            fill="#ff6969"
          ></path>
          <path
            d="M44 22C31.8479 22 22 31.8479 22 44C22 56.1521 31.8479 66 44 66"
            fill="#861b1b"
          ></path>
        </svg>
      </Card>
      <Card
        elevation={0}
        sx={{
          background: 'transparent',
          position: 'absolute',
          right: 0,
          top: -30
        }}
      >
        <svg width="250" height="300" viewBox="0 0 30 50" fill="">
          <path
            d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
            fill="#d59f9f8b"
          ></path>
        </svg>
      </Card>
      <Card
        elevation={0}
        sx={{
          background: 'transparent',
          position: 'absolute',
          left: -30,
          top: -30
        }}
      >
        <svg width="300" height="300" viewBox="0 0 88 88" fill="">
          <path
            d="M24 84C35.0421 84 44 75.0421 44 64C44 52.9579 35.0421 44 24 44C12.9579 44 4 52.9579 4 64C4 75.0421 12.9579 84 24 84Z"
            fill="#ff6969"
          ></path>
          <path
            d="M64 84C75.0421 84 84 75.0421 84 64C84 52.9579 75.0421 44 64 44C52.9579 44 44 52.9579 44 64C44 75.0421 52.9579 84 64 84Z"
            fill="#861b1b"
          ></path>
          <path
            d="M24 44C35.0421 44 44 35.0421 44 24C44 12.9579 35.0421 4 24 4C12.9579 4 4 12.9579 4 24C4 35.0421 12.9579 44 24 44Z"
            fill="#861b1b7d"
          ></path>
          <path
            d="M64 44C75.0421 44 84 35.0421 84 24C84 12.9579 75.0421 4 64 4C52.9579 4 44 12.9579 44 24C44 35.0421 52.9579 44 64 44Z"
            fill="#ff696980"
          ></path>
        </svg>
      </Card>
    </Box>
  )
}

export { Comp1 }
