import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/*<script
          src="https://cdn-cookieyes.com/client_data/97911e532b07be889c9c19ff/script.js"
          id="cookieyes"
        ></script>*/}
        {/*<Script id="cookieyes">{`console.log('hi')`}</Script>*/}
        <Script
          strategy={'beforeInteractive'}
          src="https://cdn-cookieyes.com/client_data/97911e532b07be889c9c19ff/script.js"
          id="cookieyes"
        ></Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
