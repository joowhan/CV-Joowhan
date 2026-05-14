import { profile } from '@/data/portfolio'
import styles from './Sections.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <strong>김주환 (Joowhan Kim)</strong>
        {' · '}
        <span className={styles.footerOrange}>AI &amp; Cloud Engineer</span>
      </p>
      <p className={styles.footerLine}>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {' · '}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {' · '}
        <a href={profile.notion} target="_blank" rel="noopener noreferrer">Notion Portfolio</a>
      </p>
    </footer>
  )
}
