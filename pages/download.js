import { Box } from '@mui/material'
import Heading from '../../components/heading/Heading'
import GoBack from '../../components/goBack/GoBack'
import ButtonBox from '../../components/buttonBox/ButtonBox'
import useSWR from 'swr'

const Download = () => {
  // const {data} = useSWR("https://raw.githubusercontent.com/ancient-devices/releases/main/website_api.json")
  // const brands = [...new Set(data.map((a) => a.brand))];

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <Box sx={{ pt: 5, minHeight: '100vh' }}>
      <Heading pri="Device builds" sub="List of Official Devices" />

      <Box sx={styles}>
        <h1>Will be uptaded soon...</h1>
      </Box>

      {/* <Box sx={styles}>
				{Array.from(brands).map((value, index) => {
					return (
						<ButtonBox key={index} link={`download/${value}`} title={value} />
					);
				})}
			</Box> */}

      <GoBack props="/" />
    </Box>
  )
}

export default Download
