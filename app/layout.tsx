import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import styles from './layout.module.scss'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

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
        <body className={`${poppins.variable} antialiased`}>
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