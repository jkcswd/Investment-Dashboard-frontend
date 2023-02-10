import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Layout.module.css'

type LayoutProps = {
  children: React.ReactNode,
};


export default function Layout( { children } : LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
          <h1><Link className={styles.navItem} href={`/`}>InDash</Link></h1>
          <nav className={styles.nav}>
            <ul>
              {/*<li><Link href={`/charts`}>Economic Data and Financial Securities Charts</Link></li>*/}
              {/*<li><Link href={`/datasets`}>Economic Data and Financial Securities Tabular Data</Link></li> */}
              {/*<li><Link to={`/daily-report`}>Daily Report</Link></li> */}
              <li><Link className={styles.navItem} href={`/portfolio-tracker`}>Portfolio Tracker</Link></li>
            </ul>
          </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}