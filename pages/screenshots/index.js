import { Box } from '@mui/material'
import Heading from '../../components/heading/Heading'
import ImageMasonry from '../../components/screenshotCarousel/ImageMasonry'
import GoBack from '../../components/goBack/GoBack'
import LinkHeading from '../../components/heading/LinkHeading'

const Screenshots = () => {
  const { data } = useSWR(
    'https://raw.githubusercontent.com/jayantrohila57/API/main/screenshot.json'
  )

  const donateScreenshot = {
    primary: 'Donate Screenshot',
    secondary: "Let's Share what we discover",
    link: '/Screenshot/Donate-Screenshot'
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
