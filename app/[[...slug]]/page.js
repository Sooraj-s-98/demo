import Link from 'next/link';
import Script from 'next/script'

export const revalidate = 60;

export async function generateStaticParams() {
  return [{ slug: null }, { slug: ['page-a'] }, { slug: ['page-b'] }];
}

export default async function Home(props) {
  const slug = props.params.slug;
  return (
    <div>
             <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/d797d17a8eca1e84fd73c7ee/script.js" />
      <h1>{slug ? slug : 'home page'}</h1>
      <ol>
        <li>
          <Link href="/">/</Link>
        </li>
        <li>
          <Link href="/page-a">/page-a</Link>
        </li>
        <li>
          <Link href="/page-b">/page-b</Link>
        </li>
      </ol>
    </div>
  );
}
