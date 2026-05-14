import Image from 'next/image'
import { profile } from '@/data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <Image
          className={styles.photo}
          src={profile.photo}
          alt="프로필"
          width={155} height={155}
          priority
        />
        <div>
          <div className={styles.badge}>
            <Image src="/images/hana.png" alt="하나금융TI" width={18} height={18} />
            {profile.company}
          </div>
          <h1 className={styles.name}>
            김<em>주환</em>
          </h1>
          <p className={styles.title}>{profile.title}</p>

          <div className={styles.contacts}>
            <a className={styles.contactItem} href={`mailto:${profile.email}`}>
              📧 {profile.email}
            </a>
            <span className={styles.contactItem}>📞 {profile.phone}</span>
            <a className={styles.contactItem} href={profile.github} target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.png" alt="GitHub" width={16} height={16} />
              github.com/joowhan
            </a>
            <a className={styles.contactItem} href={profile.notion} target="_blank" rel="noopener noreferrer">
              📝 Notion Blog
            </a>
          </div>

          <div className={styles.links}>
            <a className={`${styles.link} ${styles.primary}`} href={profile.github} target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.png" alt="" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
              GitHub
            </a>
            <a className={`${styles.link} ${styles.secondary}`} href={profile.notion} target="_blank" rel="noopener noreferrer">
              📖 Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
