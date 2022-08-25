import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { fetcher } from '@/lib'
import { SWRConfig } from 'swr'
import { Header, Footer } from '@/components'

import 'aos/dist/aos.css'

const useDarkMode = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return isDarkTheme
}

const App = ({ Component, pageProps }) => {
  const mode = useDarkMode() ? 'dark' : 'light'

  const lightColors = {
    primary: {
      main: '#ff6969',
      light: '#fdf6f04f',
      hover: '#ff1d1d'
    },
    background: {
      default: '#FDF6F0',
      paper: '#ff6969'
    },
    text: {
      primary: '#3d3d3d',
      secondary: '#FDF6F0'
    }
  }

  const darkColors = {
    primary: {
      main: '#ff6969',
      light: '#2b1a3434',
      hover: '#b03030'
    },

    background: {
      default: '#151419',
      paper: '#ff6969'
    },

    text: {
      primary: '#ffffff',
      secondary: '#431c1c'
    }
  }

  let theme = createTheme({
    palette: {
      mode,
      ...(mode == 'light' ? lightColors : darkColors)
    }
  })
  theme = responsiveFontSizes(theme)

  return (
    <>
      <SWRConfig value={{ provider: () => new Map(), fetcher }}>
        <Head>
          <title>AncientOS</title>

          <meta
            name="description"
            content="A Custom rom based on AOSP (Android Open Source Porject) CrafetedWithLove. With the Aim To Provide Performance, Security and Stability, with Multiple Customisation option. So that every User can customise thier phone as per their taste."
          />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </main>
        </ThemeProvider>
      </SWRConfig>
    </>
  )
}

export default App
