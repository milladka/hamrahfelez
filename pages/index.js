import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>همراه فلز: قیمت آهن آلات | قیمت روز آهن در بازار و کارخانه</title>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="سایت همراه فلز؛ اطلاع از قیمت امروز انواع میلگرد، ورق فولادی، محصولات مفتولی، تیرآهن و هاش، لوله و پروفیل، نبشی و ناودانی و انواع شیرآلات و اتصالات." />
        <link rel="canonical" href="https://hamrahfelez.com/" /> 
      </Head>

      <main className={styles.main}>
        <img src="/logoColor2.png" alt="hamrahfelez" />
        <h1 className={styles.title}>
           <a href="https://hamrahfelez.com">همراه فلز آسیا</a>
        </h1>

        <p className={styles.description}>
            خرید، فروش، تولید و توزیع آهن آلات  
        </p>
        <div className={styles.linko}>
          <Link href="/about-us/">
            <a>درباره ما</a>
          </Link>
          <Link href="/contact-us/">
            <a>تماس  با ما</a>
          </Link>
        </div>       
       
        <div className={styles.grid}>
          <a href="https://hamrahfelez.com" className={styles.card}>
            <h3>ارسال به تمام نقاط کشور</h3>
            <p>همراه فلز آماده خدمت رسانی به شما</p>
          </a>

          <a href="https://hamrahfelez.com" className={styles.card}>
            <h3>ارائه فاکتور رسمی</h3>
            <p>صدور فاکتور رسمی با جزئیات سفارش</p>
          </a>

          <a
            href="https://hamrahfelez.com"
            className={styles.card}
          >
            <h3>سفارش سریع</h3>
            <p>خریدی ساده، سریع و مطمئن</p>
          </a>

          <a
            href="https://hamrahfelez.com"
            className={styles.card}
          >
            <h3>مشتری مداری</h3>
            <p>
              برآورده سازی انتظارات مشتریان              
            </p>
          </a>
        </div>
      </main>
      <div className={styles.alert}>
        وب سایت در حال بروزرسانی می باشد
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
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
