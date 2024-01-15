import { Header, Content, Title } from './common'

import CardStarted from "./components/CardStarted"
import CardInner from "./components/CardInner"

const ProfilePage = () => {


  return (
    <>
      <Header />
      <CardStarted />
      <CardInner>

        <Content name='about'>
          <Title text='About Me' />
          
        </Content>

      </CardInner>
    </>
  )
}

export default ProfilePage