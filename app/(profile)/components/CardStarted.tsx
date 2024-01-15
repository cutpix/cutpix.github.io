'use client'

import { TypeAnimation } from 'react-type-animation'

import { socialLinks, links } from '@/lib/links'
import Image from 'next/image'
import profileImage from '../../../assets/img/profile.jpg'

import styles from './CardStarted.module.scss'

const CardStarted = () => {
  return (
    <div className={styles['card-started']}>
      <div className={`${styles.profile} ${styles['no-photo']}`}>
        <div className={styles.slide}></div>
        <div className={styles.image}>
          <Image src={profileImage} alt="" />
        </div>
        <div className={styles.title}>Andrii Pavliuk</div>
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
        <div className={styles.social}>
          {socialLinks.map((item, idx) => (
            <a key={`social item ${idx}`} target="_blank" rel="noreferrer" title={item.text} href={item.uri}>
              <span className={`${styles.fa} ${styles[item.fa]}`} />
            </a>
          ))}
        </div>
        <div className={styles.links}>
          {links.map((item, idx) => (
            <a key={`links item ${idx}`} target="_blank" rel="noreferrer" href={item.uri} className={styles.link}>
              <span className={styles.text}>
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardStarted