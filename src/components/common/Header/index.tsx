import { menu } from './menu'

import styles from './index.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles['top-menu']} ${styles['menu-minimal']}`}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header