import Link from 'next/link'
import { menu } from './Menu'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles['top-menu']} ${styles['menu-minimal']}`}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <Link href={item.link}>
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