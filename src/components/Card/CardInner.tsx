import React, { ReactNode } from "react";

import styles from './CardInner.module.scss'

const CardInner = ({ children, ...props }: Props) => {
  return (
    <div className={`${styles['card-inner']} ${styles.animated} ${styles.active}`}>
      <div className={styles['card-wrap']}>
        {children}
      </div>
    </div>
  )
}

interface Props {
  children?: ReactNode,
  // any props that come into the component
}

export default CardInner