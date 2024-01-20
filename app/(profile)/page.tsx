import { promises as fs } from 'fs'
import { Header, Content, Title, Row, Column, TextBlock } from './common'
import { ProfileInfo } from '@/interfaces'

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
          </Row>
        </Content>

      </CardInner>
    </>
  )
}

const getProfileInfo = async (): Promise<ProfileInfo> => {
  const file = await fs.readFile(process.cwd() + '/data/profile-info.json', 'utf8')
  const data: ProfileInfo = JSON.parse(file)

  return data
}

export default ProfilePage