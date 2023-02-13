import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
    <Script src="https://cdn-cookieyes.com/client_data/d797d17a8eca1e84fd73c7ee/script.js" />
  </html>
  );
}
