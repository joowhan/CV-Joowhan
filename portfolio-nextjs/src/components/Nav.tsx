'use client'
import Image from 'next/image'
import { profile } from '@/data/portfolio'
import styles from './Nav.module.css'

const navItems = [
  { href: '#career',    label: '경력' },
  { href: '#skills',    label: '기술' },
  { href: '#projects',  label: '프로젝트' },
  { href: '#certs',     label: '자격증' },
  { href: '#education', label: '학력' },
  { href: '#awards',    label: '수상' },
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        김주환 <span>·</span> Portfolio
      </div>
      <ul className={styles.links}>
        {navItems.map(item => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
      <div className={styles.btns}>
        <a className={styles.btn} href={profile.github} target="_blank" rel="noopener noreferrer">
          <Image src="/images/github.svg" alt="GitHub" width={15} height={15} />
          GitHub
        </a>
        <a className={styles.btn} href={profile.notion} target="_blank" rel="noopener noreferrer">
          📝 Notion
        </a>
      </div>
    </nav>
  )
}
