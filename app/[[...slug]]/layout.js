import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
