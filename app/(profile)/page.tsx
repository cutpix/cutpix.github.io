import { promises as fs } from 'fs'
import { Header, Content, Title, Row, Column, TextBlock, ListInfo } from './common'
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
            <Column className='col-d-6 border-line-v'>
              <ListInfo items={profile.info} />
            </Column>
          </Row>
        </Content>

      </CardInner>
    </>
  )
}

const getProfileInfo = async () => {
  const file = await fs.readFile(process.cwd() + '/data/profile-info.json', 'utf8')
  const data: ProfileInfo = JSON.parse(file)

  const infoList = [
    {
      label: "Age",
      value: data.birthday
    },
    {
      label: "Residence",
      value: data.residence
    },
    {
      label: "Freelance",
      value: data.status
    },
    {
      label: "Address",
      value: data.location
    }
  ]

  return {
    about: data.about,
    info: infoList
  }
}

export default ProfilePage