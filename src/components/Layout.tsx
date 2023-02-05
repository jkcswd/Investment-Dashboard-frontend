import Head from 'next/head';
import Link from 'next/link';


export default function Layout( children : React.ReactNode) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <h1><Link href={`/`}>InDash</Link></h1>
          <nav className='main-nav'>
            <ul>
              <li><Link href={`/charts`}>Economic Data and Financial Securities Charts</Link></li>
              <li><Link href={`/datasets`}>Economic Data and Financial Securities Tabular Data</Link></li>
              {/*<li><Link to={`/daily-report`}>Daily Report</Link></li> */}
              <li><Link href={`/portfolio-tracker`}>Portfolio Tracker</Link></li>
            </ul>
          </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}