

import Script from 'next/script'


export default function MyApp() {

  return (
    <>
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/d797d17a8eca1e84fd73c7ee/script.js"
      />
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}
