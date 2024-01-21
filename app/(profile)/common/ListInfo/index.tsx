import styles from '../shared.module.scss'

interface Props {
  items: any[]
  // any props that come into the component
}

const ListInfo = ({ items }: Props) => {
  return (
    <div className={styles['info-list']}>
      <ul>
        {items.map((item, idx) => (
          <li key={`info-list item ${idx}`}>
            <strong>{item.label} . . . . .</strong>{item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListInfo