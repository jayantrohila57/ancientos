import { Box, Card } from '@mui/material'
import Typography from '@mui/material/Typography'
import useSWR from 'swr'
import { Heading, GoBack, ButtonBox } from '@/components'
import data from '@/data/donation.json'

const Donation = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Box sx={(styles, { pt: 4, minHeight: '100vh' })}>
      <Heading pri="Consider Donation" sub="Let's Contribute to AncientOS" />

      <Box sx={styles}>
        <Card
          data-aos="fade-up"
          data-aos-duration="600"
          variant="outlined"
          sx={{
            m: 2,
            boxShadow: '10px 10px 35px 0.1px #381f2048',
            borderRadius: 6
          }}
        >
          <Typography
            color="text.primary"
            variant="body2"
            sx={(styles, { p: 2, m: 1, maxWidth: 680 })}
          >
            We are working hard for you everyday to make this rom more better and effective for you.{' '}
            <br /> All we need is your Love and Support ❤️ To help Ancient for keeping it alive,
            Kindly do any little amount of possible contributions from your side.
          </Typography>
        </Card>
        <Box sx={styles}>
          {data.map((data, index) => {
            return <ButtonBox key={index} link={data.link} title={data.title} />
          })}
        </Box>
      </Box>
      <GoBack props="/" />
    </Box>
  )
}

export default Donation
