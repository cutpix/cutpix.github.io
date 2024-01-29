import { Header } from './common'
import CardStarted from './components/CardStarted'
import CardInner from './components/CardInner'
import About from './components/About'
import Services from './components/Services'
import Quote from './components/Quote'

import { ProfileData } from '@/interfaces'

const ProfilePage = async ({ data }: { data: ProfileData }) => {
  return (
    <>
      <Header />
      <CardStarted />
      <CardInner>
        <About data={data.about} />
        <Services data={data.services} />
        <Quote data={data.quote} />
      </CardInner>
    </>
  )
}

export default ProfilePage