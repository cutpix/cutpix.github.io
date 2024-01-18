import styles from './index.module.scss'

interface Props {
  text: string
}

const TextBlock = ({ text }: Props) => {
  return (
    <div className={styles['text-block']}>
      <p>{text}</p>
    </div>
  )
}

export default TextBlock