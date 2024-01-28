import { Header, Content, Title, Row, Column, TextBlock, ListInfo, Clear } from './common'

import CardStarted from './components/CardStarted'
import CardInner from './components/CardInner'
import About from './components/About'
import { ProfileData } from '@/interfaces'

const ProfilePage = async ({ data }: { data: ProfileData }) => {
  return (
    <>
      <Header />
      <CardStarted />
      <CardInner>

        <About data={data.about} />

        <Content name='services'>
          <Title text={data.services.title} />
          <Row className='service-items border-line-v'>
            <Column className='col-6'>

            </Column>
            <Column className='col-6'>

            </Column>
          </Row>
        </Content>

      </CardInner>
    </>
  )
}

export default ProfilePage