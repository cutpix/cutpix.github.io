import { Link, NavLink } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { menu } from './menu'

import styles from './index.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.profile}>
        <div className={styles.title}>
          Andrii Pavliuk
        </div>
        <div className={styles.subtitle}>
          <TypeAnimation
            sequence={[
              'Software Developer', 1000,
              'Keep on coding folks! ✌️', 2000
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </div>
      </div>

      <div className={`${styles['top-menu']} ${styles['menu-minimal']}`}>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li key={`menu item ${idx}`}>
              <NavLink className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.pending}`
                  : isActive ? `${styles.active}` : ''
              }
                to={item.link}>
                <span className={`${styles.icon} ${styles.fa} ${styles['fa-circle-info']}`} />
                <span className={styles.link}>
                  {item.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </header>
  )
}

export default Header