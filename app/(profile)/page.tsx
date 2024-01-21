import { Header, Content, Title, Row, Column, TextBlock, ListInfo } from './common'
import { getProfileInfo } from '@/lib/profile-info'

import CardStarted from './components/CardStarted'
import CardInner from './components/CardInner'

const ProfilePage = async () => {
  const profile = await getProfileInfo()

  return (
    <>
      <Header />
      <CardStarted />
      <CardInner>

        <Content name='about'>
          <Title text='About Me' />
          <Row>
            <Column className='col-d-6 border-line-v'>
              <TextBlock text={profile.about} />
            </Column>
            <Column className='col-d-6 border-line-v'>
              <ListInfo items={profile.info} />
            </Column>
          </Row>
        </Content>

      </CardInner>
    </>
  )
}

export default ProfilePage