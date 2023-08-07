import Layout from '../layouts/Layout'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout seoData={pageProps.seoData}>
        <NextNProgress
          color="#30ff8d"
          startPosition={0.3}
          stopDelayMs={100}
          height={5}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
