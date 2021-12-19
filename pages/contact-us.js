import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>تماس با همراه فلز 📞 | فروشگاه اینترنتی همراه فلز آسیا</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="نحوه تماس با همراه فلز: جهت ارتباط با فروشگاه اینترنتی همرا فلز، ارائه دهنده ملزومات فلزی و فولادی به قیمت روز بازار، با شماره تلفن  ☎ 79217_021 تماس بگیرید." />
        <link rel="canonical" href="https://hamrahfelez.com/contact-us/" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.abouttitle}>
           ارتباط با همراه فلز
        </h1>

        <div className={styles.grid}>
            <div href="https://hamrahfelez.com/" className={styles.card}>
                <h3>آدرس</h3>
                <p className={styles.addressp}>پاسدارن، عابدین زاده، پلاک ۲۳</p>
            </div>
            <div href="https://hamrahfelez.com/" className={styles.card}>
                <h3>تلفن</h3>
                <p className={styles.phonetext}>۰۲۱-۷۹۲۱۷</p>
            </div>
            <div href="https://hamrahfelez.com/" className={styles.card}>
                <h3>ایمیل</h3>
                <p className={styles.lefttext}>info@hamrahfelez.com</p>
            </div>
            <div href="https://hamrahfelez.com/" className={styles.card}>
                <h3>تماس با اپراتور</h3>
                <p className={styles.lefttext}>۰۲۱۲۶۶۵۱۵۷۹</p>
            </div> 

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
