import { clsx } from 'clsx'

import styles from '../shared.module.scss'

interface Props {
  children?: React.ReactNode,
  className: string
}

const Column = ({ children, className }: Props) => {
  const classNameArray = className ? className.split(' ') : []
  const combinedClassNames = clsx(styles.col, classNameArray.map(className => styles[className]))

  return (
    <div className={combinedClassNames}>
      {children}
    </div>
  )
}

export default Column