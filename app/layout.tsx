import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import styles from './layout.module.scss'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrii Pavliuk | vCard / Resume / CV',
  description: 'I am Andrii Pavliuk, full-stack software engineer from Ukraine, Kiev.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <div className={`${styles['animation-background']} ${styles.overlay}`}>
            <video className={styles['video-background']}
              preload='auto' autoPlay loop muted playsInline>
              <source src={(require('../assets/video/bg.mp4'))} type='video/mp4' />
            </video>
          </div>
          <div className={styles.page}>
            <div className={styles.container}>
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}