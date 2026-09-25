import type { Metadata } from 'next'
import './globals.css'
import { profile } from '@/data/portfolio'

export const metadata: Metadata = {
  title: '김주환 Portfolio',
  description: `${profile.title} 김주환. ${profile.description}`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
