import styles from '../shared.module.scss'

interface Props {
  children?: React.ReactNode
}

const Row = ({ children }: Props) => {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}

export default Row