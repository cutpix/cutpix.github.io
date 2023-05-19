import React, { ReactNode } from "react";
import styles from './index.module.scss'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const Page = ({ children, ...props }: Props) => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Page;