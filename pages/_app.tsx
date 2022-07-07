import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import icon from '../icon.ico'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
          <link rel="shortcut icon" href={icon.src}/>
        </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
