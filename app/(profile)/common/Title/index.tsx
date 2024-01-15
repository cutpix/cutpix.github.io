import styles from './index.module.scss'

interface Props {
  text: string
  // any props that come into the component
}

const Title = ({ text }: Props) => {
  const hasSpace = text.includes(' ')
  const [firstWord, ...restWords] = hasSpace ? text.split(' ') : [text]

  return (
    <div className={styles.title}>
      <span className={styles['first-word']}>{firstWord}</span> {hasSpace && restWords.join(' ')}
    </div>
  )
}

export default Title