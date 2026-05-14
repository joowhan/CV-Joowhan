import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '김주환 Portfolio',
  description: 'AI & Cloud Engineer · IT거버넌스 / Cloud Operation 기획',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
