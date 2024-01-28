import { Header, Content, Title, Row, Column, TextBlock, ListInfo, Clear } from './common'

import CardStarted from './components/CardStarted'
import CardInner from './components/CardInner'
import About from './components/About'
import { ProfileData } from '@/interfaces'
import Services from './components/Services'

const ProfilePage = async ({ data }: { data: ProfileData }) => {
  return (
    <>
      <Header />
      <CardStarted />
      <CardInner>
        <About data={data.about} />
        <Services data={data.services} />
      </CardInner>
    </>
  )
}

export default ProfilePage