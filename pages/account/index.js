import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Heading, GoBack, ButtonBox } from '@/components'

const Account = () => {
  const [Login, setLogin] = useState('')

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

  useEffect(() => {
    const get_login = JSON.parse(localStorage.getItem('Login'))
    if (get_login === true) {
      setLogin(true)
    }
  }, [])

  return (
    <Box sx={(styles, { pt: 5, minHeight: '100vh' })}>
      <Heading pri="Account" sub="View Your Account Details" />
      <h1>Coming soon..</h1>
      {/* {Login !== true ? (
				<Box sx={styles}>
					<ButtonBox link="auth/login" title="Login" />
					<ButtonBox link="auth/signup" title="Sign Up" />
				</Box>
			) : (
				<Box sx={styles}>
					<ButtonBox link="account/profile" title="Profile" />
				</Box>
			)} */}
      <GoBack props="/" />
    </Box>
  )
}

export default Login
