import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutGeneral from 'src/components/layouts/layout-general'
import { theme } from 'src/styles/material-theme'
import { CartProvider } from 'contexts/useCart'
import { UserProvider } from 'contexts/useUser'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutGeneral>
        <CartProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </CartProvider>
      </LayoutGeneral>
      <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */

          #__next {
          height: 100%;
        }
        `}</style>
    </ThemeProvider>
  )
}

export default MyApp
