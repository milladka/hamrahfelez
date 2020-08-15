import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>همراه فلز آسیا</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logoColor2.png" alt="hamrahfelez" />
        <h1 className={styles.title}>
           <a href="https://hamrahfelez.com">همراه فلز آسیا</a>
        </h1>

        <p className={styles.description}>
            خرید، فروش، تولید و توزیع آهن آلات  
        </p>

        <div className={styles.grid}>
          <a href="https://hamrahfelez.com" className={styles.card}>
            <h3>ارسال به تمام نقاط کشور &rarr;</h3>
            <p>همراه فلز آماده خدمت رسانی به شما</p>
          </a>

          <a href="https://hamrahfelez.com" className={styles.card}>
            <h3>ارائه فاکتور رسمی &rarr;</h3>
            <p>صدور فاکتور رسمی با جزئیات سفارش</p>
          </a>

          <a
            href="https://hamrahfelez.com"
            className={styles.card}
          >
            <h3>سفارش سریع &rarr;</h3>
            <p>خریدی ساده، سریع و مطمئن</p>
          </a>

          <a
            href="https://hamrahfelez.com"
            className={styles.card}
          >
            <h3>مشتری مداری &rarr;</h3>
            <p>
              برآورده سازی انتظارات مشتریان              
            </p>
          </a>
        </div>
      </main>
      <div>
        وب سایت در حال بروزرسانی می باشد
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ساخته شده با {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
