'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { menu } from '@/lib/menu'

import styles from './index.module.scss'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={`${styles['top-menu']} ${styles['menu-minimal']}`}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link href={item.link} className={pathname === item.link ? `${styles.active}` : ''}>
                <span className={`${styles.icon} ${styles.fa} ${styles[item.icon]}`} />
                <span className={styles.link}>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header