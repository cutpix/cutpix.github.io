import { clsx } from 'clsx'

import styles from './index.module.scss'

const Content = ({ children, name, ...props }: Props) => {
  const classNameArray = name ? name.split(' ') : []
  const combinedClassNames = clsx(styles.content, classNameArray.map(className => styles[className]))

  // Include the name as a class if it exists in styles, otherwise include it directly
  const dynamicClassName = name && styles[name] ? { [styles[name]]: true } : name ? { [name]: true } : {}

  return (
    <div className={clsx(combinedClassNames, dynamicClassName)} {...props}>
      {children}
    </div>
  )
}

interface Props {
  children?: React.ReactNode;
  name?: string;
  // any props that come into the component
}

export default Content