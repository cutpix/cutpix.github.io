import Image from 'next/image';
import { QuoteData } from '@/interfaces';
import { Content, Title, Row, Column, TextBlock, ListInfo, Clear } from '../common'

import styles from '../common/shared.module.scss'

const Quote = ({
  data
}: {
  data: QuoteData
}) => {
  return (
    <Content name='quote'>
      <Title text={data.title} />
      <Row>
        <Column className='col-d-12 border-line-v'>
          <div className={styles['quote-items']}>
            <div className={styles.text}>
              <div>{data.text}</div>
            </div>
            <div className={styles.author}>
              <div className={styles.img}>
                <Image
                  src={data.author.imageUrl}
                  width={500}
                  height={500}
                  alt="2Pac" />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>
                  {data.author.name}
                </div>
                <div className={styles.company}>
                  {data.resource}
                </div>
              </div>
              <Clear />
            </div>
          </div>
        </Column>
      </Row>
      <Clear />
    </Content>
  )
}

export default Quote