import Head from 'next/head'
import Link from 'next/link';
import styles from '@/styles/PortfolioTracker.module.css'
import Layout from '@/components/Layout'

export default function PortfolioTracker() {
  return (
    <Layout>
      <Head>
        <title>InDash - Portfolio Tracker</title>
      </Head>
        <nav className={styles.nav} aria-label='portfolio-nav'>
          <Link className={styles.navItem} href='trade-input'>Add Trade Enty/Exit</Link>
          <Link className={styles.navItem} href='adjustment-input'>Add Portfolio Adjustment</Link>
        </nav>
    </Layout>
  )
}
