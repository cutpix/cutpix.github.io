import { AboutData } from "@/interfaces"
import { Content, Title, Row, Column, TextBlock, ListInfo, Clear } from '../common'

const About = ({
  data
}: {
  data: AboutData
}) => {
  return (
    <Content name='about'>
      <Title text={data.title} />
      <Row>
        <Column className='col-d-6 border-line-v'>
          <TextBlock text={data.description} />
        </Column>
        <Column className='col-d-6 border-line-v'>
          <ListInfo items={data.info.list} />
        </Column>
        <Clear />
      </Row>
    </Content>
  )
}

export default About