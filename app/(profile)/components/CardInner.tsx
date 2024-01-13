import styles from './CardInner.module.scss'

const CardInner = ({
  children
}: {
  children?: React.ReactNode
}) => {
  return (
    <div className={`${styles['card-inner']} ${styles.animated} ${styles.active}`}>
      <div className={styles['card-wrap']}>
        {children}
      </div>
    </div>
  )
}

export default CardInner