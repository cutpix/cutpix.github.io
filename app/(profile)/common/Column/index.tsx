import { clsx } from 'clsx'

import styles from '../shared.module.scss'

interface Props {
  children?: React.ReactNode,
  className?: string
}

const Column = ({ children, className }: Props) => {
  return (
    <div className={clsx(styles.col, className)}>
      {children}
    </div>
  )
}

export default Column