import { ServicesData } from "@/interfaces"
import { Content, Title, Row, Column, TextBlock, ListInfo, Clear } from '../common'
import ServiceItem from './ServiceItem'

const Services = ({
  data
}: {
  data: ServicesData
}) => {
  return (
    <Content name='services'>
      <Title text={data.title} />
      <Row className='service-items border-line-v'>
        {data.items.map((item, idx) => (
          <Column key={`service item ${idx}`} className='col-6'>
            <ServiceItem data={item} />
          </Column>
        ))}
      </Row>
      <Clear />
    </Content>
  )
}

export default Services