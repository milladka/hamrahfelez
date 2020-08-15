import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>همراه فلز آسیا | درباره ما</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.abouttitle}>
          درباره همراه فلز
        </h1>

        <div className={styles.grid}>
        <p className={styles.abouttext}>
        شرکت همراه فلز آسیا با گذشت بیش از ۳۰ سال فعالیت در صنعت فولاد، حوزه ورق و لوله های فولادی و همچنین کسب رضایت از مشتریان، فعالیت خود را از سال 1397 بصورت رسمی آغاز نموده است.

از بزرگترین اهداف همراه فلز ارائه مشاوره تخصصی برای مشتریان، ارائه محصول به سراسر کشور و همچنین مرجع قیمت گذاری در این حوزه می باشد. که تاکنون به این مهم نیز دست یافته است.

همراه فلز با دارا بودن نماد های ساماندهی و اینماد مهر تاییدی بر فعالیت و رقابت پاک و سالم خود در این عرصه از سوی وزارت صنعت، معدن و تجارت دریافت نموده است.

همچنین همراه فلز با دارا بودن کادری مجرب و حرفه ای در جهت ارائه خدمات به مشتریان نظیر مشاوره و فروش از افتخارات خود می داند که نامی ماندگار و خوش آوازه در صنعت ورق فولاد و لوله در خاطر و قلب مشتریان عزیز خود که ولینعمتان ما هستند به یادگار گذاشته.

مهمترین رسالت همراه فلز ایجاد چرخه و زنجیره حیات صنعت فولاد و مشتقات آن در داخل کشور است و با بکار گیری پتانسیل و فضای موجود و همچنین رونق بخشیدن به تولید داخلی به دنبال تامین نیاز بازارهای داخلی و صادرات به دیگر کشورها در تمامی زمینه ها و صنایع گوناگون می باشد.

همراه فلز با نیازسنجی بازار و همچنین تکیه بر تولید داخلی برخی از محصولات خود را بصورت برونسپاری تولید می نماید تا همواره خطوط تولید فولاد داخل کشور با اقتدار و صلابت خود به رونق و آبادانی این مرز و بوم کمک شایانی نمایند و نیاز به واردات فولاد و همچنین کالاهای وابسته به این صنعت را به صفر برسانند.
        </p>

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
