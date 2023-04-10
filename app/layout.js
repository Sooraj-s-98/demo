import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn-cookieyes.com/client_data/fc02b7fab6aaf924ab95478a/script.js"
          strategy='beforeInteractive'
        />
        {/* <script
          id="cookieyes"
          src="https://scriptstaging.cookieyes.com/client_data/41dbb457e7b5a3e04556e5d1/script.js"
        /> */}
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M832272');
          `,
          }}
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3371256,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M832272"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
