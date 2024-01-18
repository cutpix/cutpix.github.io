import styles from '../shared.module.scss'

interface Props {
  text: string
  // any props that come into the component
}

const Title = ({ text }: Props) => {
  const hasSpace = text.includes(' ')

  if (hasSpace) {
    const [firstWord, ...restWords] = text.split(' ')

    return (
      <div className={styles.title}>
        <span className={styles['first-word']}>{firstWord}</span> {restWords.join(' ')}
      </div>
    )
  }

  return (
    <div className={styles.title}>
      <span className={styles['first-word']}>{text.charAt(0)}</span>{text.substring(1)}
    </div>
  )
}

export default Title