import Image from 'next/image'
import { skills, projects, certs, education, awards } from '@/data/portfolio'
import styles from './Sections.module.css'

export function Skills() {
  return (
    <section id="skills" className={styles.sectionWhite}>
      <div className={styles.inner}>
        <p className={styles.label}>Technical Skills</p>
        <h2 className={styles.title}>보유 기술</h2>
        <div className={styles.skillsGrid}>
          {skills.map((g, i) => (
            <div key={i} className={styles.skillGroup}>
              <div className={styles.skillTitle}>{g.title}</div>
              <div className={styles.tags}>
                {g.tags.map((t, j) => <span key={j} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className={styles.sectionGray}>
      <div className={styles.inner}>
        <p className={styles.label}>Projects</p>
        <h2 className={styles.title}>프로젝트</h2>
        <div className={styles.projectsGrid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div className={styles.projectPeriod}>{p.period}</div>
                {p.badge && <div className={styles.badge}>{p.badge}</div>}
                <h3 className={styles.projectTitle}>
                  {p.title.split('\n').map((line, j) => (
                    <span key={j}>{line}{j < p.title.split('\n').length - 1 && <br />}</span>
                  ))}
                </h3>
                <p className={styles.projectSubtitle}>{p.subtitle}</p>
              </div>
              <div className={styles.projectTags}>
                {p.tags.map((t, j) => <span key={j} className={styles.projectTag}>{t}</span>)}
              </div>
              <ul className={styles.achievements}>
                {p.achievements.map((a, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: a }} />
                ))}
              </ul>
              <div className={styles.projectLinks}>
                {p.links.map((l, j) => (
                  <a key={j} className={styles.projectLink} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.icon === 'github'
                      ? <Image src="/images/github.png" alt="GitHub" width={14} height={14} />
                      : l.icon}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Certs() {
  const iconSrc: Record<string, string> = {
    aws: '/images/aws.png',
    linux: '/images/linux.png',
  }
  return (
    <section id="certs" className={styles.sectionWhite}>
      <div className={styles.inner}>
        <p className={styles.label}>Certificates</p>
        <h2 className={styles.title}>자격증</h2>
        <div className={styles.certsGrid}>
          {certs.map((c, i) => (
            <div key={i} className={styles.certCard}>
              <div className={styles.certIcon}>
                {iconSrc[c.icon]
                  ? <Image src={iconSrc[c.icon]} alt={c.icon} width={28} height={28} style={{ objectFit: 'contain' }} />
                  : <span style={{ fontSize: '1.1rem' }}>{c.icon}</span>}
              </div>
              <div>
                <div className={styles.certName}>{c.name}</div>
                <div className={styles.certIssuer}>{c.issuer}</div>
                <div className={styles.certDate}>{c.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className={styles.sectionGray}>
      <div className={styles.inner}>
        <p className={styles.label}>Education</p>
        <h2 className={styles.title}>학력 및 교육</h2>
        <div className={styles.eduTimeline}>
          {education.map((e, i) => (
            <div key={i} className={styles.eduItem}>
              <div className={styles.eduPeriod}>{e.period}</div>
              <div className={styles.eduContent}>
                <div className={styles.eduName}>{e.name}</div>
                <div className={styles.eduDetail}>{e.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Awards() {
  return (
    <section id="awards" className={styles.sectionWhite}>
      <div className={styles.inner}>
        <p className={styles.label}>Awards</p>
        <h2 className={styles.title}>수상 이력</h2>
        <div className={styles.awardsList}>
          {awards.map((a, i) => (
            <div key={i} className={styles.awardItem}>
              <div>
                <div className={styles.awardName}>{a.name}</div>
                <div className={styles.awardDetail}>{a.detail}</div>
              </div>
              <span className={styles.awardOrg}>{a.org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
