import React, { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Heading, GoBack } from '@/components'

export default function Profile({ data }) {
  console.log(data)
  const [DATA, setDATA] = useState({})
  // useEffect(() => {
  // 	const USERID = JSON.parse(localStorage.getItem("UserID"));
  // 	const res = data.build_data.filter((item) => item.user_id.includes(USERID));
  // 	console.log(res);
  // 	setDATA(res.build_data);
  // 	console.log("usestate" + DATA);
  // }, []);

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Box sx={(styles, { pt: 5, minHeight: '100vh' })}>
      <Heading pri="profile" sub="View Your Profile" />
      <h1>Coming soon..</h1>
      <Box sx={styles}>
        {/* {DATA.map((log, index) => {
					return (
						<Typography
							key={index}
							variant="h4"
							sx={{ m: 0, justifyContent: "flex-start" }}
						>
							{log.user_id}
							<br />
							{log.user_name}
							<br />
							{log.user_dob}
							<br />
							{log.user_email}
						</Typography>
					);
				})} */}
      </Box>

      <GoBack props="/account" />
    </Box>
  )
}
export async function getStaticProps() {
  const USER_DATA = 'https://newwebsite.ancientrom.xyz/ancient/api/fetch/usersFetchData.php'
  const response = await fetch(USER_DATA)
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}
