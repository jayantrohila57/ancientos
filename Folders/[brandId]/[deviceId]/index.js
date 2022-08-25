import * as React from 'react'
import { useRouter } from 'next/router'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import EventRepeatRoundedIcon from '@mui/icons-material/EventRepeatRounded'
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded'
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded'
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded'
import Link from 'next/link'
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded'
import { Box, Card, Typography } from '@mui/material'

import Heading from '../../../../components/heading/Heading'
import LinkHeading from '../../../../components/heading/LinkHeading'
import GoBack from '../../../../components/goBack/GoBack'
import ButtonBox from '../../../../components/buttonBox/ButtonBox'

export default function Device({ data }) {
  const router = useRouter()
  const deviceId = router.query.deviceId
  const brandId = router.query.brandId
  const Devices = data.filter((Data) => {
    return Data.device_codename === `${deviceId}`
  })

  const {
    brand,
    device_codename,
    maintainer,
    date_updated,
    download_url,
    changelog_url,
    device_supportgp_url,
    phone_url,
    rom_support
  } = Devices[0]

  const patreon = {
    primary: 'Want Early Build access ?',
    secondary: 'Those who want early build access, join us on patreon.',
    link: '/Donation'
  }

  const obj = {
    primary: 'Apply for Mantainer Ship',
    secondary: 'Join and grow the community of AncientOS.',
    link: '/maintainer'
  }
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const iconStyle = {
    background: 'transparent'
  }
  return (
    <Box sx={{ pt: 5, minHeight: '100vh' }}>
      <Heading pri={deviceId} sub={'Brand ' + brandId} />
      <Box sx={styles}>
        <Box sx={styles}>
          <Box
            sx={{
              maxWidth: 400,
              maxHeight: 450,
              m: 2,
              p: 2
            }}
          >
            <Box
              style={{
                backgroundImage: `url(${phone_url})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden'
              }}
              sx={{
                display: 'flex',
                width: 300,
                height: 300
              }}
            />
          </Box>
          <Box
            sx={{
              width: 350,
              m: 2,
              p: 2
            }}
          >
            <List sx={{ width: '100%', maxWidth: 460, bgcolor: 'transparent' }}>
              <ListItem>
                <ListItemIcon>
                  <PhoneAndroidRoundedIcon fontSize="large" sx={iconStyle} />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h5">{device_codename}</Typography>}
                  secondary={
                    <Typography variant="h6" color="primary">
                      Device Code Name
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AndroidRoundedIcon fontSize="large" sx={iconStyle} />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h5">{brand}</Typography>}
                  secondary={
                    <Typography color="primary" variant="h6">
                      Device Brand
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EngineeringRoundedIcon fontSize="large" sx={iconStyle} />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h5">{maintainer}</Typography>}
                  secondary={
                    <Typography variant="h6" color="primary">
                      Device Maintainer
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EventRepeatRoundedIcon fontSize="large" sx={iconStyle} />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="h5">{date_updated}</Typography>}
                  secondary={
                    <Typography variant="h6" color="primary">
                      Date Updated
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
          <Box sx={styles}>
            <List
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              <Card
                data-aos="zoom-in"
                data-aos-duration="600"
                sx={{
                  width: 330,
                  p: 1,
                  mb: 1.5,
                  borderRadius: 5,
                  boxShadow: '10px 10px 35px 0.1px #381f2048',
                  textTransform: 'capitalize'
                }}
              >
                <Link href={`${download_url}`}>
                  <ListItem onClick={() => {}}>
                    <ListItemText
                      primary={<Typography variant="h5">Download</Typography>}
                      secondary={
                        <Typography variant="h6" color="text.secondary">
                          Latest Update
                        </Typography>
                      }
                    />
                    <ListItemIcon>
                      <DownloadingRoundedIcon fontSize="large" />
                    </ListItemIcon>
                  </ListItem>
                </Link>
              </Card>
            </List>
          </Box>
        </Box>
        <Box sx={styles}>
          {' '}
          <ButtonBox link={changelog_url} title="Source Change Logs" />
          <ButtonBox link={rom_support} title="Rom Support Group" />
          <ButtonBox link={device_supportgp_url} title="Device Support Group" />
        </Box>
      </Box>
      <LinkHeading props={patreon} />
      <LinkHeading props={obj} />
      <GoBack props={`/download/${brandId}/`} />
    </Box>
  )
}

export async function getStaticPaths() {
  const DEVICE = 'https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json'
  const response = await fetch(DEVICE)
  const data = await response.json()
  const paths = data.map((post) => {
    return {
      params: {
        brandId: `${post.brand}`,
        deviceId: `${post.device_codename}`
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps() {
  const DEVICE = 'https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json'
  const response = await fetch(DEVICE)
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}
