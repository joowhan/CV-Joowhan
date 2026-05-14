import Image from 'next/image'
import { career } from '@/data/portfolio'
import styles from './Career.module.css'

export default function Career() {
  return (
    <section id="career" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Experience</p>
        <h2 className={styles.title}>경력 사항</h2>
        {career.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.logo}>
                  <Image src={c.logo} alt={c.company} width={32} height={32} style={{ objectFit: 'contain' }} />
                </div>
                <div>
                  <div className={styles.company}>{c.company}</div>
                  <div className={styles.dept}>{c.dept}</div>
                </div>
              </div>
              <span className={styles.period}>{c.period}</span>
            </div>
            <div className={styles.body}>
              <p className={styles.intro}>{c.intro}</p>
              <div className={styles.kpiRow}>
                {c.kpis.map((k, j) => (
                  <div key={j} className={styles.kpi}>
                    <span className={styles.kpiNum}>{k.num}</span>
                    <span className={styles.kpiLabel}>{k.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.blocks}>
                {c.blocks.map((b, j) => (
                  <div key={j} className={styles.block}>
                    <div className={styles.blockTitle}>{b.title}</div>
                    <ul className={styles.list}>
                      {b.items.map((item, k) => (
                        <li key={k} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
