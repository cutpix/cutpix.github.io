import { clsx } from 'clsx'

import styles from './index.module.scss'

const Content = ({ children, name, ...props }: Props) => {
  const classNameArray = name ? name.split(' ') : []
  const combinedClassNames = clsx(styles.content, classNameArray.map(className => styles[className]))

  return (
    <div className={combinedClassNames}>
      {children}
    </div>
  )
}

interface Props {
  children?: React.ReactNode,
  name?: string
  // any props that come into the component
}

export default Content