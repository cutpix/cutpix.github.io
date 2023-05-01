import React, { ReactNode } from "react";

import styles from './index.module.scss'

const Content = ({ children, name, ...props }: Props) => {
  return (
    <div className={`${styles.content} ${name}`}>
      {children}
    </div>
  )
}

interface Props {
  children?: ReactNode,
  name?: string
  // any props that come into the component
}

export default Content