import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { Global } from '@emotion/react'
import Link from 'next/link'
import { Card, SwipeableDrawer } from '@mui/material'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

const Header = () => {
  const link = ['download', 'Updates', 'Team', 'Donation', 'Screenshot']
  const linkInfo = [
    'Downloads builds',
    'Check latest updates.',
    'All team Members.',
    'Consider Supporting Us.',
    'Check Screenshots & donate'
  ]

  const Root = styled('div')(({ theme }) => ({
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? grey[900] : theme.palette.background.default
  }))

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? grey[400] : grey[900]
  }))

  const Puller = styled(Box)(({ theme }) => ({
    width: 100,
    height: 5,
    backgroundColor: theme.palette.mode === 'dark' ? grey[400] : grey[600],
    borderRadius: 3,
    position: 'absolute',
    top: 10,
    left: 'calc(50% - 50px)'
  }))

  const [open, setOpen] = useState(false)

  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        overflow: 'visible'
      }}
      elevation={0}
      position="sticky"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            noWrap
            center
            sx={{
              mr: 1,
              display: {
                xs: 'none',
                md: 'flex',
                justifyContent: 'center',
                align: 'center'
              }
            }}
          >
            <Link href={'/'}>
              <Typography
                style={{
                  fontSize: 30,
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                AncientOS
              </Typography>
            </Link>
          </Box>
          <Tooltip title="Click to Menu">
            <Box
              sx={{
                // mr: 5,
                flexGrow: 0.5,
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpen(true)}
                color="inherit"
              >
                <MenuRoundedIcon
                  fontSize="large"
                  sx={{
                    p: 0,
                    fontSize: 40,
                    borderRadius: 10
                  }}
                />
              </IconButton>
            </Box>
          </Tooltip>

          <Box noWrap sx={{ m: 0, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <Link href={'/'} passHref>
              <Typography
                style={{
                  fontSize: 40,
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                AncientOS
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              p: 1,

              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end'
            }}
          >
            {link.map((links, index) => (
              <MenuItem sx={{ borderRadius: 5 }} key={index}>
                <Link key={index} href={`/${links}`}>
                  <Typography
                    variant="h6"
                    key={index}
                    sx={{
                      textTransform: 'capitalize'
                    }}
                    textAlign="center"
                  >
                    {links}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
              <Link href={'/account'}>
                <IconButton
                  sx={{
                    borderRadius: 10
                  }}
                >
                  <Avatar
                    sx={{
                      fontSize: 36,
                      bgcolor: 'primary.main',
                      color: 'text.primary'
                    }}
                  />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Root>
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              backgroundColor: 'transparent',
              backdropFilter: 'blur(10px)',
              overflow: 'visible',
              variant: 'outlined',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30
            }
          }}
        />

        <SwipeableDrawer
          data-aos="fade-up"
          data-aos-duration="300"
          anchor="bottom"
          open={open}
          onOpen={() => {}}
          onClose={() => setOpen(false)}
        >
          <Box sx={{ m: 2 }}>
            <StyledBox>
              <Puller />
            </StyledBox>
          </Box>
          <Grid item xs={10} md={6}>
            <Typography align="center" color="primary.main" variant="h3">
              Menu
            </Typography>
            <List sx={{ mr: 2 }}>
              {link.map((val, index) => (
                <Link key={index} href={`/${val}`}>
                  <Card
                    sx={{
                      p: 1,
                      m: 1,
                      ml: 2,
                      borderRadius: 8,
                      textTransform: 'capitalize'
                    }}
                  >
                    <ListItem onClick={() => setOpen(false)}>
                      <ListItemText
                        primary={<Typography variant="h4">{val}</Typography>}
                        secondary={linkInfo[index]}
                      />

                      <ListItemIcon>
                        <ArrowCircleRightRoundedIcon
                          sx={{
                            fontSize: 50,
                            borderRadius: 10
                          }}
                        />
                      </ListItemIcon>
                    </ListItem>
                  </Card>
                </Link>
              ))}
            </List>
          </Grid>
        </SwipeableDrawer>
      </Root>
    </AppBar>
  )
}

export { Header }
