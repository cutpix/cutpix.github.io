import { ServiceType } from '@/interfaces'
import clsx from 'clsx'

import styles from './ServiceItem.module.scss'

const ServiceItem = ({
  data
}: {
  data: ServiceType
}) => {
  return (
    <div className={styles['service-item']}>
      <div className={styles.icon}>
        <span className={clsx(styles.fa, styles[data.fa])} />
      </div>
      <div className={styles.name}>
        <span>{data.type}</span>
      </div>
      <div className={styles.desc}>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default ServiceItem