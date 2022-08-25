import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/img/ancientv2.png'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import { Comp1 } from '@/components'
import { Paper, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { Heading, LinkHeading, ScreenshotCarousel } from '@/components'

const Home = () => {
  const download = {
    primary: 'Download the latest build',
    secondary: 'Get the latest builds for your device!',
    link: '/download'
  }

  const account = {
    primary: 'Connect Your Account',
    secondary: 'Login with google',
    link: '/account'
  }

  const logs = {
    primary: 'Check changelogs',
    link: '/updates'
  }

  const obj = {
    primary: 'Apply for Mantainer Ship',
    secondary: 'Join and grow the community of AncientOS!',
    link: '/maintainer'
  }

  const donation = {
    primary: 'Donate to AncientOS',
    secondary: 'Do consider donating on Paypal or join us on Patreon',
    link: '/donation'
  }

  const screenshot = {
    primary: 'Screenshots',
    secondary: 'Check out All the exciting visual changes in the UI',
    link: '/screenshots'
  }

  const donateScreenshot = {
    primary: 'Donate Screenshot',
    secondary: "Let's Share what we discover",
    link: '/screenshots/donate-screenshot'
  }

  const team = {
    primary: 'Meet Our Devs & Designers',
    secondary: 'Leading Members of the Ancient community.',
    link: '/team'
  }

  const devices = [
    {
      pri: 'Built for stock & personalised experience',
      sec: 'Over period of time we have noticed that people love a Differnt experience sepically if they could personalised the Ui of thier phone as per the taste,so we are trying to best in class Customisation and make your experience best on your phone'
    },
    {
      pri: 'Ready for daily usage',
      sec: 'Every Update is proccessed through some Multiple Stages of testing before it released,So that onces its released Every User could Enjoy their phone Fully'
    },
    {
      pri: 'Monthly Updates',
      sec: 'Keep your mobile up-to-date, safely and quickly Upgrade to the latest software available for your phone, and enjoy enhancements like new features, improved functionality and also fixed bugs.'
    },
    {
      pri: 'Colourful user interface with Monet engine',
      sec: 'The “monet” theme engine is where the magic happens when it comes to Material You, and it’s the algorithm that decides what colors are selected from a wallpaper. When a user changes their wallpaper on AncientOS, the image is analyzed to select a color and algorithmically choose Primary, Secondary colors using an initial seed color. '
    }
  ]

  return (
    <>
      <Box sx={{ height: '100vh', pt: 2 }}>
        <Comp1 />
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Paper
            data-aos="zoom-in"
            data-aos-duration="600"
            elevation={0}
            sx={{ Height: '100vh', backgroundColor: 'transparent' }}
            align="center"
          >
            <Image src={Logo} priority height="250" width="250" />
          </Paper>
          <Typography
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex-box"
            align="center"
            justifyItems="center"
            variant="h2"
          >
            AncientOS
          </Typography>{' '}
          <Typography
            sx={{ color: 'primary.main' }}
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex-box"
            align="center"
            justifyItems="center"
            variant="h4"
          >
            Craft with LOVE
          </Typography>
          <Typography
            sx={{ pt: 2, mt: 2 }}
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex-box"
            align="center"
            justifyItems="center"
            variant="h6"
          >
            Scrolldown to see more
          </Typography>
          <KeyboardArrowDownRoundedIcon />
        </div>
      </Box>

      <Box sx={{ pt: 5, minHeight: '60vh' }}>
        <Box
          variant="outlined"
          sx={{
            borderRadius: 5,
            m: 2,
            p: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ScreenshotCarousel />

          <Card
            data-aos="fade-up"
            data-aos-duration="600"
            variant="outlined"
            sx={{
              p: 2,
              m: 2,
              mb: 2,
              minWidth: 330,
              maxWidth: 700,
              display: 'flex',
              flexDirection: 'column',

              justifyContent: 'space-between',
              borderRadius: 10,
              textTransform: 'capitalize'
            }}
          >
            <Box>
              <Typography
                className="flex-box"
                sx={{ m: 1, p: 1, justifyContent: 'flex-start' }}
                variant="h4"
              >
                Let's do some UI Modifications...
              </Typography>
              <Typography
                className="flex-box"
                sx={{ m: 1, p: 1, justifyContent: 'flex-start' }}
                variant="subtitle2"
                color="text.secondary"
              >
                A Custom rom based on AOSP (Android Open Source Project) Crafted With Love. With the
                Aim To Provide "Performance", "Security" and "Stability", with Multiple
                Customisation option. So that every User can customise thier phone as per their
                taste. While you get Best in class Customisation options you also get a unique UI
                without any security Comprimises, Monthly Security patches are merged, Every Update
                has something new with bug fixes.
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>

      <Heading pri="Features" sub="Let's see our roms features." />
      <Box sx={{ pt: 5, minHeight: '60vh' }}>
        <Box
          variant="outlined"
          sx={{
            borderRadius: 5,
            m: 1,
            p: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {Array.from(devices).map((data, index) => {
            return (
              <Card
                data-aos="fade-up"
                data-aos-duration="600"
                key={index}
                variant="outlined"
                sx={{
                  p: 3,
                  m: 2,
                  minWidth: 330,
                  maxWidth: 500,
                  maxHeight: 430,
                  minHeight: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 10,
                  textTransform: 'capitalize'
                }}
              >
                <Box>
                  <Typography
                    className="flex-box"
                    sx={{ m: 0.5, justifyContent: 'flex-start' }}
                    variant="h4"
                  >
                    {data.pri}
                  </Typography>
                  <Typography
                    className="flex-box"
                    color="text.secondary"
                    sx={{ m: 0.5, justifyContent: 'flex-start' }}
                    variant="subtitle2"
                  >
                    {data.sec}
                  </Typography>
                </Box>
              </Card>
            )
          })}
        </Box>
      </Box>

      <Heading pri="Downloads" sub="Download the rom" />
      <LinkHeading props={download} />

      <Heading pri="Screenshots" sub="See All changes in New UI" />
      <LinkHeading props={screenshot} />
      <LinkHeading props={donateScreenshot} />

      <Heading pri="Build AncientOS" sub="Build AncientOS for your Device" />
      <LinkHeading props={obj} />

      <Heading pri="Get AncientOS Account" sub="Register Account" />
      <LinkHeading props={account} />

      <Heading pri="Changelog" />
      <LinkHeading props={logs} />

      <Heading pri="Ancient Team" sub="Meet Our Team" />
      <LinkHeading props={team} />

      <Heading pri="Consider Donation" sub="Let's Contribute to AncientOS" />
      <LinkHeading props={donation} />
    </>
  )
}

export default Home
